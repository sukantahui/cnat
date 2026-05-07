import{j as e,r as d}from"./index-BV1ec7QU.js";import{c}from"./clsx-B-dksMZM.js";const h=`#!/bin/bash
# paste_basic.sh - Basic paste with default tab delimiter
cat > names.txt <<EOF
Alice
Bob
Charlie
EOF

cat > scores.txt <<EOF
85
92
78
EOF

echo "=== Paste names and scores side by side ==="
paste names.txt scores.txt

echo -e "\\n=== Paste with custom delimiter (space) ==="
paste -d ' ' names.txt scores.txt

# Cleanup
rm names.txt scores.txt`,p=`#!/bin/bash
# paste_delimiters.sh - Using different delimiters
cat > col1.txt <<EOF
A
B
C
EOF

cat > col2.txt <<EOF
1
2
3
EOF

cat > col3.txt <<EOF
X
Y
Z
EOF

echo "=== Tab delimiter (default) ==="
paste col1.txt col2.txt col3.txt

echo -e "\\n=== Comma delimiter (CSV) ==="
paste -d ',' col1.txt col2.txt col3.txt

echo -e "\\n=== Custom delimiter '|' ==="
paste -d '|' col1.txt col2.txt col3.txt

echo -e "\\n=== Multiple delimiters (cyclical) ==="
# First separator between col1-col2 is ':', between col2-col3 is ',', then repeats
paste -d ':,' col1.txt col2.txt col3.txt

# Cleanup
rm col1.txt col2.txt col3.txt`,x=`#!/bin/bash
# paste_serial.sh - Serial mode (-s) merges lines of a single file across columns
cat > data.txt <<EOF
Line1
Line2
Line3
Line4
EOF

echo "=== Normal paste (one column) ==="
paste data.txt

echo -e "\\n=== Serial paste (-s): lines become columns in one row ==="
paste -s data.txt

echo -e "\\n=== Serial with custom delimiter ==="
paste -s -d ',' data.txt

echo -e "\\n=== Multiple files in serial mode ==="
cat > a.txt <<EOF
a1
a2
EOF
cat > b.txt <<EOF
b1
b2
EOF
paste -s a.txt b.txt

# Cleanup
rm data.txt a.txt b.txt`,f=`#!/bin/bash
# paste_multifile.sh - Pasting more than two files
cat > math.txt <<EOF
Algebra
Geometry
Calculus
EOF

cat > physics.txt <<EOF
Mechanics
Thermodynamics
Optics
EOF

cat > cs.txt <<EOF
Programming
Algorithms
Databases
EOF

echo "=== Paste three files ==="
paste math.txt physics.txt cs.txt

echo -e "\\n=== With semicolon delimiter ==="
paste -d ';' math.txt physics.txt cs.txt

# Cleanup
rm math.txt physics.txt cs.txt`,u=`#!/bin/bash
# paste_practical.sh - Real-world: building CSV from separate files
cat > names.txt <<EOF
Swadeep
Tuhina
Abhronila
Debangshu
EOF

cat > ages.txt <<EOF
20
21
19
22
EOF

cat > grades.txt <<EOF
A
A+
B
A
EOF

echo "=== Create CSV header + data ==="
echo "Name,Age,Grade" > report.csv
paste -d ',' names.txt ages.txt grades.txt >> report.csv
cat report.csv

echo -e "\\n=== Convert to space-separated for readability ==="
paste -d ' ' names.txt ages.txt grades.txt | column -t

# Cleanup
rm names.txt ages.txt grades.txt report.csv`,g=`#!/bin/bash
# paste_pipeline.sh - Using paste with pipes and process substitution
# Simulated: create two columns from different commands

echo "=== Column 1: current directory filenames (ls -1) ==="
ls -1 *.sh 2>/dev/null | head -5 > /tmp/col1.txt

echo "=== Column 2: file sizes (ls -l) ==="
ls -l *.sh 2>/dev/null | awk '{print $5}' | head -5 > /tmp/col2.txt

echo "=== Paste filenames and sizes side by side ==="
paste /tmp/col1.txt /tmp/col2.txt | column -t

# Using stdin with '-'
echo -e "\\n=== Paste output of echo with content of a file ==="
echo -e "Header\\nData1\\nData2" > /tmp/data.txt
echo "Title" | paste - /tmp/data.txt

# Process substitution example (bash only, not for sh)
echo -e "\\n=== Using process substitution (bash) ==="
if [ -n "$BASH_VERSION" ]; then
    paste <(echo -e "Name\\nAge") <(echo -e "Swadeep\\n20")
fi

# Cleanup
rm -f /tmp/col1.txt /tmp/col2.txt /tmp/data.txt`,b=[{question:"What does `paste file1 file2` do?",shortAnswer:"Merges corresponding lines from file1 and file2 side‑by‑side with tab delimiter.",explanation:"Line 1 of file1 is placed, then tab, then line 1 of file2.",hint:"Opposite of `cut`.",level:"basic",codeExample:"paste names.txt scores.txt"},{question:"How to change the delimiter when pasting?",shortAnswer:"Use `-d` option: `paste -d',' file1 file2`.",explanation:"The delimiter can be any character, or multiple characters (cyclically).",hint:"`-d '|'` for pipe‑separated.",level:"basic",codeExample:"paste -d':' file1 file2"},{question:"What does `paste -s file` do?",shortAnswer:"Serial mode: pastes all lines of the single file into one row (across columns).",explanation:"Converts a vertical list into a horizontal series.",hint:"Useful for transposing data.",level:"intermediate",codeExample:"paste -s -d',' data.txt   # one comma‑separated row"},{question:"How to paste three or more files together?",shortAnswer:"Simply list them: `paste file1 file2 file3`.",explanation:"Each file contributes one column; columns separated by delimiter.",hint:"All files are read in parallel line by line.",level:"basic",codeExample:"paste col1.txt col2.txt col3.txt"},{question:"What happens if files have different line counts?",shortAnswer:"paste outputs lines until the longest file ends, leaving empty fields for shorter files.",explanation:"Missing fields are empty (no delimiter between them?). Actually delimiter appears but nothing between.",hint:"Be careful; you may need to pad shorter files.",level:"intermediate",codeExample:`echo -e '1
2' | paste - <(echo 'a')   # Output: '1 a', then '2 '`},{question:"How to use standard input with paste?",shortAnswer:"Use `-` as filename: `command | paste - file2`.",explanation:"The `-` represents stdin, which is read as one of the columns.",hint:"Example: `cut -f1 file | paste - file2`.",level:"intermediate",codeExample:"echo 'hello' | paste - /tmp/other.txt"},{question:"Can paste take output from two commands directly? (process substitution)",shortAnswer:"Yes, in bash: `paste <(cmd1) <(cmd2)`.",explanation:"Process substitution creates temporary file descriptors that behave like files.",hint:"Useful for combining outputs without writing temp files.",level:"advanced",codeExample:"paste <(ls -1) <(ls -l | awk '{print $5}')"},{question:"What is the default delimiter for paste?",shortAnswer:"Tab character (\\t).",explanation:"Unless changed with `-d`, paste uses tab to separate columns.",hint:"Use `cat -A` to see tabs as `^I`.",level:"basic",codeExample:"paste file1 file2 | cat -A"},{question:"How to produce comma‑separated output (CSV) from paste?",shortAnswer:"Use `-d ','`.",explanation:"Example: `paste -d ',' names.txt scores.txt > output.csv`.",hint:"Combine with header row echoed first.",level:"basic",codeExample:"echo 'Name,Score' | cat - <(paste -d',' names.txt scores.txt)"},{question:"What does `paste -d ':,' file1 file2 file3` do?",shortAnswer:"Uses delimiters cyclically: `:` between col1 & col2, `,` between col2 & col3, then repeats for more files.",explanation:"If more than 2 files, the list of delimiters cycles.",hint:"Uncommon but powerful for complex formatting.",level:"expert",codeExample:"paste -d '|;' a b c   # a|b;c"},{question:"How to join two files but only the first N lines?",shortAnswer:"Use `head` on each file before pasting: `paste <(head -10 file1) <(head -10 file2)`.",explanation:"Or use `head` combined with process substitution.",hint:"Even works with different numbers of lines.",level:"advanced",codeExample:"paste <(head -5 file1) <(head -3 file2)"},{question:"What is the difference between `paste file1 file2` and `pr -T -s' ' file1 file2`?",shortAnswer:"Both merge files horizontally, but `pr` has more formatting options.",explanation:"`paste` is simpler and faster for plain merging.",hint:"Stick with `paste` for basic column Joins.",level:"advanced",codeExample:"pr -T -s' ' file1 file2"},{question:"How to use paste to add a header row to a dataset?",shortAnswer:"`echo -e 'Col1\\tCol2' | paste - data.txt`",explanation:"The `-` reads the header from stdin, then paste merges it as the first row.",hint:"Works with custom delimiters too.",level:"intermediate",codeExample:"echo 'Name,Score' | paste -d',' - data.csv"},{question:"Does paste modify the original files?",shortAnswer:"No, paste only reads files and writes to stdout, leaving originals unchanged.",explanation:"Redirect output to a new file to save.",hint:"Always safe to use without backup.",level:"basic",codeExample:"paste a b > combined.txt"},{question:"How to paste files in vertical direction (i.e., concatenate)?",shortAnswer:"`cat file1 file2` for vertical concatenation; `paste` is for horizontal.",explanation:"`paste` is the opposite of `cat` – it merges across, not down.",hint:"If you want rows, just use `cat`.",level:"basic",codeExample:"cat file1 file2 > vertical.txt"},{question:"How to create a table of contents from two lists using paste?",shortAnswer:"`paste -d '.' chapters.txt pages.txt > toc.txt`.",explanation:"Creates lines like `Chapter1.5` if chapters.txt has `Chapter1` and pages.txt has `5`.",hint:"Delimiter can be anything.",level:"intermediate",codeExample:"paste -d ' - ' titles.txt authors.txt"},{question:"What happens if you paste a single file without `-s`?",shortAnswer:"It outputs the file unchanged (one column).",explanation:"Pasting one file is equivalent to `cat` but each line becomes a single column.",hint:"Useful for aligning with `column -t`.",level:"basic",codeExample:"paste single.txt   # same as cat single.txt"},{question:"How to paste two files but swap the column order?",shortAnswer:"`paste file2 file1`.",explanation:"Order of files determines order of columns.",hint:"Can't reorder within a file; use `cut` before pasting.",level:"basic",codeExample:"paste scores.txt names.txt"},{question:"Why does `paste -d' ' file1 file2` produce double spaces sometimes?",shortAnswer:"Because the input lines may contain trailing spaces or the delimiter is added to existing spaces.",explanation:"Use `paste -d ' '` but if data has spaces, it's ambiguous.",hint:"Consider using a unique delimiter then translate.",level:"advanced",codeExample:"paste -d'|' file1 file2 | tr '|' ' '"},{question:"How to use paste to combine every two lines of a single file into one line?",shortAnswer:"`paste -d' ' - - < file` (two dashes).",explanation:"Each dash represents one column; two dashes read two lines per row.",hint:"Number of dashes = number of fields per row.",level:"expert",codeExample:"paste -d',' - - < file.txt   # two lines merged with comma"},{question:"What is the performance of paste on very large files?",shortAnswer:"Very efficient; reads files sequentially in parallel, line by line, using minimal memory.",explanation:"It doesn't load entire files, only current line(s).",hint:"Suitable for multi‑gigabyte files.",level:"expert",codeExample:"time paste huge1.txt huge2.txt > /dev/null"},{question:"How to pad shorter files with a default value instead of empty fields?",shortAnswer:"`paste` cannot pad; pre‑process with `awk` or `sed` to add missing lines.",explanation:"Example: `awk '{print $0} END {for(i=NR;i<max;i++) print \"\"}'`",hint:"Or use `pr` with `-e` and `-s`.",level:"expert",codeExample:"# Complex; consider using `join` for relational data."},{question:"What does `paste - - - < file` do with 3 dashes?",shortAnswer:"Reads three lines of file at a time and pastes them side‑by‑side in one row (three columns).",explanation:"Each dash is a placeholder for one column reading from stdin.",hint:"Useful for converting vertical to wide format.",level:"expert",codeExample:"seq 9 | paste - - -   # three rows, three columns"},{question:"How to combine `paste` with `column -t` for aligned output?",shortAnswer:"`paste file1 file2 | column -t`.",explanation:"`column -t` formats the tab‑separated output into nicely aligned columns.",hint:"Human‑readable tables without extra tools.",level:"intermediate",codeExample:"paste -d',' data1 data2 | column -t -s','"},{question:"Why does `paste -d',' file1 file2` sometimes create trailing commas?",shortAnswer:"Because one file may have fewer lines, leaving an empty field after the delimiter.",explanation:"Trailing delimiter appears only if the last field is missing.",hint:"Post‑process with `sed 's/,$//'`.",level:"advanced",codeExample:"paste -d',' a b | sed 's/,$//'"},{question:"How to use paste with process substitution in a POSIX‑compliant way?",shortAnswer:"POSIX doesn't have process substitution; use temporary files or named pipes.",explanation:"Bash and Zsh support it, but dash does not.",hint:"For portability, write to temp files first.",level:"expert",codeExample:"cmd1 > tmp1; cmd2 > tmp2; paste tmp1 tmp2; rm tmp1 tmp2"},{question:"How to paste files where the delimiter is a newline? (Impossible)",shortAnswer:"Not possible; paste works line‑by‑line; newline is the record separator.",explanation:"Use `tr` to change newline to something else first.",hint:"Or use `awk` with `ORS`.",level:"expert",codeExample:"# Not directly possible"},{question:"What does `paste -s -d '\\n' file` do?",shortAnswer:"Since newline is default, it's same as `paste -s` (puts lines in a row, but since delimiter is newline, it's just a single column? Actually `-s` with newline delimiter puts each original line on a new line; that is, no change. Wait: `-d '\\n'` is the default record separator, so `paste -s` without `-d` does nothing different from `cat`? Actually `-s` alone uses tab delimiter. With `-d '\\n'`, it separates fields by newlines, which would put each field on its own line – effectively original file unchanged. So it's a no‑op.",explanation:"It's confusing; better to avoid.",hint:"Stick to usual delimiters.",level:"expert",codeExample:"paste -s -d '|' file   # pipe‑separated row"},{question:"How to use paste to create a matrix from a list of numbers?",shortAnswer:"Use `paste - - - ...` with appropriate number of dashes.",explanation:"Example: `seq 9 | paste - - -` creates a 3x3 matrix.",hint:"Number of dashes = columns.",level:"advanced",codeExample:"seq 12 | paste - - - - | column -t"}],i=({fileModule:n,title:l,highlightLines:s=[]})=>{const[r,t]=d.useState(!1),a=()=>{navigator.clipboard.writeText(n),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:l}),e.jsx("button",{onClick:a,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:r?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:n.split(`
`).map((m,o)=>e.jsx("div",{className:c(s.includes(o+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:m},o))})})]})},y=({title:n,questions:l})=>{const[s,r]=d.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:n}),e.jsx("div",{className:"space-y-4",children:l.map((t,a)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>r(s===a?null:a),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:c("w-5 h-5 transition-transform duration-300",s===a&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s===a&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},a))})]})},v=()=>{const l=new Date().getFullYear()-1998,s=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"280",viewBox:"0 0 600 280",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"280",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File A:"}),e.jsx("rect",{x:"80",y:"25",width:"150",height:"90",rx:"6",fill:"#e0e7ff",className:"dark:fill-indigo-900/40"}),e.jsx("text",{x:"90",y:"50",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Alice"}),e.jsx("text",{x:"90",y:"70",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Bob"}),e.jsx("text",{x:"90",y:"90",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Charlie"}),e.jsx("text",{x:"30",y:"160",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File B:"}),e.jsx("rect",{x:"80",y:"145",width:"150",height:"90",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/40"}),e.jsx("text",{x:"90",y:"170",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"85"}),e.jsx("text",{x:"90",y:"190",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"92"}),e.jsx("text",{x:"90",y:"210",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"78"}),e.jsx("path",{d:"M 240 70 L 280 70",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowPaste)"}),e.jsx("path",{d:"M 240 190 L 280 190",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowPaste)"}),e.jsx("text",{x:"360",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"paste fileA fileB"}),e.jsx("rect",{x:"360",y:"55",width:"200",height:"90",rx:"6",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"370",y:"80",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"Alice 85"}),e.jsx("text",{x:"370",y:"100",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"Bob 92"}),e.jsx("text",{x:"370",y:"120",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"Charlie 78"}),e.jsx("circle",{cx:"280",cy:"70",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"r",values:"2;8;2",dur:"1.5s",repeatCount:"indefinite"})}),e.jsx("circle",{cx:"280",cy:"190",r:"4",fill:"#f59e0b",children:e.jsx("animate",{attributeName:"r",values:"2;8;2",dur:"1.5s",begin:"0.3s",repeatCount:"indefinite"})}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowPaste",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .reveal-section {
          animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-section { animation: none; opacity: 1; transform: translateY(0); }
        }
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400",children:"Pasting and Merging Files Horizontally using paste"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Combine files side‑by‑side with `paste` – merge columns, customise delimiters, and create tabular data from separate sources."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(s,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 paste Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"paste [OPTION]... [FILE]..."}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"# Merge files side‑by‑side (default delimiter = tab)"}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"paste file1 file2"}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"# Change delimiter to comma (CSV output)"}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"paste -d ',' file1 file2"}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"# Paste one file multiple times (serial mode)"}),e.jsx("code",{className:"text-amber-600 dark:text-amber-400",children:"paste -s -d '|' file1"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Prints combined lines to stdout; exit 0 on success."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To merge corresponding lines from multiple files horizontally – like `cut` in reverse. Ideal for creating reports, combining split datasets, or generating CSV from separate columns."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 How paste Works"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Basic paste:"})," Reads each file line‑by‑line and outputs them side‑by‑side, separated by a delimiter (tab by default). If files have different line counts, paste continues with the longer files, leaving empty fields for the shorter ones."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Delimiter (`-d`):"})," You can specify any character (or multiple characters cyclically) to separate columns. For example, `-d ','` produces CSV output."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Serial mode (`-s`):"})," Pastes lines from a single file sequentially (line 1 then line 2 etc. across columns), creating a single row with all lines."]}),e.jsx("div",{className:"mt-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border-l-4 border-amber-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Naihati High School:"})," A teacher has two lists: student names (`names.txt`) and their exam scores (`scores.txt`). Using `paste names.txt scores.txt | column -t` she quickly creates a readable grade sheet. Later, she converts it to CSV with `paste -d',' names.txt scores.txt`."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: paste in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:h,title:"📄 Basic paste (tab separator)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:p,title:"⚙️ Custom Delimiters (-d)",highlightLines:[12,16,20]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:x,title:"🔁 Serial Mode (-s)",highlightLines:[10,14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:f,title:"📚 Multiple Files (3+) ",highlightLines:[14,20]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:u,title:"🧪 Practical: CSV Builder",highlightLines:[16,23]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:g,title:"🔗 Pipelines & Column Command",highlightLines:[14,20,26]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:e.jsx("strong",{children:"Use `column -t` after paste for aligned output."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Multiple delimiters cyclically:"})," `-d ':,'` uses `:` between cols 1&2, `,` between cols 2&3, repeats."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Paste from stdin:"})," Use `-` as filename: `cut ... | paste - file2`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Create header row easily:"}),' `echo -e "Name\\tScore" | paste - names.txt scores.txt`.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with `process substitution`:"})," `paste <(cmd1) <(cmd2)` (bash)."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Different line counts:"})," paste continues, leaving blanks – may be unexpected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trailing delimiters:"})," If files have different lengths, output may have trailing delimiters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `-s` (serial) with default:"})," `paste -s` merges lines of one file across columns, not across files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No reordering:"})," paste can't rearrange columns; use `cut` before pasting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Large files:"})," paste is line‑buffered, fine for big data, but reading files sequentially."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Ensure files have same number of lines, or handle missing data downstream."}),e.jsx("p",{children:"✔️ Use `-d` to produce structured output (CSV, TSV, etc.) for later tools."}),e.jsx("p",{children:"✔️ Preview with `head` before pasting large files."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Combine with `column -t` for human‑readable aligned tables."}),e.jsx("p",{children:"✔️ For uneven line counts, use `sed` or `awk` to pad shorter files."}),e.jsx("p",{children:"✔️ Use `paste -s` to convert a column of data into a row."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I can merge two files side‑by‑side with default tab delimiter."}),e.jsx("li",{children:"☐ I can change delimiter with `-d` (e.g., `-d','`)."}),e.jsx("li",{children:"☐ I understand the difference between normal and serial mode (`-s`)."}),e.jsx("li",{children:"☐ I can use `paste` with standard input using `-`."}),e.jsx("li",{children:"☐ I know that missing lines produce empty fields."}),e.jsx("li",{children:"☐ I can create a CSV from separate column files."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:`You have three files: first_names.txt (Swadeep, Tuhina, ...), last_names.txt (Hui, Chatterjee, ...), and scores.txt (85, 92, ...). How do you combine them into a single CSV with columns: "First,Last,Score"? Now suppose first_names.txt has 10 lines, scores has 12 lines – what will paste do with the extra two in scores? Try paste -d,' first_names.txt last_names.txt scores.txt | head -15.`})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-amber-700 dark:text-amber-300",children:["Sukanta Hui — Master Educator (since 1998, ",l," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for paste Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:'"At Barrackpore, I gave students two files – roll numbers and names – and asked them to create a single list. The lightbulb moment when they discovered `paste` is unforgettable."'}),e.jsx("li",{children:"Emphasise that `paste` is the counterpart to `cut`: one cuts columns, the other pastes columns together."}),e.jsx("li",{children:"Demonstrate serial mode (`-s`) by showing how to transpose a column into a row – great for building header lines."}),e.jsx("li",{children:"Classroom exercise: take the output of ls -1 and ls -l | awk '{print $5}' (sizes) and paste them side‑by‑side to compare filenames and sizes."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"`paste` is the unsung hero of report generation. Master it and you\'ll combine any columnar data with ease." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(y,{title:"❓ paste Command – 30 Expert FAQs",questions:b})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 2: Pasting and Merging Files Horizontally – Combine Columns Like a Pro"})]})]})};export{v as default};

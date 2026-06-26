import{j as e,r as c}from"./index-UqT5O8p1.js";import{c as d}from"./clsx-B-dksMZM.js";const u=`#!/bin/bash
# head_examples.sh - Demonstrate head command
cat > sample.txt <<EOF
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
Line 11
Line 12
Line 13
Line 14
Line 15
EOF

echo "=== First 10 lines (default) ==="
head sample.txt

echo -e "\\n=== First 3 lines ==="
head -3 sample.txt

echo -e "\\n=== All lines except last 5 (GNU head) ==="
head -n -5 sample.txt

# Cleanup
rm sample.txt`,m=`#!/bin/bash
# tail_examples.sh - Demonstrate tail command
cat > log.txt <<EOF
[INFO] Start
[INFO] Processing
[ERROR] Disk full
[WARN] Low memory
[INFO] Retry
[ERROR] Timeout
[INFO] Shutdown
EOF

echo "=== Last 10 lines (default) ==="
tail log.txt

echo -e "\\n=== Last 3 lines ==="
tail -3 log.txt

echo -e "\\n=== Starting from line 3 (skip first 2) ==="
tail -n +3 log.txt

# Uncomment to show follow (-f) – interrupts with Ctrl+C
# echo -e "\\n=== Following file (press Ctrl+C to stop) ==="
# tail -f log.txt &

# Cleanup
rm log.txt`,x=`#!/bin/bash
# cut_by_bytes.sh - Cut by byte positions
cat > data.txt <<EOF
1234567890
abcdefghij
HelloWorld
EOF

echo "=== Byte positions 1-5 ==="
cut -b 1-5 data.txt

echo -e "\\n=== Bytes 3,5,7 ==="
cut -b 3,5,7 data.txt

echo -e "\\n=== Bytes 5 to end ==="
cut -b 5- data.txt

# Cleanup
rm data.txt`,p=`#!/bin/bash
# cut_by_chars.sh - Cut by character positions (for multi-byte languages)
cat > unicode.txt <<EOF
αβγδε
Hello
世界你好
EOF

echo "=== Character positions 1-2 ==="
cut -c 1-2 unicode.txt

echo -e "\\n=== Characters 2,4 ==="
cut -c 2,4 unicode.txt

# Note: -c works with multibyte, -b would break characters
# Cleanup
rm unicode.txt`,f=`#!/bin/bash
# cut_by_fields.sh - Cut fields with delimiter
cat > students.csv <<EOF
Name,Age,Grade
Swadeep,20,A
Tuhina,21,A+
Abhronila,19,B
Debangshu,22,A
EOF

echo "=== Default delimiter (tab) won't work for CSV ==="
cut -f 1 students.csv

echo -e "\\n=== Using comma delimiter: extract Name and Grade ==="
cut -d',' -f1,3 students.csv

echo -e "\\n=== Using output delimiter: replace comma with space ==="
cut -d',' -f1,3 --output-delimiter=' ' students.csv

echo -e "\\n=== Fields 2 to end ==="
cut -d',' -f2- students.csv

# Cleanup
rm students.csv`,g=`#!/bin/bash
# select_rows_columns.sh - Combine head/tail with cut
cat > sales.csv <<EOF
Date,Product,Quantity,Price
2025-01-01,Widget,10,100
2025-01-02,Gadget,5,200
2025-01-03,Widget,7,150
2025-01-04,Thingy,3,300
2025-01-05,Widget,12,120
EOF

echo "=== First 2 rows (including header) ==="
head -2 sales.csv

echo -e "\\n=== First 3 rows, only Product and Quantity ==="
head -3 sales.csv | cut -d',' -f2,3

echo -e "\\n=== Skip header, get last 2 rows, only Quantity and Price ==="
tail -n +2 sales.csv | tail -2 | cut -d',' -f3,4

# Cleanup
rm sales.csv`,y=`#!/bin/bash
# practical_log_analysis.sh - Real-world log analysis pipeline
cat > server.log <<EOF
2025-01-15 10:00:01 192.168.1.10 GET /index.html 200
2025-01-15 10:00:05 192.168.1.20 POST /login 401
2025-01-15 10:01:00 192.168.1.10 GET /about 200
2025-01-15 10:02:30 192.168.1.30 GET /index.html 404
2025-01-15 10:03:00 192.168.1.20 GET /home 200
2025-01-15 10:05:00 192.168.1.10 POST /submit 500
2025-01-15 10:06:00 192.168.1.40 GET /index.html 200
2025-01-15 10:07:00 192.168.1.20 GET /admin 403
2025-01-15 10:08:00 192.168.1.10 POST /logout 200
2025-01-15 10:10:00 192.168.1.30 GET /index.html 200
EOF

echo "=== Show last 5 log entries ==="
tail -5 server.log

echo -e "\\n=== Extract only IP addresses and status codes (last 5 entries) ==="
tail -5 server.log | cut -d' ' -f3,7

echo -e "\\n=== Count of 404 errors in last 10 lines ==="
tail -10 server.log | grep "404" | wc -l

# Simulate live monitoring (won't run in script, just demo)
echo -e "\\n=== Live monitoring command (press Ctrl+C): ==="
echo "tail -f server.log | cut -d' ' -f3,7 --output-delimiter=' -> '"

# Cleanup
rm server.log`,b=[{question:"What does `head -n 5 file` do?",shortAnswer:"Shows first 5 lines of the file.",explanation:"-n specifies the number of lines. Default is 10.",hint:"Negative values (head -n -5) show all but last 5 lines (GNU).",level:"basic",codeExample:"head -3 data.txt"},{question:"How to show the last 20 lines with `tail`?",shortAnswer:"`tail -20 file` or `tail -n 20 file`",explanation:"Both are valid; -n is optional for positive numbers.",hint:"Use `tail -n +2` to skip first line.",level:"basic",codeExample:"tail -20 log.txt"},{question:"What is the difference between `cut -b` and `cut -c`?",shortAnswer:"`-b` works on bytes, `-c` on characters (handles multi-byte correctly).",explanation:"For ASCII, they are identical. For UTF-8, `-c` respects character boundaries.",hint:"Use `-c` for human‑readable text.",level:"intermediate",codeExample:"cut -c 1-5 file"},{question:"How to extract the 2nd and 4th columns from a CSV file?",shortAnswer:"`cut -d',' -f2,4 file.csv`",explanation:"`-d` sets delimiter, `-f` lists fields.",hint:"No spaces after comma in `-f2,4`.",level:"basic",codeExample:"cut -d',' -f2,4 data.csv"},{question:"How to make `cut` use space as delimiter but handle multiple spaces?",shortAnswer:"Pipe through `tr -s ' '` first to squeeze spaces: `tr -s ' ' | cut -d' ' -f2`",explanation:"Cut treats each space as delimiter, so consecutive spaces create empty fields.",hint:"Alternative: `awk '{print $2}'` is easier.",level:"advanced",codeExample:"echo 'a    b    c' | tr -s ' ' | cut -d' ' -f2"},{question:"What does `tail -f` do?",shortAnswer:"Follows the file as it grows, outputting new lines in real time.",explanation:"Useful for monitoring log files. Press Ctrl+C to stop.",hint:"Combine with `grep` to filter live logs.",level:"intermediate",codeExample:"tail -f /var/log/syslog"},{question:"How to show a range of lines, e.g., lines 5-10?",shortAnswer:"Combine head and tail: `head -10 file | tail -6`",explanation:"First get first 10 lines, then take last 6 of those (lines 5-10).",hint:"Alternative: `sed -n '5,10p' file`.",level:"intermediate",codeExample:"head -10 data.txt | tail -6"},{question:"What is the default delimiter for `cut -f`?",shortAnswer:"Tab character.",explanation:"If you don't specify `-d`, cut splits on tabs.",hint:"Use `-d$'\\t'` explicitly if needed.",level:"basic",codeExample:"cut -f1 tab_separated.txt"},{question:"How to change the output delimiter in `cut`?",shortAnswer:"Use `--output-delimiter='string'`",explanation:"Replaces the input delimiter with the given string in the output.",hint:"Example: `cut -d',' -f1,3 --output-delimiter='|'`.",level:"intermediate",codeExample:"cut -d':' -f1,3 --output-delimiter=' ' /etc/passwd"},{question:"Why does `cut -d' ' -f2` fail on lines with multiple spaces?",shortAnswer:"Because `cut` treats each space as a delimiter, creating empty fields.",explanation:"To fix, pre‑process with `tr -s ' '` or use `awk`.",hint:"`awk '{print $2}'` ignores leading/trailing spaces.",level:"advanced",codeExample:`# cut fails: echo 'a  b  c' | cut -d' ' -f2
# works: echo 'a  b  c' | tr -s ' ' | cut -d' ' -f2`},{question:"How to skip the header line before processing with `cut`?",shortAnswer:"Use `tail -n +2 file | cut ...`",explanation:"`tail -n +2` outputs from line 2 to end.",hint:"Combine with `head` if you also need first N rows after header.",level:"basic",codeExample:"tail -n +2 data.csv | cut -d',' -f2"},{question:"What is the difference between `cut -c1-` and `cut -c1-10`?",shortAnswer:"`-c1-` prints from character 1 to end of line; `-c1-10` prints first 10 characters.",explanation:"Omitted end means 'to the end'.",hint:"Similarly `-c-10` prints from start to character 10.",level:"basic",codeExample:"cut -c5- file   # from char5 to end"},{question:"How to select non‑contiguous columns with `cut`?",shortAnswer:"List them with commas: `-f1,3,5`",explanation:"You can also mix ranges: `-f1-3,5,7-9`.",hint:"Order doesn't matter; output appears in the order of fields as they appear in the line? Actually GNU cut respects the order you specify.",level:"intermediate",codeExample:"cut -d',' -f1,4,2 data.csv   # prints fields 1,4,2 in that order"},{question:"What does `head -n -0` do?",shortAnswer:"Outputs nothing (since removing 0 lines from end).",explanation:"Negative numbers remove lines from the end. `head -n -5` removes last 5 lines.",hint:"Not POSIX; GNU extension.",level:"advanced",codeExample:"head -n -0 file   # empty output"},{question:"How to use `cut` with pipe from `grep`?",shortAnswer:"`grep 'pattern' file | cut -d',' -f2`",explanation:"Pipe filters lines, then cut extracts columns.",hint:"Classic pipeline for log analysis.",level:"basic",codeExample:"grep 'ERROR' server.log | cut -d' ' -f4"},{question:"What is the maximum number of bytes `cut -b` can handle?",shortAnswer:"Line length is limited by system memory, but practically no hard limit.",explanation:"cut reads line by line, so memory per line is the constraint.",hint:"For huge lines, use `awk` or `sed`.",level:"advanced",codeExample:"# Works on any length line"},{question:"How to display both first 3 and last 3 lines of a file?",shortAnswer:"`(head -3; tail -3) < file` or `head -3 file; tail -3 file`",explanation:"Using a subshell with redirection reads the file only once.",hint:"Or just two separate commands.",level:"intermediate",codeExample:"(head -3; tail -3) < largefile.txt"},{question:"What is the difference between `tail -n +5` and `tail -n 5`?",shortAnswer:"`tail -n +5` starts from line 5 (skip first 4); `tail -n 5` shows last 5 lines.",explanation:"The plus sign changes meaning: `+K` starts at line K.",hint:"`tail -n +1` shows the whole file.",level:"intermediate",codeExample:"tail -n +5 data.txt   # lines 5 through end"},{question:"How to use `cut` with a delimiter that is a space but also preserve empty fields?",shortAnswer:"Cut cannot preserve consecutive delimiters. Use `awk -F' ' '{print $2}'` instead.",explanation:"Awk handles multiple delimiters by default.",hint:"If you must use cut, pre‑process with `sed 's/ /|/g'`.",level:"expert",codeExample:"echo 'a  b  c' | awk '{print $2}'   # prints 'b'"},{question:"What happens if you specify a field number that doesn't exist in a line?",shortAnswer:"cut prints nothing for that line (empty line).",explanation:"No error; missing fields result in empty output.",hint:"Use `grep` to filter lines with enough fields first.",level:"advanced",codeExample:"echo 'a,b' | cut -d',' -f3   # empty output"},{question:"How to use `head` and `tail` with multiple files?",shortAnswer:"`head -3 file1 file2` prints each file's first 3 lines with a header.",explanation:"The header line `==> file1 <==` helps distinguish.",hint:"Use `-q` to suppress headers.",level:"basic",codeExample:"head -2 *.txt"},{question:"Why does `cut -c 1-` sometimes output extra spaces?",shortAnswer:"Because the original line had trailing spaces/newline; cut preserves them.",explanation:"Cut does not trim whitespace.",hint:"Use `sed 's/[[:space:]]*$//'` to trim.",level:"intermediate",codeExample:"echo 'hello   ' | cut -c1- | cat -A   # shows trailing spaces"},{question:"How to select the last field of each line with `cut`?",shortAnswer:"You can't directly. Use `awk '{print $NF}'` or `rev | cut -d' ' -f1 | rev`.",explanation:"Cut doesn't support 'last field' notation.",hint:"Rev reverses line, cut first field, rev back.",level:"expert",codeExample:"echo 'a b c' | rev | cut -d' ' -f1 | rev   # prints 'c'"},{question:"What is the difference between `head -c 10` and `head -n 10`?",shortAnswer:"`-c` counts bytes/characters, `-n` counts lines.",explanation:"`head -c 10` prints first 10 bytes of the file, possibly part of a line.",hint:"Useful for binary files.",level:"advanced",codeExample:"head -c 100 file.bin"},{question:"How to show only the second line of a file using `head` and `tail`?",shortAnswer:"`head -2 file | tail -1`",explanation:"First get first 2 lines, then take the last of those (line 2).",hint:"Alternative: `sed -n '2p' file`.",level:"basic",codeExample:"head -2 data.txt | tail -1"},{question:"What is the performance of `cut` compared to `awk` for column extraction?",shortAnswer:"`cut` is generally faster for simple fixed delimiter extraction.",explanation:"Cut is lightweight, while awk is more powerful but slower.",hint:"For huge files, use cut when possible.",level:"expert",codeExample:"time cut -d',' -f2 big.csv > /dev/null"},{question:"How to use `cut` with a delimiter that is a colon and include multiple colons?",shortAnswer:"Same as any delimiter: `cut -d':' -f1,3 /etc/passwd`",explanation:"Colon is fine; no escaping needed.",hint:"Works for any single character except newline.",level:"basic",codeExample:"cut -d':' -f1 /etc/passwd   # usernames"},{question:"What does `tail -f file | grep --line-buffered 'pattern'` do?",shortAnswer:"Follows file and outputs lines matching pattern in real time.",explanation:"`--line-buffered` forces grep to flush output immediately.",hint:"Essential for live log monitoring.",level:"advanced",codeExample:"tail -f app.log | grep --line-buffered 'ERROR'"},{question:"How to extract columns from a file that uses multiple different delimiters?",shortAnswer:"Pre‑process with `sed` to standardise delimiters, then use `cut`.",explanation:"Example: `sed 's/[|;]/ /g' file | cut -d' ' -f2`",hint:"Better to use `awk` with regex field separator.",level:"expert",codeExample:"sed 's/[|;]/ /g' data.txt | cut -d' ' -f3"},{question:"What is the purpose of `--complement` in GNU cut?",shortAnswer:"Selects all fields/bytes/characters except those specified.",explanation:"Example: `cut -f2 --complement` prints all fields except field 2.",hint:"Useful for dropping columns.",level:"advanced",codeExample:"cut -d',' -f2 --complement data.csv   # remove column 2"}],n=({fileModule:a,title:l,highlightLines:s=[]})=>{const[r,t]=c.useState(!1),i=()=>{navigator.clipboard.writeText(a),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:l}),e.jsx("button",{onClick:i,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:r?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:a.split(`
`).map((h,o)=>e.jsx("div",{className:d(s.includes(o+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:h},o))})})]})},w=({title:a,questions:l})=>{const[s,r]=c.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:a}),e.jsx("div",{className:"space-y-4",children:l.map((t,i)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>r(s===i?null:i),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:d("w-5 h-5 transition-transform duration-300",s===i&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s===i&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},i))})]})},N=()=>{const l=new Date().getFullYear()-1998,s=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"320",viewBox:"0 0 600 320",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"320",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsxs("g",{fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-200",children:[e.jsx("rect",{x:"50",y:"40",width:"500",height:"20",fill:"#e2e8f0",className:"dark:fill-gray-700"}),e.jsx("text",{x:"55",y:"55",children:"Name      Age  Grade"}),e.jsx("rect",{x:"50",y:"65",width:"500",height:"20",fill:"white",className:"dark:fill-gray-800"}),e.jsx("text",{x:"55",y:"80",children:"Swadeep   20   A"}),e.jsx("rect",{x:"50",y:"90",width:"500",height:"20",fill:"#f1f5f9",className:"dark:fill-gray-750"}),e.jsx("text",{x:"55",y:"105",children:"Tuhina    21   A+"}),e.jsx("rect",{x:"50",y:"115",width:"500",height:"20",fill:"white",className:"dark:fill-gray-800"}),e.jsx("text",{x:"55",y:"130",children:"Abhronila 19   B"}),e.jsx("rect",{x:"50",y:"140",width:"500",height:"20",fill:"#f1f5f9",className:"dark:fill-gray-750"}),e.jsx("text",{x:"55",y:"155",children:"Debangshu 22   A"})]}),e.jsx("rect",{x:"48",y:"38",width:"504",height:"44",fill:"none",stroke:"#4f46e5",strokeWidth:"3",strokeDasharray:"5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"50",y:"210",fontSize:"13",fill:"#4f46e5",children:"Row selection: head -2"}),e.jsx("rect",{x:"48",y:"38",width:"60",height:"124",fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"2s",begin:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"50",y:"240",fontSize:"13",fill:"#10b981",children:"Column selection: cut -d' ' -f1"}),e.jsx("text",{x:"50",y:"280",fontSize:"14",fontWeight:"bold",fill:"#f59e0b",children:"head -2 | cut -d' ' -f1,3"}),e.jsx("text",{x:"50",y:"300",fontSize:"12",fill:"#f59e0b",children:"→ first two rows, only Name and Grade"})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",children:"Row‑wise & Column‑wise Data Selection"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master the basics of data slicing: select specific rows with `head`/`tail` and specific columns with `cut`."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(s,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 Prototypes / Signatures"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"head [-n lines] [file...]           # first N lines (default 10)"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"tail [-n lines] [file...]           # last N lines"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"cut -c LIST [file...]               # select by character positions"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"cut -d DELIMITER -f LIST [file...]  # select by fields (columns)"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," All commands write the selected data to stdout; exit 0 on success."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To extract subsets of data – first/last rows for quick inspection, specific columns for further analysis. Foundation of data manipulation pipelines."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 Row & Column Selection Explained"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Row selection:"})," ",e.jsx("code",{children:"head"})," gives you the top of a file (useful for previewing headers), ",e.jsx("code",{children:"tail"})," gives the bottom (useful for checking recent logs). Both default to 10 lines but accept ",e.jsx("code",{children:"-n"})," to specify count."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Column selection:"})," ",e.jsx("code",{children:"cut"})," extracts columns. Two modes:"]}),e.jsxs("ul",{className:"list-disc list-inside mb-3 space-y-1 ml-4",children:[e.jsxs("li",{children:[e.jsx("code",{children:"-c LIST"})," – character positions (e.g., ",e.jsx("code",{children:"cut -c 1-5,10-15"}),")"]}),e.jsxs("li",{children:[e.jsx("code",{children:"-d DELIMITER -f LIST"})," – field (column) based on a delimiter (e.g., CSV, tab). Default delimiter is tab."]})]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Barrackpore College:"})," A teacher has a large CSV of student scores. She uses ",e.jsx("code",{children:"head -5 marks.csv"})," to verify columns, then ",e.jsx("code",{children:"cut -d',' -f2,4 marks.csv"})," to extract only names and grades for a report."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: head, tail, cut"}),e.jsxs("div",{className:"grid-cols-1 md:grid-cols-1 gap-1",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:u,title:"📄 head – first N lines",highlightLines:[8,12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:m,title:"📄 tail – last N lines & follow",highlightLines:[8,13,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:x,title:"✂️ cut -b (bytes)",highlightLines:[10,13]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:p,title:"✂️ cut -c (characters)",highlightLines:[8,12]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:f,title:"✂️ cut -f (fields, delimiter)",highlightLines:[10,14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:g,title:"🔗 Combine head/tail + cut",highlightLines:[12,17]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:y,title:"📊 Practical: Log Analysis Pipeline",highlightLines:[14,20,26]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-1 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"head -n -5"})," shows all lines except last 5 (GNU)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"tail -f"})," follows growing file – perfect for live logs."]}),e.jsxs("li",{children:[e.jsx("code",{children:"cut -d' ' -f1-4"})," prints fields 1 through 4."]}),e.jsxs("li",{children:[e.jsx("code",{children:"cut -c 5-"})," prints from character 5 to end of each line."]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"--output-delimiter"})," to change output separator in cut."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Space as delimiter in cut:"})," ",e.jsx("code",{children:"cut -d' ' -f2"})," treats consecutive spaces as separate delimiters. Use ",e.jsx("code",{children:"tr -s ' '"})," first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cut does not re‑order columns:"})," ",e.jsx("code",{children:"-f2,1"})," still outputs column 2 then 1 but prints original order? Actually it prints in the order given (GNU). Check man."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default tail shows last 10 lines, not first."})," Confusing for beginners."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using head/tail on binary files"})," may produce terminal‑breaking output. Use ",e.jsx("code",{children:"strings"})," first."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices & Beginner‑Safe Habits"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["✔️ Preview large files with ",e.jsx("code",{children:"head"})," before processing with ",e.jsx("code",{children:"cut"}),"."]}),e.jsxs("p",{children:["✔️ Use ",e.jsx("code",{children:"tail -n +2"})," to skip header row (start from line 2)."]}),e.jsxs("p",{children:["✔️ Quote delimiters that are special to shell: ",e.jsx("code",{children:"cut -d '|'"}),"."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["✔️ Combine with ",e.jsx("code",{children:"sed"})," to normalise whitespace before cutting fields."]}),e.jsxs("p",{children:["✔️ Always check the number of columns with ",e.jsx("code",{children:"head -1 | wc -c"})," before using ",e.jsx("code",{children:"cut -c"}),"."]})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-1 gap-1 mt-2",children:[e.jsxs("li",{children:["☐ I can show first 5 lines with ",e.jsx("code",{children:"head -5"}),"."]}),e.jsxs("li",{children:["☐ I can show last 20 lines with ",e.jsx("code",{children:"tail -20"}),"."]}),e.jsxs("li",{children:["☐ I can follow a log with ",e.jsx("code",{children:"tail -f"}),"."]}),e.jsxs("li",{children:["☐ I can extract columns by character positions (",e.jsx("code",{children:"-c"}),")."]}),e.jsxs("li",{children:["☐ I can extract fields by delimiter (",e.jsx("code",{children:"-d',' -f2"}),")."]}),e.jsxs("li",{children:["☐ I can pipe ",e.jsx("code",{children:"head"})," into ",e.jsx("code",{children:"cut"})," to preview first few columns."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:`You have a CSV file with 1 million rows. You only need to see the "email" column (the 3rd column) for the first 50 rows. Can you write a single pipeline? What if the CSV uses "|" as delimiter? Try changing the delimiter option in cut. Observe: cut -d'|' -f3. Now imagine the file uses multiple spaces – how would you handle that?`})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-blue-700 dark:text-blue-300",children:["Sukanta Hui — Master Educator (since 1998, ",l," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for Row & Column Selection:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:`"At Naihati, I give students a messy attendance log and ask: 'Who were present yesterday?' They need to use tail to get the last day's entries, then cut to extract names – they learn pipelines naturally."`}),e.jsxs("li",{children:["Always demonstrate ",e.jsx("code",{children:"head -5 file | cut ..."})," – it's the most common real‑world pattern for data exploration."]}),e.jsx("li",{children:"Remind that `cut` cannot reorder columns; for that you need `awk` or `paste`. Build curiosity for later topics."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"Data selection is like using a scalpel – precise and powerful. Master head, tail, and cut, and you will slice through any text file with ease." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(w,{title:"❓ Row & Column Selection – 30 Expert FAQs",questions:b})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 0: Row‑wise & Column‑wise Data Selection – The Foundation of Text Processing"})]})]})};export{N as default};

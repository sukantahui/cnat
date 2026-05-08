import{j as e,r as c}from"./index-DaJZPAzN.js";import{c as d}from"./clsx-B-dksMZM.js";const x=`#!/bin/bash
# wc_basic.sh - Default wc (lines, words, characters)
cat > sample.txt <<EOF
Hello world
The quick brown fox
Unix is powerful
EOF

echo "=== Default wc output (lines, words, characters) ==="
wc sample.txt

echo -e "\\n=== Also works with multiple files ==="
cp sample.txt sample2.txt
wc sample.txt sample2.txt

# Cleanup
rm sample.txt sample2.txt`,m=`#!/bin/bash
# wc_lines_only.sh - Count only lines with -l
cat > data.txt <<EOF
Line1
Line2
Line3
Line4
EOF

echo "=== Count lines ==="
wc -l data.txt

echo -e "\\n=== Count lines of multiple files ==="
cp data.txt data2.txt
wc -l data.txt data2.txt

echo -e "\\n=== Count lines from stdin ==="
echo -e "a\\nb\\nc" | wc -l

# Cleanup
rm data.txt data2.txt`,w=`#!/bin/bash
# wc_words_chars.sh - Count words (-w) and characters (-m)
cat > essay.txt <<EOF
The UNIX philosophy is to write programs that do one thing and do it well.
wc (word count) is a perfect example - it counts lines, words, and characters.
EOF

echo "=== Word count (-w) ==="
wc -w essay.txt

echo -e "\\n=== Character count (-m) ==="
wc -m essay.txt

echo -e "\\n=== Both in one command ==="
wc -wm essay.txt

# Cleanup
rm essay.txt`,u=`#!/bin/bash
# wc_bytes.sh - Difference between -c (bytes) and -m (characters)
cat > ascii.txt <<EOF
Hello
World
EOF

echo "=== ASCII file: -c and -m are same ==="
wc -c ascii.txt
wc -m ascii.txt

# Create UTF-8 file with Unicode characters
echo "αβγδε" > utf8.txt
echo "世界" >> utf8.txt

echo -e "\\n=== UTF-8 file: -c (bytes) vs -m (characters) ==="
echo "Bytes: $(wc -c < utf8.txt)"
echo "Characters: $(wc -m < utf8.txt)"

# Cleanup
rm ascii.txt utf8.txt`,p=`#!/bin/bash
# wc_max_line_length.sh - Find longest line length with -L
cat > text.txt <<EOF
Short
A bit longer line
This is the longest line of the file
Another line
EOF

echo "=== Longest line length (in characters) ==="
wc -L text.txt

echo -e "\\n=== Useful for fixed-width file validation ==="
# Create fixed-width file (should have consistent length)
printf "%-10s\\n" "Col1" "Col2" > fixed.txt
wc -L fixed.txt

# Cleanup
rm text.txt fixed.txt`,g=`#!/bin/bash
# wc_pipeline.sh - Using wc in pipelines
cat > data.txt <<EOF
apple
banana
apple
cherry
banana
apple
EOF

echo "=== Count lines containing 'apple' using grep|wc -l ==="
grep "apple" data.txt | wc -l

echo -e "\\n=== Better: use grep -c (faster) ==="
grep -c "apple" data.txt

echo -e "\\n=== Count total words across all .sh files ==="
echo "Total words in all .sh files: $(cat *.sh 2>/dev/null | wc -w)"

echo -e "\\n=== Count number of files in current directory ==="
ls -1 | wc -l

# Cleanup
rm data.txt`,f=`#!/bin/bash
# wc_practical.sh - Real-world scenarios
# 1. Validate CSV has correct number of columns (using header line as reference)
cat > students.csv <<EOF
Name,Age,Grade
Swadeep,20,A
Tuhina,21,A+
Abhronila,19,B
Debangshu,22,A
EOF

echo "=== Expected columns: $(head -1 students.csv | tr ',' '\\n' | wc -l) ==="

echo -e "\\n=== Check each row has exactly 3 fields ==="
while IFS= read -r line; do
    fields=$(echo "$line" | tr ',' '\\n' | wc -l)
    if [ $fields -ne 3 ]; then
        echo "Line has $fields fields: $line"
    fi
done < students.csv
echo "Validation complete."

# 2. Monitor log growth (simulate)
echo -e "\\n=== Log file growth example ==="
cat > access.log <<EOF
2025-01-15 10:00:00 GET /index.html
2025-01-15 10:00:05 POST /login
EOF
echo "Current lines: $(wc -l < access.log)"
echo "Simulating growth..."
echo "2025-01-15 10:01:00 GET /about" >> access.log
echo "New lines: $(wc -l < access.log)"

# 3. Find largest file in directory by byte count
echo -e "\\n=== Find largest file (by bytes) ==="
# Create some dummy files
echo "small" > small.txt
dd if=/dev/zero of=medium.txt bs=1024 count=10 2>/dev/null
echo "largest file: $(ls -S | head -1) has $(wc -c < $(ls -S | head -1)) bytes"

# 4. Count total lines of all .txt files, excluding total line
echo -e "\\n=== Total lines in all .txt files ==="
wc -l *.txt 2>/dev/null | grep -v total | awk '{sum+=$1} END {print sum}'

# Cleanup
rm students.csv access.log small.txt medium.txt *.txt 2>/dev/null`,y=[{question:"What does `wc file.txt` output by default?",shortAnswer:"Three numbers: lines, words, characters (in that order).",explanation:"Output: `3 9 44 file.txt` means 3 lines, 9 words, 44 characters.",hint:"Order is always lines‑words‑characters.",level:"basic",codeExample:"wc data.txt"},{question:"How to count only lines in a file?",shortAnswer:"Use `wc -l file.txt`.",explanation:"`-l` stands for lines. Output is just the number of lines.",hint:"Often used in scripts to check file length.",level:"basic",codeExample:"line_count=$(wc -l < file.txt)"},{question:"What is the difference between `wc -c` and `wc -m`?",shortAnswer:"`-c` counts bytes, `-m` counts characters (multibyte safe).",explanation:"For ASCII they are equal. For UTF‑8, a character may be multiple bytes.",hint:"Use `-m` for human‑readable text.",level:"intermediate",codeExample:`echo 'αβγ' | wc -c   # 6 (bytes)
echo 'αβγ' | wc -m   # 3 (characters)`},{question:"How to count words in a file?",shortAnswer:"`wc -w file.txt`.",explanation:"Words are sequences of non‑whitespace separated by spaces, tabs, newlines.",hint:"Punctuation attached to words is included.",level:"basic",codeExample:"word_count=$(wc -w < essay.txt)"},{question:"What does `wc -L file.txt` show?",shortAnswer:"The length (in characters) of the longest line in the file.",explanation:"Useful for checking maximum line width in fixed‑width files.",hint:"If you need the line itself, combine with `awk`.",level:"intermediate",codeExample:"max_len=$(wc -L < wide_file.txt)"},{question:"How to count lines in all `.log` files and get a total?",shortAnswer:"`wc -l *.log` outputs line counts per file and a total line at the end.",explanation:"The last line is the sum of all lines.",hint:"Use `tail -1` to extract just the total.",level:"basic",codeExample:"total=$(wc -l *.log | tail -1 | awk '{print $1}')"},{question:"How to count lines without printing filenames?",shortAnswer:"Redirect file content via stdin: `wc -l < file.txt`.",explanation:"When using `<` redirection, wc doesn't know the filename, so it prints only the number.",hint:"Useful for storing count in a variable.",level:"basic",codeExample:"count=$(wc -l < data.txt)"},{question:"What is faster: `grep pattern file | wc -l` or `grep -c pattern file`?",shortAnswer:"`grep -c` is significantly faster because it doesn't spawn a separate process.",explanation:"`grep -c` counts matches internally without writing to a pipe.",hint:"Always use `grep -c` when possible.",level:"advanced",codeExample:`# Faster: grep -c 'ERROR' log.txt
# Slower: grep 'ERROR' log.txt | wc -l`},{question:"How to count the number of files in a directory?",shortAnswer:"`ls -1 | wc -l`.",explanation:"`ls -1` lists one file per line; wc -l counts lines.",hint:"Hidden files not included; use `ls -a` or `find`.",level:"basic",codeExample:"file_count=$(ls -1 | wc -l)"},{question:"Does `wc -l` count the last line if it has no trailing newline?",shortAnswer:"No, it will be one less than expected. Many tools add a newline, but not all.",explanation:"wc counts newline characters; if the file ends without newline, that line isn't counted.",hint:"Use `cat -A file` to see if last line ends with `$`.",level:"advanced",codeExample:`printf 'hello' | wc -l   # 0 (no newline)
printf 'hello\\n' | wc -l   # 1`},{question:"How to count characters in a string (not a file)?",shortAnswer:"Use `echo -n 'string' | wc -m`.",explanation:"`-n` suppresses trailing newline; otherwise the newline would be counted.",hint:"For word count, use `echo 'string' | wc -w`.",level:"intermediate",codeExample:"len=$(echo -n 'Hello' | wc -c)   # 5"},{question:"What is the output format of `wc` on multiple files?",shortAnswer:"Each line shows filename and counts; last line shows 'total' and summed counts.",explanation:"Example: `3 9 44 file1.txt; 2 5 30 file2.txt; 5 14 74 total`",hint:"Use `tail -1` to get total line.",level:"basic",codeExample:"wc *.txt | tail -1"},{question:"How to count only the total number of bytes used by all `.log` files?",shortAnswer:"`cat *.log | wc -c`.",explanation:"`cat` concatenates all files, then `wc -c` counts total bytes.",hint:"Be careful: huge files may cause memory issues? wc streams, so safe.",level:"advanced",codeExample:"total_bytes=$(cat *.log | wc -c)"},{question:"Why does `wc -m` sometimes differ from `wc -c`?",shortAnswer:"Because `-m` counts multibyte characters as one, while `-c` counts each byte individually.",explanation:"UTF‑8 uses 1‑4 bytes per character.",hint:"For non‑English text, use `-m`.",level:"intermediate",codeExample:`echo 'こんにちは' | wc -c   # 15 (5 chars * 3 bytes)
echo 'こんにちは' | wc -m   # 5`},{question:"How to count the number of lines in a huge file quickly?",shortAnswer:"`wc -l hugefile.txt`. It's very fast (optimised in C).",explanation:"wc reads the file once, counting newline characters.",hint:"Avoid `cat hugefile | wc -l` (extra process).",level:"basic",codeExample:"time wc -l huge.csv"},{question:"Can wc count lines in compressed files (`.gz`) without decompressing?",shortAnswer:"No, wc cannot read compressed files. Use `zcat file.gz | wc -l`.",explanation:"`zcat` decompresses to stdout, then wc counts.",hint:"For `.bz2`, use `bzcat`.",level:"advanced",codeExample:"zcat huge.log.gz | wc -l"},{question:"What is the limit of numbers wc can output?",shortAnswer:"Up to the maximum line/word/byte count the filesystem can represent (very large).",explanation:"wc uses internal 64‑bit counters, can handle files larger than 2GB.",hint:"No practical limit.",level:"expert",codeExample:"# Works for multi‑terabyte files"},{question:"How to count words but treat hyphenated words as two words?",shortAnswer:"wc already does: 'state‑of‑the‑art' is counted as three words (split on hyphen).",explanation:"Hyphen is a separator; not a letter or digit, so it splits words.",hint:"To treat hyphen as part of word, replace hyphens with a letter then count.",level:"advanced",codeExample:"echo 'state-of-the-art' | wc -w   # 3"},{question:"How to get only the word count from wc output (strip leading spaces)?",shortAnswer:"Use `wc -w < file.txt` (stdin redirection) or `wc -w file.txt | awk '{print $1}'`.",explanation:"When filename is given, wc outputs leading spaces; redirect to avoid.",hint:"`wc -w file.txt | cut -d' ' -f1` also works.",level:"intermediate",codeExample:"words=$(wc -w < file.txt)"},{question:"What is the purpose of `--files0-from` in GNU wc?",shortAnswer:"Reads a list of filenames from stdin, separated by null characters.",explanation:"Useful when dealing with filenames containing newlines or special characters.",hint:"Used with `find -print0`.",level:"expert",codeExample:"find . -name '*.txt' -print0 | wc --files0-from=- -l"},{question:"How to count the number of characters in all lines except newlines?",shortAnswer:"`tr -d '\\n' < file.txt | wc -c`.",explanation:"Remove newlines with `tr`, then count characters.",hint:"Same as total file size minus line count.",level:"advanced",codeExample:"total_chars=$(tr -d '\\n' < file | wc -c)"},{question:"Why does `wc -w` count '123' as a word?",shortAnswer:"Because a word is any non‑whitespace sequence; numbers count as words.",explanation:"`wc` does not distinguish alphabetic words; it's purely based on delimiters.",hint:"To count only alphabetic words, use `grep -o '[A-Za-z]\\+' | wc -l`.",level:"basic",codeExample:"echo 'abc 123 def' | wc -w   # 3"},{question:"How to count lines in a Git repository excluding `.git` directory?",shortAnswer:"`git ls-files | xargs wc -l`.",explanation:"`git ls-files` lists tracked files; `xargs wc -l` counts lines.",hint:"Use `git ls-files | grep '.js$' | xargs wc -l` for specific languages.",level:"advanced",codeExample:"git ls-files | xargs wc -l | tail -1"},{question:"What does `wc -L` output for an empty file?",shortAnswer:"0 (since no lines, maximum length is zero).",explanation:"An empty file has no lines, so longest line length is 0.",hint:"Useful as sentinel.",level:"intermediate",codeExample:"touch empty; wc -L empty   # 0"},{question:"How to count the number of times a specific character appears in a file?",shortAnswer:"Use `tr -cd 'x' | wc -c` to count character 'x'.",explanation:"`tr -cd` deletes all characters except 'x', then wc counts remaining.",hint:"Example: `tr -cd 'e' < file | wc -c` counts 'e'.",level:"advanced",codeExample:"count_e=$(tr -cd 'e' < file.txt | wc -c)"},{question:"Why is `wc -l` output sometimes one less than expected?",shortAnswer:"Likely because the last line lacks a trailing newline character.",explanation:"wc counts newline characters; if the last line doesn't end with newline, it's not counted.",hint:"Use `sed -n '$=' file.txt` for POSIX‑compliant line count that works regardless.",level:"intermediate",codeExample:"printf 'no newline' | wc -l   # 0"},{question:"How to count lines in all `.txt` files recursively?",shortAnswer:"`find . -name '*.txt' -exec wc -l {} + | tail -1`.",explanation:"`find` with `-exec` collects files, wc sums them, `tail -1` gives total.",hint:"Use `-print0` and `xargs -0` for robustness.",level:"advanced",codeExample:"find . -type f -name '*.txt' -print0 | xargs -0 wc -l | tail -1"},{question:"What does the `total` line in wc output represent when multiple files are given?",shortAnswer:"The sum of each count (lines, words, characters) across all files.",explanation:"It's not the total of the totals, but the actual sum of each column.",hint:"Useful for project statistics.",level:"basic",codeExample:"wc -l *.txt | tail -1"},{question:"How to make wc output only numbers (no filenames or spaces)?",shortAnswer:"Redirect file content: `wc -l < file.txt`.",explanation:"Without a filename argument, wc outputs only the number (no spaces).",hint:"Best for assigning to variables.",level:"basic",codeExample:"count=$(wc -l < file.txt)"},{question:"What is the difference between `wc -w` and counting words with `awk '{print NF}'`?",shortAnswer:"Both count words similarly, but `awk` can be customised for word boundaries.",explanation:"`wc -w` is faster and standard; `awk` can handle special cases (e.g., hyphen as non‑delimiter).",hint:"For 99% of cases, `wc -w` is sufficient.",level:"expert",codeExample:`echo 'hello-world' | wc -w   # 1
 echo 'hello-world' | awk '{print NF}'   # also 1`}],a=({fileModule:l,title:i,highlightLines:n=[]})=>{const[r,t]=c.useState(!1),s=()=>{navigator.clipboard.writeText(l),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:i}),e.jsx("button",{onClick:s,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:r?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:l.split(`
`).map((h,o)=>e.jsx("div",{className:d(n.includes(o+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:h},o))})})]})},b=({title:l,questions:i})=>{const[n,r]=c.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:l}),e.jsx("div",{className:"space-y-4",children:i.map((t,s)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>r(n===s?null:s),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:d("w-5 h-5 transition-transform duration-300",n===s&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n===s&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},s))})]})},k=()=>{const i=new Date().getFullYear()-1998,n=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"260",viewBox:"0 0 600 260",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"260",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"data.txt:"}),e.jsx("rect",{x:"30",y:"55",width:"300",height:"100",rx:"6",fill:"#e2e8f0",className:"dark:fill-gray-700"}),e.jsx("text",{x:"40",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Hello world"}),e.jsx("text",{x:"40",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"The quick brown fox"}),e.jsx("text",{x:"40",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Unix is powerful"}),e.jsx("rect",{x:"370",y:"55",width:"180",height:"40",rx:"6",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"460",y:"80",fontSize:"14",fontFamily:"monospace",fill:"#854d0e",textAnchor:"middle",children:"wc data.txt"}),e.jsx("text",{x:"370",y:"130",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"Output:"}),e.jsx("rect",{x:"370",y:"145",width:"180",height:"70",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/40"}),e.jsx("text",{x:"380",y:"165",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"3       9      44"}),e.jsx("text",{x:"380",y:"185",fontSize:"11",fill:"#16a34a",children:"lines  words  chars"}),e.jsx("text",{x:"380",y:"205",fontSize:"10",fill:"#6b7280",children:"(spaces count as characters)"}),e.jsx("circle",{cx:"460",cy:"200",r:"3",fill:"#16a34a",children:e.jsx("animate",{attributeName:"r",values:"2;6;2",dur:"1.5s",repeatCount:"indefinite"})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",children:"Counting Lines, Words, and Characters using wc"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `wc` – the essential tool for measuring file sizes, validating data integrity, and monitoring log growth."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(n,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 wc Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc [OPTION]... [FILE]..."}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"# Default: lines, words, characters (in that order)"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc file.txt"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"# Count only lines"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc -l file.txt"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"# Count only words"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc -w file.txt"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"# Count characters (or bytes with -c)"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc -m file.txt   # characters"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc -c file.txt   # bytes"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"# Longest line length"}),e.jsx("code",{className:"text-green-600 dark:text-green-400",children:"wc -L file.txt"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Prints counts (one or more numbers) to stdout; exit 0 unless file error."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To count lines, words, characters, bytes, or maximum line length in files. Used for data validation, progress monitoring, log rotation triggers, and pipeline statistics."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 What wc Counts"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Lines (`-l`):"})," Counts newline characters. Each line ends with a newline; the last line may also have a newline (most tools add one)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Words (`-w`):"})," A word is a sequence of non‑whitespace characters separated by spaces, tabs, or newlines. Punctuation attached to words counts as part of the word."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Characters (`-m`):"})," Counts multibyte characters correctly (UTF‑8). `-c` counts raw bytes (may differ for non‑ASCII)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Max line length (`-L`):"})," Prints the length (in characters) of the longest line. Useful for checking column widths in fixed‑width files."]}),e.jsx("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Barrackpore College:"})," A teacher needs to know how many students scored above 80. She uses `grep -c ',[8-9][0-9]' marks.csv`. But when she wants total lines in the file: `wc -l marks.csv`. For a log file, she monitors growth with `watch -n 5 'wc -l /var/log/nginx/access.log'`."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: wc in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:x,title:"📊 Default wc (lines, words, chars)",highlightLines:[8,12]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:m,title:"📏 Count Lines Only (-l)",highlightLines:[8,12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:w,title:"📝 Words (-w) and Characters (-m)",highlightLines:[10,14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:u,title:"💾 Bytes (-c) vs Characters (-m)",highlightLines:[10,14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:p,title:"📏 Longest Line (-L)",highlightLines:[10,14]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:g,title:"🔗 Pipelines: grep | wc -l",highlightLines:[12,16,20]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(a,{fileModule:f,title:"🧪 Practical: Monitoring, Validation, Statistics",highlightLines:[14,22,30,38]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Count files matching a pattern:"})," `ls *.log | wc -l`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Count lines containing pattern:"})," `grep -c 'ERROR' log.txt` (faster than `grep | wc -l`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Watch log growth:"})," `watch -n 30 'wc -l /var/log/syslog'`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Get total characters in all files:"})," `cat *.txt | wc -c`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Find longest line in a file:"})," `wc -L file` (useful for fixed‑width parsing)."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `-c` (bytes) with `-m` (chars)"})," – for UTF‑8, they differ."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using `wc -l` on a file without trailing newline:"})," counts one fewer line than expected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Piping `grep pattern | wc -l` instead of using `grep -c`"})," – slower and uses extra process."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `wc -w` counts only alphabetic words"})," – numbers and punctuation are included."]}),e.jsx("li",{children:e.jsx("strong",{children:"Forgetting that `wc` outputs filename when multiple files are given."})})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Use `wc -l` for line counts, `wc -c` for file sizes in scripts."}),e.jsx("p",{children:"✔️ Prefer `grep -c` over `grep | wc -l` for performance."}),e.jsx("p",{children:"✔️ Use `--files0-from` for large lists of files."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ For UTF‑8 text, use `-m` (characters) not `-c` (bytes)."}),e.jsxs("p",{children:['✔️ Combine with `find` for recursive counts: `find . -name "*.py" -exec wc -l '," +`."]}),e.jsx("p",{children:"✔️ Use `wc -L` to validate maximum line length before fixed‑width parsing."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I can count lines with `wc -l`."}),e.jsx("li",{children:"☐ I can count words with `wc -w`."}),e.jsx("li",{children:"☐ I can count characters with `wc -m` and bytes with `wc -c`."}),e.jsx("li",{children:"☐ I know the difference between `-c` and `-m`."}),e.jsx("li",{children:"☐ I can find the longest line with `wc -L`."}),e.jsx("li",{children:"☐ I can pipe commands into `wc` (e.g., `ls | wc -l`)."}),e.jsx("li",{children:"☐ I can count lines matching a pattern with `grep -c`."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:"You have a file with 1000 lines. Some lines are very long (up to 5000 characters). You need to split it into chunks where each chunk has roughly the same total character count (not line count). How would you approximate the chunk sizes using wc -L? Can you think of a way to split by character count without breaking lines (hint: split -C)?"})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-green-700 dark:text-green-300",children:["Sukanta Hui — Master Educator (since 1998, ",i," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for wc Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:"\"At Shyamnagar, I gave students a folder of 50 lab reports and asked them to count total lines. They used `wc -l *.txt | tail -1` – perfect! Then I asked for only the Python files: `find . -name '*.py' | xargs wc -l`.\""}),e.jsx("li",{children:"Demonstrate that `wc` on multiple files prints a total line at the end – useful for project statistics."}),e.jsx("li",{children:"Classroom exercise: Count words in a paragraph, then compare with `wc -w`; discuss what counts as a word (hyphenated? apostrophes?)."}),e.jsx("li",{children:"Introduce `grep -c` as a faster alternative to `grep | wc -l` for performance‑conscious scripts."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:`"wc is the simplest tool in your toolbox, yet it's indispensable for everyday tasks." — Sukanta Sir`})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(b,{title:"❓ wc Command – 30 Expert FAQs",questions:y})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 4: Counting Lines, Words, and Characters – Measure Your Text Data"})]})]})};export{k as default};

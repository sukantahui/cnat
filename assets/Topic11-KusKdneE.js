import{j as e,r as c}from"./index-CK4WUhpx.js";import{c as d}from"./clsx-B-dksMZM.js";const h=`#!/bin/bash
# uniq_basic.sh - Basic uniq (remove consecutive duplicates)
cat > fruits.txt <<EOF
apple
apple
banana
banana
cherry
apple
cherry
EOF

echo "=== Original file (unsorted, duplicates not adjacent) ==="
cat fruits.txt

echo -e "\\n=== uniq without sort (only removes consecutive duplicates) ==="
uniq fruits.txt

echo -e "\\n=== sort then uniq (complete deduplication) ==="
sort fruits.txt | uniq

# Cleanup
rm fruits.txt`,p=`#!/bin/bash
# uniq_count.sh - Count occurrences with -c
cat > logs.txt <<EOF
INFO: started
ERROR: disk full
ERROR: disk full
INFO: backup done
ERROR: timeout
INFO: started
EOF

echo "=== Sorted lines with counts ==="
sort logs.txt | uniq -c

echo -e "\\n=== Sorted by frequency (descending) ==="
sort logs.txt | uniq -c | sort -nr

# Cleanup
rm logs.txt`,x=`#!/bin/bash
# uniq_repeated.sh - Show only duplicate lines with -d
cat > data.txt <<EOF
alpha
beta
beta
gamma
gamma
gamma
delta
EOF

echo "=== Sorted file ==="
sort data.txt > sorted.txt
cat sorted.txt

echo -e "\\n=== Lines that are duplicated (appear more than once) ==="
uniq -d sorted.txt

echo -e "\\n=== Count how many duplicate lines (each line once) ==="
uniq -d sorted.txt | wc -l

# Cleanup
rm data.txt sorted.txt`,m=`#!/bin/bash
# uniq_unique.sh - Show only non-duplicate lines with -u
cat > students.txt <<EOF
Swadeep
Tuhina
Swadeep
Abhronila
Tuhina
Debangshu
EOF

sort students.txt > sorted.txt

echo "=== Lines that appear only once (unique students) ==="
uniq -u sorted.txt

# Cleanup
rm students.txt sorted.txt`,f=`#!/bin/bash
# uniq_ignore_case.sh - Case-insensitive uniq (via pre-processing)
cat > mixed.txt <<EOF
apple
Apple
APPLE
banana
Banana
EOF

echo "=== Default uniq (case-sensitive) ==="
sort mixed.txt | uniq

echo -e "\\n=== Case-insensitive: convert to lowercase first ==="
tr '[:upper:]' '[:lower:]' < mixed.txt | sort | uniq

# Cleanup
rm mixed.txt`,g=`#!/bin/bash
# uniq_skip_fields.sh - Skip fields with -f
cat > employees.txt <<EOF
101 Alice Developer
102 Bob Manager
101 Alice Lead
103 Charlie Tester
EOF

echo "=== Compare only after skipping first field (ID) ==="
echo "If IDs differ but names match, they are still considered different because IDs are part of comparison."
echo "Default uniq (whole line):"
sort employees.txt | uniq

echo -e "\\n=== uniq -f1 (ignore first field, compare from field2 onward) ==="
sort employees.txt | uniq -f1

# Note: -f1 skips first whitespace-separated field.
# Cleanup
rm employees.txt`,y=`#!/bin/bash
# uniq_skip_chars.sh - Skip characters with -s
cat > fixed.txt <<EOF
2025-01-15 apple
2025-01-15 apple
2025-01-16 banana
2025-01-16 banana
EOF

echo "=== Default (dates cause lines to be different) ==="
uniq fixed.txt

echo -e "\\n=== uniq -s11 (skip 11 characters, compare only fruit names) ==="
uniq -s11 fixed.txt

# Cleanup
rm fixed.txt`,w=`#!/bin/bash
# uniq_compare_files.sh - Find lines unique to each file using uniq
cat > fileA.txt <<EOF
apple
banana
cherry
EOF

cat > fileB.txt <<EOF
banana
date
elderberry
EOF

# Combine, sort, and use uniq -u to get lines that appear only once (unique to one file)
echo "=== Lines unique to either file (i.e., not common) ==="
cat fileA.txt fileB.txt | sort | uniq -u

echo -e "\\n=== Lines common to both files ==="
cat fileA.txt fileB.txt | sort | uniq -d

# Cleanup
rm fileA.txt fileB.txt`,q=`#!/bin/bash
# uniq_practical.sh - Real-world examples
# 1. Count unique visitors from web log (by IP)
cat > access.log <<EOF
192.168.1.10 GET /index
192.168.1.20 GET /about
192.168.1.10 POST /login
192.168.1.30 GET /index
192.168.1.10 GET /home
EOF

echo "=== Unique IP addresses ==="
cut -d' ' -f1 access.log | sort | uniq

echo -e "\\n=== Frequency of each IP ==="
cut -d' ' -f1 access.log | sort | uniq -c | sort -nr

# 2. Find duplicate lines in a file, showing each duplicate once
echo -e "\\n=== Duplicate lines in a file (showing once each) ==="
cat > test.txt <<EOF
line1
line2
line1
line3
line2
EOF
sort test.txt | uniq -d

# 3. Remove duplicate lines but keep one copy (standard)
echo -e "\\n=== Deduplicated file ==="
sort test.txt | uniq

# 4. Count lines in sorted output without uniq (just wc -l)
echo -e "\\n=== Number of unique lines ==="
sort test.txt | uniq | wc -l

# Cleanup
rm access.log test.txt`,b=[{question:"What does `uniq` do by default?",shortAnswer:"Removes adjacent duplicate lines (outputs only one copy of each consecutively repeated line).",explanation:"Only consecutive duplicates are removed; non‑adjacent duplicates remain.",hint:"Pipe through `sort` first to remove all duplicates.",level:"basic",codeExample:"uniq file.txt"},{question:"How to get only the lines that appear exactly once (unique lines)?",shortAnswer:"`uniq -u file.txt`.",explanation:"`-u` prints lines that are not repeated (appear only once in the input).",hint:"Input must be sorted for correct grouping.",level:"intermediate",codeExample:"sort file.txt | uniq -u"},{question:"What does `uniq -c` do?",shortAnswer:"Prefixes each output line with the number of occurrences (count).",explanation:"First column is the count, then the line itself.",hint:"Often piped to `sort -nr` to get highest frequency first.",level:"basic",codeExample:"sort file.txt | uniq -c"},{question:"How to show only duplicate lines (lines that appear more than once)?",shortAnswer:"`uniq -d file.txt`.",explanation:"`-d` prints each duplicate line once (the first occurrence of the duplicate block).",hint:"Useful to find repeated entries.",level:"intermediate",codeExample:"sort file.txt | uniq -d"},{question:"Why does `uniq` sometimes leave duplicates in the output?",shortAnswer:"Because the duplicates are not adjacent, or the file wasn't sorted.",explanation:"Uniq only compares consecutive lines; non‑adjacent duplicates are not removed.",hint:"Always `sort | uniq` for global deduplication.",level:"basic",codeExample:"# Wrong: uniq file; Right: sort file | uniq"},{question:"How to make uniq case‑insensitive?",shortAnswer:"Pre‑process with `tr '[:upper:]' '[:lower:]'` before sorting and uniq.",explanation:"Uniq has no built‑in case‑ignore option (unlike sort -f).",hint:"Example: `tr 'A-Z' 'a-z' < file | sort | uniq`.",level:"advanced",codeExample:"tr '[:upper:]' '[:lower:]' < file | sort | uniq"},{question:"What does `uniq -f N` do?",shortAnswer:"Skips the first N whitespace‑separated fields when comparing lines.",explanation:"Comparisons ignore the specified number of fields; the rest of the line determines uniqueness.",hint:"Field numbers start at 1; eg `-f2` skips two fields.",level:"advanced",codeExample:"uniq -f1 employees.txt"},{question:"What does `uniq -s N` do?",shortAnswer:"Skips the first N characters when comparing lines.",explanation:"Comparisons ignore the specified number of characters from the start of each line.",hint:"Useful for skipping line numbers or timestamps.",level:"advanced",codeExample:"uniq -s10 log.txt"},{question:"How to save the result of uniq directly to a file?",shortAnswer:"`uniq input.txt output.txt`.",explanation:"The second argument is the output file; if omitted, stdout is used.",hint:"Also redirection works: `uniq file.txt > out.txt`.",level:"basic",codeExample:"uniq sorted.txt result.txt"},{question:"Can uniq work on unsorted input if duplicates are adjacent?",shortAnswer:"Yes, but only those adjacent duplicates are removed; non‑adjacent duplicates will remain.",explanation:"Example: `a\\n a\\n b\\n a` becomes `a\\n b\\n a` (the last `a` remains).",hint:"For safety, always sort first.",level:"intermediate",codeExample:"uniq file.txt   # not safe"},{question:"How to count the number of unique lines in a file?",shortAnswer:"`sort file.txt | uniq | wc -l`.",explanation:"Sort, deduplicate, then count lines.",hint:"Or `sort -u file.txt | wc -l`.",level:"basic",codeExample:"sort data.txt | uniq | wc -l"},{question:"What is the difference between `sort -u` and `sort | uniq`?",shortAnswer:"`sort -u` is a single command that sorts and removes duplicates; `sort | uniq` pipes two commands. They produce identical output, but `sort -u` may be slightly more efficient.",explanation:"`sort -u` eliminates duplicates during sorting; `uniq` removes consecutive duplicates after sorting.",hint:"Use `sort -u` for simplicity and speed.",level:"intermediate",codeExample:"sort -u file.txt"},{question:"How to get the frequency of the most common line?",shortAnswer:"`sort file.txt | uniq -c | sort -nr | head -1`.",explanation:"Count, sort numerically descending, take first line.",hint:"Add `-k1,1nr` to sort only by count.",level:"advanced",codeExample:"sort file.txt | uniq -c | sort -nr | head -1"},{question:"Can uniq ignore whitespace differences between lines?",shortAnswer:"No; uniq considers lines with different whitespace as different. Use `sed` to normalise spaces first.",explanation:"Example: `sed 's/  */ /g' file | sort | uniq`.",hint:"Also `-w` (GNU) can compare only first N characters.",level:"expert",codeExample:"sed 's/[[:space:]]\\+/ /g' file | sort | uniq"},{question:"What does `uniq -w N` do (GNU extension)?",shortAnswer:"Compares only the first N characters of each line (ignores characters after position N).",explanation:"Useful when lines have trailing data that should be ignored.",hint:"Example: `uniq -w 10 file.txt`.",level:"advanced",codeExample:"uniq -w 5 short.txt"},{question:"How to find lines unique to fileA compared to fileB using uniq?",shortAnswer:"`cat fileA fileB | sort | uniq -u` shows lines that appear in only one of the two files.",explanation:"But it doesn't distinguish which file they came from; use `comm` for that.",hint:"`comm -23` is more precise.",level:"advanced",codeExample:"cat fileA fileB | sort | uniq -u"},{question:"Why does uniq sometimes output a space in front of counts with `-c`?",shortAnswer:"`uniq -c` right‑aligns counts with a leading space for formatting.",explanation:"Can be removed with `sed 's/^ *//'`.",hint:"Use `sed` to trim if needed for scripts.",level:"basic",codeExample:"uniq -c file.txt | sed 's/^ *//'"},{question:"How to treat multiple spaces as a single field separator in `-f`?",shortAnswer:"Uniq already treats any whitespace (spaces/tabs) as field separators; consecutive whitespace counts as a single delimiter.",explanation:"No special handling needed.",hint:"But leading spaces may affect field counting; use `sed` to strip.",level:"intermediate",codeExample:"uniq -f2 file.txt"},{question:"What happens if you use `-d` on a file with no duplicates?",shortAnswer:"No output (empty). Exit status is 0.",explanation:"`-d` only outputs lines that appear at least twice.",hint:"Check with `if` to see if any duplicates exist.",level:"basic",codeExample:"uniq -d file.txt && echo 'has duplicates'"},{question:"How to get the lines that appear exactly twice?",shortAnswer:"Use `uniq -c | grep '^ *2 ' | sed 's/^ *2 //'`.",explanation:"Count lines, filter for count 2, remove count prefix.",hint:"Or use `awk` after uniq.",level:"expert",codeExample:"sort file.txt | uniq -c | awk '$1==2 {print $0}'"},{question:"How to make uniq only compare a specific column (e.g., second column of CSV)?",shortAnswer:"Pre‑process with `cut` to extract that column, then uniq.",explanation:"Example: `cut -d',' -f2 file.csv | sort | uniq`.",hint:"If you need the full line, use `sort -k2` and then `uniq -f1` (if spaces).",level:"advanced",codeExample:"cut -d',' -f2 data.csv | sort | uniq"},{question:"Can uniq handle lines longer than 4KB?",shortAnswer:"Yes, uniq has no inherent line length limit (depends on system memory).",explanation:"Modern uniq can handle very long lines.",hint:"But very long lines may use more memory.",level:"expert",codeExample:"uniq huge.txt"},{question:"What is the exit status of uniq when no changes are made (i.e., no duplicates removed)?",shortAnswer:"0 (success) unless an error occurs.",explanation:"Uniq doesn't return 1 when input has no duplicates; only I/O errors cause non‑zero exit.",hint:"Check output, not exit code, for presence of duplicates.",level:"intermediate",codeExample:"uniq file.txt > /dev/null; echo $?"},{question:"How to use uniq on a string (not a file)?",shortAnswer:"Pipe echo: `echo -e 'a\\na\\nb' | sort | uniq`.",explanation:"Uniq reads stdin if no file provided.",hint:"Use `-e` with `echo` to interpret newlines.",level:"basic",codeExample:"echo -e 'apple\\nbanana\\napple' | sort | uniq"},{question:"What does `uniq --group` do (GNU uniq)?",shortAnswer:"Prints all duplicate groups with a delimiter (`:::`).",explanation:"Useful for showing groups of duplicate lines.",hint:"Not available on all systems.",level:"expert",codeExample:"uniq --group file.txt"},{question:"How to remove duplicate lines from a file in‑place (update the file)?",shortAnswer:"`sort -u file.txt -o file.txt`.",explanation:"`sort -o` can write back to the same file.",hint:"Or use `sort file.txt | uniq > tmp && mv tmp file.txt`.",level:"intermediate",codeExample:"sort -u file.txt -o file.txt"},{question:"Why might `uniq -f1` behave unexpectedly on lines starting with a space?",shortAnswer:"Leading spaces are considered part of field1? Actually whitespace separates fields; leading whitespace means the first field may be empty.",explanation:"Use `sed 's/^ *//'` to strip leading spaces before uniq.",hint:"Pre‑process to normalise.",level:"expert",codeExample:"sed 's/^ *//' file | uniq -f1"},{question:"How to get the count of unique words in a file using uniq?",shortAnswer:"`tr ' ' '\\n' < file | sort | uniq | wc -l`.",explanation:"Convert spaces to newlines to get one word per line, then dedupe and count.",hint:"Also split punctuation properly with `tr -s '[:punct:] '`.",level:"advanced",codeExample:"tr ' ' '\\n' < file.txt | sort | uniq | wc -l"},{question:"What is the difference between `uniq -d` and `uniq -D` (GNU)?",shortAnswer:"`-D` prints all duplicate lines (each occurrence), not just one per group.",explanation:"`-D` outputs every copy of duplicate lines; `-d` outputs only one copy.",hint:"Use `-D` to see all duplicates.",level:"advanced",codeExample:"uniq -D file.txt"},{question:"How to combine `uniq` with `grep` to find lines that appear exactly N times?",shortAnswer:"`sort file.txt | uniq -c | awk '$1==N {print $0}'`.",explanation:"Counts precede lines; awk filters by count.",hint:"Then `cut` or `sed` to remove the count prefix.",level:"expert",codeExample:"sort file.txt | uniq -c | awk '$1==3 {print substr($0, index($0,$2))}'"}],n=({fileModule:a,title:o,highlightLines:s=[]})=>{const[r,t]=c.useState(!1),i=()=>{navigator.clipboard.writeText(a),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:o}),e.jsx("button",{onClick:i,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:r?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:a.split(`
`).map((u,l)=>e.jsx("div",{className:d(s.includes(l+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:u},l))})})]})},j=({title:a,questions:o})=>{const[s,r]=c.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:a}),e.jsx("div",{className:"space-y-4",children:o.map((t,i)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>r(s===i?null:i),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:d("w-5 h-5 transition-transform duration-300",s===i&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s===i&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},i))})]})},N=()=>{const o=new Date().getFullYear()-1998,s=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"260",viewBox:"0 0 600 260",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"260",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"Sorted input (with duplicates):"}),e.jsx("rect",{x:"30",y:"55",width:"180",height:"120",rx:"6",fill:"#fee2e2",className:"dark:fill-red-900/30"}),e.jsx("text",{x:"45",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#dc2626",children:"apple"}),e.jsx("text",{x:"45",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#dc2626",children:"apple"}),e.jsx("text",{x:"45",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#dc2626",children:"banana"}),e.jsx("text",{x:"45",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#dc2626",children:"banana"}),e.jsx("text",{x:"45",y:"155",fontSize:"12",fontFamily:"monospace",fill:"#dc2626",children:"cherry"}),e.jsx("line",{x1:"220",y1:"115",x2:"260",y2:"115",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowUniq)"}),e.jsx("text",{x:"280",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"uniq (no options):"}),e.jsx("rect",{x:"280",y:"55",width:"180",height:"90",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/30"}),e.jsx("text",{x:"295",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"apple"}),e.jsx("text",{x:"295",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"banana"}),e.jsx("text",{x:"295",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"cherry"}),e.jsx("text",{x:"280",y:"170",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"uniq -c:"}),e.jsx("rect",{x:"280",y:"185",width:"180",height:"60",rx:"6",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"295",y:"205",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"2 apple"}),e.jsx("text",{x:"295",y:"225",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"2 banana"}),e.jsx("text",{x:"295",y:"245",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"1 cherry"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowUniq",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400",children:"Removing Duplicates Using uniq Command"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `uniq` – report or omit repeated lines, count duplicates, and customise comparison with field/character skipping."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(s,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 uniq Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq [OPTION]... [INPUT [OUTPUT]]"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Remove adjacent duplicates (output only unique lines)"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq file.txt"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Count occurrences"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq -c file.txt"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Show only duplicate lines"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq -d file.txt"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Show only non‑duplicate (unique) lines"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq -u file.txt"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Skip first N fields (space/tab separated)"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq -f N file.txt"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"# Skip first N characters"}),e.jsx("code",{className:"text-yellow-600 dark:text-yellow-400",children:"uniq -s N file.txt"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Exit 0 unless error; writes results to stdout (or output file)."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To filter repeated lines in sorted text – essential for data deduplication, counting frequency, and identifying unique records."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 How uniq Works"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Adjacent duplicates only:"})," Uniq compares only consecutive lines. Therefore input must be sorted (or have duplicates grouped together). The typical pipeline is `sort file | uniq`."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Count duplicates (`-c`):"})," Prefixes each output line with the number of occurrences."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Selective output:"})," `-d` prints only lines that are repeated (duplicates), `-u` prints only lines that are unique (appear once)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Skipping fields/characters:"})," Use `-f N` to ignore first N whitespace‑separated fields, and `-s N` to ignore first N characters when comparing lines."]}),e.jsx("div",{className:"mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Naihati High School:"})," A teacher has a list of student names with possible duplicates. He sorts and uses `uniq` to get the unique class roster. Later, `uniq -c` helps count how many times each student name appears across multiple attendance sheets."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: uniq in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:h,title:"📄 Basic uniq (remove duplicates)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:p,title:"🔢 Count duplicates (-c)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:x,title:"🔁 Show only duplicates (-d)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:m,title:"🆕 Show only unique lines (-u)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:f,title:"🔡 Case‑insensitive uniq (pre‑process)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:g,title:"📋 Skip fields (-f)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:y,title:"🔤 Skip characters (-s)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:w,title:"📑 Compare two files with uniq",highlightLines:[14,18]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:q,title:"🧪 Practical: Log analysis, frequency counting, data cleaning",highlightLines:[14,22,30]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Count frequency:"})," `sort | uniq -c | sort -nr` (sort by count descending)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Find unique lines across two files:"})," `cat file1 file2 | sort | uniq -u`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case‑insensitive uniq:"})," `tr '[:upper:]' '[:lower:]' | sort | uniq`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Save output directly:"})," `uniq input.txt output.txt` (no redirection needed)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with `grep -v`:"})," `uniq -d` to find duplicates, then process them."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to sort before uniq:"})," Uniq only removes adjacent duplicates, unsorted input may still have duplicates elsewhere."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Whitespace differences:"})," Leading/trailing spaces cause lines to be considered different; use `sed` to normalise."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case sensitivity:"})," `uniq` is case‑sensitive; pre‑process if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `-d` shows duplicates once:"})," It shows each duplicate line once (the first occurrence of the duplicate block)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `-u` with `-d`:"})," `-u` shows lines that appear only once; `-d` shows lines that appear more than once."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Always combine `sort | uniq` unless data is already grouped."}),e.jsx("p",{children:"✔️ Use `sort -u` as a shortcut for `sort | uniq` (but `uniq -c` requires pipe)."}),e.jsx("p",{children:"✔️ For large files, `sort -u` may be more memory‑efficient than piping."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Use `-f` to skip timestamp fields when duplicates differ only by time."}),e.jsx("p",{children:"✔️ Use `-s` to skip line numbers or fixed prefixes."}),e.jsx("p",{children:"✔️ To preserve original order of first occurrence, use `awk '!seen[$0]++'` instead of `sort | uniq`."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I know uniq only works on adjacent duplicates (needs sorted input)."}),e.jsx("li",{children:"☐ I can remove duplicates with `sort | uniq`."}),e.jsx("li",{children:"☐ I can count occurrences with `uniq -c`."}),e.jsx("li",{children:"☐ I can show only duplicates with `uniq -d`."}),e.jsx("li",{children:"☐ I can show only unique lines with `uniq -u`."}),e.jsx("li",{children:"☐ I can skip fields (`-f`) and characters (`-s`)."}),e.jsx("li",{children:"☐ I can make uniq case‑insensitive by pre‑processing with `tr`."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:`You have a log file with lines: "ERROR: timeout", "ERROR: disk full", "ERROR: timeout". After sorting, how would you count how many times each error message occurs? Use uniq -c. What if you only want to count errors regardless of the message? Use cut -d' ' -f1 to extract the first word, then sort and uniq -c. Now suppose the log has varying IP addresses; how would you find unique IPs?`})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-yellow-700 dark:text-yellow-300",children:["Sukanta Hui — Master Educator (since 1998, ",o," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for uniq Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:'"At Barrackpore, students often run `uniq` without sorting and wonder why duplicates remain. I always say: `sort` then `uniq` is like washing then drying – order matters."'}),e.jsx("li",{children:"Demonstrate that `sort -u` is a shortcut, but `uniq -c` is irreplaceable for frequency analysis."}),e.jsx("li",{children:"Classroom exercise: give a file of student names with duplicates, ask them to find the total number of unique students and the frequency of each name."}),e.jsx("li",{children:"Show real‑world use: counting unique IP addresses in a web log: `cut -d' ' -f1 access.log | sort | uniq -c | sort -nr`."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"`uniq` is the final step to clean data – it turns chaos into clarity." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(j,{title:"❓ uniq Command – 30 Expert FAQs",questions:b})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 11: Removing Duplicates Using uniq – Cleanse Your Data"})]})]})};export{N as default};

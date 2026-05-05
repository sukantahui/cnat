import{j as e,r as d}from"./index-C0Oguwhi.js";import{c}from"./clsx-B-dksMZM.js";const h=`#!/bin/bash
# diff_basic.sh - Basic diff output (normal format)
cat > file1.txt <<EOF
apple
banana
cherry
date
EOF

cat > file2.txt <<EOF
apple
banana
grape
date
EOF

echo "=== File1 ==="
cat file1.txt
echo "=== File2 ==="
cat file2.txt

echo -e "\\n=== diff file1.txt file2.txt ==="
diff file1.txt file2.txt

# Cleanup
rm file1.txt file2.txt`,x=`#!/bin/bash
# diff_context.sh - Context diff (-c)
cat > old.txt <<EOF
Line 1
Line 2
Line 3
Line 4
Line 5
EOF

cat > new.txt <<EOF
Line 1
Line 2 changed
Line 3
Line 4
Line 5 new
EOF

echo "=== Context diff (-c) ==="
diff -c old.txt new.txt

# Cleanup
rm old.txt new.txt`,m=`#!/bin/bash
# diff_unified.sh - Unified diff (-u)
cat > original.sh <<EOF
#!/bin/bash
echo "Hello"
echo "World"
exit 0
EOF

cat > modified.sh <<EOF
#!/bin/bash
echo "Hello"
echo "Universe"
exit 0
EOF

echo "=== Unified diff (-u) ==="
diff -u original.sh modified.sh

# Cleanup
rm original.sh modified.sh`,p=`#!/bin/bash
# diff_side_by_side.sh - Side-by-side diff (-y)
cat > left.txt <<EOF
Alice
Bob
Charlie
David
EOF

cat > right.txt <<EOF
Alice
Robert
Charlie
David
EOF

echo "=== Side-by-side diff (default width) ==="
diff -y left.txt right.txt

echo -e "\\n=== With width control (--width=40) ==="
diff -y --width=40 left.txt right.txt

# Cleanup
rm left.txt right.txt`,g=`#!/bin/bash
# diff_ignore_case.sh - Case-insensitive diff (-i)
cat > text1.txt <<EOF
Hello World
Unix is Great
EOF

cat > text2.txt <<EOF
hello world
unix is great
EOF

echo "=== Default diff (case-sensitive) ==="
diff text1.txt text2.txt

echo -e "\\n=== Case-insensitive diff (-i) ==="
diff -i text1.txt text2.txt

# Cleanup
rm text1.txt text2.txt`,u=`#!/bin/bash
# diff_ignore_whitespace.sh - Ignoring whitespace changes
cat > spaced.txt <<EOF
Hello   world
Unix    is  powerful
EOF

cat > nospaces.txt <<EOF
Hello world
Unix is powerful
EOF

echo "=== Default diff (sees whitespace difference) ==="
diff spaced.txt nospaces.txt

echo -e "\\n=== Ignore all whitespace (-w) ==="
diff -w spaced.txt nospaces.txt

echo -e "\\n=== Ignore blank lines (-B) ==="
# Create files with/without blank lines
echo -e "Line1\\n\\nLine2" > withblank.txt
echo -e "Line1\\nLine2" > noblank.txt
diff -B withblank.txt noblank.txt

# Cleanup
rm spaced.txt nospaces.txt withblank.txt noblank.txt`,b=`#!/bin/bash
# diff_patch.sh - Creating and applying patches
cat > v1.sh <<EOF
#!/bin/bash
echo "Version 1"
echo "Hello"
exit 0
EOF

cat > v2.sh <<EOF
#!/bin/bash
echo "Version 2"
echo "Hello World"
exit 0
EOF

echo "=== Create unified patch ==="
diff -u v1.sh v2.sh > changes.patch
cat changes.patch

echo -e "\\n=== Apply patch to v1.sh to get v2.sh ==="
cp v1.sh patched.sh
patch patched.sh < changes.patch
echo "Patched file content:"
cat patched.sh

echo -e "\\n=== Reverse patch (undo changes) ==="
patch -R patched.sh < changes.patch
echo "After revert:"
cat patched.sh

# Cleanup
rm v1.sh v2.sh changes.patch patched.sh`,y=`#!/bin/bash
# diff_recursive.sh - Comparing directories with -r
mkdir -p dir1/sub dir2/sub
echo "Hello" > dir1/file.txt
echo "Hello World" > dir2/file.txt
echo "Common" > dir1/sub/common.txt
echo "Common" > dir2/sub/common.txt

echo "=== Recursive diff of directories ==="
diff -r dir1 dir2

echo -e "\\n=== Recursive diff with brief summary (-q) ==="
diff -qr dir1 dir2

# Cleanup
rm -rf dir1 dir2`,w=`#!/bin/bash
# diff_practical.sh - Real-world use cases
# 1. Compare two sorted reports
echo "=== 1. Report comparison ==="
cat > report1.csv <<EOF
Name,Score
Swadeep,85
Tuhina,92
EOF
cat > report2.csv <<EOF
Name,Score
Tuhina,92
Swadeep,86
EOF
echo "Lines only in report1:"
diff report1.csv report2.csv | grep '^<' | cut -c3-
echo "Lines only in report2:"
diff report1.csv report2.csv | grep '^>' | cut -c3-

# 2. Checking if config file changed
echo -e "\\n=== 2. Detecting config changes (exit status) ==="
cp report1.csv config1.txt
cp config1.txt config2.txt
echo "extra line" >> config2.txt
if diff -q config1.txt config2.txt >/dev/null; then
    echo "Configs are identical"
else
    echo "Configs differ"
fi

# 3. Using diff to find missing entries in one file compared to another
echo -e "\\n=== 3. Find lines in fileA not in fileB ==="
cat > fileA.txt <<EOF
apple
banana
cherry
date
EOF
cat > fileB.txt <<EOF
apple
cherry
EOF
# diff --new-line-format='' --old-line-format='%L' fileA.txt fileB.txt 2>/dev/null
# Simpler: comm -23 <(sort fileA.txt) <(sort fileB.txt)
comm -23 <(sort fileA.txt) <(sort fileB.txt) | sed 's/^/Missing: /'

# Cleanup
rm report1.csv report2.csv config1.txt config2.txt fileA.txt fileB.txt`,v=[{question:"What does `diff file1 file2` output by default?",shortAnswer:"Normal diff format: lines with `a` (add), `c` (change), `d` (delete).",explanation:"Output shows line numbers and the differing lines prefixed by `<` (file1) and `>` (file2).",hint:"Use `-c` or `-u` for more readable formats.",level:"basic",codeExample:"diff old.txt new.txt"},{question:"What is the exit status of diff when files are identical?",shortAnswer:"0",explanation:"Exit 0: no differences. Exit 1: differences found. Exit >1: error.",hint:"Useful in scripts to check if files changed.",level:"basic",codeExample:"if diff -q a b; then echo 'same'; fi"},{question:"How to get a unified diff (standard for patches)?",shortAnswer:"`diff -u file1 file2`.",explanation:"Unified diff shows context and uses `-` and `+` markers.",hint:"Git uses unified diff format.",level:"basic",codeExample:"diff -u version1.c version2.c > patch.diff"},{question:"What is the difference between `-c` and `-u`?",shortAnswer:"`-c` (context) shows more context lines with `!` for changed; `-u` (unified) is more compact.",explanation:"Both show before/after context, but unified is preferred for patches.",hint:"Use `-u` for version control.",level:"intermediate",codeExample:"diff -c a b; diff -u a b"},{question:"How to compare two files side by side?",shortAnswer:"`diff -y file1 file2`.",explanation:"Displays two columns; `|` indicates different, `<` only in left, `>` only in right.",hint:"Use `--width` to adjust column width.",level:"basic",codeExample:"diff -y left.txt right.txt"},{question:"How to ignore case differences when comparing?",shortAnswer:"`diff -i file1 file2`.",explanation:"Treats lower and upper case as equivalent.",hint:"Useful for comparing configuration files.",level:"intermediate",codeExample:"diff -i file1 file2"},{question:"How to ignore whitespace differences (spaces, tabs)?",shortAnswer:"`diff -w` (ignore all whitespace) or `-b` (ignore changes in amount of whitespace).",explanation:"`-w` treats spaces, tabs as equal; `-b` ignores changes in number of spaces (but not addition/removal).",hint:"Use `-w` for documents with different formatting.",level:"advanced",codeExample:"diff -w formatted1.txt formatted2.txt"},{question:"How to create a patch file from diff output?",shortAnswer:"Redirect diff output: `diff -u old new > patch.diff`.",explanation:"Unified diff format is patch‑compatible.",hint:"Apply with `patch < patch.diff`.",level:"basic",codeExample:"diff -u script.sh script_new.sh > patch.diff"},{question:"How to apply a patch to a file?",shortAnswer:"`patch originalfile < patchfile`.",explanation:"Original file is modified according to the patch.",hint:"Use `-p0` or `-p1` to strip path prefixes.",level:"intermediate",codeExample:"patch file.txt < changes.diff"},{question:"How to reverse a patch (undo changes)?",shortAnswer:"`patch -R original < patchfile`.",explanation:"`-R` reverses the patch.",hint:"Also `patch --reverse`.",level:"advanced",codeExample:"patch -R file.txt < changes.diff"},{question:"How to compare directories recursively?",shortAnswer:"`diff -r dir1 dir2`.",explanation:"Recursively compares files in subdirectories.",hint:"Use `-q` for brief summary.",level:"intermediate",codeExample:"diff -r project_old project_new"},{question:"How to exclude certain files in directory comparison?",shortAnswer:"`diff -r -x '*.log' dir1 dir2`.",explanation:"`-x` excludes files matching pattern.",hint:"Can be used multiple times.",level:"advanced",codeExample:"diff -r -x '*.tmp' -x '*.bak' dir1 dir2"},{question:"What does `diff -q file1 file2` do?",shortAnswer:"Only reports whether files differ, not the differences.",explanation:"`-q` (quiet) exits 0 if identical, 1 if different.",hint:"Fast check for scripts.",level:"basic",codeExample:"diff -q config1 config2 && echo 'same'"},{question:"How to show only lines that are in file1 but not in file2?",shortAnswer:"`diff file1 file2 | grep '^<' | cut -c3-`.",explanation:"Lines from first file start with `<`.",hint:"`comm -23` is another method.",level:"advanced",codeExample:"diff --old-line-format='%L' --new-line-format='' file1 file2"},{question:"How to ignore blank lines in diff?",shortAnswer:"`diff -B file1 file2`.",explanation:"Ignores insertion or deletion of empty lines.",hint:"Combine with `-w` for strict content comparison.",level:"advanced",codeExample:"diff -B no_blank.txt with_blank.txt"},{question:"What is the meaning of `3c3` in normal diff output?",shortAnswer:"Line 3 changed; line 3 in both files.",explanation:"`c` means change. Format: `line_range_a command line_range_b`.",hint:"`a` add, `d` delete, `c` change.",level:"basic",codeExample:"# part of diff output"},{question:"How to get colored diff output?",shortAnswer:"`diff --color=always file1 file2`.",explanation:"GNU diff supports color highlighting.",hint:"Set alias: `alias diff='diff --color=auto'`.",level:"intermediate",codeExample:"diff --color=always a b"},{question:"Can diff compare binary files? What happens?",shortAnswer:"By default says `Binary files differ`. Use `-a` to treat as text.",explanation:"For binary comparison, use `cmp` or `diff -a`.",hint:"`-a` forces text mode, may produce garbage.",level:"advanced",codeExample:"diff -a binary1 binary2"},{question:"What does `diff --unchanged-line-format` do?",shortAnswer:"Controls formatting of unchanged lines; rarely used.",explanation:"Advanced feature to customise diff output.",hint:"Useful for generating machine‑readable diffs.",level:"expert",codeExample:"# Advanced scripting"},{question:"How to diff two files but ignore certain regex patterns (e.g., timestamps)?",shortAnswer:"Pre‑process with `sed` or `grep -v` before diff: `diff <(sed 's/[0-9]\\+/XXX/g' file1) <(sed 's/[0-9]\\+/XXX/g' file2)`",explanation:"Process substitution removes patterns before comparison.",hint:"Use `--ignore-matching-lines` (GNU) if available.",level:"expert",codeExample:"diff -I '^Date:' file1 file2  # GNU diff"},{question:"How to compare two CSV files but ignore the order of rows?",shortAnswer:"Sort both first: `diff <(sort file1.csv) <(sort file2.csv)`.",explanation:"Sorting normalises row order before comparison.",hint:"Use `-t, -k` for proper CSV sorting.",level:"advanced",codeExample:"diff <(sort data1.csv) <(sort data2.csv)"},{question:"What is the difference between `diff -u` and `git diff`?",shortAnswer:"Git diff uses unified diff format with additional metadata.",explanation:"Git diff includes mode changes, rename detection, etc.",hint:"Both are readable by `patch`.",level:"basic",codeExample:"git diff > changes.patch"},{question:"How to see only the names of files that differ in two directories?",shortAnswer:"`diff -qr dir1 dir2`.",explanation:"`-q` suppresses per‑file diff output, `-r` recurses.",hint:"Useful to list changed files.",level:"intermediate",codeExample:"diff -qr backup1 backup2"},{question:"What does `diff -w` do with files that have different line endings (CRLF vs LF)?",shortAnswer:"It ignores differences in spaces/tabs, but not newline characters. Use `-b` or `--strip-trailing-cr`.",explanation:"For line ending differences, convert both to same format first.",hint:"`dos2unix file` before diff.",level:"advanced",codeExample:"diff -w <(dos2unix -c mac file1) <(dos2unix -c mac file2)"},{question:"How to display line numbers in diff output?",shortAnswer:"Use `-n` (rcs) or `-c`/`-u` already include line numbers.",explanation:"Normal diff shows line numbers in headers.",hint:"Unified diff shows line numbers per hunk.",level:"basic",codeExample:"diff -u file1 file2"},{question:"What is the `--new-file` option in diff?",shortAnswer:"Treat absent files as empty (for dir comparison).",explanation:"When comparing directories, missing files are treated as empty, showing all content as added.",hint:"Useful to show full new file.",level:"advanced",codeExample:"diff -r --new-file dir1 dir2"},{question:"How to diff two files and output only the differences (no context)?",shortAnswer:"`diff --unchanged-line-format='' --old-line-format='- %L' --new-line-format='+ %L' file1 file2`.",explanation:"Custom format suppresses unchanged lines.",hint:"Complex; usually `diff -u` is sufficient.",level:"expert",codeExample:"# Not common"},{question:"What is the purpose of `--label` in diff?",shortAnswer:"Assigns custom labels to files instead of filenames.",explanation:"Used in patch headers to control naming.",hint:"`diff -u --label 'version1' --label 'version2' old new`.",level:"advanced",codeExample:"diff -u --label 'old' --label 'new' file1 file2"},{question:"How to compare two files ignoring leading spaces?",shortAnswer:"`diff -b file1 file2`.",explanation:"`-b` ignores changes in amount of white space.",hint:"`-w` is stronger, ignoring all whitespace.",level:"intermediate",codeExample:"diff -b file1 file2"},{question:"What does `diff -a` do when comparing text files?",shortAnswer:"Treats files as text even if they contain binary data.",explanation:"Forces text mode, useful for files that diff guesses are binary.",hint:"Use with caution: output may be messy.",level:"advanced",codeExample:"diff -a binary_like.txt file.txt"}],t=({fileModule:a,title:r,highlightLines:n=[]})=>{const[o,i]=d.useState(!1),s=()=>{navigator.clipboard.writeText(a),i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:r}),e.jsx("button",{onClick:s,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:o?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:a.split(`
`).map((f,l)=>e.jsx("div",{className:c(n.includes(l+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:f},l))})})]})},j=({title:a,questions:r})=>{const[n,o]=d.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:a}),e.jsx("div",{className:"space-y-4",children:r.map((i,s)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>o(n===s?null:s),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:i.question}),e.jsx("svg",{className:c("w-5 h-5 transition-transform duration-300",n===s&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n===s&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",i.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",i.explanation]}),i.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",i.hint]}),i.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:i.codeExample})})]})]},s))})]})},E=()=>{const r=new Date().getFullYear()-1998,n=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"280",viewBox:"0 0 600 280",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"280",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File A:"}),e.jsx("rect",{x:"30",y:"55",width:"200",height:"130",rx:"6",fill:"#e0e7ff",className:"dark:fill-indigo-900/30"}),e.jsx("text",{x:"40",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Hello world"}),e.jsx("text",{x:"40",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Unix is powerful"}),e.jsx("text",{x:"40",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Linux is great"}),e.jsx("text",{x:"40",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Open source"}),e.jsx("text",{x:"40",y:"155",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"Community driven"}),e.jsx("text",{x:"370",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File B:"}),e.jsx("rect",{x:"370",y:"55",width:"200",height:"130",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/30"}),e.jsx("text",{x:"380",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"Hello world"}),e.jsx("text",{x:"380",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"Unix is powerful"}),e.jsx("text",{x:"380",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"Linux is awesome"}),e.jsx("text",{x:"380",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"Community driven"}),e.jsx("line",{x1:"240",y1:"75",x2:"360",y2:"75",stroke:"#cbd5e1",strokeWidth:"1"}),e.jsx("line",{x1:"240",y1:"95",x2:"360",y2:"95",stroke:"#cbd5e1",strokeWidth:"1"}),e.jsx("line",{x1:"240",y1:"115",x2:"360",y2:"115",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;8",dur:"0.8s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"240",y1:"135",x2:"360",y2:"135",stroke:"#ef4444",strokeWidth:"2",strokeDasharray:"4",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;8",dur:"0.8s",begin:"0.2s",repeatCount:"indefinite"})}),e.jsx("line",{x1:"240",y1:"155",x2:"360",y2:"155",stroke:"#cbd5e1",strokeWidth:"1"}),e.jsx("text",{x:"260",y:"115",fontSize:"18",fill:"#ef4444",textAnchor:"middle",children:"-"}),e.jsx("text",{x:"340",y:"115",fontSize:"18",fill:"#ef4444",textAnchor:"middle",children:"+"}),e.jsx("text",{x:"300",y:"135",fontSize:"12",fill:"#ef4444",textAnchor:"middle",children:"(changed line)"}),e.jsx("text",{x:"300",y:"210",fontSize:"13",fill:"#f59e0b",textAnchor:"middle",children:"diff fileA fileB"})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400",children:"Comparing Files Line by Line using diff"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `diff` – find differences between files, generate patches, review code changes, and understand various output formats."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(n,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 diff Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff [OPTION]... FILE1 FILE2"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"# Default output (normal format)"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff file1.txt file2.txt"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"# Context format (-c)"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff -c file1.txt file2.txt"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"# Unified format (-u) – standard for patches"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff -u file1.txt file2.txt"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"# Side‑by‑side comparison (-y)"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff -y file1.txt file2.txt"}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"# Ignore whitespace, case, etc."}),e.jsx("code",{className:"text-indigo-600 dark:text-indigo-400",children:"diff -iw file1.txt file2.txt"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Exit 0 if files identical, 1 if different, >1 on error."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To compare text files, identify added/removed/changed lines, create patches, review code changes, and verify file integrity."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 Understanding diff Output"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Normal format (default):"})," Uses letters `a` (add), `d` (delete), `c` (change) with line numbers and the actual lines prefixed by `<` (from first file) and `>` (from second file)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Context format (`-c`):"})," Shows lines from both files around each change, with `!` for changed, `+` for added, `-` for removed. Includes a header with file timestamps."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Unified format (`-u`):"})," More compact, showing changed lines with `-` (removed) and `+` (added). Preferred for patches and version control (git uses unified diff)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Side‑by‑side (`-y`):"})," Displays files in two columns; marks differences with `|`, `<`, `>`."]}),e.jsx("div",{className:"mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border-l-4 border-indigo-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Shyamnagar IT Park:"})," Two programmers work on the same script. After merging, they run `diff -u version1.sh version2.sh` to see changes, then apply the patch with `patch`. Teachers at Barrackpore use `diff` to compare student assignment submissions for plagiarism detection."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: diff in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:h,title:"📄 Basic diff (normal format)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:x,title:"📊 Context diff (-c)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:m,title:"📋 Unified diff (-u)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:p,title:"🖥️ Side‑by‑side (-y)",highlightLines:[14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:g,title:"🔡 Ignore case (-i)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:u,title:"␡ Ignore whitespace (-w, -b, -B)",highlightLines:[14,18,22]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:b,title:"📌 Creating & applying patches",highlightLines:[14,20,26]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:y,title:"📁 Recursive diff (-r) for directories",highlightLines:[12,18]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(t,{fileModule:w,title:"🧪 Practical: Comparing configs, code versions, reports",highlightLines:[14,22,30,38]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:e.jsx("strong",{children:"Use `-u` for human‑readable diffs and patches."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quick check if files differ:"})," `diff -q file1 file2` (only reports whether they differ)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignore all whitespace:"})," `diff -w` (great for comparing formatted documents)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exclude certain files in directories:"}),' `diff -r -x "*.log" dir1 dir2`.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Colorized diff:"})," `diff --color=always file1 file2` (GNU diff)."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `<` and `>`:"})," `<` lines are from first file, `>` from second."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using `-w` when whitespace differences are irrelevant:"})," May report false positives."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming diff works for binary files:"})," For binary, use `cmp` or `diff -a` (treat as text)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Patch application order:"})," Patches must be applied to the original file; use `patch < patchfile` carefully."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Use unified diff (`-u`) for version control and code reviews."}),e.jsx("p",{children:"✔️ Test patches on a copy before applying to original files."}),e.jsx("p",{children:"✔️ Use `--ignore-blank-lines` (`-B`) to ignore empty lines when appropriate."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ For directory comparisons, use `-r` and `-x` to exclude irrelevant files."}),e.jsx("p",{children:"✔️ Combine with `grep` to filter differences: `diff file1 file2 | grep '^>'`."}),e.jsx("p",{children:"✔️ Store patches with `.patch` or `.diff` extension for clarity."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I can run basic diff and interpret normal output (`a`,`d`,`c`)."}),e.jsx("li",{children:"☐ I can use context diff (`-c`) and unified diff (`-u`)."}),e.jsx("li",{children:"☐ I can view side‑by‑side differences (`-y`)."}),e.jsx("li",{children:"☐ I can ignore case (`-i`) and whitespace (`-w`, `-b`)."}),e.jsx("li",{children:"☐ I can create a patch and apply it with `patch`."}),e.jsx("li",{children:"☐ I can compare directories recursively (`-r`)."}),e.jsx("li",{children:"☐ I know that exit status tells if files differ."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:"You have two configuration files from different servers. They have the same lines but in different order. How do diff behave? Would -y help? How can you see only lines that are present in one file but not the other? (Hint: diff -u and then filter lines starting with  or "-"). Try also diff --unchanged-line-format='' --old-line-format='- %L' --new-line-format='+ %L' file1 file2."})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-indigo-700 dark:text-indigo-300",children:["Sukanta Hui — Master Educator (since 1998, ",r," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for diff Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:'"At Naihati, I give students two nearly identical Python scripts – one with a bug. They use `diff -u` to spot the difference, which is much faster than manual proofreading."'}),e.jsx("li",{children:"Demonstrate that `diff` is the foundation of version control systems like Git. Show how `git diff` mirrors `diff -u`."}),e.jsx("li",{children:"Classroom exercise: Provide two versions of a students' attendance list (role numbers in different orders) and ask students to find who joined and who left using `diff`."}),e.jsx("li",{children:"Emphasise exit status: using `diff -q` in shell scripts to detect changes."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"`diff` is the detective of the Unix world – it finds every single change no matter how subtle." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(j,{title:"❓ diff Command – 30 Expert FAQs",questions:v})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 7: Comparing Files with diff – Spot Every Difference"})]})]})};export{E as default};

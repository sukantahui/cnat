import{j as e,r as c}from"./index-DlQhRwac.js";import{c as m}from"./clsx-B-dksMZM.js";const x=`#!/bin/bash
# comm_basic.sh - Basic comm usage
cat > file1.txt <<EOF
apple
banana
cherry
date
EOF

cat > file2.txt <<EOF
banana
cherry
fig
grape
EOF

echo "=== Original files (unsorted) ==="
echo "File1:"
cat file1.txt
echo "File2:"
cat file2.txt

echo -e "\\n=== Sort files first ==="
sort file1.txt -o file1_sorted.txt
sort file2.txt -o file2_sorted.txt

echo -e "\\n=== comm (three columns) ==="
comm file1_sorted.txt file2_sorted.txt

# Cleanup
rm file1.txt file2.txt file1_sorted.txt file2_sorted.txt`,h=`#!/bin/bash
# comm_suppress_columns.sh - Suppressing columns
cat > setA.txt <<EOF
apple
banana
cherry
EOF
sort setA.txt -o setA_sorted.txt

cat > setB.txt <<EOF
banana
cherry
date
EOF
sort setB.txt -o setB_sorted.txt

echo "=== comm -1 (suppress column 1) ==="
comm -1 setA_sorted.txt setB_sorted.txt

echo -e "\\n=== comm -2 (suppress column 2) ==="
comm -2 setA_sorted.txt setB_sorted.txt

echo -e "\\n=== comm -3 (suppress column 3 – common lines) ==="
comm -3 setA_sorted.txt setB_sorted.txt

echo -e "\\n=== comm -23 (lines only in setA) ==="
comm -23 setA_sorted.txt setB_sorted.txt

echo -e "\\n=== comm -13 (lines only in setB) ==="
comm -13 setA_sorted.txt setB_sorted.txt

echo -e "\\n=== comm -12 (common lines) ==="
comm -12 setA_sorted.txt setB_sorted.txt

# Cleanup
rm setA.txt setB.txt setA_sorted.txt setB_sorted.txt`,f=`#!/bin/bash
# comm_unsorted_input.sh – Demo of incorrect output when input is not sorted
cat > unsorted1.txt <<EOF
banana
apple
date
EOF

cat > unsorted2.txt <<EOF
apple
cherry
date
EOF

echo "=== Unsorted files (comm may give wrong results) ==="
comm unsorted1.txt unsorted2.txt

echo -e "\\n=== After sorting ==="
sort unsorted1.txt -o sorted1.txt
sort unsorted2.txt -o sorted2.txt
comm sorted1.txt sorted2.txt

# Cleanup
rm unsorted1.txt unsorted2.txt sorted1.txt sorted2.txt`,u=`#!/bin/bash
# comm_different_delimiters.sh - Using comm with non‑default delimiters via sort
cat > data1.tsv <<EOF
001	apple
002	banana
003	cherry
EOF

cat > data2.tsv <<EOF
002	banana
003	cherry
004	date
EOF

echo "=== We want to compare by first column (tab‑separated) ==="
echo "Extract first column, sort, then comm:"
cut -f1 data1.tsv | sort > col1.txt
cut -f1 data2.tsv | sort > col2.txt

echo "Lines only in data1 (by ID):"
comm -23 col1.txt col2.txt

echo "Lines only in data2 (by ID):"
comm -13 col1.txt col2.txt

# Cleanup
rm data1.tsv data2.tsv col1.txt col2.txt`,p=`#!/bin/bash
# comm_case_insensitive.sh - Case‑insensitive comparison (pre‑process)
cat > mixed1.txt <<EOF
Apple
banana
Cherry
EOF

cat > mixed2.txt <<EOF
apple
BANANA
date
EOF

echo "=== Original comm (case‑sensitive) ==="
sort mixed1.txt -o sorted1.txt
sort mixed2.txt -o sorted2.txt
comm sorted1.txt sorted2.txt

echo -e "\\n=== Case‑insensitive by converting to lowercase ==="
tr '[:upper:]' '[:lower:]' < mixed1.txt | sort > lower1.txt
tr '[:upper:]' '[:lower:]' < mixed2.txt | sort > lower2.txt
comm lower1.txt lower2.txt

# Cleanup
rm mixed1.txt mixed2.txt sorted1.txt sorted2.txt lower1.txt lower2.txt`,g=`#!/bin/bash
# comm_compare_directories.sh - Compare file lists from two directories
mkdir -p dir1 dir2
touch dir1/a.txt dir1/b.txt dir1/c.txt
touch dir2/b.txt dir2/c.txt dir2/d.txt

echo "=== File lists ==="
ls dir1 > list1.txt
ls dir2 > list2.txt

echo "Files only in dir1:"
comm -23 <(sort list1.txt) <(sort list2.txt)

echo "Files only in dir2:"
comm -13 <(sort list1.txt) <(sort list2.txt)

echo "Files common to both:"
comm -12 <(sort list1.txt) <(sort list2.txt)

# Cleanup
rm -rf dir1 dir2 list1.txt list2.txt`,b=`#!/bin/bash
# comm_practical.sh – Set operations (union, intersection, difference)
cat > old_list.txt <<EOF
Alice
Bob
Charlie
David
EOF

cat > new_list.txt <<EOF
Bob
Charlie
Eve
Frank
EOF

# Sort both
sort old_list.txt -o old_sorted.txt
sort new_list.txt -o new_sorted.txt

echo "=== Set operations using comm ==="
echo "Unsubscribed (in old but not new):"
comm -23 old_sorted.txt new_sorted.txt

echo -e "\\nNew subscribers (in new but not old):"
comm -13 old_sorted.txt new_sorted.txt

echo -e "\\nRemained subscribed (common):"
comm -12 old_sorted.txt new_sorted.txt

# Union (all unique lines) – not directly comm, use sort -u
echo -e "\\nUnion (all unique subscribers):"
sort -u old_sorted.txt new_sorted.txt

# Check if old_list is a subset of new_list
echo -e "\\nIs old list subset of new list?"
if [ -z "$(comm -23 old_sorted.txt new_sorted.txt)" ]; then
    echo "Yes, all old subscribers are in new list."
else
    echo "No, some old subscribers are missing."
fi

# Cleanup
rm old_list.txt new_list.txt old_sorted.txt new_sorted.txt`,y=[{question:"What does `comm file1 file2` output by default?",shortAnswer:"Three columns: lines only in file1, lines only in file2, and lines common to both.",explanation:"Columns separated by tabs. Column 1: only file1; Column 2: only file2; Column 3: both files.",hint:"Files must be sorted.",level:"basic",codeExample:"comm file1.txt file2.txt"},{question:"What happens if input files are not sorted?",shortAnswer:"comm output is undefined/wrong; it may misclassify lines.",explanation:"comm relies on sorted order to compare line by line.",hint:"Always sort before using comm.",level:"basic",codeExample:"# Run sort first: comm <(sort f1) <(sort f2)"},{question:"How to suppress the first column (lines only in first file)?",shortAnswer:"`comm -1 file1 file2`.",explanation:"`-1` hides column 1.",hint:"Combine: `comm -23` = lines only in file1.",level:"basic",codeExample:"comm -1 file1 file2"},{question:"How to get only lines common to both files (intersection)?",shortAnswer:"`comm -12 file1 file2`.",explanation:"Suppress columns 1 and 2, leaving only column 3.",hint:"Equivalent to `grep -Fxf` but faster on sorted files.",level:"intermediate",codeExample:"comm -12 sorted1 sorted2"},{question:"How to get lines that are only in the first file (set difference)?",shortAnswer:"`comm -23 file1 file2`.",explanation:"Suppress columns 2 and 3, leaving column 1.",hint:"Similar to `grep -vxFf file2 file1` but requires sorting.",level:"intermediate",codeExample:"comm -23 file1 file2"},{question:"How to get lines that are only in the second file?",shortAnswer:"`comm -13 file1 file2`.",explanation:"Suppress columns 1 and 3, leaving column 2.",hint:"Output: lines in file2 not in file1.",level:"intermediate",codeExample:"comm -13 file1 file2"},{question:"Can `comm` handle duplicate lines in input files?",shortAnswer:"Yes, but output may include duplicates; often better to `sort -u` first.",explanation:"comm processes each line sequentially, duplicates will appear multiple times in output.",hint:"Use `uniq` before comm if you want set semantics.",level:"advanced",codeExample:"comm <(sort -u f1) <(sort -u f2)"},{question:"How to make `comm` case‑insensitive?",shortAnswer:"Pre‑process files with `tr '[:upper:]' '[:lower:]'` or `sed 's/.*/\\L&/'` (GNU sed).",explanation:"Comm is case‑sensitive by default; convert both files to same case.",hint:"Example: `comm <(tr 'A-Z' 'a-z' < file1 | sort) <(tr 'A-Z' 'a-z' < file2 | sort)`",level:"advanced",codeExample:"# Use process substitution with tr"},{question:"What does `comm -23 <(sort f1) <(sort f2)` do?",shortAnswer:"Shows lines present in f1 but not in f2 (difference), after sorting.",explanation:"Process substitution sorts on the fly without modifying original files.",hint:"Very common pattern.",level:"advanced",codeExample:"comm -23 <(sort file1) <(sort file2)"},{question:"How to get the union of two files (all unique lines) using comm?",shortAnswer:"`comm -3 file1 file2 | sed 's/^\\t//'` then merge columns; simpler: `sort -u file1 file2`.",explanation:"comm -3 suppresses common lines, but outputs column1 and column2; removing the leading tabs can be messy.",hint:"Use `sort -u` for union.",level:"advanced",codeExample:"sort -u file1 file2   # union"},{question:"What is the exit status of `comm` when files are identical?",shortAnswer:"0 (success).",explanation:"comm exits 0 unless error; it doesn't use exit status to indicate differences (unlike diff).",hint:"Check output, not exit code.",level:"basic",codeExample:"if comm -12 file1 file2 >/dev/null; then echo 'common lines exist'; fi"},{question:"How to ignore leading spaces when using comm?",shortAnswer:"Pre‑process with `sed 's/^[[:space:]]*//'` before sorting.",explanation:"Whitespace affects sorting; strip it for comparison.",hint:"Use `sort -b` to ignore leading blanks.",level:"advanced",codeExample:"comm <(sed 's/^ *//' file1 | sort) <(sed 's/^ *//' file2 | sort)"},{question:"Can `comm` compare files with different delimiters (e.g., CSV)?",shortAnswer:"Indirectly: extract the column to compare, then comm on the extracted lists.",explanation:"Comm works on entire lines; use cut/awk to get the key field, then sort and comm.",hint:"Example: `cut -d',' -f1 file1 | sort`",level:"intermediate",codeExample:"comm <(cut -d',' -f1 file1 | sort) <(cut -d',' -f1 file2 | sort)"},{question:"How to find lines that are in file1 but not in file2 using `comm` but ignoring a specific column?",shortAnswer:"Use `awk` or `cut` to extract the relevant part of each line, then comm.",explanation:"Comm compares entire lines; reduce each line to the field you care about.",hint:"Create temporary files with the simplified lines.",level:"expert",codeExample:"awk '{print $2}' file1 | sort > key1; awk '{print $2}' file2 | sort > key2; comm -23 key1 key2"},{question:"What is the difference between `comm -23` and `diff` for showing lines only in first file?",shortAnswer:"`comm -23` shows only the lines themselves; `diff` shows context and line numbers.",explanation:"Diff is for understanding changes, comm is for set operations.",hint:"Use comm when you just need the list of lines.",level:"intermediate",codeExample:"# comm: lines only in file1; diff: '< line' format"},{question:"How to make `comm` treat tabs as delimiters for columns in output?",shortAnswer:"It already does; each column is separated by a tab. You can't change the delimiter.",explanation:"comm's output delimiter is fixed to tab; use `tr` or `sed` to convert to other delimiters.",hint:"Example: `comm file1 file2 | tr '\\t' ','` for CSV.",level:"advanced",codeExample:"comm file1 file2 | sed 's/\\t/|/g'"},{question:"Why does `comm` sometimes output a blank line at the top?",shortAnswer:"If one file has a leading empty line (or starts with tab?), but not typical; usually due to empty lines in input.",explanation:"Empty lines are compared like any other line; they may appear in output.",hint:"Use `grep -v '^$'` to remove empty lines before processing.",level:"intermediate",codeExample:"comm <(grep -v '^$' file1 | sort) <(grep -v '^$' file2 | sort)"},{question:"How to compare two large sorted files with `comm` efficiently?",shortAnswer:"comm is already efficient; it streams through both files in O(n+m) time.",explanation:"No need to load entire files into memory.",hint:"For huge files, avoid sorting on the fly if they are already sorted.",level:"expert",codeExample:"comm already_sorted1 already_sorted2"},{question:"What is the purpose of `--total` option (GNU comm)?",shortAnswer:"Prints a summary line with counts of lines in each column.",explanation:"Shows how many lines are in column1, column2, column3.",hint:"Example: `comm --total file1 file2`.",level:"advanced",codeExample:"comm --total -23 file1 file2   # counts only unique in file1"},{question:"How to use `comm` with standard input? (e.g., `comm - <(sort file2)`)",shortAnswer:"Use `-` as filename for stdin: `sort file1 | comm - <(sort file2)`.",explanation:"The dash reads from stdin as first file.",hint:"Combine with pipes.",level:"advanced",codeExample:"grep 'pattern' file1 | sort | comm -23 - <(sort file2)"},{question:"Can `comm` handle files encoded with UTF‑8 special characters?",shortAnswer:"Yes, comm works on byte level; if sorting is correct, it works.",explanation:"But be careful of locale: use `LC_ALL=C sort` for deterministic order.",hint:"Ensure sort uses same locale as comm.",level:"advanced",codeExample:"LC_ALL=C comm <(LC_ALL=C sort file1) <(LC_ALL=C sort file2)"},{question:"How to find lines that are present in one file but not another, ignoring line order differences (after sorting)?",shortAnswer:"Sort both files first, then `comm -23`.",explanation:"Sorting normalises order; comm shows difference based on content.",hint:"Exactly the purpose of comm.",level:"basic",codeExample:"comm -23 <(sort file1) <(sort file2)"},{question:"What is the difference between `comm` and `diff` for sorted files?",shortAnswer:"`comm` focuses on set membership (columns of lines), `diff` shows changes in context.",explanation:"Comm is for line‑based set operations; diff for editing.",hint:"Use comm when you want 'which lines are common/different'.",level:"intermediate",codeExample:"# comm: columnar; diff: patch format"},{question:"How to check if two sorted files are identical using `comm`?",shortAnswer:"`comm -12 file1 file2` should output all lines; or `comm -23` and `-13` should be empty.",explanation:"If no lines are unique, the files are identical set‑wise (if no duplicates).",hint:"Use `diff -q` for quick check.",level:"basic",codeExample:`if [ -z "$(comm -23 file1 file2)" ] && [ -z "$(comm -13 file1 file2)" ]; then echo 'same'; fi`},{question:"What does the `-i` option do in `comm` (if any)?",shortAnswer:"Standard comm does not have `-i`. Case‑insensitive requires pre‑processing.",explanation:"GNU comm has no case‑insensitive flag.",hint:"Use `tr` or `sed` to convert case.",level:"basic",codeExample:"# Not available"},{question:"How to compare two files but ignore a certain prefix (e.g., line numbers) using comm?",shortAnswer:"Use `sed` to strip the prefix before comparing.",explanation:"Example: `sed 's/^[0-9]\\+ //' file1 | sort > file1_stripped`",hint:"Keep original files intact.",level:"expert",codeExample:"comm <(sed 's/^[0-9]\\+ //' file1 | sort) <(sed 's/^[0-9]\\+ //' file2 | sort)"},{question:"How to find lines that are common in three files using comm?",shortAnswer:"Pairwise: `comm -12 file1 file2 > common12` then `comm -12 common12 file3`.",explanation:"comm works on two files only; chain them.",hint:"Use intermediate temporary files.",level:"advanced",codeExample:"comm -12 f1 f2 | comm -12 - f3"},{question:"What is the memory usage of `comm` on very large files?",shortAnswer:"Low; it only holds one line from each file at a time.",explanation:"Streaming algorithm, O(1) memory.",hint:"Suitable for terabyte sorted files.",level:"expert",codeExample:"comm big1 big2   # efficient"},{question:"How to output only the second column (lines only in file2) without leading tab?",shortAnswer:"Use `comm -13 file1 file2 | sed 's/^\\t//'`.",explanation:"Column 2 output is indented with one tab; remove it.",hint:"Or use `comm -1 -3` (same as `-13`).",level:"intermediate",codeExample:"comm -13 f1 f2 | cut -f2"},{question:"Can `comm` be used to compare two directories by file names?",shortAnswer:"Yes: create sorted lists of filenames, then comm.",explanation:"Example: `comm -23 <(ls dir1 | sort) <(ls dir2 | sort)` to see files only in dir1.",hint:"Use `find` for recursive comparison.",level:"basic",codeExample:"comm -23 <(ls dir1) <(ls dir2)"}],o=({fileModule:i,title:r,highlightLines:s=[]})=>{const[l,t]=c.useState(!1),n=()=>{navigator.clipboard.writeText(i),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:r}),e.jsx("button",{onClick:n,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:l?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:i.split(`
`).map((d,a)=>e.jsx("div",{className:m(s.includes(a+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:d},a))})})]})},w=({title:i,questions:r})=>{const[s,l]=c.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:i}),e.jsx("div",{className:"space-y-4",children:r.map((t,n)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>l(s===n?null:n),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:m("w-5 h-5 transition-transform duration-300",s===n&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s===n&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},n))})]})},k=()=>{const r=new Date().getFullYear()-1998,s=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"260",viewBox:"0 0 600 260",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"260",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File A (sorted):"}),e.jsx("rect",{x:"30",y:"55",width:"160",height:"100",rx:"6",fill:"#e0e7ff",className:"dark:fill-indigo-900/30"}),e.jsx("text",{x:"40",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"apple"}),e.jsx("text",{x:"40",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"banana"}),e.jsx("text",{x:"40",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"cherry"}),e.jsx("text",{x:"40",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"date"}),e.jsx("text",{x:"230",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File B (sorted):"}),e.jsx("rect",{x:"230",y:"55",width:"160",height:"100",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/30"}),e.jsx("text",{x:"240",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"banana"}),e.jsx("text",{x:"240",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"cherry"}),e.jsx("text",{x:"240",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"fig"}),e.jsx("text",{x:"240",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"grape"}),e.jsx("text",{x:"430",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"comm A B:"}),e.jsx("rect",{x:"430",y:"55",width:"140",height:"100",rx:"6",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"440",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"apple"}),e.jsx("text",{x:"440",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"    banana"}),e.jsx("text",{x:"440",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"    cherry"}),e.jsx("text",{x:"440",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"date"}),e.jsx("text",{x:"440",y:"155",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"        fig"}),e.jsx("text",{x:"440",y:"175",fontSize:"12",fontFamily:"monospace",fill:"#854d0e",children:"        grape"}),e.jsx("text",{x:"500",y:"210",fontSize:"11",fill:"#6b7280",children:"Column 1: only in A"}),e.jsx("text",{x:"500",y:"225",fontSize:"11",fill:"#6b7280",children:"Column 2: only in B"}),e.jsx("text",{x:"500",y:"240",fontSize:"11",fill:"#6b7280",children:"Column 3: common (tab prefixed)"})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",children:"Comparing Sorted Files Using comm"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `comm` – compare two sorted files line by line, showing lines unique to each file or common to both."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(s,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 comm Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm [OPTION]... FILE1 FILE2"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"# Default: three‑column output"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm file1.txt file2.txt"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"# Suppress column 1 (lines only in FILE1)"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm -1 file1.txt file2.txt"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"# Suppress column 2 (lines only in FILE2)"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm -2 file1.txt file2.txt"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"# Suppress column 3 (common lines)"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm -3 file1.txt file2.txt"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"# Combine suppress options: lines only in FILE1"}),e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:"comm -23 file1.txt file2.txt"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Exit 0 unless error; writes three‑column output to stdout."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To compare two sorted files and identify lines that are unique to each or common – essential for set operations (union, intersection, difference)."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 How comm Works"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Sorted input requirement:"})," Both files must be sorted lexicographically (same order as `sort`). Otherwise, comm's output is undefined."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Three‑column output (default):"})," Column 1: lines only in FILE1; Column 2: lines only in FILE2; Column 3: lines common to both. Columns are separated by tabs."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Suppressing columns:"})," Use `-1`, `-2`, `-3` to suppress respective columns. This allows extracting set differences: `comm -23` = lines in FILE1 but not FILE2; `comm -13` = lines in FILE2 but not FILE1; `comm -12` = common lines."]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Shyamnagar IT Park:"})," Two system administrators maintain lists of allowed IPs. They want to find IPs present in the first list but missing in the second. After sorting both files, they use `comm -23 allowed_old.txt allowed_new.txt`. Teachers at Barrackpore use `comm` to compare student attendance lists across two months."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: comm in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:x,title:"📄 Basic comm (three columns)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:h,title:"🔇 Suppressing columns (-1, -2, -3)",highlightLines:[12,16,20]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:f,title:"⚠️ Unsorted input (incorrect output)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:u,title:"📑 Different delimiters (using sort -t $'\\\\t')",highlightLines:[14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:p,title:"🔠 Case‑insensitive comparison (pre‑process with tr)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:g,title:"📁 Comparing directories (generate file lists)",highlightLines:[14,20]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(o,{fileModule:b,title:"🧪 Practical: Set operations (union, intersection, difference)",highlightLines:[14,22,30]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Set difference:"})," `comm -23 file1 file2` → lines in file1 not in file2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Intersection (common lines):"})," `comm -12 file1 file2` (suppress cols 1&2)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Union (all lines, no duplicates):"})," `comm -3 file1 file2 | sed 's/^\\\\t//'` (needs cleanup)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sort without affecting original:"})," `comm -23 <(sort file1) <(sort file2)`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ignore leading whitespace:"})," Pre‑process with `sed 's/^[[:space:]]*//'` before sorting."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using unsorted input:"})," comm will produce misleading output; always sort first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Locale differences:"})," Sorting order may differ between locales; use `LC_ALL=C` for consistent ASCII order."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trailing whitespace:"})," Spaces change sorting; use `sort -b` or pre‑process."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case sensitivity:"})," comm is case‑sensitive; pre‑process with `tr '[:upper:]' '[:lower:]'` if needed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Column confusion:"})," Remember column order: 1=only in file1, 2=only in file2, 3=both."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Always sort both files before using comm (or use process substitution)."}),e.jsx("p",{children:"✔️ Use `LC_ALL=C` for portable sorting across systems."}),e.jsx("p",{children:"✔️ For large files, sort in‑place or use temporary sorted copies."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Combine with `uniq` if files contain duplicate lines (comm expects unique? It can handle duplicates but output becomes more complex)."}),e.jsx("p",{children:"✔️ Use `comm -12` to find common lines efficiently."}),e.jsx("p",{children:"✔️ For checking if a file is subset of another: `comm -23 file1 file2 | wc -l`."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I understand that input must be sorted."}),e.jsx("li",{children:"☐ I can read three‑column comm output."}),e.jsx("li",{children:"☐ I can suppress columns with `-1`, `-2`, `-3`."}),e.jsx("li",{children:"☐ I can find lines only in file1 (`comm -23`)."}),e.jsx("li",{children:"☐ I can find common lines (`comm -12`)."}),e.jsx("li",{children:"☐ I can sort files with `sort` before using comm."}),e.jsx("li",{children:"☐ I know how to handle case‑insensitivity and whitespace."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:"You have two lists of email subscribers (old_list.txt, new_list.txt). You need to find: (a) who unsubscribed (in old but not in new), (b) who newly subscribed (in new but not in old), (c) who remained subscribed (common). How would you use comm if both files are sorted? What if the files contain duplicates? Explore comm -23 and comm -13."})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-blue-700 dark:text-blue-300",children:["Sukanta Hui — Master Educator (since 1998, ",r," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for comm Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:'"At Ichapur, I ask students to compare two roll number lists to find absentees. `comm -23` is their new best friend."'}),e.jsx("li",{children:"Emphasise that `comm` is like a Venn diagram in text – three sets."}),e.jsx("li",{children:"Classroom exercise: given two sorted files of student names, use `comm` to find who is in both classes (intersection) and who is only in the first class (difference)."}),e.jsx("li",{children:"Show the necessity of sorting by manually unsorting and seeing garbage output."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"`comm` is the set theory of the command line – master it to master data comparison." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(w,{title:"❓ comm Command – 30 Expert FAQs",questions:y})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 9: Comparing Sorted Files Using comm – Set Operations at the Command Line"})]})]})};export{k as default};

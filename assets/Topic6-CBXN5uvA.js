import{j as e,r as d}from"./index-BvEfGfTn.js";import{c}from"./clsx-B-dksMZM.js";const m=`#!/bin/bash
# sort_basic_column.sh - Basic column sorting with -k
cat > students.txt <<EOF
Swadeep 20 85
Tuhina 21 92
Abhronila 19 78
Debangshu 22 88
EOF

echo "=== Original order ==="
cat students.txt

echo -e "\\n=== Sort by name (field 1) ==="
sort -k1,1 students.txt

echo -e "\\n=== Sort by age (field 2) ==="
sort -k2,2 students.txt

echo -e "\\n=== Sort by score (field 3) but without numeric (lexicographic, wrong!) ==="
sort -k3,3 students.txt

# Cleanup
rm students.txt`,x=`#!/bin/bash
# sort_numeric_column.sh - Numeric sorting on a column
cat > scores.txt <<EOF
John 85
Alice 92
Bob 78
Eve 100
EOF

echo "=== Default lexicographic (9 comes after 100?) ==="
sort -k2,2 scores.txt

echo -e "\\n=== Numeric sort on field 2 ==="
sort -k2,2n scores.txt

echo -e "\\n=== Reverse numeric (highest score first) ==="
sort -k2,2nr scores.txt

# Cleanup
rm scores.txt`,u=`#!/bin/bash
# sort_multiple_keys.sh - Sorting by multiple columns
cat > employees.txt <<EOF
IT Swadeep 50000
HR Tuhina 45000
IT Abhronila 55000
HR Debangshu 48000
IT Moumita 52000
EOF

echo "=== Sort by department (field 1) then by salary (field 3) numeric ==="
sort -k1,1 -k3,3n employees.txt

echo -e "\\n=== Sort by department ascending, salary descending ==="
sort -k1,1 -k3,3nr employees.txt

# Cleanup
rm employees.txt`,p=`#!/bin/bash
# sort_custom_delimiter.sh - Using -t for CSV/comma separation
cat > data.csv <<EOF
Swadeep,20,85
Tuhina,21,92
Abhronila,19,78
Debangshu,22,88
EOF

echo "=== CSV: default delimiter doesn't work ==="
sort -k2 data.csv

echo -e "\\n=== Sort by age (field 2) with comma delimiter ==="
sort -t',' -k2,2n data.csv

echo -e "\\n=== Sort by score (field 3) descending ==="
sort -t',' -k3,3nr data.csv

# Cleanup
rm data.csv`,f=`#!/bin/bash
# sort_ignore_blanks.sh - Handling leading spaces with -b
cat > messy.txt <<EOF
  apple
   banana
 apple
  cherry
EOF

echo "=== Without -b (spaces affect order) ==="
sort messy.txt

echo -e "\\n=== With -b (ignore leading blanks) ==="
sort -b messy.txt

echo -e "\\n=== Using key-specific -b (field 1, ignore leading blanks) ==="
sort -k1,1b messy.txt

# Cleanup
rm messy.txt`,g=`#!/bin/bash
# sort_month_column.sh - Sorting by month name (-M)
cat > dates.txt <<EOF
Jan 15
Mar 10
Feb 20
Dec 5
EOF

echo "=== Default alpha sort (not correct month order) ==="
sort dates.txt

echo -e "\\n=== Month sort (-M) ==="
sort -k1,1M dates.txt

echo -e "\\n=== Month and day numeric ==="
sort -k1,1M -k2,2n dates.txt

# Cleanup
rm dates.txt`,y=`#!/bin/bash
# sort_complex_demo.sh - IP sorting, version sort, nested keys
# 1. Sorting IP addresses by numeric octets
cat > ips.txt <<EOF
192.168.1.10
10.0.0.1
192.168.2.5
172.16.0.1
EOF

echo "=== IP sort (correct) ==="
sort -t. -k1,1n -k2,2n -k3,3n -k4,4n ips.txt

# 2. Version sort (-V)
echo -e "\\n=== Version sort ==="
cat > versions.txt <<EOF
1.2
1.10
2.0
1.2.1
EOF
sort -V versions.txt

# 3. Combined keys with global options
echo -e "\\n=== Department (field 1), then Salary (field 3) descending, using tab delimiter ==="
cat > payroll.tsv <<EOF
IT	Swadeep	50000
HR	Tuhina	45000
IT	Abhronila	55000
HR	Debangshu	48000
EOF
sort -k1,1 -k3,3nr payroll.tsv

# Cleanup
rm ips.txt versions.txt payroll.tsv`,k=[{question:"How to sort a file by the second column (field)?",shortAnswer:"`sort -k2,2 file.txt`",explanation:"`-k2,2` selects the second field (default whitespace delimiter) as the sort key.",hint:"Always specify both start and end for exact column.",level:"basic",codeExample:"sort -k2,2 data.txt"},{question:"What is the difference between `-k2` and `-k2,2`?",shortAnswer:"`-k2` sorts from field 2 to end of line; `-k2,2` sorts only field 2.",explanation:"`-k2` may include later fields, affecting tie‑breaking.",hint:"Use `-k2,2` for single‑column sort.",level:"intermediate",codeExample:"# Compare: sort -k2 vs sort -k2,2"},{question:"How to sort by column 3 numerically in descending order?",shortAnswer:"`sort -k3,3nr file`.",explanation:"`-n` for numeric, `-r` for reverse; attach flags immediately after key.",hint:"Order matters: `-k3,3rn` also works.",level:"basic",codeExample:"sort -k2,2nr scores.txt"},{question:"How to sort a CSV file by the second column (comma as delimiter)?",shortAnswer:"`sort -t',' -k2,2 data.csv`.",explanation:"`-t','` sets comma as field separator.",hint:"Make sure no spaces after commas in CSV.",level:"intermediate",codeExample:"sort -t',' -k3,3n student.csv"},{question:"How to sort by multiple columns (e.g., department then salary)?",shortAnswer:"`sort -k1,1 -k3,3n employees.txt`.",explanation:"First key is department (field 1), second is salary numeric (field 3).",hint:"Order of `-k` options defines precedence.",level:"intermediate",codeExample:"sort -k2,2 -k1,1 data.txt"},{question:"How to sort by a column but ignore leading spaces in that column?",shortAnswer:"Use `-b` flag either globally or inside key: `-k2,2b`.",explanation:"`-b` ignores leading blanks when determining field start.",hint:"Useful for irregularly aligned columns.",level:"advanced",codeExample:"sort -k2,2b messy.txt"},{question:"What does `-k1.2,1.4` mean in sort?",shortAnswer:"Sorts by characters 2‑4 of the first field (not whole field).",explanation:"`.` allows character‑level indexing within a field.",hint:"Rarely used but powerful for fixed‑width data.",level:"expert",codeExample:"cut -c2-4 file | sort"},{question:"How to sort by month name (e.g., Jan, Feb, Mar)?",shortAnswer:"`sort -k1,1M dates.txt`.",explanation:"`-M` sorts by month name (three‑letter abbreviation).",hint:"Works with full month names as well (January, February).",level:"advanced",codeExample:"sort -k3,3M log.txt"},{question:"What does `global` vs `key‑specific` options mean in sort?",shortAnswer:"Global options like `-n` apply to all keys. Key‑specific like `-k2,2n` apply only to that key.",explanation:"Mix both: `sort -n -k2` (global numeric) vs `sort -k2,2n` (numeric only on field2).",hint:"Key‑specific overrides global for that key.",level:"advanced",codeExample:"sort -n -k2,2 -k3,3 file  # numeric on both keys"},{question:"How to sort IP addresses correctly (dotted quad)?",shortAnswer:"`sort -t. -k1,1n -k2,2n -k3,3n -k4,4n ips.txt`.",explanation:"Treat each octet as numeric field separated by `-t.`.",hint:"Also possible with `-V` (version sort) for simple cases.",level:"expert",codeExample:"sort -t. -k1,1n -k2,2n -k3,3n -k4,4n ips.txt"},{question:"How to sort by version numbers (1.2, 1.10, 2.0)?",shortAnswer:"`sort -V versions.txt`.",explanation:"`-V` handles version‑aware sorting (GNU).",hint:"Better than `-n` for dotted versions.",level:"advanced",codeExample:"sort -V pkglist.txt"},{question:"What does `--debug` option in sort show?",shortAnswer:"Prints detailed information about key extraction and comparisons.",explanation:"Helps understand why sorting results are as they are.",hint:"Useful for debugging complex `-k` specifications.",level:"expert",codeExample:"sort --debug -k2,2 file.txt"},{question:"How to sort a file by multiple keys, but with different directions per key?",shortAnswer:"Add `r` to specific keys: `sort -k1,1 -k2,2nr`.",explanation:"First key ascending (default), second numeric descending.",hint:"Equivalent to `--key=1,1 --key=2,2nr`.",level:"intermediate",codeExample:"sort -k1,1 -k3,3nr data.txt"},{question:"How to sort by a column and also remove duplicates based on that column?",shortAnswer:"Use `-u` with sort, but note `-u` applies to entire line, not column. To dedup by column, use `sort | uniq` or `awk`.",explanation:"`sort -u` removes duplicate lines; not column‑based dedup.",hint:"For column unique, use `sort -k1,1 | uniq -f0` or `awk`.",level:"advanced",codeExample:"sort -u -k2,2 file.txt   # wrong: whole line dedup"},{question:"How to sort by a column that has numeric values with units (e.g., 10K, 5M)?",shortAnswer:"Use `sort -h` (human‑numeric) on that column: `sort -k2,2h`.",explanation:"Handles K, M, G suffixes.",hint:"Avoid mixing with `-n`.",level:"advanced",codeExample:"sort -k2,2h sizes.txt"},{question:"How to sort a file by a column but only when lines match a pattern?",shortAnswer:"Pre‑filter with `grep` before sorting: `grep 'pattern' file | sort -k2,2`.",explanation:"Sort sees only matching lines.",hint:"Or use `sed` to remove non‑matching lines.",level:"intermediate",codeExample:"grep 'ERROR' log.txt | sort -k4,4"},{question:"Why does `sort -k2,2n` sometimes mis‑sort numbers with leading zeros?",shortAnswer:"Leading zeros are fine; `-n` ignores them. If still wrong, check field delimiter or extra spaces.",explanation:"`-n` interprets `010` as 10, correct.",hint:"Use `-g` for general numeric if issues.",level:"basic",codeExample:`echo '010
2' | sort -n   # 2,10`},{question:"How to sort by a column that contains NULL or empty values?",shortAnswer:"Empty fields sort to the beginning (default) or end with `-r`.",explanation:"Empty strings are less than any character.",hint:"Use `--debug` to see how empty fields are compared.",level:"advanced",codeExample:`echo 'a

b' | sort   # blank line first`},{question:"How to sort by a column that has both numbers and text (mixed types)?",shortAnswer:"Mixed types cause lexicographic order; use `-n` to force numeric, but non‑numeric will be treated as zero.",explanation:"Better to separate data or use `awk` to convert.",hint:"Preprocess with `sed` to prefix zeros for numbers.",level:"expert",codeExample:"# Not reliable; redesign data"},{question:"What is the purpose of `-s` when sorting by multiple columns?",shortAnswer:"Makes sort stable: preserves original order for lines that compare equal in all keys.",explanation:"Without `-s`, order of ties is unspecified.",hint:"Used with `-k` to guarantee deterministic results.",level:"advanced",codeExample:"sort -s -k2,2 -k1,1 file"},{question:"How to sort by a column that uses a multi‑character delimiter (e.g., `::`)?",shortAnswer:"Use `awk` to convert to single‑char delimiter, then sort. Example: `awk -F'::' '{print $2}' file`.",explanation:"`-t` only accepts single character.",hint:"`sed 's/::/|/g' file | sort -t'|' -k2`",level:"expert",codeExample:"sed 's/::/|/g' data | sort -t'|' -k2"},{question:"How to sort a file by column but ignore case in that column only?",shortAnswer:"Use `-f` inside key: `-k2,2f`.",explanation:"`-f` folds case for that key only.",hint:"Global `-f` also works but affects all keys.",level:"advanced",codeExample:"sort -k2,2f words.txt"},{question:"How to sort by a column that contains dates in DD/MM/YYYY format?",shortAnswer:"Convert to YYYYMMDD then sort: `awk '{split($3,d,\"/\"); print d[3] d[2] d[1], $0}' file | sort | cut -d' ' -f2-`",explanation:"Complex; use external tools.",hint:"Or use `date` to convert to epoch.",level:"expert",codeExample:"# Too complex for one command"},{question:"Why does `sort -k2,2n` sometimes treat `-1` as `0`?",shortAnswer:"`-n` does handle negative numbers correctly. Check if there are non‑numeric characters.",explanation:"If a line has `-1` with a trailing space or other char, it may be considered invalid.",hint:"Use `--debug` to diagnose.",level:"advanced",codeExample:`echo '-1
2' | sort -n   # -1,2`},{question:"How to sort by a column that is not the first column but has leading spaces in the line?",shortAnswer:"Use `-b` to ignore leading blanks when determining field start.",explanation:"`-k2,2b` will ignore spaces before field 2.",hint:"Also `-t$'\\t'` if using tabs.",level:"intermediate",codeExample:"sort -k2,2b messy.txt"},{question:"How to sort by column and also output only that column?",shortAnswer:"Pipe sorted output to `cut`: `sort -k2,2 file | cut -f2`.",explanation:"Sort then select.",hint:"Use `--output-delimiter` if needed.",level:"basic",codeExample:"sort -k3,3n data | cut -f3"},{question:"How to sort a huge file by a column without loading entire file into memory?",shortAnswer:"`sort` automatically uses external temporary files. Specify `-T` for directory.",explanation:"`sort` is designed for large files.",hint:"Use `-S` for buffer size, `-T` for temp location.",level:"expert",codeExample:"sort -T /bigtmp -k2,2 huge.csv"},{question:"What is the difference between sorting by `-k2` and `-k2,2` when lines have variable number of fields?",shortAnswer:"`-k2` will compare from field2 to line end, so if field3 differs, it breaks ties; `-k2,2` ignores later fields.",explanation:"Choose based on whether later fields should influence order.",hint:"Usually want `-k2,2`.",level:"advanced",codeExample:`echo 'a 1 9
b 1 8' | sort -k2   # 1 9 then 1 8? may differ`},{question:"How to sort by column but treat the entire line as secondary key?",shortAnswer:"Use `-k2,2 -s` so that primary key is column2, then stable sort preserves input order for ties.",explanation:"`-s` with a single key makes the whole line act as implicit secondary key (original order).",hint:"Use `-s` for deterministic results.",level:"expert",codeExample:"sort -k2,2 -s file"},{question:"How to sort by column and then remove duplicate lines based on that column only?",shortAnswer:"Use `awk` to print only first occurrence of each key: `sort -k2,2 file | awk '!seen[$2]++'`.",explanation:"`sort` arranges, `awk` filters by first occurrence.",hint:"Works with any delimiter by adjusting `$2`.",level:"expert",codeExample:"sort -t',' -k3,3n data.csv | awk -F',' '!seen[$3]++'"},{question:"How to sort mixed alphanumeric strings (e.g., file1, file10, file2) naturally?",shortAnswer:"Use `sort -V` (version sort) which handles numbers inside strings.",explanation:"`-V` splits string into numeric and non‑numeric parts.",hint:"Also `ls -v` does similar.",level:"advanced",codeExample:`echo -e 'file1
file10
file2' | sort -V`}],r=({fileModule:a,title:o,highlightLines:s=[]})=>{const[i,t]=d.useState(!1),n=()=>{navigator.clipboard.writeText(a),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:o}),e.jsx("button",{onClick:n,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:i?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:a.split(`
`).map((h,l)=>e.jsx("div",{className:c(s.includes(l+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:h},l))})})]})},b=({title:a,questions:o})=>{const[s,i]=d.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:a}),e.jsx("div",{className:"space-y-4",children:o.map((t,n)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>i(s===n?null:n),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:c("w-5 h-5 transition-transform duration-300",s===n&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s===n&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},n))})]})},j=()=>{const o=new Date().getFullYear()-1998,s=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"300",viewBox:"0 0 600 300",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"300",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"Student Data:"}),e.jsx("rect",{x:"30",y:"55",width:"350",height:"25",rx:"3",fill:"#cbd5e1",className:"dark:fill-gray-600"}),e.jsx("text",{x:"40",y:"73",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-200",children:"Name      Age  Score"}),e.jsx("rect",{x:"30",y:"85",width:"350",height:"20",fill:"white",className:"dark:fill-gray-800"}),e.jsx("text",{x:"40",y:"100",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Tuhina    21   92"}),e.jsx("rect",{x:"30",y:"110",width:"350",height:"20",fill:"#f8fafc",className:"dark:fill-gray-750"}),e.jsx("text",{x:"40",y:"125",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Swadeep   20   85"}),e.jsx("rect",{x:"30",y:"135",width:"350",height:"20",fill:"white",className:"dark:fill-gray-800"}),e.jsx("text",{x:"40",y:"150",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Abhronila 19   78"}),e.jsx("rect",{x:"30",y:"160",width:"350",height:"20",fill:"#f8fafc",className:"dark:fill-gray-750"}),e.jsx("text",{x:"40",y:"175",fontSize:"12",fontFamily:"monospace",fill:"#0f172a",className:"dark:fill-gray-100",children:"Debangshu 22   88"}),e.jsx("line",{x1:"400",y1:"140",x2:"440",y2:"140",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowCol)"}),e.jsx("text",{x:"460",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"sort -k3 -n"}),e.jsx("rect",{x:"460",y:"55",width:"130",height:"130",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/30"}),e.jsx("text",{x:"470",y:"75",fontSize:"11",fontFamily:"monospace",fill:"#16a34a",children:"Abhronila 19 78"}),e.jsx("text",{x:"470",y:"95",fontSize:"11",fontFamily:"monospace",fill:"#16a34a",children:"Swadeep 20 85"}),e.jsx("text",{x:"470",y:"115",fontSize:"11",fontFamily:"monospace",fill:"#16a34a",children:"Debangshu 22 88"}),e.jsx("text",{x:"470",y:"135",fontSize:"11",fontFamily:"monospace",fill:"#16a34a",children:"Tuhina 21 92"}),e.jsx("text",{x:"470",y:"155",fontSize:"10",fill:"#6b7280",children:"(ascending by Score)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowCol",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400",children:"Sorting Based on Specific Columns"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `sort -k` and `-t` to sort tabular data by any column, mix keys, and control field boundaries."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(s,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 Column Sorting Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"sort -k POS[,POS] [OPTIONS] [FILE]"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"# Sort by second column (default whitespace delimiter)"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"sort -k2 data.txt"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"# Sort by third column numerically"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"sort -k3 -n data.txt"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"# Sort by column 2, then by column 1"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"sort -k2,2 -k1,1 data.txt"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"# Custom delimiter (comma)"}),e.jsx("code",{className:"text-teal-600 dark:text-teal-400",children:"sort -t',' -k3 -n data.csv"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Prints sorted lines; exit 0 unless error."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To sort tabular data (CSV, TSV, log files, etc.) by specific fields, enabling advanced report generation and data analysis."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 How Column Sorting Works"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Key specification (`-k`):"})," The `-k` option defines which field(s) to sort by. Basic: `-k2` means “from field 2 to the end of the line”. To limit to a single field: `-k2,2`. You can also specify start and stop characters within a field: `-k1.2,1.4` (start at character 2 of field 1, end at character 4)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Field delimiter (`-t`):"})," By default, fields are separated by whitespace (space or tab). Use `-t` to define a custom delimiter, e.g., `-t','` for CSV."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Multiple sort keys:"})," Provide multiple `-k` options; earlier keys have higher precedence. Example: `sort -k2 -k1` sorts by field 2, then by field 1."]}),e.jsx("div",{className:"mt-4 p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border-l-4 border-teal-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Barrackpore College:"})," A teacher has a CSV of student marks: `Name,Age,Score`. She wants to sort by Score (descending) and then by Age (ascending) to see youngest high‑scorers first: `sort -t',' -k3,3rn -k2,2n students.csv`. This uses reverse numeric on field 3 and numeric on field 2."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: Column Sorting"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:m,title:"📊 Basic Column Sort (-k2)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:x,title:"🔢 Numeric Column Sort (-k3 -n)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:u,title:"🔑 Multiple Keys (-k2 -k1)",highlightLines:[14,19]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:p,title:"📁 Custom Delimiter (-t)",highlightLines:[12,16,20]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:f,title:"🎯 Ignore Leading Blanks (-b)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:g,title:"📅 Month Column Sort (-M)",highlightLines:[12,16]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(r,{fileModule:y,title:"🧩 Complex Sorting: IPs, Versions, Combined Keys",highlightLines:[14,20,26]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use `-k2,2` not `-k2`"})," to restrict to a single column (prevents spillover)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine flags inside a key:"})," `sort -k3,3nr` (numeric, reverse) – order of flags matters."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sort by IP addresses:"})," `sort -t. -k1,1n -k2,2n -k3,3n -k4,4n`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stable multi‑key sort:"})," Use `-s` to preserve original order for ties in earlier keys."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Debug with `--debug`:"})," See which keys are used and how they are compared."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting `-k` endpoint:"})," `-k2` sorts from field 2 to end of line, which may include later fields unintentionally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing numeric and lexicographic:"})," Use `-n` on numeric columns, otherwise `10` sorts before `2`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case sensitivity in keys:"})," Use `-f` inside key: `-k2,2f` for case‑insensitive sort on that field."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delimiters are single characters:"})," Cannot use multiple characters like `::`."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Always specify both start and end fields (e.g., `-k3,3`) to avoid ambiguity."}),e.jsx("p",{children:"✔️ Use `-t` explicitly for CSV, TSV, or any non‑whitespace delimiter."}),e.jsx("p",{children:"✔️ When combining options like reverse and numeric, put them after the key: `-k3,3nr`."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Use `-s` with multiple keys for deterministic output when ties exist."}),e.jsx("p",{children:"✔️ Test with `head` and `--debug` before applying to large files."}),e.jsx("p",{children:"✔️ For version numbers, use `-V` instead of `-n` (e.g., `1.10` vs `1.2`)."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I can sort by the 2nd column with `-k2,2`."}),e.jsx("li",{children:"☐ I can sort numerically by a column with `-k3,3n`."}),e.jsx("li",{children:"☐ I can use multiple keys (e.g., `-k2,2 -k1,1`)."}),e.jsx("li",{children:"☐ I can set a delimiter with `-t` (e.g., `-t','`)."}),e.jsx("li",{children:"☐ I can sort by month name with `-M`."}),e.jsx("li",{children:"☐ I can combine flags inside a key: `-k3,3nr`."}),e.jsx("li",{children:"☐ I can ignore leading blanks with `-b` or inside key: `-k2,2b`."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:'You have a CSV file: "Name, Score, Grade". Write a command to sort by Grade (descending), and for equal grades, by Score (ascending). Try using -k3,3r -k2,2n. What if the file uses space as delimiter and there are leading spaces? How does -b help? If you omit the end field (e.g., -k2), what will happen to lines with more than 2 fields?'})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-teal-700 dark:text-teal-300",children:["Sukanta Hui — Master Educator (since 1998, ",o," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for Column Sorting:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:"\"At Shyamnagar, students often struggle with multi‑key sorts. I give them a sales CSV and ask: 'Sort by region, then by highest sales within each region.' They learn to use `-k1,1 -k3,3nr` – and the power of stable sorting.\""}),e.jsx("li",{children:"Emphasise the difference between `-k2` and `-k2,2` by showing an example where extra fields cause unwanted ordering."}),e.jsx("li",{children:"Classroom exercise: Sort the `/etc/passwd` file by UID (field 3) numerically, then by username (field 1)."}),e.jsx("li",{children:"Show `--debug` live to demystify key extraction."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:`"Column sorting turns raw data into actionable insights – one of the most practical skills you'll learn." — Sukanta Sir`})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(b,{title:"❓ Column Sorting – 30 Expert FAQs",questions:k})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 6: Sorting Based on Specific Columns – Precision Control Over Tabular Data"})]})]})};export{j as default};

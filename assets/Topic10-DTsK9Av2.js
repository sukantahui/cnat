import{j as e,r as d}from"./index-CNNP-EED.js";import{c}from"./clsx-B-dksMZM.js";const f=`#!/bin/bash
# join_basic.sh - Basic join on first field (inner join)
cat > students.txt <<EOF
101 Swadeep
102 Tuhina
103 Abhronila
104 Debangshu
EOF

cat > scores.txt <<EOF
101 85
102 92
104 78
105 88
EOF

echo "=== Original files (unsorted) ==="
echo "students.txt:"
cat students.txt
echo "scores.txt:"
cat scores.txt

echo -e "\\n=== Sort both on first field ==="
sort -k1,1 students.txt -o students_sorted.txt
sort -k1,1 scores.txt -o scores_sorted.txt

echo -e "\\n=== join (inner join) ==="
join students_sorted.txt scores_sorted.txt

# Cleanup
rm students.txt scores.txt students_sorted.txt scores_sorted.txt`,m=`#!/bin/bash
# join_custom_fields.sh - Join on different fields
cat > file1.txt <<EOF
name:Swadeep:roll101
name:Tuhina:roll102
EOF

cat > file2.txt <<EOF
roll101:85
roll102:92
roll103:78
EOF

echo "=== Original files ==="
echo "File1 (field2 is key):"
cat file1.txt
echo "File2 (field1 is key):"
cat file2.txt

echo -e "\\n=== Sort file1 on field2 (colon delimiter) ==="
sort -t':' -k2,2 file1.txt -o file1_sorted.txt
echo "Sorted file1:"
cat file1_sorted.txt

echo -e "\\n=== Sort file2 on field1 ==="
sort -t':' -k1,1 file2.txt -o file2_sorted.txt

echo -e "\\n=== Join -1 2 -2 1 (file1 field2 = file2 field1) ==="
join -t':' -1 2 -2 1 file1_sorted.txt file2_sorted.txt

# Cleanup
rm file1.txt file2.txt file1_sorted.txt file2_sorted.txt`,x=`#!/bin/bash
# join_different_delimiters.sh - Using custom delimiter (-t)
cat > customers.csv <<EOF
101,Swadeep,Barrackpore
102,Tuhina,Shyamnagar
103,Abhronila,Ichapur
EOF

cat > orders.csv <<EOF
101,5000
103,7500
104,2000
EOF

echo "=== CSV files (comma delimiter) ==="
echo "customers.csv:"
cat customers.csv
echo "orders.csv:"
cat orders.csv

echo -e "\\n=== Sort both on first field (comma) ==="
sort -t',' -k1,1 customers.csv -o customers_sorted.csv
sort -t',' -k1,1 orders.csv -o orders_sorted.csv

echo -e "\\n=== join with -t',' ==="
join -t',' customers_sorted.csv orders_sorted.csv

# Cleanup
rm customers.csv orders.csv customers_sorted.csv orders_sorted.csv`,p=`#!/bin/bash
# join_unmatched.sh - Using -a and -v for unmatched lines
cat > employees.txt <<EOF
E101 Alice
E102 Bob
E103 Charlie
EOF

cat > salaries.txt <<EOF
E101 50000
E103 60000
E104 55000
EOF

sort -k1,1 employees.txt -o emp_sorted.txt
sort -k1,1 salaries.txt -o sal_sorted.txt

echo "=== Lines in employees.txt not in salaries.txt (unmatched from left) ==="
join -v1 emp_sorted.txt sal_sorted.txt

echo -e "\\n=== Lines in salaries.txt not in employees.txt (unmatched from right) ==="
join -v2 emp_sorted.txt sal_sorted.txt

echo -e "\\n=== Lines in both (inner join) ==="
join emp_sorted.txt sal_sorted.txt

# Cleanup
rm employees.txt salaries.txt emp_sorted.txt sal_sorted.txt`,u=`#!/bin/bash
# join_multiple_fields.sh - Selecting output fields with -o
cat > products.txt <<EOF
P001 Laptop Dell
P002 Mouse Logitech
P003 Keyboard HP
EOF

cat > prices.txt <<EOF
P001 1200
P002 25
P003 45
EOF

echo "=== Original files ==="
echo "products.txt (columns: ID, Product, Brand):"
cat products.txt
echo "prices.txt (columns: ID, Price):"
cat prices.txt

sort -k1,1 products.txt -o p_sorted.txt
sort -k1,1 prices.txt -o price_sorted.txt

echo -e "\\n=== join with custom output (-o 1.2,1.3,2.2) ==="
echo "Output columns: Product, Brand, Price:"
join -o 1.2,1.3,2.2 p_sorted.txt price_sorted.txt

# Cleanup
rm products.txt prices.txt p_sorted.txt price_sorted.txt`,j=`#!/bin/bash
# join_outer_join.sh - Left, right, full outer joins
cat > dept.txt <<EOF
D01 IT
D02 HR
D03 Finance
EOF

cat > emp.txt <<EOF
D01 Alice
D02 Bob
D04 Charlie
EOF

sort -k1,1 dept.txt -o dept_sorted.txt
sort -k1,1 emp.txt -o emp_sorted.txt

echo "=== Left outer join (all dept, matching emp) ==="
join -a1 dept_sorted.txt emp_sorted.txt

echo -e "\\n=== Right outer join (all emp, matching dept) ==="
join -a2 dept_sorted.txt emp_sorted.txt

echo -e "\\n=== Full outer join (all keys from both) ==="
join -a1 -a2 dept_sorted.txt emp_sorted.txt

# Cleanup
rm dept.txt emp.txt dept_sorted.txt emp_sorted.txt`,g=`#!/bin/bash
# join_substitute_outer.sh - Simulating full outer join with substitution
cat > left.txt <<EOF
1 Apple
2 Banana
EOF

cat > right.txt <<EOF
2 100
3 200
EOF

sort -k1,1 left.txt -o left_sorted.txt
sort -k1,1 right.txt -o right_sorted.txt

echo "=== Inner join ==="
join left_sorted.txt right_sorted.txt

echo -e "\\n=== Full outer join with missing values shown as 'NULL' ==="
join -a1 -a2 -e 'NULL' -o '0,1.2,2.2' left_sorted.txt right_sorted.txt

# Cleanup
rm left.txt right.txt left_sorted.txt right_sorted.txt`,y=`#!/bin/bash
# join_practical.sh - Real‑world examples
# 1. Enrich sales.csv with product names
cat > sales.csv <<EOF
prod_id,quantity
101,5
102,3
104,2
EOF

cat > products.csv <<EOF
prod_id,name
101,Laptop
102,Mouse
103,Keyboard
EOF

echo "=== Sales report with product names (inner join) ==="
# Remove header, sort, join, add header back
tail -n +2 sales.csv | sort -t',' -k1,1 > sales_nohead_sorted
tail -n +2 products.csv | sort -t',' -k1,1 > products_nohead_sorted
echo "prod_id,quantity,name"
join -t',' -o '1.1,1.2,2.2' sales_nohead_sorted products_nohead_sorted

# 2. Compare two versions of a configuration (find keys only in old config)
cat > config_v1.txt <<EOF
timeout=30
retries=3
debug=false
EOF

cat > config_v2.txt <<EOF
timeout=30
retries=5
cache=true
EOF

# Extract key part only (before '=')
echo -e "\\n=== Keys only in v1 (removed) ==="
sed 's/=.*//' config_v1.txt | sort > old_keys
sed 's/=.*//' config_v2.txt | sort > new_keys
comm -23 old_keys new_keys

echo -e "\\n=== Keys only in v2 (added) ==="
comm -13 old_keys new_keys

# 3. Merging logs with user info
echo -e "\\n=== Merge user info into access log ==="
cat > users.txt <<EOF
1001 Swadeep
1002 Tuhina
EOF

cat > access.log <<EOF
1001 GET /index
1003 POST /login
1002 GET /home
EOF

sort -k1,1 users.txt > users_sorted
sort -k1,1 access.log > access_sorted
join -o '1.2,2.2' users_sorted access_sorted

# Cleanup
rm sales.csv products.csv sales_nohead_sorted products_nohead_sorted config_v1.txt config_v2.txt old_keys new_keys users.txt access.log users_sorted access_sorted`,b=[{question:"What is the basic syntax of `join`?",shortAnswer:"`join file1 file2` (assumes both sorted on first field).",explanation:"Performs inner join on first field (whitespace separated).",hint:"Files must be sorted on the join field.",level:"basic",codeExample:"join students.txt scores.txt"},{question:"What happens if input files are not sorted on the join field?",shortAnswer:"Join will produce incorrect/missing matches, or no output at all.",explanation:"Join relies on sorted order to merge efficiently; unsorted input leads to undefined behavior.",hint:"Always sort before join.",level:"basic",codeExample:"sort -k1,1 file1 | join - file2"},{question:"How to join files on a field other than the first?",shortAnswer:"Use `-1 FIELD -2 FIELD` (1‑based indexing). Example: `join -1 2 -2 1 file1 file2`",explanation:"Field numbers refer to fields within each file (default whitespace delimiter).",hint:"Specify custom delimiter with `-t` if needed.",level:"intermediate",codeExample:"join -1 2 -2 3 fileA fileB"},{question:"How to set a custom delimiter for join (e.g., comma for CSV)?",shortAnswer:"`join -t ',' file1.csv file2.csv`.",explanation:"The delimiter must be a single character.",hint:"Spaces are default; if your file uses spaces, you may not need `-t`.",level:"basic",codeExample:"join -t '|' file1.txt file2.txt"},{question:"What does `join -a1` do?",shortAnswer:"Prints lines from file1 even if there's no matching line in file2 (left outer join).",explanation:"Missing fields from file2 are output as empty (or replaced via `-e`).",hint:"Combine with `-a2` for full outer join.",level:"intermediate",codeExample:"join -a1 file1 file2"},{question:"How to perform a full outer join (union of keys) with join?",shortAnswer:"`join -a1 -a2 file1 file2`.",explanation:"Prints all keys from both files, with missing fields left blank.",hint:"Use `-e 'NULL'` to replace empty fields.",level:"advanced",codeExample:"join -a1 -a2 -e 'NULL' file1 file2"},{question:"How to select specific fields in the output (not all fields)?",shortAnswer:"`join -o 1.2,2.3,1.1 ...` (file.field indices).",explanation:"`1.2` means field 2 from file1, `2.3` field 3 from file2, `0` means join field from either file.",hint:"Use `-o 0` to output join field only once.",level:"advanced",codeExample:"join -o 1.2,2.2 -t',' file1 file2"},{question:"How to show only lines that do NOT match? (anti‑join)",shortAnswer:"`join -v1 file1 file2` (lines in file1 not in file2); `-v2` for opposite.",explanation:"`-v` selects unmatched lines from the specified file.",hint:"Use `-v1 -v2` to show all unpaired lines from both.",level:"intermediate",codeExample:"join -v1 file1 file2"},{question:"What is the default field separator for join?",shortAnswer:"Whitespace (one or more spaces or tabs).",explanation:"Multiple spaces are treated as a single delimiter; leading/trailing whitespace is ignored.",hint:"Use `-t` to change to a different delimiter.",level:"basic",codeExample:"join file1 file2 # uses whitespace"},{question:"How to join two files where the key appears multiple times in one file?",shortAnswer:"Join will produce all combinations (cartesian product) for that key.",explanation:"Example: if key 101 appears twice in file1 and three times in file2, output will have 6 lines for that key.",hint:"Be cautious of exponential output.",level:"advanced",codeExample:"join file1 file2   # may produce many lines"},{question:"How to ignore case when joining?",shortAnswer:"Pre‑process keys: `tr '[:upper:]' '[:lower:]'` before sorting and joining.",explanation:"Join is case‑sensitive; convert both files to same case.",hint:"Use `sed 's/.*/\\L&/'` (GNU sed) to lowercase entire line.",level:"advanced",codeExample:"join <(tr 'A-Z' 'a-z' < file1 | sort) <(tr 'A-Z' 'a-z' < file2 | sort)"},{question:"What does `-e STRING` do in join?",shortAnswer:"Replaces empty output fields (from missing matches) with STRING.",explanation:"Used with `-a` or when fields are missing due to incomplete matches.",hint:"Example: `join -a1 -e 'N/A' file1 file2`.",level:"advanced",codeExample:"join -a1 -e '0' -o 1.1,2.2 file1 file2"},{question:"How to join two files on a field that contains spaces (e.g., 'John Doe')?",shortAnswer:"Difficult because fields are whitespace‑separated; pre‑process with `awk` to escape or change delimiter.",explanation:"Join cannot handle multi‑word fields as a single key if they contain spaces.",hint:"Use a different delimiter, e.g., tab, or convert spaces to underscores.",level:"expert",codeExample:"sed 's/ /_/g' file | sort | join - sed ..."},{question:"Can `join` process standard input? If so, how?",shortAnswer:"Yes, use `-` as filename: `join file1 -` or `join - file2`.",explanation:"The dash represents stdin, allowing pipelines.",hint:"Example: `sort file1 | join - file2`.",level:"intermediate",codeExample:"join -t',' file1.csv - < file2.csv"},{question:"What is the difference between `-a` and `-v` in join?",shortAnswer:"`-a` includes all lines from a file (including matched and unmatched); `-v` includes only unmatched lines (excludes matched).",explanation:"`-a1` = left outer join; `-v1` = lines only in file1 (difference).",hint:"`-a1` shows lines with empty fields for missing match; `-v1` shows only the original line (no join fields).",level:"intermediate",codeExample:`join -a1 file1 file2   # left outer
join -v1 file1 file2   # anti-join`},{question:"How to join files on a key that is not at the beginning of the line?",shortAnswer:"Use `-1` and `-2` to specify field numbers, but the key must be a single field; if key is embedded, you may need `awk` to extract it first.",explanation:"Join cannot handle multi‑field keys directly without pre‑processing.",hint:"Create a temporary file with key as first field using `awk`.",level:"expert",codeExample:"awk '{print $3,$0}' file1 | sort | join - file2"},{question:"Why does join sometimes output extra spaces or missing fields?",shortAnswer:"Due to inconsistent delimiters (mixing spaces and tabs) or leading/trailing spaces.",explanation:"Normalise delimiters before sorting.",hint:"Use `sed 's/^[[:space:]]*//; s/[[:space:]]+/ /g'` to standardise whitespace.",level:"advanced",codeExample:"# Pre-process: sed 's/  */ /g' file"},{question:"How to join files where the key contains a colon (`:`) but you use `-t ':'`?",shortAnswer:"That's fine, the colon is the delimiter; the first field is the key.",explanation:"Any single character can be delimiter, including colon.",hint:"But if the key itself could contain colon, it's problematic.",level:"basic",codeExample:"join -t ':' file1 file2"},{question:"What is the purpose of `--header` option in join (GNU extension)?",shortAnswer:"Treats the first line of each file as a header, not as data line.",explanation:"Useful for CSV with headers, prevents joining on header line.",hint:"Example: `join --header -t',' file1.csv file2.csv`.",level:"advanced",codeExample:"join --header -t '|' file1 file2"},{question:"How to join two files on multiple fields (composite key)?",shortAnswer:"Concatenate the fields into a single key with a separator, then join on that key.",explanation:"Example: `awk '{print $1\"|\"$2, $0}' file1 | sort` and similarly for file2.",hint:"Use a delimiter that doesn't appear in data (e.g., `\\x01`).",level:"expert",codeExample:`join <(awk '{print $1"|"$2,$0}' file1 | sort) <(awk '{print $1"|"$2,$0}' file2 | sort)`},{question:"What does `-i` do in join (if available)?",shortAnswer:"Some join implementations have `-i` for case‑insensitive compare, but GNU join does not (use pre‑processing).",explanation:"Check `man join` on your system.",hint:"Use `tr` for portability.",level:"advanced",codeExample:"# Not standard"},{question:"How to join two large files that are already sorted on disk efficiently?",shortAnswer:"Just run `join` directly – it streams both files and runs in O(n+m).",explanation:"No need to load entire files into memory; very efficient.",hint:"Use `-t` and `-o` to control output.",level:"expert",codeExample:"join already_sorted1 already_sorted2"},{question:"How to join files where the key field is the same number but different columns (e.g., file1 field3, file2 field1)?",shortAnswer:"`join -1 3 -2 1 file1 file2`.",explanation:"Specify the field numbers.",hint:"Ensure both files are sorted on that field, not necessarily field1.",level:"intermediate",codeExample:"join -1 3 -2 1 file1 file2"},{question:"What is the exit status of join?",shortAnswer:"0 on success, >0 on error. It does not distinguish ‘no matches’ vs matches; only I/O errors cause non‑zero exit.",explanation:"Unlike diff, join doesn't exit 1 when no matches found.",hint:"Check output rather than exit code for empty join.",level:"basic",codeExample:"if join file1 file2 >/dev/null; then echo 'command succeeded'; fi"},{question:"How to join files but suppress output of the join key (print it only once)?",shortAnswer:"Use `-o 0` for the key field, plus other fields: `join -o 0,1.2,2.2 file1 file2`.",explanation:"`0` represents the join field and prints it only once.",hint:"Default output prints join field twice; `-o` helps clean it up.",level:"advanced",codeExample:"join -o 0,2.2,1.3 file1 file2"},{question:"Why does join sometimes report `file1 is not in sorted order`?",shortAnswer:"The file is not sorted on the join field according to the collating order (locale).",explanation:"Sort with `LC_ALL=C sort` to ensure byte‑wise order.",hint:"Set `LC_ALL=C` before sort and join for consistent results.",level:"intermediate",codeExample:"LC_ALL=C sort file1 | LC_ALL=C join - file2"},{question:"How to join files where the key field contains missing values (empty field) and you want to treat them as keys?",shortAnswer:"Join treats empty field as a key (empty string). But sorting of empty lines may be ambiguous.",explanation:"Pre‑process to replace empty fields with a placeholder like 'NULL'.",hint:"Use `sed 's/^,/NULL,/g'` for CSV.",level:"expert",codeExample:"sed 's/,,/,NULL,/g' file.csv | sort | join ..."},{question:"Can join handle very wide records (many columns)?",shortAnswer:"Yes, join reads lines and writes lines; there's no practical limit on number of fields.",explanation:"Memory usage per line depends on line length.",hint:"For very wide records, ensure adequate memory.",level:"expert",codeExample:"join wide1 wide2"},{question:"How to join three files together using join?",shortAnswer:"Chain joins: `join file1 file2 | join - file3`.",explanation:"Output of first join becomes input for second (must be sorted on key).",hint:"Use `-o` to control which fields from intermediate join carry forward.",level:"advanced",codeExample:"join file1 file2 | sort -k1,1 | join - file3"},{question:"What is the difference between `join` and `paste`?",shortAnswer:"`join` matches lines by key and combines fields; `paste` concatenates lines side‑by‑side regardless of key.",explanation:"Join is like relational JOIN; paste is like placing files side‑by‑side.",hint:"Use join for keyed merging, paste for simple column alignment.",level:"basic",codeExample:"# join: based on common ID; paste: line must correspond exactly"}],i=({fileModule:o,title:r,highlightLines:n=[]})=>{const[l,t]=d.useState(!1),s=()=>{navigator.clipboard.writeText(o),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:r}),e.jsx("button",{onClick:s,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:l?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:o.split(`
`).map((h,a)=>e.jsx("div",{className:c(n.includes(a+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:h},a))})})]})},v=({title:o,questions:r})=>{const[n,l]=d.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:o}),e.jsx("div",{className:"space-y-4",children:r.map((t,s)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>l(n===s?null:s),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:t.question}),e.jsx("svg",{className:c("w-5 h-5 transition-transform duration-300",n===s&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n===s&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",t.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",t.explanation]}),t.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",t.hint]}),t.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:t.codeExample})})]})]},s))})]})},N=()=>{const r=new Date().getFullYear()-1998,n=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"280",viewBox:"0 0 600 280",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"280",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("text",{x:"30",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File A (students):"}),e.jsx("rect",{x:"30",y:"55",width:"180",height:"90",rx:"6",fill:"#e0e7ff",className:"dark:fill-indigo-900/30"}),e.jsx("text",{x:"40",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"101 Swadeep"}),e.jsx("text",{x:"40",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"102 Tuhina"}),e.jsx("text",{x:"40",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"103 Abhronila"}),e.jsx("text",{x:"40",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#4f46e5",children:"104 Debangshu"}),e.jsx("text",{x:"240",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"File B (scores):"}),e.jsx("rect",{x:"240",y:"55",width:"150",height:"90",rx:"6",fill:"#dcfce7",className:"dark:fill-green-900/30"}),e.jsx("text",{x:"250",y:"75",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"101 85"}),e.jsx("text",{x:"250",y:"95",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"103 92"}),e.jsx("text",{x:"250",y:"115",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"104 78"}),e.jsx("text",{x:"250",y:"135",fontSize:"12",fontFamily:"monospace",fill:"#16a34a",children:"105 88"}),e.jsx("line",{x1:"210",y1:"100",x2:"230",y2:"100",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowJoin)"}),e.jsx("text",{x:"420",y:"40",fontSize:"14",fill:"#0f172a",className:"dark:fill-gray-200",children:"join -j1 fileA fileB"}),e.jsx("rect",{x:"420",y:"55",width:"160",height:"90",rx:"6",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"430",y:"75",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"101 Swadeep 85"}),e.jsx("text",{x:"430",y:"95",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"103 Abhronila 92"}),e.jsx("text",{x:"430",y:"115",fontSize:"11",fontFamily:"monospace",fill:"#854d0e",children:"104 Debangshu 78"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrowJoin",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400",children:"Joining Two Files Using join Command"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Master `join` – SQL‑like relational data joining on sorted files, inner joins, outer joins, and field selection."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(n,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"📜 join Command Syntax"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded-lg space-y-2",children:[e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"join [OPTION]... FILE1 FILE2"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"# Join on first field (default)"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"join file1.txt file2.txt"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"# Join on different fields: FILE1 field 2, FILE2 field 3"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"join -1 2 -2 3 file1.txt file2.txt"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"# Custom delimiter (default whitespace)"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"join -t ',' file1.csv file2.csv"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"# Output only specific fields"}),e.jsx("code",{className:"text-purple-600 dark:text-purple-400",children:"join -o 1.1,2.2,1.3 file1 file2"})]}),e.jsxs("p",{className:"mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Return type:"})," Exit 0 unless error; writes joined lines to stdout."]}),e.jsxs("p",{className:"mt-2",children:[e.jsx("span",{className:"font-semibold",children:"Purpose:"})," To combine two sorted files based on a common key (like SQL JOIN). Essential for merging datasets, enriching data, and producing reports."]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🧠 Understanding join"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Sorted input requirement:"})," Both files must be sorted on the join field (default field 1). Use `sort -k1,1` before joining."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Default join (inner join):"})," Only lines where the key exists in both files are output. Output includes the common key once, then all other fields from both files."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Custom join fields:"})," Use `-1 FIELD -2 FIELD` to specify join fields (1‑based indices)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Output formatting:"})," Use `-o` to select specific fields (e.g., `-o 1.1,2.2,1.3`)."]}),e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Unmatched lines:"})," `-a 1` includes lines from file1 even if no match; `-v 1` shows only unmatched lines from file1."]}),e.jsx("div",{className:"mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Real‑world at Barrackpore College:"})," Two files: student_rolls.txt (roll,name,dept) and scores.txt (roll,subject,marks). Using `join -1 1 -2 1` merges scores with names. In database terms, `join` performs a relational inner join, perfect for enriching logs, merging CSV exports, and creating reports."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.25s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Live Examples: join in Action"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:f,title:"🔗 Basic join (inner on field 1)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:m,title:"🎯 Join on different fields (-1, -2)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:x,title:"📑 Custom delimiters (-t)",highlightLines:[14,18]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:p,title:"🚫 Unmatched lines (-a, -v)",highlightLines:[14,18,24]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:u,title:"🔢 Multiple fields in output (-o)",highlightLines:[12,16]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:j,title:"🔄 Outer join (full, left, right)",highlightLines:[14,20,26]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:g,title:"🛠️ Substituting missing fields",highlightLines:[14,20]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(i,{fileModule:y,title:"🧪 Practical: Merging CSV reports, ID mapping",highlightLines:[14,22,30]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.3s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Tips & Tricks"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Process substitution to sort on the fly:"})," `join <(sort file1) <(sort file2)`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Left outer join:"})," `join -a1 file1 file2` (keep all keys from file1)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Full outer join:"})," `join -a1 -a2 file1 file2` (union of keys)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case‑insensitive join:"})," convert keys to same case before sorting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Join on multiple fields:"}),`Combine fields with a delimiter, e.g., awk '{print $1"_"$2, $0}', then sort and join.`]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Files not sorted on the correct field:"})," join will miss matches or produce wrong output."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Whitespace differences:"})," Leading/trailing spaces cause key mismatch; use `sort -b` and pre‑process."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delimiter issues:"})," Tab vs space; default is whitespace (multiple spaces/tabs count as one). Use `-t` to specify exact delimiter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key appears multiple times in one file:"})," join produces cartesian product for that key (all combinations)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assumptions of numeric fields:"})," join treats keys as strings, not numbers. `10` and `010` are different."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.35s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Always sort files on the join key before using join."}),e.jsx("p",{children:"✔️ Use `-t` explicitly for CSV or other delimited files."}),e.jsx("p",{children:"✔️ Pre‑process keys to normalise case or whitespace."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ For large files, use `sort -k1,1` and redirect to temporary files."}),e.jsx("p",{children:"✔️ Use `-o` to avoid printing the join key twice."}),e.jsx("p",{children:"✔️ Test with `join -a1 -v2` to verify unmatched keys."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I understand join requires sorted input on the join field."}),e.jsx("li",{children:"☐ I can join two files on the first field (default)."}),e.jsx("li",{children:"☐ I can specify different join fields with `-1` and `-2`."}),e.jsx("li",{children:"☐ I can set custom delimiter with `-t`."}),e.jsx("li",{children:"☐ I can control output fields with `-o`."}),e.jsx("li",{children:"☐ I can perform left/right/full outer joins (`-a`)."}),e.jsx("li",{children:"☐ I can find unmatched lines (`-v`)."})]})]})]}),e.jsxs("div",{className:"reveal-section bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-5 rounded-r-xl",style:{animationDelay:"0.4s"},children:[e.jsx("h3",{className:"text-lg font-bold flex items-center gap-2",children:"💭 Think About…"}),e.jsx("p",{className:"mt-1",children:"You have a sales file (product_id, product_name) and an inventory file (product_id, quantity). Write a join command to produce product_name, quantity for products that exist in both files. Now modify it to also show products that have zero quantity (i.e., in sales but not in inventory). How would you handle product_id that appears multiple times in inventory (multiple warehouses)?"})]}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.45s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-purple-700 dark:text-purple-300",children:["Sukanta Hui — Master Educator (since 1998, ",r," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for join Command:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:'"At Shyamnagar, I introduce join as the Unix equivalent of SQL JOIN. They grasp quickly when I show two CSV files – students and scores – and we produce a merged report."'}),e.jsx("li",{children:"Emphasise that join expects sorted input; many beginners forget this and get puzzled."}),e.jsx("li",{children:"Classroom exercise: Merge a list of product codes with prices, then join with sales to calculate revenue."}),e.jsx("li",{children:"Demonstrate `-a1 -a2` for full outer join using temporary placeholders for missing fields."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:'"`join` turns flat files into relational data – a superpower for any data‑minded sysadmin." — Sukanta Sir'})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.5s"},children:e.jsx(v,{title:"❓ join Command – 30 Expert FAQs",questions:b})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 10: Joining Two Files Using join – The Relational Power of Unix"})]})]})};export{N as default};

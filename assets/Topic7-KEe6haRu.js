import{j as e,r as d}from"./index-C0mc_94R.js";import{c}from"./clsx-B-dksMZM.js";const m=`#!/bin/bash
# rename_files_sed.sh - Bulk file renaming using sed in a loop
mkdir -p test_files
cd test_files
touch report_2024_01.txt report_2024_02.txt report_2024_03.txt

echo "=== Original files ==="
ls -1

echo -e "\\n=== Rename 'report_2024_' to 'annual_2024_' ==="
for file in report_2024_*.txt; do
    newname=$(echo "$file" | sed 's/report_2024_/annual_2024_/')
    mv "$file" "$newname"
    echo "Renamed: $file → $newname"
done

echo -e "\\n=== After renaming ==="
ls -1

# Cleanup
cd .. && rm -rf test_files`,p=`#!/bin/bash
# update_configs.sh - Update database host in multiple .env files
mkdir -p configs
echo "DB_HOST=localhost" > configs/app1.env
echo "DB_HOST=localhost" > configs/app2.env
echo "DB_HOST=localhost" > configs/app3.env

echo "=== Before update ==="
cat configs/*.env

echo -e "\\n=== Updating DB_HOST from localhost to db.prod.example.com ==="
sed -i 's/DB_HOST=localhost/DB_HOST=db.prod.example.com/' configs/*.env

echo -e "\\n=== After update ==="
cat configs/*.env

# Cleanup
rm -rf configs`,x=`#!/bin/bash
# clean_csv.sh - Normalize CSV quotes and delimiters
cat > messy.csv <<EOF
"Swadeep",85,"A"
"Tuhina", 92 , "A+"
Abhronila,78,B
"Debangshu",45,F
EOF

echo "=== Original messy CSV ==="
cat messy.csv

echo -e "\\n=== Remove extra spaces around commas ==="
sed -i 's/ *, */,/g' messy.csv
sed -i 's/ *,/,/g' messy.csv
sed -i 's/, */,/g' messy.csv

echo -e "\\n=== Remove surrounding double quotes (but keep if needed) ==="
sed -i 's/"\\([^"]*\\)"/\\1/g' messy.csv

echo -e "\\n=== Cleaned CSV ==="
cat messy.csv

# Cleanup
rm messy.csv`,g=`#!/bin/bash
# log_anonymize.sh - Anonymize IP addresses and emails in logs
cat > access.log <<EOF
192.168.1.10 - john@example.com - GET /api
10.0.0.5 - jane@test.org - POST /login
172.16.0.1 - admin@company.co.uk - GET /admin
EOF

echo "=== Original log ==="
cat access.log

echo -e "\\n=== Anonymize IPs (replace last octet with 0) ==="
sed -E 's/([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)[0-9]{1,3}/\\10/' access.log

echo -e "\\n=== Anonymize emails (replace username with 'user') ==="
sed -E 's/[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})/user@\\1/' access.log

echo -e "\\n=== Combined anonymization ==="
sed -E 's/([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)[0-9]{1,3}/\\10/; s/[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})/user@\\1/' access.log

# Cleanup
rm access.log`,f=`#!/bin/bash
# batch_html_edit.sh - Convert HTML to Markdown (simplified)
mkdir -p html_pages
cat > html_pages/page1.html <<EOF
<html><body><h1>Welcome</h1><p>Hello world</p></body></html>
EOF
cat > html_pages/page2.html <<EOF
<html><body><h1>About</h1><p>This is a test</p></body></html>
EOF

echo "=== Original HTML files ==="
cat html_pages/*.html

echo -e "\\n=== Convert <h1> to # , <p> to plain text ==="
for file in html_pages/*.html; do
    sed -i 's/<h1>/# /g' "$file"
    sed -i 's/<\\/h1>//g' "$file"
    sed -i 's/<p>//g' "$file"
    sed -i 's/<\\/p>//g' "$file"
    sed -i 's/<[^>]*>//g' "$file"  # remove any remaining tags
done

echo -e "\\n=== Converted Markdown files ==="
cat html_pages/*.html

# Cleanup
rm -rf html_pages`,u=`#!/bin/bash
# markdown_converter.sh - Batch edit Markdown files
mkdir -p docs
echo "# Old Title" > docs/doc1.md
echo "## Section" > docs/doc2.md
echo "- list item" > docs/doc3.md

echo "=== Original Markdown ==="
cat docs/*.md

echo -e "\\n=== Convert old title format to new ==="
sed -i 's/^# /# NEW: /' docs/*.md
sed -i 's/^## /## NEW: /' docs/*.md

echo -e "\\n=== Convert list items to numbered ==="
sed -i 's/^- /1. /' docs/*.md

echo -e "\\n=== After conversion ==="
cat docs/*.md

# Cleanup
rm -rf docs`,w=`#!/bin/bash
# csv_to_sql.sh - Convert CSV to SQL INSERT statements
cat > students.csv <<EOF
name,age,grade
Swadeep,20,A
Tuhina,21,A+
Abhronila,19,B
EOF

echo "=== Original CSV ==="
cat students.csv

echo -e "\\n=== Generate SQL INSERT statements ==="
# Skip header line (first line) and wrap each row
tail -n +2 students.csv | while IFS=',' read -r name age grade; do
    echo "INSERT INTO students (name, age, grade) VALUES ('$name', $age, '$grade');"
done

# Alternative one-liner using sed (without loop)
echo -e "\\n=== Using sed (faster for large files) ==="
sed -n '2,$ s/^\\([^,]*\\),\\([^,]*\\),\\([^,]*\\)$/INSERT INTO students (name, age, grade) VALUES ('\\''\\1'\\'', \\2, '\\''\\3'\\'');/p' students.csv

# Cleanup
rm students.csv`,y=`#!/bin/bash
# bulk_find_replace.sh - Find and replace across all files in a project
mkdir -p project
echo "old_function()" > project/file1.js
echo "call_old_function()" > project/file2.js
echo "// no match" > project/file3.txt

echo "=== Original files ==="
grep -n "old" project/* 2>/dev/null

echo -e "\\n=== Find all files containing 'old_function' ==="
grep -l "old_function" project/*

echo -e "\\n=== Replace 'old_function' with 'new_function' in those files ==="
grep -l "old_function" project/* | xargs sed -i 's/old_function/new_function/g'

echo -e "\\n=== After replacement ==="
grep -n "old\\|new" project/* 2>/dev/null

# Cleanup
rm -rf project`,v=`#!/bin/bash
# git_commit_cleanup.sh - Clean up commit messages (simulated)
cat > commits.txt <<EOF
fix: typo in docs
feat: add new feature
bugfix: resolve issue #123
WIP: working on stuff
EOF

echo "=== Original commit messages ==="
cat commits.txt

echo -e "\\n=== Standardize prefixes ==="
sed -i 's/^bugfix:/fix:/' commits.txt
sed -i 's/^WIP:/chore(wip):/' commits.txt

echo -e "\\n=== Capitalize first letter after prefix ==="
sed -E 's/^([a-z]+\\(?[a-z]*\\)?:) ([a-z])/\\1 \\U\\2/' commits.txt

echo -e "\\n=== Final cleaned messages ==="
cat commits.txt

# Cleanup
rm commits.txt`,b=[{question:"What is the safest way to do a bulk find-and-replace across many files?",shortAnswer:"Use `grep -l` to list files first, preview changes, then use `xargs sed -i.bak` or a backup strategy.",explanation:"Always backup, test on one file, use version control, and dry-run with `grep -c` to count matches.",hint:"Never `sed -i` without first checking what will change.",level:"advanced",codeExample:"grep -l 'old' *.txt | xargs sed -i.bak 's/old/new/g'"},{question:"How can I rename multiple files by changing a pattern in their names?",shortAnswer:"Loop over files, use `sed` to generate new name, then `mv`.",explanation:'Example: `for f in *.txt; do mv "$f" "$(echo $f | sed \'s/old/new/\')"; done`',hint:"Test with `echo` before actual `mv`.",level:"intermediate",codeExample:'for f in report_*.txt; do mv "$f" "${f/report/annual}"; done  # bash parameter expansion'},{question:"How to update a database connection string in all `.env` files?",shortAnswer:"`sed -i 's/DB_HOST=localhost/DB_HOST=prod-db.example.com/' .env*`",explanation:"Use `-i` for in-place edit. Add `.bak` to create backups.",hint:"Backup first: `cp .env .env.bak`",level:"basic",codeExample:"sed -i.bak 's|localhost:5432|db.prod:5432|g' .env*"},{question:"What is the best way to clean a messy CSV with inconsistent quoting and spaces?",shortAnswer:"Use multiple `sed` passes: remove spaces around commas, then strip quotes, then normalize.",explanation:"Step-by-step approach is safer than a single complex regex.",hint:"Use `sed 's/ *, */,/g'` to clean spaces.",level:"advanced",codeExample:`sed -E 's/ *, */,/g; s/"//g' messy.csv > clean.csv`},{question:"How to anonymize IP addresses in log files for GDPR compliance?",shortAnswer:"Use `sed -E` to replace the last octet with `.0` or `XXX`.",explanation:"Preserves the network part but hides host.",hint:"Example: `sed -E 's/([0-9]+\\.){3}[0-9]+/\\1XXX/g'`",level:"intermediate",codeExample:"sed -E 's/([0-9]{1,3}\\.){3}[0-9]{1,3}/\\10/g' access.log"},{question:"How can I convert a CSV file into SQL INSERT statements?",shortAnswer:"Use `sed` to transform each row into an INSERT line, or use `awk`.",explanation:"Skip header, then wrap each line with INSERT INTO ... VALUES (...).",hint:"Be careful with escaping single quotes in data.",level:"advanced",codeExample:"sed -n '2,$ s/^\\([^,]*\\),\\([^,]*\\),\\([^,]*\\)$/INSERT INTO t VALUES ('\\''\\1'\\'', '\\''\\2'\\'', '\\''\\3'\\'');/p' data.csv"},{question:"What is a safe way to remove all HTML tags from a file?",shortAnswer:"`sed 's/<[^>]*>//g'` works for simple cases, but for nested tags use a proper parser.",explanation:"HTML is not regular; sed is not a parser, but works for quick and dirty.",hint:"For production, use `pup` or `html-xml-utils`.",level:"advanced",codeExample:"sed 's/<[^>]*>//g; s/^[[:space:]]*//; s/[[:space:]]*$//' input.html"},{question:"How to batch convert Markdown frontmatter from YAML to TOML?",shortAnswer:"Use `sed` to replace `---` with `+++` and change key formats.",explanation:"Example: `sed -i 's/^title:/title = /' *.md`",hint:"Use `-i.bak` and test on a sample.",level:"expert",codeExample:`sed -i -E 's/^([a-z]+): /\\1 = "/; s/$/"/' frontmatter.md`},{question:"How to find and replace across a Git repository without touching `.git/`?",shortAnswer:"Use `git grep -l` to list files, then `xargs sed -i`.",explanation:"`git grep` automatically respects `.gitignore` and doesn't search inside `.git`.",hint:"Always commit before running to easily revert.",level:"advanced",codeExample:"git grep -l 'TODO' | xargs sed -i 's/TODO/FIXME/g'"},{question:"What is the most common mistake when doing production search/replace?",shortAnswer:"Not testing the command on a single file or dry-run first.",explanation:"A typo in regex can corrupt hundreds of files.",hint:"Always run `grep -c` to count matches before `sed -i`.",level:"basic",codeExample:"grep -c 'old' *.txt   # see how many matches"},{question:"How to replace text only in files that contain a specific pattern?",shortAnswer:"Use `grep -l` to filter files, then `xargs sed -i`.",explanation:"This avoids processing files that don't need changes, improving speed.",hint:"Combine: `grep -l 'pattern' *.log | xargs sed -i 's/old/new/'`",level:"intermediate",codeExample:"grep -l 'ERROR' *.log | xargs sed -i 's/ERROR/CRITICAL/g'"},{question:"How to insert a line before the first match in a file?",shortAnswer:"Use `sed '0,/pattern/s//newline\\n&/'`",explanation:"`0,/pattern/` finds the first match, then replaces with newline followed by matched line.",hint:"Backslash-escape newline.",level:"expert",codeExample:"sed '0,/ERROR/s//INSERTED\\n&/' log.txt"},{question:"How to delete all lines that do NOT contain a pattern?",shortAnswer:"`sed -n '/pattern/p'` or `sed '/pattern/!d'`",explanation:"The `!d` deletes lines not matching the pattern.",hint:"Equivalent to `grep 'pattern'`.",level:"basic",codeExample:"sed '/ERROR/!d' log.txt   # keep only ERROR lines"},{question:"How to append text to the end of every line that matches a pattern?",shortAnswer:"`sed '/pattern/s/$/ appended/'`",explanation:"`$` anchors at end of line; replacement appends text.",hint:"Use `s/$/.../` to add to all lines, or conditionally with address.",level:"intermediate",codeExample:"sed '/^ERROR/s/$/ - ALERT/' log.txt"},{question:"How to prepend a line number to every line in a file?",shortAnswer:"`sed = file | sed 'N;s/\\n/ /'`",explanation:"`=` prints line numbers, then `N` reads next line, `s/\\n/ /` joins them.",hint:"Simpler: `nl` or `cat -n`.",level:"advanced",codeExample:"sed = log.txt | sed 'N;s/\\n/ /' > numbered.log"},{question:"How to replace text only on lines between two patterns (excluding the pattern lines)?",shortAnswer:"Use `sed '/start/,/end/{/start/!{/end/! s/old/new/}}'`",explanation:"Nested addresses exclude the boundary lines.",hint:"Complex; often better to use `awk`.",level:"expert",codeExample:"sed '/<body>/,/<\\/body>/ {/<body>/!{/<\\/body>/! s/old/new/}}' page.html"},{question:"How to remove trailing whitespace from all files in a project?",shortAnswer:"`find . -type f -exec sed -i 's/[[:space:]]*$//' {} +`",explanation:"`[[:space:]]*$` matches spaces/tabs at line end.",hint:"Run on a backup first.",level:"intermediate",codeExample:"find . -name '*.py' -exec sed -i 's/[ \\t]*$//' {} \\;"},{question:"How to change all `require` statements to `import` in JavaScript files?",shortAnswer:"Complex: `sed -E 's/const\\s+(\\w+)\\s*=\\s*require\\(['\\'']([^'\\'']+)['\\'']\\);/import \\1 from '\\''\\2'\\'';/'`",explanation:"Capture variable name and module path, then reorder.",hint:"Use a tool like `jscodeshift` for reliable refactoring.",level:"expert",codeExample:"# Not recommended for production; use codemods"},{question:"How to convert Windows line endings (CRLF) to Unix (LF) with sed?",shortAnswer:"`sed -i 's/\\r$//' file`",explanation:"Removes carriage return at end of each line.",hint:"Also `dos2unix` utility.",level:"basic",codeExample:"sed -i 's/\\r$//' winfile.txt"},{question:"How to extract the second column from a CSV and replace its values?",shortAnswer:"Use `awk -F',' '{print $2}'` to extract, then pipe to sed.",explanation:"But to replace in-place, use `awk -F',' -v OFS=',' '{$2=\"new\"; print}'`",hint:"awk is better for column operations than sed.",level:"advanced",codeExample:`awk -F',' '{$2="NEW_VALUE"; print}' OFS=',' data.csv > new.csv`},{question:"How to generate a report of all changes made by a sed command?",shortAnswer:"Use `sed -n 's/old/new/w changelog.txt' file` and also print to stdout.",explanation:"The `w` flag writes changed lines to a file; without `-n` it also prints all lines.",hint:"Add `-i` to modify original as well.",level:"advanced",codeExample:"sed -i -n 's/old/new/w changes.txt' file   # only changed lines written, original modified? No, -n suppresses output."},{question:"How to safely replace a string that contains slashes, dots, and stars?",shortAnswer:"Use a different delimiter in `sed`, e.g., `|` or `#`.",explanation:"Example: `sed 's|/usr/local|/opt|g'`",hint:"Or escape: `\\/usr\\/local`",level:"intermediate",codeExample:"sed 's#http://old.com#https://new.org#g' file"},{question:"What is the `-z` flag in GNU sed and when to use it?",shortAnswer:"Treats input as NUL-separated (i.e., whole file as one line). Useful for cross-line matches.",explanation:"With `-z`, `^` matches start of file, `$` matches end, and newlines are regular characters.",hint:"Use `-z` to replace first occurrence in file.",level:"expert",codeExample:"sed -z 's/old/new/' file   # replaces only first occurrence in whole file"},{question:"How to use sed with `-i` and also keep a timestamped backup?",shortAnswer:"`sed -i.bak_$(date +%Y%m%d_%H%M%S) 's/old/new/' file`",explanation:"The backup suffix is dynamic; ensures unique backup per run.",hint:"Store in a separate backup folder.",level:"advanced",codeExample:`backup_suffix=".bak_$(date +%Y%m%d)"; sed -i"$backup_suffix" 's/old/new/' file`},{question:"How to replace text in a specific column of a fixed-width file?",shortAnswer:"Use `sed` with `^.{n}` to skip columns.",explanation:"Example: to replace column starting at position 20 with length 10: `sed -E 's/^(.{19}).{10}/\\1NEWVALUE/'`",hint:"Use `cut` then paste for complex cases.",level:"expert",codeExample:"sed -E 's/^(.{19}).{10}/\\1XXXXXXXXXX/' fixed.txt"},{question:"What is the difference between `sed -i` and `sed > newfile`?",shortAnswer:"`-i` modifies the original file in-place; `>` creates/overwrites a new file.",explanation:"With `-i`, sed creates a temp file then renames; with redirection, you must manually rename.",hint:"Use `-i` for convenience, but be aware it can break symlinks.",level:"basic",codeExample:`# In-place: sed -i 's/old/new/' file
# New file: sed 's/old/new/' file > newfile`},{question:"How to quickly swap two words in a file using sed?",shortAnswer:"Use temporary markers: `sed 's/old/tmp_swap/; s/new/old/; s/tmp_swap/new/' file`",explanation:"Three-step swap avoids using hold space.",hint:"Use `-E` and capture groups: `s/(old) (new)/\\2 \\1/`",level:"intermediate",codeExample:"echo 'apple banana' | sed -E 's/(apple) (banana)/\\2 \\1/'   # banana apple"},{question:"How to add a prefix to every line except the first line?",shortAnswer:"`sed '2,$ s/^/PREFIX: /' file`",explanation:"Range from line 2 to end, substitute start of line.",hint:"Also `sed '1! s/^/PREFIX: /'`",level:"basic",codeExample:"sed '2,$ s/^/  /' file   # indent all but first line"},{question:"How to comment out all lines containing a pattern?",shortAnswer:"`sed '/pattern/s/^/# /' file`",explanation:"Adds `# ` at beginning of matching lines.",hint:"To uncomment: `sed '/pattern/s/^# //' file`",level:"basic",codeExample:"sed '/ERROR/s/^/# /' log.txt"},{question:"What is a practical one-liner to find duplicate consecutive lines in a file?",shortAnswer:"`uniq` is better, but `sed '$!N; /^\\(.*\\)\\n\\1$/!P; D'`",explanation:"Advanced sed script using hold space pattern.",hint:"Use `uniq -d` instead for simplicity.",level:"expert",codeExample:"uniq -d file   # show duplicates"}],n=({fileModule:i,title:r,highlightLines:t=[]})=>{const[o,s]=d.useState(!1),a=()=>{navigator.clipboard.writeText(i),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{className:"rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600",children:[e.jsx("span",{className:"text-sm font-mono font-medium text-gray-700 dark:text-gray-200",children:r}),e.jsx("button",{onClick:a,className:"text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors",children:o?"Copied!":"Copy"})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900",children:e.jsx("code",{children:i.split(`
`).map((h,l)=>e.jsx("div",{className:c(t.includes(l+1)&&"bg-yellow-200 dark:bg-yellow-900/30"),children:h},l))})})]})},j=({title:i,questions:r})=>{const[t,o]=d.useState(null);return e.jsxs("div",{className:"my-8",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100",children:i}),e.jsx("div",{className:"space-y-4",children:r.map((s,a)=>e.jsxs("div",{className:"border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md",children:[e.jsxs("button",{onClick:()=>o(t===a?null:a),className:"w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex justify-between items-center",children:[e.jsx("span",{children:s.question}),e.jsx("svg",{className:c("w-5 h-5 transition-transform duration-300",t===a&&"rotate-180"),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t===a&&e.jsxs("div",{className:"px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 animate-[fadeIn_0.3s_ease-out]",children:[e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Short:"})," ",s.shortAnswer]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-200 mb-2",children:[e.jsx("span",{className:"font-semibold",children:"Explanation:"})," ",s.explanation]}),s.hint&&e.jsxs("p",{className:"text-sm text-indigo-600 dark:text-indigo-400 italic mb-2",children:[e.jsx("span",{className:"font-semibold",children:"💡 Hint:"})," ",s.hint]}),s.codeExample&&e.jsx("pre",{className:"bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto mt-2",children:e.jsx("code",{children:s.codeExample})})]})]},a))})]})},E=()=>{const r=new Date().getFullYear()-1998,t=()=>e.jsx("div",{className:"flex justify-center my-8",children:e.jsxs("svg",{width:"600",height:"280",viewBox:"0 0 600 280",className:"w-full max-w-md h-auto",children:[e.jsx("rect",{width:"600",height:"280",rx:"12",fill:"#f8fafc",className:"dark:fill-gray-800"}),e.jsx("rect",{x:"30",y:"30",width:"160",height:"80",rx:"8",fill:"#e0e7ff",className:"dark:fill-indigo-900/40"}),e.jsx("text",{x:"110",y:"55",fontSize:"14",textAnchor:"middle",fill:"#4f46e5",children:"📝 Batch Config"}),e.jsx("text",{x:"110",y:"75",fontSize:"11",textAnchor:"middle",fill:"#4f46e5",children:"sed -i 's/old/new/' *.conf"}),e.jsx("text",{x:"110",y:"95",fontSize:"11",textAnchor:"middle",fill:"#4f46e5",children:"→ 50 files updated"}),e.jsx("rect",{x:"220",y:"30",width:"160",height:"80",rx:"8",fill:"#dcfce7",className:"dark:fill-green-900/40"}),e.jsx("text",{x:"300",y:"55",fontSize:"14",textAnchor:"middle",fill:"#16a34a",children:"🧹 CSV Cleanup"}),e.jsx("text",{x:"300",y:"75",fontSize:"11",textAnchor:"middle",fill:"#16a34a",children:`sed 's/", "/|/g'`}),e.jsx("text",{x:"300",y:"95",fontSize:"11",textAnchor:"middle",fill:"#16a34a",children:"→ Normalize delimiters"}),e.jsx("rect",{x:"410",y:"30",width:"160",height:"80",rx:"8",fill:"#fee2e2",className:"dark:fill-red-900/40"}),e.jsx("text",{x:"490",y:"55",fontSize:"14",textAnchor:"middle",fill:"#dc2626",children:"🔒 Log Anonymize"}),e.jsxs("text",{x:"490",y:"75",fontSize:"11",textAnchor:"middle",fill:"#dc2626",children:["sed 's/[0-9]",4,"/XXXX/g'"]}),e.jsx("text",{x:"490",y:"95",fontSize:"11",textAnchor:"middle",fill:"#dc2626",children:"→ GDPR compliant"}),e.jsx("rect",{x:"70",y:"140",width:"160",height:"80",rx:"8",fill:"#fef9c3",className:"dark:fill-yellow-900/40"}),e.jsx("text",{x:"150",y:"165",fontSize:"14",textAnchor:"middle",fill:"#854d0e",children:"🔄 Find & Replace"}),e.jsx("text",{x:"150",y:"185",fontSize:"11",textAnchor:"middle",fill:"#854d0e",children:"grep -rl 'old' | xargs sed -i"}),e.jsx("text",{x:"150",y:"205",fontSize:"11",textAnchor:"middle",fill:"#854d0e",children:"→ Across whole project"}),e.jsx("rect",{x:"260",y:"140",width:"160",height:"80",rx:"8",fill:"#cffafe",className:"dark:fill-cyan-900/40"}),e.jsx("text",{x:"340",y:"165",fontSize:"14",textAnchor:"middle",fill:"#0891b2",children:"📄 HTML→Markdown"}),e.jsxs("text",{x:"340",y:"185",fontSize:"11",textAnchor:"middle",fill:"#0891b2",children:["sed 's/",e.jsx("h1",{children:"/# /g'"})]}),e.jsx("text",{x:"340",y:"205",fontSize:"11",textAnchor:"middle",fill:"#0891b2",children:"→ Blog migration"}),e.jsx("rect",{x:"450",y:"140",width:"120",height:"80",rx:"8",fill:"#e9d5ff",className:"dark:fill-purple-900/40"}),e.jsx("text",{x:"510",y:"165",fontSize:"14",textAnchor:"middle",fill:"#9333ea",children:"🗄️ CSV→SQL"}),e.jsx("text",{x:"510",y:"185",fontSize:"11",textAnchor:"middle",fill:"#9333ea",children:"sed 's/^/INSERT INTO/'"}),e.jsx("text",{x:"510",y:"205",fontSize:"11",textAnchor:"middle",fill:"#9333ea",children:"→ Data migration"}),e.jsx("rect",{x:"30",y:"30",width:"540",height:"190",rx:"12",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"6",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;100",dur:"4s",repeatCount:"indefinite"})})]})});return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed transition-colors duration-300",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[e.jsxs("div",{className:"reveal-section text-center space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",children:"Practical Examples: Search & Replace Operations"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",children:"Real‑world, production‑grade scripts using grep and sed – from bulk file edits to data anonymization, CSV cleaning, and SQL generation."})]}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.1s"},children:e.jsx(t,{})}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300",style:{animationDelay:"0.15s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"🔧 What You'll Learn"}),e.jsx("p",{className:"mb-3",children:"This topic brings together everything from previous lessons to solve real tasks:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-4",children:[e.jsxs("li",{children:["Bulk renaming of files using ",e.jsx("code",{children:"sed"})," pipelines"]}),e.jsx("li",{children:"Updating configuration values across hundreds of files"}),e.jsx("li",{children:"Cleaning messy CSV data (quote normalization, delimiter conversion)"}),e.jsx("li",{children:"Anonymizing sensitive information in logs (IPs, emails, credit cards)"}),e.jsx("li",{children:"Batch HTML to Markdown conversion for static site migrations"}),e.jsx("li",{children:"Transforming CSV into SQL INSERT statements"}),e.jsx("li",{children:"Finding and replacing text across entire Git repositories"}),e.jsx("li",{children:"Cleaning up commit messages or code comments"})]}),e.jsx("div",{className:"mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border-l-4 border-purple-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Why this matters:"})," At Shyamnagar IT Park, a junior developer spent two hours manually editing 50 config files. We showed her ",e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1",children:"sed -i 's/localhost:3000/api.example.com/g' *.env"})," – she finished in 2 seconds. These skills separate beginners from professionals."]})})]}),e.jsxs("div",{className:"reveal-section space-y-6",style:{animationDelay:"0.2s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Real‑World Script Demos"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:m,title:"📂 Bulk File Renaming with sed",highlightLines:[12,18,24]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:p,title:"⚙️ Update Configuration Files",highlightLines:[14,20,26]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:x,title:"📊 CSV Cleaning & Normalization",highlightLines:[15,22,29]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:g,title:"🔒 Log Anonymization (GDPR)",highlightLines:[18,25,32]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:f,title:"🌐 Batch HTML to Markdown",highlightLines:[14,22,30]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:u,title:"📝 Markdown Batch Editor",highlightLines:[12,18,25]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:w,title:"🗄️ CSV to SQL Generator",highlightLines:[14,22,30]})}),e.jsx("div",{className:"hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:y,title:"🔍 Bulk Find & Replace Across Project",highlightLines:[15,22,29]})}),e.jsx("div",{className:"md:col-span-2 hover:scale-[1.01] transition-transform duration-300",children:e.jsx(n,{fileModule:v,title:"🧹 Git Commit Message Cleanup",highlightLines:[14,20,27]})})]})]}),e.jsxs("div",{className:"reveal-section grid grid-cols-1 md:grid-cols-2 gap-6",style:{animationDelay:"0.25s"},children:[e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"💎 Pro Production Tips"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always backup:"})," Use `sed -i.bak` or `cp file file.bak` before bulk operations."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dry run first:"})," Remove `-i` and check output, or use `grep` to count matches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use version control:"})," `git diff` after changes to review before committing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Log what you changed:"})," Redirect sed output to a log: `sed -i 's/old/new/g' file && echo \"Changed file\" >> changelog`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preserve timestamps:"})," Use `touch -r` after `sed -i` to keep modification times."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-5 rounded-xl hover:shadow-md transition-all",children:[e.jsx("h3",{className:"text-xl font-bold flex items-center gap-2",children:"⚠️ Common Pitfalls in Production"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No dry run:"})," Changing 1000 files with a wrong regex is disastrous. Always preview."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to escape special characters:"})," `.` `*` `[` `$` etc. in patterns cause unexpected matches."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using `grep | sed` to modify files:"})," Use `sed -i` with address instead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Over‑matching symlinks:"})," `grep -r` follows symlinks; may change unintended files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Case sensitivity surprises:"})," Add `-i` to grep or sed when needed."]})]})]})]}),e.jsxs("div",{className:"reveal-section bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"✅ Production‑Ready Best Practices"}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Use a staging directory: copy files, test, then move to production."}),e.jsx("p",{children:"✔️ Write idempotent sed commands – running twice shouldn't break anything."}),e.jsx("p",{children:"✔️ Use `grep -l` before `xargs sed -i` to limit files to those that actually match."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"✔️ Store regex patterns in variables for reuse and clarity."}),e.jsx("p",{children:"✔️ Add `set -euo pipefail` to bash scripts for safe error handling."}),e.jsx("p",{children:"✔️ Comment every non‑obvious sed command."})]})]}),e.jsxs("div",{className:"mt-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-bold",children:"📝 Mini Checklist for Production Scripts"}),e.jsxs("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2",children:[e.jsx("li",{children:"☐ I have a backup of all files before running the script."}),e.jsx("li",{children:"☐ I tested the command on a single file first."}),e.jsx("li",{children:"☐ I used `grep -c` to verify expected number of matches."}),e.jsx("li",{children:"☐ I handled edge cases (empty files, no matches, special chars)."}),e.jsx("li",{children:"☐ My command is idempotent (safe to run twice)."}),e.jsx("li",{children:"☐ I logged what was changed for audit."}),e.jsx("li",{children:"☐ I committed changes to version control before and after."})]})]})]}),e.jsx("p",{className:"mt-1",children:`You're tasked with migrating a 10,000‑page website: all <h1> tags should become # in Markdown, and all internal links from .html to .md. How would you approach this with a single sed command? What about nested tags? Consider using pattern ranges (/start/,/end/) and backreferences. Can you write a one‑liner that safely handles <h1 class="...">?`}),e.jsx("div",{className:"reveal-section rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 border border-gray-300 dark:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer",style:{animationDelay:"0.4s"},children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"text-4xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsxs("p",{className:"font-medium text-purple-700 dark:text-purple-300",children:["Sukanta Hui — Master Educator (since 1998, ",r," years of experience)"]}),e.jsxs("p",{className:"mt-2 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Expertise:"})," Programming Language, RDBMS, Operating System, Web Development | ",e.jsx("strong",{children:"Contact:"})," sukantahui@codernaccotax.co.in | 📞 7003756860"]}),e.jsxs("div",{className:"mt-3 bg-white/60 dark:bg-black/20 p-3 rounded-lg",children:[e.jsx("p",{children:e.jsx("strong",{children:"🎓 Teacher's Advice for Practical grep + sed:"})}),e.jsxs("ul",{className:"list-disc ml-5 mt-1 space-y-1",children:[e.jsx("li",{children:`"In my 27+ years of teaching at Barrackpore, I've seen students transform from command‑line novices to automation wizards after mastering these practical patterns."`}),e.jsx("li",{children:"Classroom exercise: Give them a large CSV with student names (Swadeep, Tuhina, etc.) and ask them to generate SQL INSERT statements – they'll learn real data engineering skills."}),e.jsx("li",{children:"Emphasise the 'safety first' mindset: backup, dry run, version control. Production mistakes are costly."}),e.jsx("li",{children:"Encourage building a personal 'toolbox' of sed/grep scripts for repetitive tasks (log summariser, config updater, etc.)."})]}),e.jsx("p",{className:"mt-2 italic text-sm",children:`"The difference between a junior and senior engineer isn't knowing the commands – it's knowing when and how to apply them safely." — Sukanta Sir`})]})]})]})}),e.jsx("div",{className:"reveal-section",style:{animationDelay:"0.45s"},children:e.jsx(j,{title:"❓ Practical Search & Replace — 30 Expert FAQs",questions:b})}),e.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-800",children:"Topic 7: Practical Examples — Master Real‑World Search & Replace"})]})]})};export{E as default};

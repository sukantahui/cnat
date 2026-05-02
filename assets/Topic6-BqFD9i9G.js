import{r as l,j as e}from"./index-COd1BgDP.js";import{c}from"./clsx-B-dksMZM.js";import{S as r}from"./ShellFileLoader-BdOvnpm7.js";import{T as m}from"./TeacherSukantaHui-BiDY59dC.js";import{F as h}from"./FAQTemplate-svRpoxM2.js";import"./prism-XSjjC35C.js";import"./git-branch-BMCsOpU_.js";const f=`#!/bin/bash
# find_basics.sh - Basic find examples: name, type, size, time

mkdir -p /tmp/find_demo
cd /tmp/find_demo

# Create test files and directories
echo "=== Creating test files ==="
touch file1.txt file2.log file3.TXT
mkdir subdir
touch subdir/note.txt subdir/data.log
echo "Large content" > large.log
truncate -s 15M large.log 2>/dev/null || dd if=/dev/zero of=large.log bs=1M count=15 2>/dev/null
echo "Old content" > old.txt
touch -t 202001010000 old.txt

echo -e "\\n=== Find by name (case-sensitive) ==="
find . -name "*.txt"
echo -e "\\n=== Find by name (case-insensitive) ==="
find . -iname "*.txt"

echo -e "\\n=== Find only regular files ==="
find . -type f

echo -e "\\n=== Find only directories ==="
find . -type d

echo -e "\\n=== Find files larger than 10MB ==="
find . -size +10M

echo -e "\\n=== Find files modified in last 2 minutes ==="
sleep 1
touch newfile.txt
find . -mmin -2

echo -e "\\n=== Find files accessed more than 30 days ago ==="
find . -atime +30

cd /tmp
rm -rf /tmp/find_demo`,x=`#!/bin/bash
# find_advanced.sh - Advanced expressions: logical operators, pruning, regex

mkdir -p /tmp/find_adv
cd /tmp/find_adv

touch a.txt b.log c.jpg d.png e.out
mkdir gitdir .hidden logs
touch gitdir/.gitignore logs/error.log .hidden/secret.txt

echo "=== Find .txt OR .log files ==="
find . -name "*.txt" -o -name "*.log"

echo -e "\\n=== Find files NOT matching .txt ==="
find . ! -name "*.txt"

echo -e "\\n=== Using parentheses to group (escape them) ==="
find . \\\\( -name "*.jpg" -o -name "*.png" \\\\) -type f

echo -e "\\n=== Exclude .git directory (prune) ==="
find . -path "./gitdir" -prune -o -type f -print

echo -e "\\n=== Using -regex (GNU find) ==="
find . -regex '.*\\.[ch]' 2>/dev/null || echo "regex not supported"
echo "Creating .c and .h files"
touch main.c header.h
find . -regex '.*\\.\\(c\\|h\\)$'

echo -e "\\n=== Limit depth to 1 ==="
find . -maxdepth 1 -type f

cd /tmp
rm -rf /tmp/find_adv`,p=`#!/bin/bash
# find_actions.sh - Using -exec, -delete, -ok, and xargs

mkdir -p /tmp/find_actions
cd /tmp/find_actions

# Create test files
touch file{1..10}.tmp
mkdir backup

echo "=== Using -exec to echo each file ==="
find . -name "*.tmp" -exec echo "Found: {}" \\;

echo -e "\\n=== Using -exec with {} + (batch) ==="
find . -name "*.tmp" -exec echo {} + | wc -w

echo -e "\\n=== Copy found files to backup directory ==="
find . -name "*.tmp" -exec cp {} backup/ \\;
ls backup/

echo -e "\\n=== Delete using -delete ==="
find . -name "*.tmp" -delete
echo "Remaining files:"; ls

# Recreate for -ok demo
touch ask{1,2,3}.tmp
echo -e "\\n=== Using -ok (interactive) ==="
echo "Would remove each file if confirmed; answering 'n' here"
find . -name "*.tmp" -ok rm {} \\;

echo -e "\\n=== Using -exec with grep on multiple files ==="
echo "ERROR" > err1.log
echo "INFO" > info.log
echo "ERROR" > err2.log
find . -name "*.log" -exec grep -l "ERROR" {} \\;

cd /tmp
rm -rf /tmp/find_actions`,u=[{question:"What does `find . -name '*.txt'` do?",shortAnswer:"Searches recursively from current directory for files/directories with names ending in `.txt`.",explanation:"The `-name` test is case-sensitive. Always quote the pattern to prevent shell expansion.",hint:"Without quotes, the shell expands `*.txt` before find runs.",level:"basic",codeExample:"find /home -name 'README'"},{question:"How do you make the name search case‑insensitive?",shortAnswer:"Use `-iname` instead of `-name`.",explanation:"`-iname` matches regardless of case. Useful for finding files like 'Readme', 'README', 'readme'.",hint:"Example: `find . -iname 'makefile'`",level:"basic",codeExample:"find . -iname '*.jpg'"},{question:"How do you find only directories?",shortAnswer:"`find . -type d`",explanation:"`-type d` selects directories. Other types: `f` (regular file), `l` (symbolic link), `b` (block device), `c` (character device).",hint:"Combine with `-name` to find directories with specific names.",level:"basic",codeExample:"find /var -type d -name 'log'"},{question:"What does `-size +10M` mean?",shortAnswer:"Finds files larger than 10 megabytes.",explanation:"Units: `c` (bytes), `k` (KiB), `M` (MiB), `G` (GiB). `+` means greater than, `-` means less than, no sign means exact.",hint:"`find . -size -1k` finds files smaller than 1 KiB.",level:"intermediate",codeExample:"find . -size +100M -type f"},{question:"How do you find files modified in the last 24 hours?",shortAnswer:"`find . -mtime 0` or `find . -mtime -1`",explanation:"`-mtime n` means modified exactly n*24 hours ago. `-mtime 0` = last 24 hours. `-mtime -1` = less than 1 day ago (same).",hint:"Use `-mmin` for minutes: `-mmin -60` for last hour.",level:"intermediate",codeExample:"find logs/ -mtime -7"},{question:"What is the difference between `-mtime +7`, `-mtime 7`, and `-mtime -7`?",shortAnswer:"+7 = more than 7 days old; 7 = exactly 7 days old; -7 = less than 7 days old (i.e., within last 7 days).",explanation:"Age is calculated in days (24-hour periods) from the current time. The exact boundary can be tricky; use `-mmin` for finer control.",hint:"`+7` includes files last modified 8 days ago or more.",level:"intermediate",codeExample:null},{question:"How do you execute a command on each found file?",shortAnswer:"Use `-exec command {} \\;` or `-exec command {} +`.",explanation:"The `{}` placeholder is replaced by the current file path. `\\;` terminates the command (semicolon escaped). `+` batches arguments.",hint:"Use `-ok` instead of `-exec` for confirmation.",level:"intermediate",codeExample:"find . -name '*.tmp' -exec rm {} \\;"},{question:"What is the advantage of `-exec ... {} +` over `{} \\;`?",shortAnswer:"It runs the command fewer times by appending multiple files, reducing process overhead.",explanation:"Similar to `xargs`. Example: `find . -name '*.c' -exec grep -l 'main' {} +` runs grep once with many arguments.",hint:"`{} +` requires the command to accept multiple arguments.",level:"advanced",codeExample:null},{question:"How do you delete all empty files in a directory tree?",shortAnswer:"`find . -type f -empty -delete`",explanation:"`-empty` matches empty files and directories. `-delete` removes them. Safer to test with `-print` first.",hint:"Also `find . -type d -empty -delete` removes empty directories.",level:"intermediate",codeExample:"find /tmp -type f -empty -delete"},{question:"How do you exclude a directory from search (prune)?",shortAnswer:"Use `-path ./exclude -prune -o -name 'pattern' -print`.",explanation:"`-prune` prevents descending into a directory. The `-o` (or) ensures other branches are still searched.",hint:"Example: `find . -path './.git' -prune -o -name '*.c' -print`",level:"advanced",codeExample:null},{question:"What does `-maxdepth 1` do?",shortAnswer:"Limits the search to the current directory only, no subdirectories.",explanation:"Useful for searching only immediate children. `-maxdepth 0` would mean just the starting point.",hint:"`find . -maxdepth 1 -name '*.txt'`",level:"basic",codeExample:"find /etc -maxdepth 1 -name '*.conf'"},{question:"How do you find files owned by a specific user?",shortAnswer:"`find / -user username`",explanation:"Also `-group groupname` for group ownership. Combine with other tests.",hint:"Use `-nouser` to find files with no valid user.",level:"intermediate",codeExample:"find /home -user swadeep"},{question:"How do you find files with specific permissions (e.g., 755)?",shortAnswer:"`find . -perm 755` (exact match) or `-perm -755` (at least these bits set).",explanation:"`-perm -mode` tests that all bits in `mode` are set; `-perm /mode` tests any of the bits.",hint:"Use `-perm -u=x` to find files executable by owner.",level:"advanced",codeExample:"find . -perm -u=rwx,g=rx,o=rx"},{question:"How do you combine multiple conditions with AND and OR?",shortAnswer:"AND is default; use `-o` for OR. Group with escaped parentheses `\\( ... \\)`.",explanation:"Example: `find . \\( -name '*.c' -o -name '*.h' \\) -type f`",hint:"Without parentheses, `-o` binds more loosely than implied AND.",level:"advanced",codeExample:"find . -name 'a*' -o -name 'b*' -type f"},{question:"What does `-regex` do?",shortAnswer:"Matches the full path against a regular expression (GNU extension).",explanation:"`-regex` uses emacs regular expressions by default; `-regextype` can change it to `posix-egrep` etc.",hint:"Use `-iregex` for case‑insensitive version.",level:"expert",codeExample:"find . -regex '.*/[0-9]+.txt$'"},{question:"How do you find files that have not been accessed in over 90 days?",shortAnswer:"`find . -atime +90`",explanation:"`-atime` measures last access time. Useful for archiving stale data.",hint:"Combine with `-type f` to exclude directories.",level:"intermediate",codeExample:"find /home -atime +90 -type f"},{question:"How can you find files by inode number?",shortAnswer:"`find . -inum NUM`",explanation:"Inode numbers are unique per filesystem. Useful for finding hard links or recovering files by inode.",hint:"Use `-samefile` to find hard links to a given file.",level:"advanced",codeExample:"find / -inum 12345 2>/dev/null"},{question:"What does `-print0` do and why use it?",shortAnswer:"Prints each result followed by a null character, not newline, to handle filenames with spaces or newlines.",explanation:"Used with `xargs -0`. Example: `find . -name '*.txt' -print0 | xargs -0 grep 'pattern'`",hint:"Always use `-print0` when piping to `xargs` if filenames may contain spaces.",level:"advanced",codeExample:null},{question:"How do you find links (hard or symbolic) to a specific file?",shortAnswer:"For hard links: `find . -samefile target_file`. For symlinks: `find . -lname 'target_path'`.",explanation:"`-samefile` compares inode numbers; `-lname` matches the content of symlinks.",hint:"`-samefile` works within the same filesystem.",level:"expert",codeExample:"find . -samefile /path/to/original"},{question:"How do you find files larger than 1 GB and show their sizes?",shortAnswer:"`find . -size +1G -exec ls -lh {} \\;` or use `-exec du -h {} \\;`.",explanation:"Combining `-exec` with `ls` gives human‑readable sizes. Be careful with performance on many files.",hint:"Use `+` instead of `\\;` for fewer `ls` invocations: `-exec ls -lh {} +`",level:"advanced",codeExample:"find /var -size +1G -exec du -h {} \\; 2>/dev/null"},{question:"What is the purpose of `-quit`?",shortAnswer:"Stops the search after the first match (GNU extension).",explanation:"Useful for performance when you only need one result. Example: `find . -name 'core' -quit` finds first core dump and stops.",hint:"Often combined with `-print` and then `-quit`.",level:"expert",codeExample:"find / -name 'passwd' -print -quit 2>/dev/null"},{question:"How do you find files newer than a reference file?",shortAnswer:"`find . -newer reference_file`",explanation:"Compares modification times (mtime). Also `-newerXY` for other timestamps: `-newerat`, `-newermt`, `-newerct`.",hint:"Example: `find . -newermt '2024-01-01'`",level:"advanced",codeExample:"find . -newer backup.tar.gz"},{question:"What does `-path` do?",shortAnswer:"Matches the entire path, not just the basename.",explanation:"Useful for excluding or including based on directory structure. Example: `find . -path '*/.git/*' -prune`",hint:"`-ipath` is case‑insensitive version.",level:"advanced",codeExample:"find . -path '*/test/*' -name '*.py'"},{question:"How do you avoid descending into directories that match a pattern?",shortAnswer:"Use `-prune` on the directory. Example: `find . -name 'node_modules' -prune -o -name '*.js' -print`.",explanation:"`-prune` stops traversal; the `-o` ensures the rest of the tree (non‑pruned) is still processed.",hint:"Order matters: place `-prune` before the `-o`.",level:"expert",codeExample:null},{question:"What is the difference between `-exec` and `-execdir`?",shortAnswer:"`-execdir` runs the command from the directory containing the matched file, safer for operations that affect the file's parent.",explanation:"`-execdir` changes to the file's directory before running the command, reducing race conditions. GNU extension.",hint:"`-execdir` is preferred for commands like `rm` when using relative paths.",level:"expert",codeExample:"find . -name '*.tmp' -execdir rm {} \\;"},{question:"How can you find files with a specific extension and copy them to a folder?",shortAnswer:"`find . -name '*.jpg' -exec cp {} /destination/ \\;` or use `-exec cp -t /destination {} +`.",explanation:"The `-t` option of `cp` allows specifying target directory first, which works well with `{} +`.",hint:"Always test with `echo` before actual copy.",level:"intermediate",codeExample:"find . -name '*.pdf' -exec cp -t ~/pdfs/ {} +"},{question:"What does `-fprintf` do?",shortAnswer:"Writes find output to a file with a format similar to `printf`.",explanation:"GNU extension. Example: `find . -name '*.c' -fprintf results.txt '%p\\n'`",hint:"Useful for logging search results.",level:"expert",codeExample:null},{question:"How do you find symbolic links that point to nowhere (dangling)?",shortAnswer:"`find . -type l ! -exec test -e {} \\; -print` or `find . -xtype l` (GNU).",explanation:"`-xtype l` checks the type of the link target. Dangling links have no target type.",hint:"`-xtype` is not POSIX but available on GNU/Linux.",level:"expert",codeExample:"find / -xtype l 2>/dev/null"},{question:"How do you use `find` to count the number of files of each extension?",shortAnswer:"`find . -type f | sed 's/.*\\.//' | sort | uniq -c`",explanation:"This pipeline extracts extensions and counts them. Not pure `find`, but common combination.",hint:"Use `-printf '%f\\n'` to output only filenames for cleaner processing.",level:"advanced",codeExample:null},{question:"What is the performance impact of using `-exec` vs `-exec ... +`?",shortAnswer:"`-exec {} \\;` forks a new process per file, which can be slow for many files. `{} +` forks once per batch (~128k arguments), much faster.",explanation:"For thousands of files, the difference is dramatic. Use `+` whenever your command can take multiple arguments.",hint:"Example: `grep`, `ls`, `chmod`, `cp -t` work well with `+`.",level:"advanced",codeExample:null},{question:"How do you find files with a name longer than 50 characters?",shortAnswer:"`find . -name '??????????????????????????????????????????????????'` (50 question marks) or use `-regex`.",explanation:"The `-regex` approach: `find . -regex './[^/]\\{50,\\}$'`",hint:"Using `-regex` is more flexible than many `?`.",level:"expert",codeExample:null}],g=`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-slide-up {
    animation: fadeSlideUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }
`,d=[{q:"What is the primary purpose of the `find` command?",a:"Search for files and directories in a directory hierarchy based on various criteria (name, size, time, permissions, etc.)."},{q:"How do you find all files named `config.txt` starting from current directory?",a:"`find . -name 'config.txt'`"},{q:"What option makes the search case‑insensitive?",a:"`-iname` (e.g., `find . -iname '*.jpg'`)."},{q:"How do you find only directories (not regular files)?",a:"`find . -type d`"},{q:"How do you find only regular files?",a:"`find . -type f`"},{q:"How do you find files larger than 100 megabytes?",a:"`find . -size +100M`"},{q:"How do you find files modified in the last 7 days?",a:"`find . -mtime -7`"},{q:"How do you find files accessed more than 30 days ago?",a:"`find . -atime +30`"},{q:"How do you find files that are empty (zero bytes)?",a:"`find . -empty`"},{q:"How do you execute a command on each found file?",a:"Use `-exec` or `-ok` (e.g., `find . -name '*.tmp' -exec rm {} \\;`)."},{q:"What is the difference between `-exec` and `-ok`?",a:"`-ok` prompts for confirmation before executing for each file."},{q:"How do you delete files directly with `find` without using `-exec rm`?",a:"`find . -name '*.log' -delete`"},{q:"How do you limit the search depth to only the current directory (no subdirectories)?",a:"`find . -maxdepth 1 -name '*.txt'`"},{q:"How do you combine multiple conditions with logical AND?",a:"`find . -type f -size +10M -name '*.log'` (AND is default)."},{q:"How do you combine conditions with logical OR?",a:"`find . -name '*.jpg' -o -name '*.png'`"},{q:"What does `find . -perm 644` do?",a:"Finds files with exact permissions 644 (rw-r--r--)."},{q:"How do you find files owned by a specific user (e.g., `swadeep`)?",a:"`find /home -user swadeep`"},{q:"How do you find files that do NOT match a pattern?",a:"Use `!` or `-not`: `find . ! -name '*.txt'`"},{q:"What does `-prune` do in `find`?",a:"Excludes a directory from the search (prevents descending into it)."},{q:"How do you find files by inode number?",a:"`find . -inum 12345`"}];function y(){const[i,a]=l.useState(Array(d.length).fill(!1)),s=t=>{a(n=>{const o=[...n];return o[t]=!o[t],o})};return e.jsxs("div",{className:"mt-16 rounded-2xl bg-white/50 dark:bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm",children:[e.jsx("h3",{className:"mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100 border-l-4 border-indigo-500 pl-4",children:"🧠 Test Your Knowledge – 20 find Command Questions"}),e.jsx("div",{className:"grid gap-4 md:grid-cols-1",children:d.map((t,n)=>e.jsx("div",{className:"rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-md hover:scale-[1.01]",children:e.jsxs("div",{className:"flex flex-col p-5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:[n+1,". ",t.q]}),e.jsx("button",{onClick:()=>s(n),className:"rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/60 dark:text-indigo-200",children:i[n]?"Hide":"Show answer"})]}),i[n]&&e.jsx("div",{className:"mt-3 rounded-lg bg-indigo-50 p-3 text-gray-700 dark:bg-indigo-900/30 dark:text-gray-200",children:t.a})]})},n))})]})}function q(){const[i,a]=l.useState(!1),s=["animation-delay-0","animation-delay-100","animation-delay-200","animation-delay-300"];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:g}),e.jsx("style",{children:`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        @media (prefers-reduced-motion: reduce) {
          [class*="animation-delay-"] { animation-delay: 0ms; }
        }
      `}),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100",children:e.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",children:[e.jsxs("div",{className:"animate-fade-slide-up mb-12 text-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",children:"Finding Files & Directories (find)"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"The ultimate file‑searching tool – filter by name, type, size, time, permissions, and execute actions on results."})]}),e.jsx("div",{className:"animate-fade-slide-up mb-16 flex justify-center",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:e.jsx("div",{className:"w-full max-w-3xl rounded-2xl bg-white p-4 shadow-md transition-all duration-500 hover:shadow-xl dark:bg-gray-800/70",children:e.jsxs("svg",{viewBox:"0 0 720 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"260",y:"20",width:"200",height:"40",rx:"8",fill:"#4F46E5"}),e.jsx("text",{x:"360",y:"45",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:"find /path"}),e.jsx("line",{x1:"360",y1:"60",x2:"130",y2:"120",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("circle",{cx:"130",cy:"120",r:"6",fill:"#3B82F6"}),e.jsx("text",{x:"130",y:"145",textAnchor:"middle",fill:"#3B82F6",fontSize:"12",children:"-name"}),e.jsx("text",{x:"130",y:"160",textAnchor:"middle",fill:"#4B5563",fontSize:"11",children:'"*.txt"'}),e.jsx("line",{x1:"360",y1:"60",x2:"360",y2:"120",stroke:"#10B981",strokeWidth:"2"}),e.jsx("circle",{cx:"360",cy:"120",r:"6",fill:"#10B981"}),e.jsx("text",{x:"360",y:"145",textAnchor:"middle",fill:"#10B981",fontSize:"12",children:"-type f"}),e.jsx("text",{x:"360",y:"160",textAnchor:"middle",fill:"#4B5563",fontSize:"11",children:"(regular file)"}),e.jsx("line",{x1:"360",y1:"60",x2:"590",y2:"120",stroke:"#F59E0B",strokeWidth:"2"}),e.jsx("circle",{cx:"590",cy:"120",r:"6",fill:"#F59E0B"}),e.jsx("text",{x:"590",y:"145",textAnchor:"middle",fill:"#F59E0B",fontSize:"12",children:"-size +10M"}),e.jsx("text",{x:"590",y:"160",textAnchor:"middle",fill:"#4B5563",fontSize:"11",children:"larger than 10MB"}),e.jsx("line",{x1:"130",y1:"180",x2:"130",y2:"230",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("line",{x1:"360",y1:"180",x2:"360",y2:"230",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("line",{x1:"590",y1:"180",x2:"590",y2:"230",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("line",{x1:"130",y1:"230",x2:"360",y2:"230",stroke:"#8B5CF6",strokeWidth:"2",strokeDasharray:"4,2"}),e.jsx("line",{x1:"590",y1:"230",x2:"360",y2:"230",stroke:"#8B5CF6",strokeWidth:"2",strokeDasharray:"4,2"}),e.jsx("rect",{x:"260",y:"230",width:"200",height:"40",rx:"8",fill:"#8B5CF6"}),e.jsxs("text",{x:"360",y:"255",textAnchor:"middle",fill:"white",fontSize:"14",fontWeight:"bold",children:["-exec action "," \\;"]}),i&&e.jsx("g",{children:e.jsx("text",{x:"360",y:"295",textAnchor:"middle",fill:"#6B7280",fontSize:"12",children:"✨ AND is default; use -o for OR"})})]})})}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-14",children:[{title:"🔍 Name & Type",content:"`-name`, `-iname` (case‑insensitive), `-type f` (file), `-type d` (directory). Wildcards must be quoted."},{title:"📏 Size & Time",content:"`-size +100M`, `-size -1k`; `-mtime -7` (modified within 7 days), `-atime +30` (accessed >30 days)."},{title:"⚙️ Actions",content:"`-exec command {} \\;` (runs command per file); `-delete`; `-print` (default); `-ok` (prompt)."},{title:"🔗 Conditions",content:"`-and` (default), `-or` (`-o`), `-not` (`!`). Group with `\\( ... \\)`. Use `-a` for and, `-o` for or."}].map((t,n)=>e.jsxs("div",{className:c("rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800/80",s[n%4]),children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-600 dark:text-indigo-400",children:t.title}),e.jsx("p",{className:"mt-2 leading-relaxed text-gray-600 dark:text-gray-300",children:t.content})]},n))}),e.jsxs("div",{className:"animate-fade-slide-up mb-14 rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/30",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-3 flex items-center gap-2",children:"📜 find Command Signatures"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:`# Basic syntax
find [starting_path] [options] [expression]

# Name search (always quote wildcards)
find . -name "*.txt"
find /home -iname "readme*"

# Type
find . -type f -size +10M
find . -type d -empty

# Time-based
find logs/ -mtime -1           # modified in last 24 hours
find . -atime +7               # accessed more than 7 days ago
find . -mmin -30               # modified in last 30 minutes

# Execute command
find . -name "*.tmp" -exec rm {} ;
find . -name "*.jpg" -exec cp {} backup/ ;

# Delete directly
find . -empty -delete

# Logical operators
find . -name "*.log" -o -name "*.out"
find . \\( -name "*.c" -o -name "*.h" \\) -exec grep -l "main" {} ;

# Limit depth
find . -maxdepth 2 -name "*.py"`}),e.jsxs("p",{className:"mt-4 text-gray-700 dark:text-gray-200",children:[e.jsx("strong",{children:"Purpose:"})," Locate files and directories based on arbitrary criteria. ",e.jsx("strong",{children:"When/Why:"})," Disk cleanup, log rotation, backup scripts, code searches, security audits, and everyday file management."]}),e.jsx("div",{className:"mt-4 rounded-lg bg-white p-3 dark:bg-gray-800/60",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("span",{className:"font-semibold",children:"🌍 Real‑world:"})," At Barrackpore High School, the system administrator uses `find /home -atime +90 -type f` to identify unused student files for archiving. Swadeep uses `find . -name '*.java' -exec grep -l 'class Main' "," \\\\;` to locate all Java files containing a main class. Debangshu uses `find /var/log -mtime +30 -delete` to clean old logs."]})})]}),e.jsxs("div",{className:"animate-fade-slide-up mb-12 space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-indigo-500 pl-3",children:"🐚 find in Action"}),e.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[e.jsx(r,{fileModule:f,title:"find_basics.sh",highlightLines:[]}),e.jsx(r,{fileModule:x,title:"find_advanced.sh",highlightLines:[]}),e.jsx(r,{fileModule:p,title:"find_actions.sh",highlightLines:[]})]}),e.jsx("div",{className:"rounded-lg bg-gray-100 p-3 dark:bg-gray-800",children:e.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["💡 ",e.jsx("strong",{children:"Tip:"})," Always test your `find` command with `-print` before adding destructive actions like `-delete` or `-exec rm`. Use `-ok` instead of `-exec` for interactive confirmation."]})})]}),e.jsxs("div",{className:"grid gap-6 md:grid-cols-2 animate-fade-slide-up",children:[e.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/50 dark:bg-amber-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-amber-700 dark:text-amber-400",children:"💡 Pro Tips"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsxs("li",{children:["Use `-exec ... "," +` instead of `\\\\;` to batch arguments and run command fewer times (faster)."]}),e.jsx("li",{children:"Combine with `xargs` for complex processing: `find . -name '*.log' -print0 | xargs -0 grep 'ERROR'`."}),e.jsx("li",{children:"Use `-prune` to exclude directories: `find . -path './.git' -prune -o -name '*.c' -print`."}),e.jsx("li",{children:"For case‑insensitive name matching, use `-iname` instead of `-name`."}),e.jsx("li",{children:"Use `-regex` for more complex pattern matching (e.g., `-regex '.*/[0-9]+\\\\.txt'`)."})]})]}),e.jsxs("div",{className:"rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800/50 dark:bg-red-950/20 transition-all hover:shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold text-red-600 dark:text-red-400",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"Forgetting to quote wildcards: `find . -name *.txt` (shell expands before find runs)."}),e.jsxs("li",{children:["Using `-exec rm "," \\\\;` without testing first – can delete wrong files."]}),e.jsx("li",{children:"Not escaping parentheses or semicolons in `-exec` when using shell metacharacters."}),e.jsx("li",{children:"Confusing `-mtime +7` (more than 7 days old) with `-mtime 7` (exactly 7 days old)."}),e.jsx("li",{children:"Assuming `-delete` implies `-depth` (it does, but still dangerous)."})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-10 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-5 dark:from-emerald-950/30 dark:to-teal-950/30",children:[e.jsx("h3",{className:"text-xl font-bold text-emerald-700 dark:text-emerald-400",children:"✅ Best Practices & Checklist"}),e.jsxs("div",{className:"mt-3 grid gap-3 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Safety first:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"Always quote name patterns."}),e.jsx("li",{children:"Test with `-print` before `-delete` or `-exec rm`."}),e.jsx("li",{children:"Use `-ok` for interactive removal."})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Efficiency:"}),e.jsxs("ul",{className:"ml-5 list-disc text-gray-700 dark:text-gray-200",children:[e.jsx("li",{children:"☑️ Use `-maxdepth` to limit recursion."}),e.jsx("li",{children:"☑️ Use `-exec ... +` for batching."}),e.jsx("li",{children:"☑️ Combine conditions early to prune branches."})]})]})]})]}),e.jsxs("div",{className:"animate-fade-slide-up mt-12 rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800/40 dark:bg-blue-950/20",children:[e.jsx("h3",{className:"text-lg font-bold text-blue-700 dark:text-blue-300",children:"🔍 Think about…"}),e.jsxs("p",{className:"mt-1 text-gray-700 dark:text-gray-200",children:['What happens if you run `find . -name "*.txt" -exec rm '," \\\\;` without quoting `*.txt`? The shell expands `*.txt` before find sees it, so find only receives the existing filenames, not the pattern. Always quote! Experiment with `echo` instead of `rm` first."]})]}),e.jsx("div",{className:"animate-fade-slide-up mt-12",children:e.jsx(m,{note:"`find` is the Swiss Army knife of file operations. I emphasise three levels: (1) simple name search, (2) adding size/time filters, (3) executing actions. The leap from `-exec echo {}` to `-exec rm {}` is a rite of passage – always practice with a test directory. Show students `find . -type f -exec grep -l 'password' {} \\\\;` for security checks. Also demonstrate `-print0` with `xargs -0` for handling filenames with spaces."})}),e.jsx("div",{className:"animate-fade-slide-up mt-16",children:e.jsx(h,{title:"find Command – FAQs",questions:u})}),e.jsx(y,{})]})})]})}export{q as default};

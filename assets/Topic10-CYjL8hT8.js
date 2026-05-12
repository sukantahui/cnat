import{r as a,j as e}from"./index-keUzLGou.js";import{c as v}from"./clsx-B-dksMZM.js";import{S as o}from"./ShellFileLoader-Dq5qQ-_v.js";import{F as y}from"./FAQTemplate-xDcKA5Xm.js";import"./prism-BLp_EZQ1.js";const j=[{question:"What does the `tar` command do?",shortAnswer:"Archives multiple files and directories into a single file (tarball), preserving metadata.",explanation:"Tar stands for Tape ARchiver. It does not compress by default but can be combined with compressors.",hint:"Think of it as a 'suitcase' for files.",level:"basic",codeExample:"tar -cf archive.tar file1 file2/"},{question:"How do you create a tar archive?",shortAnswer:"`tar -cf archive.tar files...` (c = create, f = file).",explanation:"Always include `-f` followed by the archive name.",hint:"Order matters: `-f` must be followed by the archive name.",level:"basic",codeExample:"tar -cf backup.tar documents/ photos/"},{question:"How do you extract a tar archive?",shortAnswer:"`tar -xf archive.tar` (x = extract).",explanation:"Use `-v` for verbose output, `-C` to extract to a different directory.",hint:"`tar -xvf archive.tar` shows progress.",level:"basic",codeExample:"tar -xf archive.tar -C /destination/"},{question:"What is the purpose of the `-z` option in tar?",shortAnswer:"Compress the archive using gzip (creates `.tar.gz` or `.tgz`).",explanation:"`-z` filters the archive through gzip, both for creation and extraction.",hint:"Combine `-czf` to create compressed archive.",level:"intermediate",codeExample:"tar -czf archive.tar.gz documents/"},{question:"How do you list contents of a tar archive without extracting?",shortAnswer:"`tar -tf archive.tar` (t = list).",explanation:"Add `-v` for detailed listing (permissions, size, date).",hint:"`tar -tvf archive.tar | less`",level:"basic",codeExample:"tar -tf archive.tar"},{question:"What is the difference between `tar -czf` and `tar -cjf`?",shortAnswer:"`-z` uses gzip compression (.tar.gz); `-j` uses bzip2 compression (.tar.bz2).",explanation:"bzip2 typically compresses better but slower. Also `-J` for xz (.tar.xz).",hint:"Choose `-j` for best compression, `-z` for speed and compatibility.",level:"intermediate",codeExample:"tar -cjf better.tar.bz2 largefile"},{question:"How do you extract a specific file from a tar archive?",shortAnswer:"`tar -xf archive.tar path/to/file`",explanation:"Provide the exact path as listed by `tar -tf`.",hint:"Use `tar -xf archive.tar --wildcards '*.txt'` for patterns.",level:"advanced",codeExample:"tar -xf backup.tar documents/readme.txt"},{question:"How can you exclude files when creating a tar archive?",shortAnswer:"Use `--exclude=pattern` multiple times or `-X` with a file list.",explanation:"Patterns are shell-style wildcards.",hint:"`tar -czf backup.tar.gz /home --exclude=*.mp4 --exclude=*.tmp`",level:"advanced",codeExample:"tar -czf archive.tar --exclude='*.log' ."},{question:"Why do I get 'tar: Removing leading `/' from member names'?",shortAnswer:"Tar removes absolute path root by default to prevent accidental overwrites.",explanation:"To keep absolute paths, use `-P` (--absolute-names), but it's risky.",hint:"Change to directory first: `cd /path && tar -cf archive.tar .`",level:"intermediate",codeExample:"tar -cf archive.tar -C /home/user ."},{question:"How do you append files to an existing tar archive?",shortAnswer:"Use `-r` (append) option: `tar -rf archive.tar newfile.txt`",explanation:"Cannot append to compressed archives (`.tar.gz` etc.) – decompress first.",hint:"Only works on uncompressed tar archives.",level:"expert",codeExample:"tar -rf backup.tar additional.txt"},{question:"What does `tar -u` do?",shortAnswer:"Updates archive by appending files that are newer than those in the archive.",explanation:"Useful for incremental backups without full re-archiving.",hint:"Only for uncompressed archives.",level:"expert",codeExample:"tar -uf backup.tar changed_file.txt"},{question:"How do you extract without overwriting existing files?",shortAnswer:"Use `--keep-old-files` or `--skip-old-files` flag.",explanation:"Prevents tar from overwriting files on disk.",hint:"Different tar versions may have `-k` (keep).",level:"advanced",codeExample:"tar -xf archive.tar --skip-old-files"},{question:"How do you preserve file permissions when extracting tar?",shortAnswer:"Use `-p` (--preserve-permissions) or extract as root.",explanation:"Without `-p`, extracted files get default umask permissions.",hint:"Crucial for system backups and restoring home directories.",level:"intermediate",codeExample:"tar -xpf backup.tar"},{question:"What is a snapshot file in tar?",shortAnswer:"A file used with `--listed-incremental` to track changes for incremental backups.",explanation:"Tar stores metadata about files, then later only backs up changed files.",hint:"`tar -czg snapshot.snar -f level1.tar.gz .` creates incremental backup.",level:"expert",codeExample:"tar -czf backup0.tar.gz --listed-incremental=backup.snar ."},{question:"How can you create a tar archive from a list of files in a text file?",shortAnswer:"Use `-T` or `--files-from`: `tar -czf archive.tar -T filelist.txt`",explanation:"Each line in filelist.txt is a file/directory to archive.",hint:"Useful when file list is generated by `find`.",level:"advanced",codeExample:"find . -name '*.log' > logs.txt; tar -czf logs.tar.gz -T logs.txt"},{question:"Can tar archive or extract to/from stdout?",shortAnswer:"Yes, specify `-f -` to use stdin/stdout.",explanation:"Common in pipelines: `tar -cf - . | ssh host 'tar -xf -'`",hint:"This is how remote backups work.",level:"expert",codeExample:"tar -czf - documents/ | ssh user@host 'cat > remote.tar.gz'"},{question:"What is the difference between `tar -xzf` and `tar -xvf`?",shortAnswer:"`-z` decompresses gzip; `-v` verbose; they can be combined.",explanation:"`tar -xzf` for .tar.gz; `-xjf` for .tar.bz2; `-xvf` for uncompressed with verbosity.",hint:"Always match compression flag when extracting.",level:"basic",codeExample:"tar -xzvf archive.tar.gz"},{question:"How do you verify a tar archive after creation?",shortAnswer:"Use `tar -tvf archive.tar` to list contents and compare, or `tar -df` to compare with disk.",explanation:"`-d` (diff) compares archive with filesystem.",hint:"`tar -df archive.tar` shows differences.",level:"advanced",codeExample:"tar -dvf backup.tar && echo 'OK'"},{question:"Why does tar sometimes produce 'Cannot create symlink' errors?",shortAnswer:"Usually when extracting as non-root and symlink target is outside extraction directory.",explanation:"Tar respects symlinks; if target doesn't exist or permissions deny, error occurs.",hint:"Use `--absolute-names` or check symlink targets.",level:"advanced",codeExample:"tar -xhf archive.tar   # avoid extracting symlinks as files"},{question:"How do you extract an archive while stripping leading path components?",shortAnswer:"Use `--strip-components=N` to remove N leading directories.",explanation:"Example: archive contains `./home/user/file.txt`; `--strip-components=2` extracts as `file.txt`.",hint:"Useful for flattening tarballs.",level:"expert",codeExample:"tar -xzf archive.tar --strip-components=1 -C /target"},{question:"What is the maximum file size tar can handle?",shortAnswer:"Modern tar (GNU) supports large files > 4GB, up to filesystem limits.",explanation:"UID/GID > 8M? Extended POSIX headers (pax) support large values.",hint:"Use `--format=posix` or `--format=gnu` for large files.",level:"expert",codeExample:"tar --format=posix -cf large.tar hugefile.dat"},{question:"How can you compress a tar archive using multiple CPUs?",shortAnswer:"Pipe tar output to parallel compressors like `pigz`, `pbzip2`, `xz -T`.",explanation:"`tar -cf - . | pigz -9 > archive.tar.gz`",hint:"Install `pigz` for faster gzip compression.",level:"expert",codeExample:"tar -cf - data/ | pigz -p 4 > parallel.tar.gz"},{question:"What is the purpose of `--checkpoint` in tar?",shortAnswer:"Prints progress messages every N records; useful for very large backups.",explanation:"`--checkpoint=1000` prints a dot every 1000 files.",hint:"Combine with `--checkpoint-action=echo` for custom messages.",level:"expert",codeExample:"tar -czf backup.tar.gz --checkpoint=1000 --checkpoint-action=echo='%u files' /home"},{question:"How do you create a tar archive that preserves SELinux contexts?",shortAnswer:"Use `--selinux` flag: `tar --selinux -cf archive.tar /path`",explanation:"Stores and restores SELinux security contexts.",hint:"Requires root or appropriate permissions.",level:"expert",codeExample:"tar --selinux -cf backup_with_selinux.tar /etc"},{question:"Can tar archive device files?",shortAnswer:"Yes, tar can archive block/character devices, FIFOs, sockets (with `--preserve-permissions`).",explanation:"Useful for backing up `/dev` but restore may require root.",hint:"Add `-p` to preserve special file types.",level:"expert",codeExample:"sudo tar -cpf dev_backup.tar /dev/null"},{question:"How do you generate a tarball of a directory but exclude version control directories?",shortAnswer:"`tar -czf project.tar.gz --exclude='.git' --exclude='.svn' project/`",explanation:"Multiple `--exclude` patterns or use `--exclude-vcs` (GNU tar).",hint:"`--exclude-vcs` is simpler.",level:"intermediate",codeExample:"tar -czf src.tar.gz --exclude-vcs myproject/"},{question:"What is the difference between `tar -x` and `tar -xvf`?",shortAnswer:"`-v` adds verbose output; `-x` extracts silently.",explanation:"Verbose shows each file as it's extracted.",hint:"Verbose useful for monitoring but slows down slightly.",level:"basic",codeExample:`tar -xf archive.tar   # silent
tar -xvf archive.tar  # verbose`},{question:"How do you extract a single directory from a large tarball?",shortAnswer:"`tar -xf archive.tar path/to/dir`",explanation:"Tar will extract only that directory and its contents.",hint:"Use `tar -tf` to find the exact path first.",level:"intermediate",codeExample:"tar -xf backup.tar home/user/Documents"},{question:"Why do I get 'tar: Error exit delayed from previous errors'?",shortAnswer:"Some files were not archived due to permission errors or changes during archiving.",explanation:"Tar continues but returns a non-zero exit code. Check stderr for details.",hint:"Run with `--warning=no-file-changed` to ignore certain errors.",level:"advanced",codeExample:"tar -cf archive.tar . 2>&1 | grep 'cannot open'"},{question:"How can you create an encrypted tar archive?",shortAnswer:"Tar itself doesn't encrypt; pipe through `gpg`: `tar -czf - data | gpg -c > encrypted.tar.gz.gpg`",explanation:"Decrypt with `gpg -d encrypted.tar.gz.gpg | tar -xzf -`",hint:"`gpg -c` uses symmetric encryption; password is safe.",level:"expert",codeExample:"tar -czf - secret/ | gpg -c > secret.tar.gz.gpg"},{question:"What does the `--warning=no-timestamp` flag do?",shortAnswer:"Suppresses warnings when file timestamps changed during archiving.",explanation:"Tar normally warns if a file is modified after being read.",hint:"Useful for busy directories where you accept small inconsistencies.",level:"expert",codeExample:"tar -czf busy_backup.tar.gz --warning=no-file-changed /active/log"}],w=`#!/bin/bash
# tar_basic.sh - Basic tar archive operations

echo "=== Basic tar Usage ==="

# Create sample files and directories
mkdir -p documents backups
echo "Hello World" > documents/readme.txt
echo "Important data" > documents/secret.txt
cp -r documents backups/
echo "Backup copy" > backups/backup_info.txt

echo -e "\\n1. Create a tar archive (without compression):"
tar -cvf archive.tar documents/ backups/
ls -lh archive.tar

echo -e "\\n2. List contents of tar archive:"
tar -tvf archive.tar | head -10

echo -e "\\n3. Extract tar archive:"
mkdir extract_test
tar -xvf archive.tar -C extract_test
ls -l extract_test/

echo -e "\\n4. Create compressed tar (gzip):"
tar -czvf archive.tar.gz documents/
ls -lh archive.tar.gz

echo -e "\\n5. Extract with automatic compression detection:"
tar -xvf archive.tar.gz -C extract_test/
echo "Extracted using same method"

# Cleanup
rm -rf documents backups archive.tar archive.tar.gz extract_test`,k=`#!/bin/bash
# tar_options.sh - Advanced tar options

echo "=== Tar Options Demo ==="

# Setup
mkdir -p data/subdir
echo "Content 1" > data/file1.txt
echo "Content 2" > data/file2.txt
echo "Sub content" > data/subdir/file3.txt

echo -e "\\n1. Create archive excluding files (-X or --exclude):"
tar -cvf exclude.tar data --exclude="*.txt"
tar -tvf exclude.tar

echo -e "\\n2. Append files to existing archive (-r):"
tar -rf exclude.tar data/subdir/
tar -tvf exclude.tar

echo -e "\\n3. Update only newer files (-u):"
sleep 1
echo "Updated" >> data/file1.txt
tar -uf exclude.tar data/file1.txt
tar -tvf exclude.tar

echo -e "\\n4. Extract without directory structure (--strip-components=1):"
mkdir strip_test
tar -xvf exclude.tar --strip-components=1 -C strip_test
ls -l strip_test/

echo -e "\\n5. Create archive with relative paths (-C):"
tar -cvf relative.tar -C data file1.txt file2.txt
tar -tvf relative.tar

echo -e "\\n6. Create multi-volume tar (for floppy):"
# Use -M and --tape-length, simulate with small size
echo "tar -M -L 1024 -f volume.tar data/" | head -1

# Cleanup
rm -rf data exclude.tar strip_test relative.tar volume.tar*`,z=`#!/bin/bash
# tar_advanced.sh - Incremental and differential backups

echo "=== Advanced Tar Techniques ==="

# Setup test directory
mkdir -p webapp/{css,js,images}
echo "body { margin:0; }" > webapp/css/style.css
echo "alert('Hello');" > webapp/js/app.js
echo "logo" > webapp/images/logo.png
touch -t 202503010000 webapp/old_image.png

echo -e "\\n1. Full backup:"
tar -czf full_backup.tar.gz webapp
ls -lh full_backup.tar.gz

echo -e "\\n2. Incremental backup using --listed-incremental:"
tar -czf level0.tar.gz -g snapshot.snar webapp
echo "Level 0 backup created"

# Make changes
echo "New file" > webapp/js/new_script.js
echo "Updated CSS" >> webapp/css/style.css

echo -e "\\n3. Incremental (level 1) backup:"
tar -czf level1.tar.gz -g snapshot.snar webapp
ls -lh level*.tar.gz

echo -e "\\n4. Differential backup (using find -newer):"
touch reference.timestamp
tar -czf differential.tar.gz --newer=reference.timestamp webapp 2>/dev/null
ls -lh differential.tar.gz

echo -e "\\n5. Restore from incremental backups:"
mkdir restore_test
tar -xzf level0.tar.gz -C restore_test
tar -xzf level1.tar.gz -C restore_test
echo "Restored with changes"
ls -l restore_test/webapp/js/

echo -e "\\n6. Archive and compress in parallel:"
if command -v pigz &>/dev/null; then
    tar -cf - webapp | pigz -9 > parallel.tar.gz
    echo "Used pigz for parallel compression"
else
    echo "pigz not installed, skipping"
fi

# Cleanup
rm -rf webapp full_backup.tar.gz level*.tar.gz differential.tar.gz snapshot.snar restore_test reference.timestamp parallel.tar.gz`,N=`#!/bin/bash
# tar_scripting.sh - Backup automation with tar

echo "=== Scripting with tar ==="

# Function to create timestamped backup
backup_with_date() {
    local source_dir=$1
    local target_dir=\${2:-.}
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_name="\${target_dir}/backup_\${timestamp}.tar.gz"
    
    if [ -d "$source_dir" ]; then
        tar -czf "$backup_name" -C "$source_dir" . 2>/dev/null
        echo "Backup created: $backup_name"
    else
        echo "Error: source directory $source_dir not found"
        return 1
    fi
}

# Function to backup specific file types
backup_by_type() {
    local dir=$1
    local ext=$2
    local output=$3
    find "$dir" -name "*.$ext" -type f | tar -czf "$output" -T -
    echo "Backed up .$ext files to $output"
}

# Setup test environment
echo "Setting up test data..."
mkdir -p project/{src,docs,tmp}
echo "print('hello')" > project/src/main.py
echo "README" > project/docs/readme.txt
echo "temp data" > project/tmp/temp.log
touch project/tmp/ignore_me

echo -e "\\n1. Timestamped full backup:"
backup_with_date project ./backups

echo -e "\\n2. Selective backup by file type (.py):"
backup_by_type project py py_backup.tar.gz
tar -tzf py_backup.tar.gz

echo -e "\\n3. Remote backup via SSH (simulate):"
echo "tar -czf - project | ssh user@host 'cat > remote_backup.tar.gz'"
echo "(Command would stream archive over SSH)"

echo -e "\\n4. Backup with exclusion:"
tar -czf filtered.tar.gz --exclude="*.log" --exclude="tmp/*" project
tar -tzf filtered.tar.gz

echo -e "\\n5. Measure backup speed (using pv):"
if command -v pv &>/dev/null; then
    tar -cf - project | pv -s $(du -sb project | awk '{print $1}') | gzip > measured.tar.gz
    echo "Backup completed with progress"
else
    echo "Install pv for progress monitoring"
fi

echo -e "\\n6. Split archive into parts for email:"
dd if=/dev/zero of=large.dat bs=1M count=5 2>/dev/null
tar -czf - large.dat | split -b 1m - large_backup_part.
ls -lh large_backup_part.*

# Cleanup
rm -rf project backups py_backup.tar.gz filtered.tar.gz measured.tar.gz large.dat large_backup_part.*`,H=()=>{const d=new Date().getFullYear()-1998,[r,p]=a.useState("create"),[i,h]=a.useState("archive.tar"),[n,x]=a.useState("none"),[s,m]=a.useState(!1),[l,u]=a.useState(!0),[A,S]=a.useState(10485760),[f,c]=a.useState(!1);a.useEffect(()=>{c(!0),setTimeout(()=>c(!1),300)},[r,i,n,s]);const g=()=>{let t="tar ";return r==="create"&&(t+="-c"),r==="extract"&&(t+="-x"),r==="list"&&(t+="-t"),r==="append"&&(t+="-r"),r==="update"&&(t+="-u"),s&&(t+="v"),l&&r==="create"&&(t+="p"),n==="gzip"&&(t+="z"),n==="bzip2"&&(t+="j"),n==="xz"&&(t+="J"),t+="f "+i,r==="create"&&(t+=" /path/to/files"),r==="extract"&&(t+=" [files]"),t},b=()=>{switch(r){case"create":return`tar: Removing leading '/' from member names
${s?`file1.txt
file2.txt
subdir/file3.txt
`:""}archive created successfully.`;case"extract":return s?`tar: file1.txt
tar: file2.txt
tar: subdir/file3.txt
Extraction complete.`:"Archive extracted.";case"list":return`file1.txt
file2.txt
subdir/file3.txt`;case"append":return`File appended to ${i}`;case"update":return`Updated files added to ${i}`;default:return""}};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
    @keyframes fadeSlideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes subtlePulse {
      0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3); }
      70% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .animate-fade-slide-up, [class*="animate-"] {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
    }
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.5s ease-out forwards;
    }
    .animate-pulse-subtle {
      animation: subtlePulse 1.5s infinite;
    }
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    }
    .svg-step-hover {
      transition: filter 0.2s ease, transform 0.2s ease;
    }
    .svg-step-hover:hover {
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
      transform: scale(1.02);
    }
    .teacher-note-hover {
      transition: background-color 0.2s ease, border-left-width 0.2s ease;
    }
    .teacher-note-hover:hover {
      background-color: rgba(59, 130, 246, 0.05);
      border-left-width: 6px;
    }
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-gray-500 bg-clip-text text-transparent mb-4",children:"📦 The `tar` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Tape ARchiver — bundle multiple files and directories into a single archive (tarball)."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Simulate tar operations"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Operation:"}),e.jsxs("select",{value:r,onChange:t=>p(t.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"create",children:"Create (-c)"}),e.jsx("option",{value:"extract",children:"Extract (-x)"}),e.jsx("option",{value:"list",children:"List (-t)"}),e.jsx("option",{value:"append",children:"Append (-r)"}),e.jsx("option",{value:"update",children:"Update (-u)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Archive name:"}),e.jsx("input",{type:"text",value:i,onChange:t=>h(t.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 font-mono"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Compression:"}),e.jsxs("select",{value:n,onChange:t=>x(t.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"none",children:"None (.tar)"}),e.jsx("option",{value:"gzip",children:"gzip (.tar.gz / .tgz)"}),e.jsx("option",{value:"bzip2",children:"bzip2 (.tar.bz2)"}),e.jsx("option",{value:"xz",children:"xz (.tar.xz)"})]})]}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:()=>m(!s)}),e.jsx("span",{children:"Verbose (-v)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>u(!l)}),e.jsx("span",{children:"Preserve permissions (-p)"})]})]})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsx("span",{children:g()})]}),e.jsx("pre",{className:v("whitespace-pre-wrap transition-opacity duration-300",f?"opacity-70":"opacity-100"),children:b()})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:'💡 `tar` stands for "Tape ARchiver" — originally for magnetic tape backup, now ubiquitous for packaging.'})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `tar`?"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"tar"})," is a utility that groups multiple files and directories into a single file (tarball), preserving file permissions, ownership, timestamps, and directory structure."]}),e.jsx("p",{children:"While tar alone does not compress, it is commonly combined with compressors like `gzip`, `bzip2`, or `xz` (e.g., `.tar.gz`, `.tar.bz2`, `.tar.xz`). It is the standard archiving tool on Unix and Linux for backups and distribution."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Common Operations"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded space-y-1",children:[e.jsx("code",{children:"tar -c -f archive.tar file1 dir/"}),"  ",e.jsx("span",{className:"text-gray-500",children:"# Create"}),e.jsx("br",{}),e.jsx("code",{children:"tar -x -f archive.tar"}),"             ",e.jsx("span",{className:"text-gray-500",children:"# Extract"}),e.jsx("br",{}),e.jsx("code",{children:"tar -t -f archive.tar"}),"             ",e.jsx("span",{className:"text-gray-500",children:"# List"}),e.jsx("br",{}),e.jsx("code",{children:"tar -r -f archive.tar newfile.txt"}),"  ",e.jsx("span",{className:"text-gray-500",children:"# Append"}),e.jsx("br",{}),e.jsx("code",{children:"tar -u -f archive.tar file.txt"}),"     ",e.jsx("span",{className:"text-gray-500",children:"# Update"})]}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Combine files into one archive for easier transfer or backup."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Exit 0 on success, non-zero on error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," For source code distribution, system backups, log archiving, and software packaging."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Software distribution:"})," Source code tarballs (`.tar.gz`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"System backups:"})," ",e.jsx("code",{className:"text-sm",children:"tar -czf backup.tar.gz /home /etc"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Log rotation:"})," Archive old logs into a dated tarball."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Package build systems:"})," Create release tarballs for distribution."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Migration:"})," Transfer entire directory trees between machines via `tar` over `ssh`."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with compression:"})," `-z` (gzip), `-j` (bzip2), `-J` (xz)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extract to specific directory:"})," `tar -xf archive.tar -C /target/dir`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preserve permissions:"})," `-p` flag when extracting as root (or with `--same-permissions`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exclude files:"}),' `--exclude="*.log"` during creation.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"View contents without extracting:"})," `tar -tf archive.tar`"]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `tar` Archives Files"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"180",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"110",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. Files + Dirs"}),e.jsx("text",{x:"110",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"a.txt, b/, c.log"}),e.jsx("line",{x1:"200",y1:"70",x2:"250",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow10)"}),e.jsx("rect",{x:"260",y:"30",width:"180",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. Metadata + Data"}),e.jsx("text",{x:"350",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"header (perms, name, size)"}),e.jsx("line",{x1:"440",y1:"70",x2:"490",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow10)"}),e.jsx("rect",{x:"500",y:"30",width:"180",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"590",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. Concatenate"}),e.jsx("text",{x:"590",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"multiple entries into one stream"}),e.jsx("line",{x1:"680",y1:"70",x2:"730",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow10)"}),e.jsx("rect",{x:"740",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"810",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Tarball"}),e.jsx("text",{x:"810",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"archive.tar"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow10",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Files → headers + data → concatenated → single archive"}),e.jsx("rect",{x:"740",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"780",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Packaged"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(o,{fileModule:w,title:"Basic Archive Creation",highlightLines:[4,8,12]}),e.jsx(o,{fileModule:k,title:"Common Operations (list, extract, append)",highlightLines:[6,11,16]}),e.jsx(o,{fileModule:z,title:"Incremental & Exclude Options",highlightLines:[8,15,22]}),e.jsx(o,{fileModule:N,title:"Backup Scripts with tar",highlightLines:[10,18,26]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting `-f`:"})," `tar -cv` writes to default tape device (often causes hang). Always specify `-f`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Order matters:"})," `tar -cf archive.tar` creates, but `tar -fc` is wrong; options order is flexible but `-f` must be immediately followed by filename."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Absolute paths in archives:"})," Tar stores absolute paths verbatim; extraction may overwrite system files. Use `-P` if needed, but usually remove leading `/` with `-C`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not preserving permissions on extract:"})," Use `-p` to keep original permissions, especially for system backups."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `tar` compresses:"})," It doesn't; use `-z`, `-j`, `-J` or pipe to compressor."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsx("li",{children:e.jsx("strong",{children:"Use verbose (`-v`) for documentation, but not in scripts where quiet is needed."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always test archives after creation:"})," `tar -tf archive.tar`."]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `-C` to change directory before archiving to avoid absolute paths."})}),e.jsx("li",{children:e.jsx("strong",{children:"For backups, use `--exclude` patterns to skip unnecessary directories (e.g., /proc, /dev, /tmp)."})}),e.jsx("li",{children:e.jsx("strong",{children:'Combine tar with `ssh` for remote backups: `tar -czf - dir | ssh user@host "cat > backup.tar.gz"`'})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Why might you choose `.tar.gz` over `.zip` for Unix systems?"}),e.jsx("li",{children:"What happens if you extract a tarball created with absolute paths like `/etc/passwd`?"}),e.jsx("li",{children:"How would you back up a directory but skip all video files?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can create a tarball: `tar -cf archive.tar files/`."}),e.jsx("li",{children:"✅ Can list contents: `tar -tf archive.tar`."}),e.jsx("li",{children:"✅ Can extract: `tar -xf archive.tar`."}),e.jsx("li",{children:"✅ Can compress with gzip (`-z`), bzip2 (`-j`), xz (`-J`)."}),e.jsx("li",{children:"✅ Can extract to specific directory with `-C`."}),e.jsx("li",{children:"✅ Understands the role of `-f` and argument order."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(y,{title:"Frequently Asked Questions about tar Command",questions:j})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",d," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"}),' Use a physical metaphor: "tar is like a suitcase — you pack multiple items into one bag (archive). Then you can compress the suitcase with gzip (like vacuum packing)." Then demonstrate creating a `.tar`, then `.tar.gz`, and compare sizes.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"}),' Most beginners forget `-f`. Create a mnemonic: "Tar Can\'t Function Without -f". Also emphasize that `-f` must be followed immediately by the archive name (no space needed).']}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that performs a full system backup of `/home`, `/etc`, and `/var/log` into a dated `.tar.gz`, excluding temporary files. Then transfer the backup to a remote server via `scp`. This simulates a production backup routine."]})]})]})})]})};export{H as default};

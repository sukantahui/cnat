import{r as t,j as e}from"./index-gsr__VoO.js";import{c as f}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-BqG5EhV4.js";import{F as z}from"./FAQTemplate-CEVTVkoN.js";import"./prism-CyJ4Ug4E.js";const y=[{question:"What does `gunzip` do?",shortAnswer:"Decompresses files compressed with `gzip`, restoring the original file.",explanation:"`gunzip` is equivalent to `gzip -d`. It removes the `.gz` extension and restores the original content.",hint:"Think of it as the opposite of `gzip`.",level:"basic",codeExample:"gunzip archive.gz   # restores archive"},{question:"How is `gunzip` different from `gzip -d`?",shortAnswer:"There is no difference; `gunzip` is often a symbolic link to `gzip -d`.",explanation:"Both commands perform identical decompression. `gunzip` exists for convenience and historical reasons.",hint:"Use whichever you prefer.",level:"basic",codeExample:"gzip -d file.gz   # same as gunzip file.gz"},{question:"How can you decompress a `.gz` file while keeping the compressed version?",shortAnswer:"Use `gunzip -k file.gz` (GNU) or `gunzip -c file.gz > output`.",explanation:"`-k` keeps the original `.gz`; `-c` writes to stdout which you can redirect to a new name.",hint:"`-k` is simplest if available.",level:"intermediate",codeExample:"gunzip -k data.gz   # keeps data.gz and creates data"},{question:"What does `gunzip -t` do?",shortAnswer:"Tests the integrity of a compressed file without extracting it.",explanation:"Returns exit code 0 if the file is valid and not corrupt.",hint:"Use before wasting time decompressing a large corrupted file.",level:"advanced",codeExample:"gunzip -t backup.gz && echo 'OK'"},{question:"Can `gunzip` decompress files that are not named with `.gz`?",shortAnswer:"Yes, but you may need to specify the suffix with `-S` or rename the file.",explanation:"By default, `gunzip` expects `.gz`; use `-S .custom` or rename to `.gz`.",hint:"Not common; standard practice is using `.gz` extensions.",level:"expert",codeExample:"gunzip -S .z compressed.z"},{question:"Why does `gunzip` complain about a file not being in gzip format?",shortAnswer:"The file is either not compressed with gzip, or it's corrupted.",explanation:"`gunzip` checks the magic bytes (0x1F 0x8B) at the start; if missing, it refuses.",hint:"Use `file` command to identify file type.",level:"intermediate",codeExample:"file unknown.bin"},{question:"How do you decompress a file to a different name or location?",shortAnswer:"Use `gunzip -c file.gz > /path/newfilename`.",explanation:"`-c` writes to stdout; you can redirect to any path or name.",hint:"The original `.gz` remains untouched.",level:"intermediate",codeExample:"gunzip -c archive.gz > /tmp/restored.txt"},{question:"What is the difference between `gunzip` and `unzip`?",shortAnswer:"`gunzip` works on `.gz` (single file); `unzip` works on `.zip` archives (multiple files).",explanation:"They are different formats created by different tools (gzip vs PKZIP).",hint:"`unzip` is for `.zip` files, common on Windows.",level:"basic",codeExample:"unzip archive.zip   # vs gunzip archive.gz"},{question:"How can you decompress multiple `.gz` files with a single command?",shortAnswer:"`gunzip *.gz` or `gunzip file1.gz file2.gz`.",explanation:"`gunzip` accepts multiple arguments and decompresses each.",hint:"Be careful: all original `.gz` files will be removed unless you use `-k`.",level:"intermediate",codeExample:"gunzip -k *.gz   # keep all compressed"},{question:"What does the `-f` option do in `gunzip`?",shortAnswer:"Force decompression even if output file already exists.",explanation:"Without `-f`, `gunzip` refuses to overwrite an existing file.",hint:"Use only when you are sure about overwriting.",level:"advanced",codeExample:"gunzip -f data.gz   # overwrites existing data"},{question:"How can you view the contents of a `.gz` file without decompressing to disk?",shortAnswer:"Use `zcat file.gz` or `gunzip -c file.gz` piped to `less`.",explanation:"`zcat` is a common alias for `gunzip -c`.",hint:"`zless` and `zmore` also work.",level:"intermediate",codeExample:"zcat log.gz | grep error"},{question:"What happens when you run `gunzip` on a `.tar.gz` file?",shortAnswer:"It decompresses to a `.tar` file (not a directory).",explanation:"`gunzip` only decompresses; you still need `tar xf` to extract the archive contents.",hint:"Use `tar -xzf file.tar.gz` to do both steps.",level:"intermediate",codeExample:`gunzip archive.tar.gz   # creates archive.tar
tar xf archive.tar`},{question:"Why does `gunzip` sometimes fail with 'unexpected end of file'?",shortAnswer:"The compressed file is truncated or incomplete.",explanation:"This means the archive is missing data; likely incomplete download or partial backup.",hint:"Try re-downloading or restoring from backup.",level:"advanced",codeExample:"gunzip -t partial.gz   # returns error"},{question:"How can you decompress a file and preserve the original timestamp?",shortAnswer:"`gunzip` does this by default (using the timestamp stored in the gzip header).",explanation:"When decompressing, the original modification time is restored unless you use `-n`.",hint:"`ls -l` before and after shows same timestamp.",level:"basic",codeExample:"gunzip oldfile.gz; ls -l oldfile   # timestamp matches original"},{question:"Can `gunzip` handle multiple concatenated gzip files?",shortAnswer:"Yes; if a file contains concatenated gzip streams, `gunzip` decompresses all of them.",explanation:"Example: `cat a.gz b.gz > combined.gz`; `gunzip combined.gz` produces combined file with both decompressed streams concatenated.",hint:"Rare but useful for log rotation.",level:"expert",codeExample:"cat part1.gz part2.gz > full.gz; gunzip full.gz"},{question:"What is the difference between `gunzip` and `gzip -d` when used with `-c`?",shortAnswer:"No difference; both output to stdout.",explanation:"`gunzip -c` and `gzip -dc` are identical.",hint:"Choose based on readability.",level:"basic",codeExample:"gzip -dc file.gz | wc -l   # same as gunzip -c file.gz | wc -l"},{question:"How can you recursively decompress all `.gz` files in a directory tree?",shortAnswer:"Use `find . -name '*.gz' -exec gunzip {} \\;`",explanation:"`find` traverses directories and runs `gunzip` on each matching file.",hint:"Add `-k` to keep compressed files.",level:"advanced",codeExample:"find logs/ -type f -name '*.gz' -exec gunzip -k {} \\;"},{question:"What does the `-l` option do in `gunzip`?",shortAnswer:"Lists information about compressed files (size, ratio, name).",explanation:"`gzip -l` works on `.gz` files to show compressed/uncompressed sizes and compression ratio.",hint:"Useful before decompressing to see expected size.",level:"intermediate",codeExample:"gzip -l archive.gz"},{question:"Can `gunzip` decompress files from stdin?",shortAnswer:"Yes, if you use `-c` and provide no filename, it reads from stdin.",explanation:"Example: `cat file.gz | gunzip -c > output`",hint:"This is used in pipelines.",level:"advanced",codeExample:"cat backup.gz | gunzip -c | tar xf -"},{question:"Why is `gunzip` sometimes slower than `gzip`?",shortAnswer:"Decompression is generally faster than compression, but for very large files, disk I/O matters.",explanation:"Usually `gunzip` is faster because decompression is less CPU-intensive than compression.",hint:"Test with `time gunzip large.gz`.",level:"intermediate",codeExample:"time gunzip hugefile.gz"},{question:"How can you decompress a file but change its extension?",shortAnswer:"Use `gunzip -c file.gz > file.new`",explanation:"`-c` lets you redirect to any filename; the original `.gz` remains.",hint:"Remember that the new file name may not reflect the original content type.",level:"advanced",codeExample:"gunzip -c data.gz > data_uncompressed.txt"},{question:"What is `pigz -d`?",shortAnswer:"Parallel version of `gunzip` using multiple cores for faster decompression.",explanation:"`pigz -d` decompresses a `.gz` file in parallel, much faster on multi-core systems.",hint:"Install `pigz` for large files.",level:"expert",codeExample:"pigz -d largefile.gz"},{question:"What happens if you try to `gunzip` a file that is not a gzip archive?",shortAnswer:"`gunzip` prints an error and leaves the file unchanged.",explanation:"It checks the magic number; fails with 'not in gzip format'.",hint:"Use `file` to identify unknown files.",level:"basic",codeExample:"echo 'hello' > test; gunzip test   # error"},{question:"How can you decompress multiple files while preserving timestamps?",shortAnswer:"`gunzip` already preserves timestamps by default. Use `-N` to restore original name as well.",explanation:"`-N` stores original name; `-n` disables.",hint:"Default is to restore name and timestamp.",level:"advanced",codeExample:"gunzip -N archive.gz"},{question:"What is the purpose of `gunzip -q`?",shortAnswer:"Quiet mode: suppresses warnings and error messages.",explanation:"Useful in scripts where you don't want stderr clutter.",hint:"Combine with `-f` for silent force.",level:"advanced",codeExample:"gunzip -q corrupt.gz 2>/dev/null"},{question:"Can `gunzip` handle files larger than 4GB?",shortAnswer:"Yes, if the system supports large files (modern Linux does).",explanation:"The gzip format allows large files; `gunzip` on 64-bit systems handles TB sizes.",hint:"Test with `dd if=/dev/zero bs=1M count=5000 | gzip > big.gz`",level:"expert",codeExample:"gunzip huge.gz   # works if file system permits"},{question:"How do you decompress a file encrypted with gzip?",shortAnswer:"gzip does not support encryption. Use `gpg` or `openssl` for encrypted compression.",explanation:"If the file is password-protected, it wasn't done by standard gzip.",hint:"Use `gpg -d file.gz.gpg` if encrypted with GPG.",level:"expert",codeExample:"gpg -d encrypted.gz.gpg | gunzip"},{question:"What is the difference between `gunzip` and `gzip -d` regarding exit codes?",shortAnswer:"None; both return 0 on success, non-zero on failure.",explanation:"Exit codes: 1 for general error, 2 for corrupt file, etc.",hint:"Check with `echo $?` after command.",level:"intermediate",codeExample:"gunzip bad.gz; echo $?   # non-zero"},{question:"How can you create a script that automatically decompresses `.gz` files in a watched folder?",shortAnswer:"Use `inotifywait` (Linux) or `fswatch` (macOS) to trigger `gunzip` on new files.",explanation:"Monitor directory and run `gunzip` when a `.gz` file appears.",hint:"Also check `systemd.path` units for production.",level:"expert",codeExample:`inotifywait -m incoming/ -e create --format '%f' | while read f; do gunzip "incoming/$f"; done`},{question:"Why does `gunzip` sometimes produce a file with a different size than expected?",shortAnswer:"The original file size is stored in the gzip footer; `gunzip` restores exactly that size.",explanation:"If you suspect mismatch, the corruption may have altered the footer.",hint:"Use `gzip -l` to compare stored vs actual.",level:"advanced",codeExample:"gzip -l suspect.gz   # compare uncompressed size"}],b=`#!/bin/bash
# gunzip_basic.sh - Basic decompression examples

echo "=== Basic gunzip Usage ==="

# Create a sample file and compress it
echo "Creating test file..."
echo "This is a test file for decompression practice." > sample.txt
for i in {1..100}; do echo "Line $i of repetitive text." >> sample.txt; done
gzip sample.txt
ls -lh sample.txt.gz

echo -e "\\n1. Decompress with gunzip:"
gunzip sample.txt.gz
ls -lh sample.txt

echo -e "\\n2. Recompress and use gzip -d (same as gunzip):"
gzip sample.txt
gzip -d sample.txt.gz
ls -lh sample.txt

echo -e "\\n3. Decompress while keeping .gz (-k):"
gzip sample.txt
gunzip -k sample.txt.gz
ls -lh sample.txt sample.txt.gz

echo -e "\\n4. Decompress to stdout (-c) and redirect:"
gzip -c sample.txt > copy.gz
gunzip -c copy.gz > restored.txt
ls -lh copy.gz restored.txt

# Cleanup
rm -f sample.txt sample.txt.gz copy.gz restored.txt`,v=`#!/bin/bash
# gunzip_options.sh - Exploring decompression options

echo "=== Gunzip Options Demo ==="

# Setup: create compressed files
echo "Creating compressible data..."
for i in {1..200}; do echo "abcdefghijklmnopqrstuvwxyz$i" >> data.txt; done
gzip -k data.txt
echo "Created data.txt and data.txt.gz"

echo -e "\\n1. Test integrity (-t) - checks if file is valid:"
gunzip -t data.txt.gz && echo "✓ File is valid" || echo "✗ File corrupt"

echo -e "\\n2. Force decompression (-f) when output exists:"
cp data.txt.gz data_force.gz
gunzip data_force.gz          # this works (output doesn't exist yet)
echo "First decompression done."
# Now try to decompress again - should fail without -f
cp data.txt.gz data_force.gz
gunzip data_force.gz 2>/dev/null && echo "Unexpected success" || echo "Expected: refuses to overwrite"
echo "With -f:"
gunzip -f data_force.gz && echo "Overwrote existing"

echo -e "\\n3. Verbose output (-v):"
gunzip -v data.txt.gz

echo -e "\\n4. List contents (-l) - shows compressed/uncompressed sizes:"
gzip -l data.txt.gz

echo -e "\\n5. Keep original with -k (already demonstrated):"
gzip -k data.txt
gunzip -k data.txt.gz
echo "Both data.txt and data.txt.gz exist:"
ls -l data.txt*

# Cleanup
rm -f data.txt data.txt.gz data_force.gz`,w=`#!/bin/bash
# gunzip_multiple.sh - Decompressing multiple files

echo "=== Batch Decompression ==="

# Create multiple compressed files
echo "Creating compressed log files..."
for i in {1..5}; do
    echo "Log entry for day $i" > log$i.txt
    for j in {1..50}; do echo "Data line $j" >> log$i.txt; done
    gzip log$i.txt
done
ls -lh *.gz

echo -e "\\n1. Decompress all .gz files at once:"
gunzip *.gz
ls -lh *.txt

echo -e "\\n2. Recompress and decompress with wildcards:"
gzip *.txt
gunzip -v *.gz
echo "Done."

echo -e "\\n3. Using find to decompress recursively:"
mkdir -p deep/folder
echo "Nested file" > deep/test.txt
gzip deep/test.txt
echo "Another" > deep/folder/data.txt
gzip deep/folder/data.txt
find deep -name "*.gz" -exec gunzip {} \\;
find deep -type f -name "*.txt" -ls

echo -e "\\n4. Decompress but skip if output exists (using shell loop):"
gzip -k data.txt 2>/dev/null || echo "Creating data.txt.gz"
for f in *.gz; do
    if [ -f "\${f%.gz}" ]; then
        echo "Skipping $f: output exists"
    else
        gunzip "$f"
    fi
done

# Cleanup
rm -rf log*.txt data.txt data.txt.gz deep/`,j=`#!/bin/bash
# gunzip_scripting.sh - Using gunzip in scripts

echo "=== Scripting with gunzip ==="

# Function to safely decompress with verification
safe_decompress() {
    local archive=$1
    if [ ! -f "$archive" ]; then
        echo "Error: $archive not found"
        return 1
    fi
    
    # Test integrity first
    if gunzip -t "$archive" 2>/dev/null; then
        echo "Integrity check passed for $archive"
        gunzip "$archive"
        echo "Decompressed: \${archive%.gz}"
    else
        echo "ERROR: $archive is corrupt"
        return 1
    fi
}

# Create test archives
echo "Creating test archives..."
echo "Good data" > good.txt
gzip good.txt
echo "Bad data" > bad.txt
gzip bad.txt
# Corrupt one by appending garbage
echo "corrupt" >> bad.txt.gz

echo -e "\\n1. Safe decompression function:"
safe_decompress good.txt.gz
safe_decompress bad.txt.gz

echo -e "\\n2. Extract specific file from a directory of .gz:"
mkdir -p archive_dir
for i in {1..3}; do
    echo "Content $i" > archive_dir/file$i.txt
    gzip archive_dir/file$i.txt
done
# Decompress only file2.gz
gunzip archive_dir/file2.txt.gz
ls -l archive_dir/

echo -e "\\n3. Decompress and send to different directory:"
mkdir output_dir
gunzip -c archive_dir/file1.txt.gz > output_dir/restored.txt
cat output_dir/restored.txt

echo -e "\\n4. Monitor decompression progress for large files (simulate):"
# Using pv if installed
if command -v pv &>/dev/null; then
    dd if=/dev/zero bs=1M count=10 2>/dev/null | gzip > large.gz
    pv large.gz | gunzip > /dev/null
    rm large.gz
else
    echo "Install 'pv' for progress monitoring"
fi

# Cleanup
rm -rf good.txt bad.txt good.txt.gz bad.txt.gz archive_dir output_dir`,D=()=>{const c=new Date().getFullYear()-1998,[s,p]=t.useState("307200"),[l,g]=t.useState(""),[h,d]=t.useState(!1),[i,m]=t.useState(!1),[n,x]=t.useState(!1),[r,u]=t.useState(!1);return t.useEffect(()=>{d(!0),setTimeout(()=>d(!1),300);const o=Math.floor(parseInt(s)*3.5);g(o.toLocaleString())},[s]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-4",children:"📦 The `gunzip` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Decompress files compressed with `gzip` — restore original files from `.gz` archives."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Simulate gunzip decompression"]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Compressed file size (bytes):"}),e.jsx("input",{type:"number",value:s,onChange:o=>p(o.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 font-mono"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:()=>m(!i)}),e.jsx("span",{children:"Keep compressed file (-k)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>x(!n)}),e.jsx("span",{children:"Verbose output (-v)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>u(!r)}),e.jsx("span",{children:"Test mode (-t, no output)"})]})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsxs("span",{children:["gunzip ",i?"-k ":"",n?"-v ":"",r?"-t ":"","archive.gz"]})]}),r?e.jsx("pre",{className:"transition-opacity duration-300",children:"✅ Integrity check passed: archive.gz is valid."}):e.jsxs("pre",{className:f("transition-opacity duration-300",h?"opacity-70":"opacity-100"),children:[n?`archive.gz:     ${parseInt(s).toLocaleString()} bytes -> ${l} bytes, ${Math.round(parseInt(l.replace(/,/g,""))/parseInt(s)*100)}% expansion
`:"",i?`Compressed file kept: archive.gz
`:"Compressed file removed: archive.gz → archive","Decompressed file: archive"]})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 `gunzip` is identical to `gzip -d` — it restores the original file from its `.gz` version."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `gunzip`?"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"gunzip"})," (GNU unzip) is the decompression counterpart of `gzip`. It restores files compressed with `gzip`, `.gz`, `.z`, `.tgz`, or `.taz` formats."]}),e.jsx("p",{children:"By default, `gunzip` replaces the compressed file with the original decompressed version, preserving timestamps and permissions. It's essential for restoring logs, backups, and software packages."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"gunzip [ -acfhlLnNrtvV ] [ -S suffix ] [ name ... ]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Decompress files created by `gzip`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Exit 0 on success, non-zero on error (corrupt file, wrong format)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," Whenever you receive or need to restore a `.gz` compressed file."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Restoring rotated logs:"})," ",e.jsx("code",{className:"text-sm",children:"gunzip /var/log/syslog.1.gz"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extracting software source:"})," ",e.jsx("code",{className:"text-sm",children:"gunzip -c source.tar.gz | tar xf -"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Recovering backed up data:"})," Decompress database dumps before import."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Viewing compressed files without extracting:"})," `zcat` internally uses `gunzip -c`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Checking integrity of downloaded archives:"})," `gunzip -t file.gz`."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keep compressed file after decompression:"})," `gunzip -k file.gz` (GNU)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test before decompressing:"})," `gunzip -t file.gz` ensures the archive isn't corrupt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Decompress to stdout:"})," `gunzip -c file.gz ",">"," output` preserves original archive."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Decompress multiple files:"})," `gunzip *.gz` decompresses all at once."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Force overwrite:"})," `gunzip -f file.gz` if output file already exists."]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `gunzip` Restores a File"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. Compressed file"}),e.jsx("text",{x:"100",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"archive.gz (300 KB)"}),e.jsx("line",{x1:"180",y1:"70",x2:"230",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow7)"}),e.jsx("rect",{x:"240",y:"30",width:"160",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"320",y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"13",fontWeight:"bold",children:"2. Read .gz header"}),e.jsx("text",{x:"320",y:"70",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Extract metadata"}),e.jsx("text",{x:"320",y:"85",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"(original name, timestamp)"}),e.jsx("line",{x1:"400",y1:"70",x2:"450",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow7)"}),e.jsx("rect",{x:"460",y:"30",width:"160",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"540",y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"13",fontWeight:"bold",children:"3. Inflate DEFLATE"}),e.jsx("text",{x:"540",y:"70",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"LZ77 decompression"}),e.jsx("text",{x:"540",y:"85",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Huffman decoding"}),e.jsx("line",{x1:"620",y1:"70",x2:"670",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow7)"}),e.jsx("rect",{x:"680",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"750",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Original file"}),e.jsx("text",{x:"750",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"archive (1 MB)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow7",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:".gz → header → inflate → original file"}),e.jsx("rect",{x:"680",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"720",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Restored"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(a,{fileModule:b,title:"Basic Decompression",highlightLines:[4,9]}),e.jsx(a,{fileModule:v,title:"Decompression Options (-c, -k, -t, -f)",highlightLines:[6,12,18]}),e.jsx(a,{fileModule:w,title:"Batch Decompression",highlightLines:[5,12]}),e.jsx(a,{fileModule:j,title:"Scripting with gunzip",highlightLines:[10,18,26]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that `gunzip` removes the `.gz` file by default:"})," Use `-k` to keep it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attempting to decompress non-gzip files:"})," `gunzip` will fail and leave the file unchanged."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overwriting existing files without warning:"})," Use `-f` to force, but be careful."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using `gunzip` on `.tar.gz` expecting a directory:"})," It decompresses to a `.tar` file; then use `tar xf`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not testing integrity before decompressing large files:"})," Always `gunzip -t` first."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always test compressed files before decompressing:"})," `gunzip -t archive.gz`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use `-c` to keep the original when you need to inspect content:"})," `gunzip -c archive.gz | less`."]}),e.jsx("li",{children:e.jsx("strong",{children:"When decompressing multiple files, use `*.gz` after verifying."})}),e.jsx("li",{children:e.jsx("strong",{children:"Preserve original by using `-k` if you need both versions."})}),e.jsx("li",{children:e.jsx("strong",{children:"Combine with `tar` to directly extract: `tar -xzf archive.tar.gz` (automatically gunzips)."})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"What happens if you run `gunzip` twice on the same `.gz` file?"}),e.jsx("li",{children:"How would you decompress a file to a different name than the original?"}),e.jsx("li",{children:"Why might you want to keep the compressed file after decompressing?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can decompress a `.gz` file with `gunzip`."}),e.jsx("li",{children:"✅ Knows that original `.gz` is removed by default."}),e.jsx("li",{children:"✅ Can keep compressed file using `-k`."}),e.jsx("li",{children:"✅ Can test integrity with `-t`."}),e.jsx("li",{children:"✅ Can decompress to stdout with `-c`."}),e.jsx("li",{children:"✅ Understands difference between `gunzip` and `tar -xzf`."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(z,{title:"Frequently Asked Questions about gunzip Command",questions:y})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",c," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"})," Have students download a `.tar.gz` file from the internet, then decompress it step by step: first `gunzip`, then `tar xf`. Then show the combined `tar -xzf` shortcut. This demystifies the two-step process."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"})," Emphasize that `gunzip` is exactly `gzip -d`. Many students confuse it with `unzip` (for `.zip` files). Show examples of each and note the different creators (gzip vs PKZIP)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that finds all `.gz` files in a directory, tests them with `gunzip -t`, and moves corrupt ones to a `corrupt/` folder. This simulates an integrity checker for backups."]})]})]})})]})};export{D as default};

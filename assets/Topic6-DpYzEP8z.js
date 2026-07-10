import{r as s,j as e}from"./index-DKhGj2r9.js";import{c as z}from"./clsx-B-dksMZM.js";import{S as o}from"./ShellFileLoader-CkLhfsR3.js";import{F as y}from"./FAQTemplate-DNMa4yDj.js";import"./prism-CMJExfNS.js";const b=[{question:"What does `gzip` stand for and what does it do?",shortAnswer:"GNU zip – a file compression utility that reduces file size using DEFLATE algorithm.",explanation:"`gzip` compresses single files, replacing the original with a `.gz` extension by default.",hint:"It's similar to WinZip but command-line and standard on Unix.",level:"basic",codeExample:"gzip myfile.txt   # creates myfile.txt.gz"},{question:"How can you compress a file while keeping the original?",shortAnswer:"Use `gzip -k file` or `gzip -c file > file.gz`.",explanation:"`-k` (keep) is GNU extension; `-c` writes to stdout and you redirect to a new file.",hint:"`-k` is simpler; `-c` is portable.",level:"intermediate",codeExample:"gzip -k data.txt   # keeps data.txt and creates data.txt.gz"},{question:"What is the default compression level of `gzip`?",shortAnswer:"6 (range 1-9, where 1 is fastest, 9 is best compression).",explanation:"Level 6 balances speed and compression ratio. Higher levels use more CPU but produce smaller files.",hint:"`gzip -1` for quick compression, `-9` for archives.",level:"basic",codeExample:"gzip -9 largefile.txt   # best compression"},{question:"How do you decompress a `.gz` file?",shortAnswer:"Use `gunzip file.gz` or `gzip -d file.gz`.",explanation:"Both restore the original file and remove the `.gz` extension.",hint:"`gunzip` is equivalent to `gzip -d`.",level:"basic",codeExample:"gunzip archive.gz   # restores archive"},{question:"Why does `gzip` not compress directories?",shortAnswer:"`gzip` only compresses individual files; directories need to be archived first using `tar`.",explanation:"Combine `tar` and `gzip` to create `.tar.gz` archives.",hint:"Use `tar -czf archive.tar.gz directory/`.",level:"intermediate",codeExample:"tar -czf backup.tar.gz /home/user/data/"},{question:"How can you see the contents of a `.gz` file without decompressing?",shortAnswer:"Use `zcat file.gz` or `gzip -dc file.gz`.",explanation:"`zcat` outputs the decompressed data to stdout; `gzcat` on some systems.",hint:"Pipe to `less` for viewing: `zcat file.gz | less`.",level:"intermediate",codeExample:"zcat logfile.gz | grep 'error'"},{question:"What does `gzip -t` do?",shortAnswer:"Tests the integrity of a compressed file without decompressing it.",explanation:"Returns exit code 0 if the file is valid, non-zero if corrupt.",hint:"Use before deleting originals to ensure backup is valid.",level:"advanced",codeExample:"gzip -t important.gz && echo 'OK'"},{question:"How can you compress multiple files into a single `.gz`?",shortAnswer:"You cannot directly; you must first archive them with `tar`, then compress the tar.",explanation:"`tar` combines files into one stream; `gzip` compresses that stream.",hint:"`tar -czf archive.tar.gz file1 file2 file3`",level:"advanced",codeExample:"tar -czf allfiles.tar.gz *.txt"},{question:"What is the difference between `gzip` and `zip`?",shortAnswer:"`gzip` compresses single files; `zip` compresses multiple files into a single archive (with directory structure).",explanation:"`gzip` uses DEFLATE; `zip` also uses DEFLATE but includes file metadata and can store multiple entries.",hint:"`gzip` is common on Unix; `zip` is more cross-platform.",level:"intermediate",codeExample:"zip archive.zip file1 file2   # vs gzip file1; gzip file2"},{question:"How can you see the compression ratio achieved by `gzip`?",shortAnswer:"Use `gzip -l file.gz` or `gzip -v` during compression.",explanation:"`-l` lists compressed size, uncompressed size, ratio, and filename.",hint:"`gzip -l` works on `.gz` files only.",level:"intermediate",codeExample:"gzip -l data.gz"},{question:"Why does `gzip` sometimes produce a file larger than the original?",shortAnswer:"For very small files or already compressed data, the overhead of the gzip header and Huffman tables can outweigh savings.",explanation:"Compression works best on repetitive data; random or pre-compressed data may expand slightly.",hint:"Use `gzip` only on text, logs, or uncompressed formats.",level:"advanced",codeExample:"echo 'abc' | gzip > small.gz; ls -l small.gz   # may be larger"},{question:"How can you compress a file to a specific naming suffix?",shortAnswer:"Use `-S .suffix` or redirect output: `gzip -c file > file.custom`.",explanation:"The default suffix is `.gz`; you can change it but standard tools expect `.gz`.",hint:"Not recommended unless you have a specific need.",level:"expert",codeExample:"gzip -S .z file.txt   # creates file.txt.z"},{question:"What is `pigz` and how is it different from `gzip`?",shortAnswer:"`pigz` (parallel gzip) compresses using multiple threads for speed on multi-core systems.",explanation:"`pigz` produces the same format as `gzip` and is a drop-in replacement for faster compression.",hint:"Install `pigz` for large files on servers with many cores.",level:"expert",codeExample:"pigz -9 largefile.txt"},{question:"Can `gzip` compress from stdin and output to stdout?",shortAnswer:"Yes, `gzip -c` reads stdin and writes to stdout; often used in pipelines.",explanation:"Example: `tar cf - dir | gzip -c > dir.tar.gz`",hint:"This is how `tar -z` works internally.",level:"advanced",codeExample:"cat largefile.txt | gzip -c > file.gz"},{question:"How do you force `gzip` to overwrite existing output files?",shortAnswer:"Use `-f` (force) option.",explanation:"Without `-f`, `gzip` will refuse to overwrite an existing compressed file.",hint:"`gzip -f file.txt` overwrites file.txt.gz.",level:"intermediate",codeExample:"gzip -f already_compressed.txt"},{question:"What does the `-n` option do in `gzip`?",shortAnswer:"Prevents storing the original filename and timestamp in the compressed file.",explanation:"Useful for anonymizing or when the original name is irrelevant; results in slightly smaller output.",hint:"`-N` (opposite) stores the name (default).",level:"expert",codeExample:"gzip -n secret.log   # no original name stored"},{question:"Why does `gzip` remove the original file by default?",shortAnswer:"Historical design to save disk space; it's assumed you don't need the uncompressed version after compression.",explanation:"Use `-k` (keep) if you want to retain the original.",hint:"Back up important files before compression.",level:"basic",codeExample:"gzip -k mydata.csv   # keeps mydata.csv"},{question:"How can you recursively compress all files in a directory tree?",shortAnswer:"Use `find` in combination with `gzip` or `tar -czf`.",explanation:"`find . -type f -exec gzip {} \\;` compresses each file individually.",hint:"To create a single archive, use `tar -czf archive.tar.gz dir/`.",level:"advanced",codeExample:"find logs/ -name '*.log' -exec gzip {} \\;"},{question:"What is the difference between `gzip -d` and `gunzip`?",shortAnswer:"No difference; `gunzip` is often a symlink to `gzip -d`.",explanation:"Both decompress `.gz` files.",hint:"Use whichever is more memorable.",level:"basic",codeExample:"gzip -d file.gz   # same as gunzip file.gz"},{question:"How can you view the last few lines of a compressed log file?",shortAnswer:"`zcat file.gz | tail` or `gzip -dc file.gz | tail`.",explanation:"`zcat` is a shortcut for `gzip -dc`.",hint:"`zless` and `zmore` also work for paging.",level:"intermediate",codeExample:"zcat syslog.gz | tail -20"},{question:"What does the `--rsyncable` option do (GNU gzip)?",shortAnswer:"Makes the compressed output more friendly to `rsync` by reducing changes between similar compressed versions.",explanation:"Useful for backups where you ry sync incremental changes.",hint:"Adds a small overhead but improves rsync efficiency.",level:"expert",codeExample:"gzip --rsyncable data.log"},{question:"How can you apply `gzip` to a device file (e.g., `/dev/sda`)?",shortAnswer:"You can but it's rarely useful; use `dd if=/dev/sda | gzip > sda.gz`.",explanation:"Compresses the entire raw device; can restore with `gunzip -c sda.gz | dd of=/dev/sda`.",hint:"Extremely dangerous if misused.",level:"expert",codeExample:"dd if=/dev/zero bs=1M count=10 | gzip > zeros.gz"},{question:"Why does `gzip` on a JPEG or MP4 file not reduce size much?",shortAnswer:"Because those formats are already compressed using specialized algorithms (lossy).",explanation:"`gzip` expects redundancy; modern media formats have very little redundancy.",hint:"Only compress uncompressed data (text, logs, raw audio) for significant gains.",level:"intermediate",codeExample:"gzip photo.jpg   # negligible reduction"},{question:"How can you change the suffix created by `gzip`?",shortAnswer:"Use `-S .suffix`. Example: `gzip -S .z file.txt` produces `file.txt.z`.",explanation:"Standard tools expect `.gz`, so only use if you have custom needs.",hint:"Most decompression tools still work if you rename to `.gz`.",level:"expert",codeExample:"gzip -S .compressed data.bin"},{question:"What is the maximum compression level in `gzip` and is higher always better?",shortAnswer:"Level 9 is maximum; higher gives smaller files but much slower compression.",explanation:"For very large files, level 9 may be worth it; for small files, default 6 is fine.",hint:"Time your compression to see if level 9 is worth the wait.",level:"intermediate",codeExample:"time gzip -9 bigfile.txt"},{question:"How do you compress a file but keep both the original and the compressed version in a script?",shortAnswer:"Use `gzip -k` or `gzip -c` with redirection.",explanation:"`-k` is simplest; `-c` is more portable.",hint:"Check if `-k` is supported (GNU gzip does, BSD may not).",level:"intermediate",codeExample:"gzip -k data.txt || gzip -c data.txt > data.txt.gz"},{question:"What is the difference between `gzip` and `bzip2`?",shortAnswer:"`bzip2` compresses more effectively (smaller output) but is slower than `gzip`.",explanation:"`bzip2` uses Burrows-Wheeler transform; `gzip` uses LZ77. For archival, `xz` is even better.",hint:"Use `bzip2` for maximum compression where speed isn't critical.",level:"advanced",codeExample:"bzip2 -k file.txt   # creates file.txt.bz2"},{question:"How can you compress a file and see the progress?",shortAnswer:"Use `pv` (pipe viewer) with `gzip`: `pv file | gzip > file.gz`.",explanation:"`pv` shows progress, ETA, and throughput.",hint:"Install `pv` if not present; great for large files.",level:"expert",codeExample:"pv bigfile.log | gzip > bigfile.log.gz"},{question:"What happens if you `gzip` a symbolic link?",shortAnswer:"By default, `gzip` follows the link and compresses the target file, replacing the symlink with a compressed file.",explanation:"Use `-f` cautiously; to compress the link itself, you would need to archive first.",hint:"Backup symlinks with `tar` instead.",level:"advanced",codeExample:"ln -s realfile.txt link.txt; gzip link.txt   # compresses realfile.txt"},{question:"How can you preserve timestamps when compressing?",shortAnswer:"`gzip` by default preserves the original file's timestamp in the gzip header; use `-n` to disable.",explanation:"Decompression with `gunzip` restores the timestamp unless `-n` was used.",hint:"Test with `stat` before and after.",level:"intermediate",codeExample:"gzip file.txt; gunzip file.txt.gz; stat file.txt   # same timestamp"}],v=`#!/bin/bash
# gzip_basic.sh - Basic compression examples

echo "=== Basic gzip Usage ==="

# Create a test file
echo "Creating test file with repetitive text..."
for i in {1..100}; do echo "This is line $i of repetitive text for compression testing."; done > test.txt
ls -lh test.txt

echo -e "\\n1. Compress test.txt (default level 6):"
gzip test.txt
ls -lh test.txt.gz

echo -e "\\n2. Decompress back to original:"
gunzip test.txt.gz
ls -lh test.txt

echo -e "\\n3. Compress while keeping original (-k):"
gzip -k test.txt
ls -lh test.txt test.txt.gz

echo -e "\\n4. Compress to custom output name using -c:"
gzip -c test.txt > custom.gz
ls -lh custom.gz

echo -e "\\n5. Display compression stats with -v:"
gzip -v -c test.txt > /dev/null

# Cleanup
rm -f test.txt test.txt.gz custom.gz`,w=`#!/bin/bash
# gzip_options.sh - Exploring compression levels and options

echo "=== Gzip Options Demo ==="

# Create a test file
dd if=/dev/urandom of=random.bin bs=1M count=5 2>/dev/null
echo "Created random.bin (5MB) - hard to compress"

echo -e "\\nCreating highly compressible text file..."
for i in {1..1000}; do echo "abcdefghijklmnopqrstuvwxyz$i"; done > text.txt
ls -lh text.txt

echo -e "\\n1. Fastest compression (level 1):"
time gzip -1 -c text.txt > text_level1.gz
ls -lh text_level1.gz

echo -e "\\n2. Default compression (level 6):"
time gzip -6 -c text.txt > text_level6.gz
ls -lh text_level6.gz

echo -e "\\n3. Best compression (level 9):"
time gzip -9 -c text.txt > text_level9.gz
ls -lh text_level9.gz

echo -e "\\n4. Test integrity (-t):"
gzip -t text_level9.gz && echo "File is valid"

echo -e "\\n5. List compressed file info with -l:"
gzip -l text_level9.gz

# Cleanup
rm -f random.bin text.txt text_level*.gz`,j=`#!/bin/bash
# gzip_multiple.sh - Compressing multiple files

echo "=== Multiple File Compression ==="

# Create multiple files
for f in file1.log file2.log file3.log; do
    echo "Log entry for $(date)" > $f
    for i in {1..100}; do echo "Data line $i" >> $f; done
done
echo "Created file1.log, file2.log, file3.log"

echo -e "\\n1. Compressing multiple files one by one:"
gzip -v file1.log file2.log file3.log
ls -lh *.gz

echo -e "\\n2. Decompress all .gz files:"
gunzip -v *.gz
ls -lh *.log

echo -e "\\n3. Using wildcards: compress all .log files"
gzip *.log
ls -lh *.gz

echo -e "\\n4. Recursive compression with find:"
mkdir -p testdir/subdir
echo "Content" > testdir/fileA.txt
echo "Content" > testdir/subdir/fileB.txt
find testdir -name "*.txt" -exec gzip {} \\;
find testdir -name "*.gz" -ls

# Cleanup
rm -rf testdir file*.log *.gz`,k=`#!/bin/bash
# gzip_scripting.sh - Using gzip in scripts

echo "=== Scripting with gzip ==="

# Function to compress a file with timestamp
compress_with_timestamp() {
    local file=$1
    if [ -f "$file" ] && [ ! -f "$file.gz" ]; then
        gzip -k "$file"
        echo "$(date): Compressed $file" >> compress.log
        echo "Compressed: $file"
    else
        echo "Skipping $file (already compressed or missing)"
    fi
}

# Create sample files
echo "Creating sample files..."
for i in {1..5}; do
    echo "Data for file $i" > "data_$i.txt"
done

echo -e "\\n1. Conditional compression:"
for f in data_*.txt; do
    compress_with_timestamp "$f"
done

echo -e "\\n2. Compress only if size > 1KB (simulate):"
for f in data_*.txt.gz; do
    size=$(stat -c%s "$f")
    if [ $size -gt 1024 ]; then
        echo "$f is already >1KB (not compressing further)"
    else
        echo "$f is small"
    fi
done

echo -e "\\n3. Backup old logs (older than 7 days):"
# Simulate old files
touch -t 202503010000 old_log.log
touch new_log.log
find . -name "*.log" -type f -mtime +7 -exec gzip {} \\; 2>/dev/null
echo "Compressed old logs:"
ls -l *.gz 2>/dev/null

echo -e "\\n4. Cleanup compressed files older than 30 days:"
# find . -name "*.gz" -type f -mtime +30 -delete
echo "(Simulated: would delete old gz files)"

echo -e "\\nLog entries:"
cat compress.log

# Cleanup
rm -f data_*.txt data_*.gz old_log.log new_log.log compress.log`,q=()=>{const c=new Date().getFullYear()-1998,[i,p]=s.useState(6),[t,g]=s.useState("1048576"),[a,h]=s.useState(""),[m,d]=s.useState(!1),[r,x]=s.useState(!1),[l,f]=s.useState(!1);return s.useEffect(()=>{d(!0),setTimeout(()=>d(!1),300);const n=1-i/20,u=Math.floor(parseInt(t)*Math.max(.1,n));h(u.toLocaleString())},[i,t]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-4",children:"🗜️ The `gzip` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Compress files to save disk space and bandwidth — using the Lempel-Ziv (LZ77) compression algorithm."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Simulate gzip compression"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Original file size (bytes):"}),e.jsx("input",{type:"number",value:t,onChange:n=>g(n.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 font-mono"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Compression level (1-9):"}),e.jsx("input",{type:"range",min:"1",max:"9",value:i,onChange:n=>p(parseInt(n.target.value)),className:"w-full"}),e.jsxs("div",{className:"text-center text-sm",children:[i," (1=fast, 9=best)"]})]})]}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>x(!r)}),e.jsx("span",{children:"Keep original file (-k)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:l,onChange:()=>f(!l)}),e.jsx("span",{children:"Verbose output (-v)"})]})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsxs("span",{children:["gzip ",r?"-k ":"",l?"-v ":"","-",i," data.bin"]})]}),e.jsxs("pre",{className:z("transition-opacity duration-300",m?"opacity-70":"opacity-100"),children:[l?`data.bin:      ${parseInt(t).toLocaleString()} bytes -> ${a} bytes, ${Math.round((1-parseInt(a.replace(/,/g,""))/parseInt(t))*100)}% reduction
`:"",r?`Original file kept: data.bin
`:"Original file removed: data.bin → data.bin.gz","Compressed file: data.bin.gz"]})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 `gzip` compresses a single file; use `tar` for directories."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `gzip`?"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"gzip"})," (GNU zip) is a file compression utility that uses the DEFLATE algorithm (LZ77 + Huffman coding). It reduces file sizes, typically by 60-80% for text files."]}),e.jsx("p",{children:"By default, `gzip` replaces the original file with a compressed version (appending `.gz`), preserving timestamps and permissions. It's widely used for log rotation, software distribution, and backups."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"gzip [ -acdfhklLnNrtvV19 ] [ -S suffix ] [ name ... ]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Compress files using DEFLATE algorithm."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Exit 0 on success, non-zero on error."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," To save disk space, reduce network transfer size, or prepare files for archiving."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Log compression:"})," Rotate and compress old logs: ",e.jsx("code",{className:"text-sm",children:"gzip /var/log/syslog.1"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web servers:"})," Serve pre-compressed static files (`.gz` versions) to save bandwidth."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Backup scripts:"})," Compress database dumps before transferring to remote storage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Package distribution:"})," Source code tarballs are often `.tar.gz` (compressed with gzip)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email attachments:"})," Reduce size before sending."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Best compression level:"})," `-9` gives smallest size (slower); `-1` is fastest; level `6` is default."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep original file:"})," `gzip -k file.txt` (GNU gzip) or `gzip -c file.txt > file.txt.gz`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test integrity:"})," `gzip -t file.gz` checks if the archive is valid."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"View compressed content:"})," `zcat file.gz | less` or `gzip -dc file.gz`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compress only if new:"})," Use with `-n` to avoid storing original filename timestamp."]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `gzip` Compresses a File"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. Original file"}),e.jsx("text",{x:"100",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"data.txt (1 MB)"}),e.jsx("line",{x1:"180",y1:"70",x2:"230",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow6)"}),e.jsx("rect",{x:"240",y:"30",width:"160",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"320",y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"13",fontWeight:"bold",children:"2. LZ77 + Huffman"}),e.jsx("text",{x:"320",y:"70",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Find repeating patterns"}),e.jsx("text",{x:"320",y:"85",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Build Huffman tree"}),e.jsx("line",{x1:"400",y1:"70",x2:"450",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow6)"}),e.jsx("rect",{x:"460",y:"30",width:"160",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"540",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. DEFLATE"}),e.jsx("text",{x:"540",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"encode + write .gz"}),e.jsx("line",{x1:"620",y1:"70",x2:"670",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow6)"}),e.jsx("rect",{x:"680",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"750",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Compressed"}),e.jsx("text",{x:"750",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"data.txt.gz (300 KB)"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow6",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Original → pattern detection → encoding → compressed output"}),e.jsx("rect",{x:"680",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"720",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Smaller"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(o,{fileModule:v,title:"Basic Compression",highlightLines:[4,9]}),e.jsx(o,{fileModule:w,title:"Compression Levels & Options",highlightLines:[6,12,18]}),e.jsx(o,{fileModule:j,title:"Compressing Multiple Files",highlightLines:[5,10,15]}),e.jsx(o,{fileModule:k,title:"Scripting with gzip",highlightLines:[8,16,22]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Losing original files:"})," By default, `gzip` removes the original. Use `-k` or redirect output."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compressing already compressed files:"})," `gzip` on a `.jpg` or `.mp4` yields little to no gain."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using `-c` when scripting:"})," Without `-c`, you lose the original. Use `gzip -c file ",">"," file.gz`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting that `gzip` only works on single files:"})," Directories require `tar` first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `.gz` is always smaller:"})," Very small files or already compressed data may increase in size due to overhead."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keep original when uncertain:"})," Use `gzip -k important.txt`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test compressed file integrity:"})," `gzip -t archive.gz` before deleting originals."]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `gzip -9` for archival (best ratio) and `-1` for temporary files."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with `find` for batch compression:"}),' `find . -name "*.log" -exec gzip '," \\;`"]}),e.jsx("li",{children:e.jsx("strong",{children:"For logs, use `logrotate` which handles compression natively."})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Why does compressing a `.jpg` image not reduce its size significantly?"}),e.jsx("li",{children:"What happens if you run `gzip` on a file and then `gzip` on the resulting `.gz`?"}),e.jsx("li",{children:"How would you compress all `.txt` files in a directory while keeping originals?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can compress a file with `gzip filename`."}),e.jsx("li",{children:"✅ Knows that original file is replaced by default."}),e.jsx("li",{children:"✅ Can keep original using `-k` or `-c`."}),e.jsx("li",{children:"✅ Can adjust compression level (`-1` to `-9`)."}),e.jsx("li",{children:"✅ Can test integrity with `-t`."}),e.jsx("li",{children:"✅ Understands that gzip is for single files; use tar for directories."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(y,{title:"Frequently Asked Questions about gzip Command",questions:b})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",c," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"})," Demonstrate compression by creating a large text file (e.g., `dd if=/dev/zero of=big.txt bs=1M count=10`), then compressing it with `gzip`. Show the size difference and explain that text has high redundancy. Also show a JPEG to illustrate incompressibility."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"})," Students often panic when their original file disappears after `gzip`. Emphasize the `-k` option and that `gunzip` restores it. Also mention that `gzip` is single-threaded; for multi-core compression, use `pigz`."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"}),' Write a script that compresses all files older than 7 days in `/var/log`, but only if they are not already compressed. Use `find`, `gzip`, and test with `-name "*.gz"` exclusion.']})]})]})})]})};export{q as default};

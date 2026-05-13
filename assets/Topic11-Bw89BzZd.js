import{r as s,j as e}from"./index-D_KlGz35.js";import{c as u}from"./clsx-B-dksMZM.js";import{S as o}from"./ShellFileLoader-Cv_pQpcZ.js";import{F as b}from"./FAQTemplate-CsMtakS5.js";import"./prism-CzgMi0DF.js";const v=[{question:"What does `tar -czf` do?",shortAnswer:"Creates a compressed archive using gzip (.tar.gz).",explanation:"c = create, z = gzip, f = file. It archives and compresses in one step.",hint:"Commonly used for source code distribution.",level:"basic",codeExample:"tar -czf archive.tar.gz /path/to/dir"},{question:"How do you extract a .tar.gz file?",shortAnswer:"`tar -xzf archive.tar.gz` or simply `tar -xf archive.tar.gz` (auto-detects).",explanation:"x = extract, z = gzip decompress, f = file. Most modern tar auto-detects compression method.",hint:"`tar -xf` works for .tar.gz, .tar.bz2, and .tar.xz.",level:"basic",codeExample:"tar -xzf archive.tar.gz"},{question:"What is the difference between .tar.gz and .tgz?",shortAnswer:"No difference; .tgz is a shorthand for .tar.gz.",explanation:"Both represent a tar archive compressed with gzip.",hint:"Windows sometimes prefers .tgz for short filenames.",level:"basic",codeExample:"tar -czf archive.tgz folder/"},{question:"What flag creates a .tar.bz2 archive?",shortAnswer:"`-j` instead of `-z`: `tar -cjf archive.tar.bz2 dir/`",explanation:"bzip2 generally gives better compression than gzip but is slower.",hint:"Think 'j' for bzip2 (mnemonic: 'j' follows 'g'?).",level:"intermediate",codeExample:"tar -cjf backup.tar.bz2 /home/user"},{question:"How do you create a .tar.xz archive?",shortAnswer:"Use `-J` flag: `tar -cJf archive.tar.xz dir/`",explanation:"xz provides the highest compression ratio but is slower.",hint:"Capital J for xz (since 'j' taken by bzip2).",level:"intermediate",codeExample:"tar -cJf images.tar.xz pictures/"},{question:"Which compression method gives the smallest file size?",shortAnswer:"xz typically gives the smallest size, followed by bzip2, then gzip.",explanation:"Trade-off: xz is slowest to compress/decompress, gzip fastest.",hint:"For long-term archives, use xz; for frequent transfers, use gzip.",level:"intermediate",codeExample:"time tar -cJf archive.tar.xz data/   # slower but smaller"},{question:"Can tar extract a compressed archive without specifying the method?",shortAnswer:"Yes, with GNU tar: `tar -xf archive.tar.xz` auto-detects compression.",explanation:"It reads the magic bytes to determine gzip, bzip2, or xz.",hint:"Useful in scripts where compression method may vary.",level:"advanced",codeExample:"tar -xf archive.tar.bz2   # auto-detects bzip2"},{question:"How do you set the compression level when using tar?",shortAnswer:"Use `--use-compress-program` or set environment variable, e.g., `tar -czf - --use-compress-program='gzip -9'`.",explanation:"Alternatively, pipe to external compressor: `tar -cf - dir | gzip -9 > archive.tar.gz`.",hint:"Default compression level is usually 6.",level:"expert",codeExample:"tar -czf - data/ | gzip -9 > best.tar.gz"},{question:"What is the advantage of compressing a tar archive over compressing files individually?",shortAnswer:"Tar compresses the entire stream, allowing better redundancy detection across files.",explanation:"Similar files across the archive can be compressed together, improving ratio.",hint:"Tar + compression leverages cross-file similarities.",level:"advanced",codeExample:"tar -czf together.tar.gz *.txt   # better than zip each txt"},{question:"How do you exclude directories when creating a compressed tar?",shortAnswer:"Use `--exclude` pattern: `tar -czf backup.tar.gz /home --exclude='*.mp4' --exclude='Downloads'`",explanation:"Exclude patterns use shell wildcards, can be multiple.",hint:"Use `--exclude-vcs` to skip .git/.svn directories.",level:"advanced",codeExample:"tar -czf project.tar.gz myproject --exclude='node_modules'"},{question:"Why might my `.tar.gz` file be larger than the original directory?",shortAnswer:"If the data is already compressed (JPEG, MP4, ZIP), or very small files, overhead may increase size.",explanation:"Tar headers add 512 bytes per file; compression can't reduce random data.",hint:"Use `tar -cf - | gzip` but skip compression if no gain.",level:"advanced",codeExample:"tar -cf uncompressed.tar photos/   # may be smaller than .tar.gz"},{question:"How can you view the contents of a .tar.gz without extracting?",shortAnswer:"`tar -tzf archive.tar.gz` or `tar -tf archive.tar.gz`.",explanation:"`-t` lists, `-z` handles gzip decompression on the fly.",hint:"Add `-v` for detailed listing.",level:"intermediate",codeExample:"tar -tzf archive.tar.gz | grep readme"},{question:"How do you extract a single file from a compressed tar?",shortAnswer:"`tar -xzf archive.tar.gz path/to/file`",explanation:"Provide the exact path as listed by `tar -tzf`.",hint:"Use quotes if filename has spaces.",level:"advanced",codeExample:"tar -xzf backup.tar.gz home/user/important.txt"},{question:"What is parallel compression with tar?",shortAnswer:"Using `pigz`, `pbzip2`, or `xz -T` to compress in parallel across multiple CPU cores.",explanation:"Example: `tar -cf - data | pigz -9 > archive.tar.gz`",hint:"Dramatically speeds up compression on multi-core systems.",level:"expert",codeExample:"tar -cf - logs/ | pigz -p 4 > logs.tar.gz"},{question:"How do you create an encrypted compressed tar archive?",shortAnswer:"Pipe to `gpg`: `tar -czf - data | gpg -c > data.tar.gz.gpg`",explanation:"Decrypt: `gpg -d data.tar.gz.gpg | tar -xzf -`",hint:"Use `-c` for symmetric password encryption.",level:"expert",codeExample:"tar -czf - secrets/ | gpg --symmetric --cipher-algo AES256 > secrets.tar.gz.gpg"},{question:"What happens if you run `tar -czf archive.tar.gz directory/` and directory changes during archiving?",shortAnswer:"Tar will archive files as they were when opened; warnings may appear.",explanation:"Use `--warning=no-file-changed` to suppress, but data may be inconsistent.",hint:"For live data, consider snapshots or rsync first.",level:"expert",codeExample:"tar -czf backup.tar.gz --warning=no-file-changed /active/dir"},{question:"How do you split a large .tar.gz into smaller parts?",shortAnswer:"Use `split`: `tar -czf - bigdir | split -b 50m - archive.part.`",explanation:"Recombine: `cat archive.part.* | tar -xzf -`",hint:"Useful for transferring large archives via email or USB.",level:"advanced",codeExample:"split -b 100m archive.tar.gz 'archive.part'"},{question:"Why use `tar -cf - . | ssh user@host 'tar -xf -'`?",shortAnswer:"Streams a compressed (or uncompressed) tar over SSH without intermediate file.",explanation:"Common for remote backups and migrations.",hint:"Add `z` for compression before sending: `tar -czf - . | ssh host 'tar -xzf -'`",level:"expert",codeExample:"tar -czf - /home | ssh backup@server 'cat > home_backup.tar.gz'"},{question:"What does `tar --delete` do?",shortAnswer:"Deletes files from a tar archive (cannot be used on compressed tar).",explanation:"You must decompress first, delete, then recompress.",hint:"Works only on uncompressed `.tar`.",level:"expert",codeExample:"tar -f archive.tar --delete file.txt"},{question:"How can you verify the integrity of a .tar.gz file?",shortAnswer:"`tar -tzf archive.tar.gz > /dev/null` returns 0 if all headers are valid.",explanation:"Does not check data integrity fully; use `gzip -t` for gzip layer, but tar only checks structure.",hint:"Combine with `gzip -t archive.tar.gz && tar -tzf archive.tar.gz`",level:"advanced",codeExample:"gzip -t archive.tar.gz && echo 'gzip OK'"},{question:"What is the maximum size for a .tar.gz archive?",shortAnswer:"Limited by file system and tar format (GNU tar supports large files > 4GB with POSIX extensions).",explanation:"Modern tar handles terabytes; ensure you use `--format=posix` for huge archives.",hint:"Use `--format=gnu` if you have very large UIDs/GIDs.",level:"expert",codeExample:"tar --format=posix -czf huge.tar.gz /data"},{question:"How do you add files to an existing .tar.gz without recreating?",shortAnswer:"You cannot directly. Decompress to .tar, append with `tar -r`, then recompress.",explanation:"Compressed archives are not directly updatable; consider using `zip` if updates frequent.",hint:"`gunzip archive.tar.gz; tar -rf archive.tar newfile; gzip archive.tar`",level:"expert",codeExample:"gunzip archive.tar.gz && tar -rf archive.tar newfile && gzip archive.tar"},{question:"What does `tar -tvf archive.tar.gz` show?",shortAnswer:"Verbose list of contents with permissions, size, and modification time.",explanation:"`-t` list, `-v` verbose, `-z` gzip (auto-detected).",hint:"Shows same as `ls -l` for each file.",level:"intermediate",codeExample:"tar -tvf archive.tar.gz | head -10"},{question:"Can tar compress to multiple files (like split)?",shortAnswer:"Yes, use `-M` (multi-volume) and `--tape-length=N` for old-style; better to use `split`.",explanation:"`tar -cM -L 1024 -f archive.tar file` creates multi-volume.",hint:"Modern approach: `tar -czf - large | split -b 50m - archive.part.`",level:"expert",codeExample:"tar -czf - bigdir | split -b 1G - backup.tar.gz.part."},{question:"How do you transform filenames during tar creation?",shortAnswer:"Use `--transform` or `--xform` with sed expression: `--transform='s/^home//'`",explanation:"Useful to strip prefixes or alter paths.",hint:"`--transform='s/^.///'` removes leading ./",level:"expert",codeExample:"tar -czf archive.tar.gz --transform='s/^.///' ."},{question:"Why does `tar -czf` sometimes hang?",shortAnswer:"Most likely forgetting `-f` or specifying it incorrectly: `tar -czf archive.tar.gz dir` is correct; `tar -czf archive.tar.gz` missing source will read from stdin.",explanation:"Without source file/directory, tar reads from stdin and appears to hang.",hint:"Always provide source after the options.",level:"intermediate",codeExample:`# Wrong: tar -czf archive.tar.gz (hangs)
# Correct: tar -czf archive.tar.gz .`},{question:"What does the `--checkpoint-action` do with compression?",shortAnswer:"Prints progress during archiving, useful for long compressions.",explanation:"Example: `tar -czf backup.tar.gz --checkpoint=1000 --checkpoint-action=echo='%u files' /home`",hint:"Can also use `pv` for progress.",level:"expert",codeExample:"tar -czf backup.tar.gz --checkpoint=500 --checkpoint-action=dot /home"},{question:"How can you test the compression ratio without writing to disk?",shortAnswer:"Pipe to a compressor and check size: `tar -cf - dir | gzip -c | wc -c`",explanation:"Counts bytes output by gzip, compares with original size from `du`.",hint:"`printf 'original: %d\\ncompressed: %d\\n' $(du -sb dir | cut -f1) $(tar -cf - dir | gzip -c | wc -c)`",level:"expert",codeExample:'orig=$(du -sb dir | cut -f1); comp=$(tar -cf - dir | gzip -c | wc -c); echo "ratio: $(echo "scale=2; $comp/$orig*100" | bc)%"'},{question:"What is a sparse file and how does tar handle it?",shortAnswer:"Sparse files contain holes (empty blocks). GNU tar with `-S` detects and archives sparse files efficiently.",explanation:"Without `-S`, holes are filled with zeros, wasting space.",hint:"Add `-S` when archiving virtual machine disk images.",level:"expert",codeExample:"tar -cSf sparse.tar.gz sparse_file.img"},{question:"How do you compress a tar archive with different algorithms in parallel?",shortAnswer:"Use `tar -cf - dir | pigz -9 | tee >(md5sum > checksum.txt) > archive.tar.gz`",explanation:"Pigz handles parallel gzip; similar for pbzip2, xz -T.",hint:"`xz -T0` uses all cores.",level:"expert",codeExample:"tar -cf - data/ | xz -T4 -9 > data.tar.xz"},{question:"What is the difference between `tar -czf` and `zip -r`?",shortAnswer:"Tar preserves Unix permissions, symlinks, and device files; zip is more cross-platform but lacks some Unix metadata.",explanation:"Tar is preferred for system backups; zip for sharing with Windows users.",hint:"Use `zip` for simple archiving across platforms, `tar` for full Unix fidelity.",level:"intermediate",codeExample:"tar -czf backup.tar.gz /home vs zip -r backup.zip /home"}],y=`#!/bin/bash
# tar_gzip.sh - Using tar with gzip compression (.tar.gz)

echo "=== Tar + gzip (.tar.gz) ==="

# Setup test directory
mkdir -p project/{src,docs}
for i in {1..50}; do echo "Line $i" >> project/src/main.py; done
echo "README" > project/docs/README.md

echo -e "\\n1. Create .tar.gz archive with default compression:"
tar -czvf project.tar.gz project/
ls -lh project.tar.gz

echo -e "\\n2. Create with maximum compression (-9):"
tar -czvf - project/ | gzip -9 > project_max.tar.gz
ls -lh project_max.tar.gz

echo -e "\\n3. Extract .tar.gz archive:"
mkdir extract_gz
tar -xzvf project.tar.gz -C extract_gz/
ls -l extract_gz/

echo -e "\\n4. List contents without extracting:"
tar -tzvf project.tar.gz | head -5

echo -e "\\n5. Create .tgz (same as .tar.gz):"
tar -czvf project.tgz project/
ls -lh project.tgz

echo -e "\\n6. Pipe tar over SSH (simulate):"
echo "tar -czf - project/ | ssh user@host 'cat > remote.tar.gz'"
echo "(Command would stream compressed archive)"

# Cleanup
rm -rf project project.tar.gz project_max.tar.gz project.tgz extract_gz`,j=`#!/bin/bash
# tar_bzip2.sh - Using tar with bzip2 compression (.tar.bz2)

echo "=== Tar + bzip2 (.tar.bz2) ==="

# Create test data (larger text for better compression comparison)
mkdir -p data
for i in {1..200}; do echo "Repetitive line $i" >> data/file.txt; done
dd if=/dev/urandom of=data/random.bin bs=1K count=100 2>/dev/null

echo -e "\\n1. Create .tar.bz2 archive (default):"
tar -cjvf data.tar.bz2 data/
ls -lh data.tar.bz2

echo -e "\\n2. Create with best compression (-9 via bzip2):"
tar -cvf - data/ | bzip2 -9 > data_best.tar.bz2
ls -lh data_best.tar.bz2

echo -e "\\n3. Extract .tar.bz2 archive:"
mkdir extract_bz2
tar -xjvf data.tar.bz2 -C extract_bz2/
ls -l extract_bz2/

echo -e "\\n4. Compare with gzip size:"
tar -czf data.tar.gz data/
ls -lh data.tar.gz | awk '{print "gzip:  " $5}'
ls -lh data.tar.bz2 | awk '{print "bzip2: " $5}'

echo -e "\\n5. List contents:"
tar -tjvf data.tar.bz2 | head -5

echo -e "\\n6. Create .tar.bz2 while excluding files:"
tar -cjvf filtered.tar.bz2 --exclude="*.bin" data/
tar -tjvf filtered.tar.bz2

# Cleanup
rm -rf data data.tar.bz2 data_best.tar.bz2 data.tar.gz extract_bz2 filtered.tar.bz2`,w=`#!/bin/bash
# tar_xz.sh - Using tar with xz compression (.tar.xz)

echo "=== Tar + xz (.tar.xz) ==="

# Create test data (mixture of compressible and random)
mkdir -p logs
for i in {1..500}; do echo "Log entry $i" >> logs/app.log; done
dd if=/dev/urandom of=logs/junk.bin bs=1K count=200 2>/dev/null

echo -e "\\n1. Create .tar.xz archive:"
tar -cJvf logs.tar.xz logs/
ls -lh logs.tar.xz

echo -e "\\n2. Extract .tar.xz archive:"
mkdir extract_xz
tar -xJvf logs.tar.xz -C extract_xz/
ls -l extract_xz/

echo -e "\\n3. Compare compression methods:"
tar -czf logs.tar.gz logs/
tar -cjf logs.tar.bz2 logs/
ls -lh logs.tar.* | awk '{print $5, $9}'

echo -e "\\n4. Create with different xz compression levels:"
xz -9 -c logs.tar > logs_best.xz 2>/dev/null
ls -lh logs_best.xz
echo "xz default vs -9:"
ls -lh logs.tar.xz logs_best.xz

echo -e "\\n5. Parallel xz compression (if pxz installed):"
if command -v pxz &>/dev/null; then
    tar -cf - logs/ | pxz -9 > logs_parallel.tar.xz
    ls -lh logs_parallel.tar.xz
else
    echo "pxz not installed (parallel xz)"
fi

echo -e "\\n6. Extract with auto-detection:"
tar -xf logs.tar.xz -C extract_xz/
echo "Extracted with generic tar -xf"

# Cleanup
rm -rf logs logs.tar.* logs_best.xz logs_parallel.tar.xz extract_xz`,k=`#!/bin/bash
# tar_compare.sh - Compare different compression methods

echo "=== Comparing Compression Methods ==="

# Create a substantial test directory
mkdir -p testdata
echo "Creating test data (repetitive text, logs, source code)..."
for i in {1..1000}; do echo "Line $i of repetitive text for compression testing." >> testdata/bigfile.txt; done
for i in {1..100}; do echo "print('Hello $i')" >> testdata/script.py; done
dd if=/dev/urandom of=testdata/random.bin bs=1K count=500 2>/dev/null
mkdir -p testdata/sub
for i in {1..500}; do echo "Sub log $i" >> testdata/sub/subfile.log; done

# Calculate original size
original_size=$(du -sb testdata | cut -f1)
echo "Original size: $(numfmt --to=iec $original_size)"

# Create archives with different methods
echo -e "\\n1. Uncompressed tar:"
time tar -cf test.tar testdata 2>/dev/null
tar_size=$(stat -c%s test.tar)
echo "Size: $(numfmt --to=iec $tar_size) (ratio: $(echo "scale=2; $tar_size/$original_size*100" | bc)%)"

echo -e "\\n2. gzip (default level 6):"
time tar -czf test.tar.gz testdata
gz_size=$(stat -c%s test.tar.gz)
echo "Size: $(numfmt --to=iec $gz_size) (ratio: $(echo "scale=2; $gz_size/$original_size*100" | bc)%)"

echo -e "\\n3. bzip2 (default):"
time tar -cjf test.tar.bz2 testdata
bz2_size=$(stat -c%s test.tar.bz2)
echo "Size: $(numfmt --to=iec $bz2_size) (ratio: $(echo "scale=2; $bz2_size/$original_size*100" | bc)%)"

echo -e "\\n4. xz (default):"
time tar -cJf test.tar.xz testdata
xz_size=$(stat -c%s test.tar.xz)
echo "Size: $(numfmt --to=iec $xz_size) (ratio: $(echo "scale=2; $xz_size/$original_size*100" | bc)%)"

echo -e "\\n5. Best compression comparison:"
tar -czf test_gz9.tar.gz --use-compress-program="gzip -9" testdata
tar -cjf test_bz2_9.tar.bz2 --use-compress-program="bzip2 -9" testdata
xz -9 -c test.tar > test_xz9.tar.xz 2>/dev/null
gz9_size=$(stat -c%s test_gz9.tar.gz)
bz2_9_size=$(stat -c%s test_bz2_9.tar.bz2)
xz9_size=$(stat -c%s test_xz9.tar.xz)
echo "gzip -9: $(numfmt --to=iec $gz9_size) (saved $(($gz_size - $gz9_size)) bytes from default)"
echo "bzip2 -9: $(numfmt --to=iec $bz2_9_size)"
echo "xz -9: $(numfmt --to=iec $xz9_size)"

echo -e "\\nRecommendation based on this test:"
smallest=$xz9_size
if [ $gz9_size -lt $smallest ]; then smallest=$gz9_size; fi
if [ $bz2_9_size -lt $smallest ]; then smallest=$bz2_9_size; fi
if [ $xz9_size -eq $smallest ]; then echo "xz gave smallest size (best for archiving)"; fi
if [ $gz9_size -eq $smallest ]; then echo "gzip gave smallest size (best for this data type)"; fi
if [ $bz2_9_size -eq $smallest ]; then echo "bzip2 gave smallest size (good balance)"; fi

# Cleanup
rm -rf testdata test.tar test.tar.gz test.tar.bz2 test.tar.xz test_gz9.tar.gz test_bz2_9.tar.bz2 test_xz9.tar.xz`,q=()=>{const c=new Date().getFullYear()-1998,[r,d]=s.useState("create"),[a,h]=s.useState("gzip"),[n,p]=s.useState(6),[i,m]=s.useState(!1),[N,_]=s.useState(!1),[x,l]=s.useState(!1);s.useEffect(()=>{l(!0),setTimeout(()=>l(!1),300)},[r,a,n,i]);const g=()=>a==="gzip"?".tar.gz":a==="bzip2"?".tar.bz2":a==="xz"?".tar.xz":".tar",f=()=>{let t="tar ";return r==="create"&&(t+="-c"),r==="extract"&&(t+="-x"),r==="list"&&(t+="-t"),i&&(t+="v"),a==="gzip"&&(t+="z"),a==="bzip2"&&(t+="j"),a==="xz"&&(t+="J"),t+="f archive"+g(),r==="create"&&(t+=" /path/to/source"),t},z=()=>r==="create"?`${i?`file1.txt
file2.txt
subdir/file3.txt
`:""}Compression level: ${n}
Archive created successfully.`:r==="extract"?i?`file1.txt
file2.txt
subdir/file3.txt
Extraction complete.`:"Archive extracted.":r==="list"?`file1.txt
file2.txt
subdir/file3.txt`:"";return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4",children:"🗜️📦 Tar + Compression"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Combine archiving with compression — create `.tar.gz`, `.tar.bz2`, and `.tar.xz` files for efficient storage."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Simulate tar + compression"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Operation:"}),e.jsxs("select",{value:r,onChange:t=>d(t.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"create",children:"Create (c)"}),e.jsx("option",{value:"extract",children:"Extract (x)"}),e.jsx("option",{value:"list",children:"List (t)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Compression method:"}),e.jsxs("select",{value:a,onChange:t=>h(t.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"gzip",children:"gzip (.tar.gz) -z"}),e.jsx("option",{value:"bzip2",children:"bzip2 (.tar.bz2) -j"}),e.jsx("option",{value:"xz",children:"xz (.tar.xz) -J"})]})]})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Compression level (1-9):"}),e.jsx("input",{type:"range",min:"1",max:"9",value:n,onChange:t=>p(parseInt(t.target.value)),className:"w-full",disabled:r!=="create"}),e.jsxs("div",{className:"text-center text-sm",children:[n," (1=fast, 9=best)"]})]}),e.jsx("div",{className:"flex items-end gap-4",children:e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i,onChange:()=>m(!i)}),e.jsx("span",{children:"Verbose (-v)"})]})})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsx("span",{children:f()})]}),e.jsx("pre",{className:u("whitespace-pre-wrap transition-opacity duration-300",x?"opacity-70":"opacity-100"),children:z()})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 Tar compresses the entire archive together, achieving better ratio than compressing files individually."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 Why Combine Tar with Compression?"}),e.jsx("p",{className:"mb-3",children:"While `tar` alone bundles files, it does not reduce size. By combining `tar` with a compression tool like `gzip`, `bzip2`, or `xz`, we achieve both packaging and compression in one step."}),e.jsx("p",{children:"The typical extensions are `.tar.gz` (or `.tgz`), `.tar.bz2`, and `.tar.xz`. This method is the standard for source code distribution, system backups, and file exchange on Unix-like systems."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Common Patterns"}),e.jsxs("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded space-y-1",children:[e.jsx("code",{children:"tar -czf archive.tar.gz source/"}),"  ",e.jsx("span",{className:"text-gray-500",children:"# gzip"}),e.jsx("br",{}),e.jsx("code",{children:"tar -cjf archive.tar.bz2 source/"})," ",e.jsx("span",{className:"text-gray-500",children:"# bzip2"}),e.jsx("br",{}),e.jsx("code",{children:"tar -cJf archive.tar.xz source/"}),"  ",e.jsx("span",{className:"text-gray-500",children:"# xz"})]}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Reduce storage and transfer size while preserving directory structure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," Distributing software, creating backups, compressing logs."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Source code tarballs:"})," `curl -O https://example.com/software-1.0.tar.gz`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"System backups:"})," `tar -czf /backup/home_$(date +%Y%m%d).tar.gz /home`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Package distribution:"})," Compiling with `make dist` creates `.tar.gz`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Log rotation:"})," Archive old logs with high compression (xz)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Data transfer:"})," Pipe compressed tar over SSH: `tar czf - dir | ssh host 'cat > dir.tar.gz'`"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Choose compression based on need:"})," gzip is fastest, bzip2 smaller, xz slowest but best."]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `-9` for maximum size reduction (e.g., for archives)."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Automatically detect compression on extraction:"})," `tar -xf archive.tar.xz` works without flags."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Parallel compression with `pigz`:"})," `tar -cf - data | pigz -9 > archive.tar.gz`"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exclude patterns while compressing:"})," `tar -czf backup.tar.gz --exclude='*.log' /home`"]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 Tar + Compression Pipeline"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. Files + dirs"}),e.jsx("text",{x:"100",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"source/"}),e.jsx("line",{x1:"180",y1:"70",x2:"230",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow11)"}),e.jsx("rect",{x:"240",y:"30",width:"160",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"320",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. Tar archiving"}),e.jsx("text",{x:"320",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"tar -c → raw tar stream"}),e.jsx("line",{x1:"400",y1:"70",x2:"450",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow11)"}),e.jsx("rect",{x:"460",y:"30",width:"160",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"540",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. Compression"}),e.jsx("text",{x:"540",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"gzip/bzip2/xz"}),e.jsx("line",{x1:"620",y1:"70",x2:"670",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow11)"}),e.jsx("rect",{x:"680",y:"30",width:"170",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"765",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Compressed archive"}),e.jsx("text",{x:"765",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:".tar.gz / .tar.bz2 / .tar.xz"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow11",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Files → tar → compression → .tar.gz"}),e.jsx("rect",{x:"680",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"720",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Smaller"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(o,{fileModule:y,title:"Tar with gzip (.tar.gz)",highlightLines:[4,8,12]}),e.jsx(o,{fileModule:j,title:"Tar with bzip2 (.tar.bz2)",highlightLines:[4,8,12]}),e.jsx(o,{fileModule:w,title:"Tar with xz (.tar.xz)",highlightLines:[4,8,12]}),e.jsx(o,{fileModule:k,title:"Comparing Compression Methods",highlightLines:[8,16,24]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Using wrong flag when extracting:"})," `tar -xf` auto-detects, but old tar may need explicit `-z`, `-j`, `-J`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Compressing already compressed files:"})," Wastes time and may increase size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not specifying compression level:"})," Default may be suboptimal for archives (use `-9`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting `-f` after options:"})," `tar -czf archive.tar.gz` is correct; `tar -czf archive.tar.gz` — ensure `-f` comes last before filename."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Using absolute paths in archives:"})," Can cause extraction to overwrite system files. Use `-C` or `--transform`."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsx("li",{children:e.jsx("strong",{children:"Use `tar -czf` for speed/size balance, `-cjf` for better compression, `-cJf` for archives meant for long-term storage."})}),e.jsxs("li",{children:[e.jsx("strong",{children:"Always test compressed archives after creation:"})," `tar -tzf archive.tar.gz` (list)."]}),e.jsx("li",{children:e.jsx("strong",{children:"Document compression method in filename: use standard extensions (.tar.gz, .tar.bz2, .tar.xz)."})}),e.jsx("li",{children:e.jsx("strong",{children:"For incremental backups, combine `--listed-incremental` with compression."})}),e.jsx("li",{children:e.jsx("strong",{children:"Use `pigz` for parallel gzip compression when CPU cores are available."})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Why does compressing multiple files after tar achieve better ratio than compressing each file individually?"}),e.jsx("li",{children:"When would you choose `.tar.bz2` over `.tar.gz`? When would xz be overkill?"}),e.jsx("li",{children:"How would you stream a compressed tar over the network without writing to disk?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can create a `.tar.gz` archive: `tar -czf archive.tar.gz dir/`."}),e.jsx("li",{children:"✅ Can create `.tar.bz2` and `.tar.xz` archives."}),e.jsx("li",{children:"✅ Can extract any compressed tarball with `tar -xf archive.tar.xz`."}),e.jsx("li",{children:"✅ Knows which compression flag corresponds to which method (`z`, `j`, `J`)."}),e.jsx("li",{children:"✅ Understands that `tar -cf` alone does not compress."}),e.jsx("li",{children:"✅ Can exclude files using `--exclude`."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(b,{title:"Frequently Asked Questions about Tar + Compression",questions:v})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",c," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"}),' Create a demo directory of mixed files (text, images, binaries). Show students the size of the directory, then create `.tar`, `.tar.gz`, `.tar.bz2`, `.tar.xz`. Let them compare sizes. Ask: "Which method gave the smallest result for text? For images?" This hands-on comparison is memorable.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"}),' Many students will forget the `-f` flag or put it in the wrong order. Use the mnemonic "**C**reate **Z**ipped **F**ile" for `tar -czf`. Also emphasize that modern tar auto-detects compression on extract, so `tar -xf` works universally.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that takes a directory as argument, creates a timestamped `.tar.xz` archive, then checks its integrity and computes the compression ratio. Finally, upload it to a remote server using `scp`. This simulates a production backup workflow."]})]})]})})]})};export{q as default};

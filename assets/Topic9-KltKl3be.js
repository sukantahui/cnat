import{r as s,j as e}from"./index-BZ1-3x1c.js";import{c as m}from"./clsx-B-dksMZM.js";import{S as a}from"./ShellFileLoader-CLbCSpME.js";import{F as f}from"./FAQTemplate-BtWzcOn9.js";import"./prism-BzNpjcfR.js";const g=[{question:"What does the `unzip` command do?",shortAnswer:"Extracts files from ZIP archives created by `zip` or other programs.",explanation:"`unzip` restores files, directories, and timestamps, and can also list or test archives.",hint:"Use `unzip -l` to see contents without extracting.",level:"basic",codeExample:"unzip archive.zip"},{question:"How do you extract a ZIP file to a specific directory?",shortAnswer:"Use the `-d` option: `unzip archive.zip -d /target/dir`",explanation:"The target directory is created if it doesn't exist.",hint:"Always extract to a subdirectory to avoid clutter.",level:"basic",codeExample:"unzip backup.zip -d restore_folder/"},{question:"How can you see what's inside a ZIP file without extracting?",shortAnswer:"`unzip -l archive.zip` or `unzip -v` for verbose details.",explanation:"Lists filenames, sizes, timestamps, and compression ratios.",hint:"Always preview before extracting.",level:"basic",codeExample:"unzip -l archive.zip | less"},{question:"How do you test if a ZIP file is corrupted?",shortAnswer:"`unzip -t archive.zip`",explanation:"Tests CRC checksums of all files; returns exit code 0 if valid.",hint:"Do this before extracting important data.",level:"intermediate",codeExample:"unzip -t archive.zip && echo 'OK'"},{question:"How do you extract only specific files from a ZIP?",shortAnswer:"Provide filenames after the archive: `unzip archive.zip file1.txt file2.txt`",explanation:'You can use wildcards but must quote them: `unzip archive.zip "*.txt"`.',hint:"Quote wildcards to prevent shell expansion.",level:"intermediate",codeExample:'unzip documents.zip "*.pdf"'},{question:"How do you exclude certain files from extraction?",shortAnswer:'Use `-x` followed by patterns: `unzip archive.zip -x "*.log"`',explanation:"Patterns are shell-style wildcards; multiple patterns allowed.",hint:"Combine with inclusion for fine control.",level:"advanced",codeExample:'unzip archive.zip -x "*secret*" "*.tmp"'},{question:"How do you prevent `unzip` from overwriting existing files?",shortAnswer:"Use `-n` (never overwrite) or `-o` (force overwrite).",explanation:"Default behavior is to prompt if the file exists; `-n` skips, `-o` overwrites without prompt.",hint:"Use `-n` in scripts to avoid interactive prompts.",level:"intermediate",codeExample:"unzip -n archive.zip   # skip existing files"},{question:"Can `unzip` extract password-protected ZIP files?",shortAnswer:"Yes, with `-P password` (insecure) or it prompts interactively.",explanation:"The encryption is weak; consider `7z` for stronger crypto.",hint:"`-P` is not recommended because password appears in process list.",level:"intermediate",codeExample:"unzip -P mypassword secret.zip"},{question:"What is the purpose of `-j` in `unzip`?",shortAnswer:"Junk paths: extracts files without directory structure.",explanation:"All files are placed directly in the extraction directory, ignoring subfolders.",hint:"Be careful of filename collisions.",level:"advanced",codeExample:"unzip -j archive.zip -d flat/"},{question:"How do you extract only newer files from a ZIP (update)?",shortAnswer:"Use `-u` (update): `unzip -u archive.zip`",explanation:"Extracts only files that are newer than existing copies or do not exist.",hint:"Useful for incremental updates.",level:"advanced",codeExample:"unzip -u patch.zip -d /application/"},{question:"Why does `unzip` sometimes ask for overwrite confirmation?",shortAnswer:"Because extracted files already exist; `unzip` defaults to interactive mode.",explanation:"Use `-n` (never) or `-o` (overwrite) to bypass.",hint:"In scripts, always specify one of these options.",level:"basic",codeExample:"unzip -o archive.zip   # overwrite all"},{question:"How can you extract a ZIP to stdout without writing files?",shortAnswer:"Use `unzip -p archive.zip filename` (prints file content).",explanation:"Useful for piping a single file to another command.",hint:"`unzip -p archive.zip README.md | less`",level:"advanced",codeExample:"unzip -p docs.zip chapter1.txt | wc -l"},{question:"What does the `-q` option do?",shortAnswer:"Quiet mode: suppresses normal output messages.",explanation:"Only errors are displayed. Useful in scripts.",hint:"Combine with `-o` for silent overwrite.",level:"intermediate",codeExample:"unzip -q archive.zip -d output/"},{question:"Can `unzip` handle ZIP files larger than 4GB?",shortAnswer:"Yes, if compiled with large file support (ZIP64).",explanation:"Most modern versions support ZIP64; older ones may fail.",hint:"Test with `unzip -t large.zip` first.",level:"expert",codeExample:"unzip hugefile.zip   # may need up-to-date unzip"},{question:"How do you extract a ZIP using `unzip` without changing timestamps?",shortAnswer:"Use `-DD` (no time restoration) or `--d`? Actually `unzip` by default restores timestamps. To disable: `unzip -DD archive.zip`.",explanation:"`-DD` forces current timestamp on extracted files.",hint:"Also used to avoid metadata corruption in some workflows.",level:"expert",codeExample:"unzip -DD archive.zip -d current_time/"},{question:"Why does `unzip` sometimes produce 'unsupported compression method 98'?",shortAnswer:"The archive uses newer compression (e.g., LZMA) not supported by classic unzip.",explanation:"Use `7z` or `p7zip` instead for such archives.",hint:"`7z x archive.zip` will handle modern methods.",level:"expert",codeExample:"7z x archive.zip   # better compatibility"},{question:"How do you extract a ZIP file with international (UTF-8) filenames?",shortAnswer:"Use `-O` charset option: `unzip -O cp850 archive.zip` on Windows; Linux often auto-detects.",explanation:"Older ZIPs may use non-UTF-8 encoding; specify correct charset.",hint:"`-O utf-8` usually correct for modern files.",level:"expert",codeExample:"unzip -O windows-1252 old_archive.zip"},{question:"What is the difference between `unzip` and `gunzip`?",shortAnswer:"`unzip` extracts .zip archives (multiple files); `gunzip` decompresses .gz (single file).",explanation:"They are for different compression formats (PKZIP vs gzip).",hint:"Use `unzip` for `.zip`, `gunzip` for `.gz`.",level:"basic",codeExample:"unzip archive.zip vs gunzip file.gz"},{question:"How can you batch extract multiple ZIP files?",shortAnswer:'Loop over them: `for f in *.zip; do unzip "$f" -d "${f%.zip}"; done`',explanation:"Extracts each ZIP into a folder named after the archive (without .zip).",hint:"Add `-q` for quiet bulk extraction.",level:"intermediate",codeExample:'for zip in *.zip; do unzip -q "$zip" -d "${zip%.zip}"; done'},{question:"Can `unzip` extract from stdin?",shortAnswer:"Yes: `cat archive.zip | unzip` or `unzip -`",explanation:"Useful when zip file is generated by another command.",hint:"Example: `curl -s http://example.com/file.zip | unzip -d /tmp -`",level:"expert",codeExample:"unzip -p - archive.zip   # needs filename; better: cat archive.zip | unzip -"},{question:"How do you extract only the newest file from a ZIP?",shortAnswer:"Pipe `unzip -l` to sort and tail, then extract that single file.",explanation:"`unzip -l` shows timestamps; `tail -1` gets last (usually newest).",hint:"`unzip -l archive.zip | tail -1 | awk '{print $4}' | xargs unzip archive.zip`",level:"expert",codeExample:`latest=$(unzip -l archive.zip | grep -v '/$' | tail -1 | awk '{print $4}'); unzip archive.zip "$latest"`},{question:"What does `unzip -Z` do?",shortAnswer:"Displays ZIP archive info similar to `zipinfo`, e.g., `unzip -Z1` lists filenames only.",explanation:"`-Z` accepts suboptions (1,2, etc.) for different output formats.",hint:"`unzip -Z1 archive.zip` gives one file per line.",level:"expert",codeExample:"unzip -Z1 archive.zip | xargs -I{} file {}"},{question:"Why does `unzip` on Linux preserve execute permissions?",shortAnswer:"Because ZIP format stores Unix file permissions (if created on Unix with `zip -r`).",explanation:"Windows ZIP tools may not store execute bits; result may have default permissions.",hint:"Use `unzip -X` to restore original permissions if stored.",level:"advanced",codeExample:"unzip -X archive.zip   # restore extra fields"},{question:"How can you fix a truncated ZIP file?",shortAnswer:"Use `zip -F` or `zip -FF` to attempt repair, or use `unzip -t output` to see what's recoverable.",explanation:"If only central directory is missing, `unzip` may still extract using local headers.",hint:"`zip -FF corrupt.zip --out repaired.zip`",level:"expert",codeExample:"unzip -t partial.zip   # lists files that can be extracted"},{question:"What is the purpose of the `-a` option in `unzip`?",shortAnswer:"Converts DOS/Windows text files to Unix text format (CR+LF to LF).",explanation:"Useful when extracting archives created on Windows to avoid ^M characters.",hint:"`unzip -a archive.zip` also works the other way with `-aa`.",level:"advanced",codeExample:"unzip -a win_archive.zip   # fixes line endings"},{question:"Can `unzip` list files without decompressing them?",shortAnswer:"Yes, `-l` and `-v` list without extraction.",explanation:"These read the central directory quickly.",hint:"`unzip -l` shows compressed sizes, CRC.",level:"basic",codeExample:"unzip -l archive.zip"},{question:"How do you extract files with spaces in names using `unzip`?",shortAnswer:'Quote the filename: `unzip archive.zip "my file.txt"`',explanation:"Shell treats spaces as argument separators; quotes keep them together.",hint:"Use tab completion or escape spaces with backslash.",level:"intermediate",codeExample:"unzip archive.zip 'My Document.pdf'"},{question:"What is the difference between `unzip` and `jar xf`?",shortAnswer:"`jar xf` extracts JAR files (which are ZIPs with metadata). `unzip` also works on JARs but may ignore manifest.",explanation:"Both can extract; `jar` preserves Java-specific attributes.",hint:"Use `jar xf` for Java classpath extraction.",level:"expert",codeExample:"jar xf my.jar   # extracts META-INF as well"},{question:"Why does `unzip` give 'caution: filename not matched' error?",shortAnswer:"The pattern or filename specified does not exist in the archive.",explanation:"Check spelling or use `unzip -l` to verify exact names.",hint:"Wildcards must be quoted.",level:"intermediate",codeExample:"unzip archive.zip 'readme.txt'   # ensure file exists"},{question:"How do you create a shell script to unzip and move contents up one level?",shortAnswer:"Extract then move: `unzip archive.zip -d temp/ && mv temp/* . && rmdir temp`",explanation:"This flattens a ZIP that has a single root directory.",hint:"Be cautious of dotfiles and conflicts.",level:"advanced",codeExample:"unzip -q archive.zip -d extracted && mv extracted/* . && rm -rf extracted"},{question:"What does `unzip -v` output besides file list?",shortAnswer:"Verbose headers including compression method, file attributes, and total compression ratio.",explanation:"Useful for detailed archive inspection.",hint:"`unzip -v archive.zip | less`",level:"advanced",codeExample:"unzip -v archive.zip | head -30"}],z=`#!/bin/bash
# unzip_basic.sh - Basic extraction with unzip

echo "=== Basic unzip Usage ==="

# Create a sample ZIP file
echo "Creating sample archive..."
mkdir -p testdata
echo "File one content" > testdata/file1.txt
echo "File two content" > testdata/file2.txt
mkdir -p testdata/subdir
echo "Nested content" > testdata/subdir/secret.txt
zip -r sample.zip testdata

echo -e "\\n1. Extract entire archive:"
unzip sample.zip
ls -l testdata/

echo -e "\\n2. Extract to a different directory (-d):"
mkdir extracted
unzip sample.zip -d extracted
ls -l extracted/

echo -e "\\n3. List contents without extracting (-l):"
unzip -l sample.zip

echo -e "\\n4. Quiet extraction (-q) - suppress messages:"
mkdir quiet_extract
unzip -q sample.zip -d quiet_extract
echo "Extraction completed silently"

echo -e "\\n5. Overwrite prevention (-n):"
# Simulate existing file
touch testdata/file1.txt
echo "Trying to extract without overwriting:"
unzip -n sample.zip -d testdata

# Cleanup
rm -rf testdata extracted quiet_extract sample.zip`,v=`#!/bin/bash
# unzip_options.sh - Exploring advanced options

echo "=== Unzip Options Demo ==="

# Create test ZIP with various files
echo "Creating test archive..."
mkdir -p testfiles
echo "Document 1" > testfiles/doc1.txt
echo "Document 2" > testfiles/doc2.txt
echo "Picture 1" > testfiles/image1.png
echo "Picture 2" > testfiles/image2.png
mkdir -p testfiles/backup
echo "Important" > testfiles/backup/data.txt
zip -r test.zip testfiles

echo -e "\\n1. Test archive integrity (-t):"
unzip -t test.zip

echo -e "\\n2. Extract with verbose output (-v):"
mkdir verbose_out
unzip -v test.zip -d verbose_out | head -20

echo -e "\\n3. Extract without directory structure (-j):"
mkdir junked
unzip -j test.zip "*.txt" -d junked
ls -l junked/

echo -e "\\n4. Extract only newer files (-u):"
touch testfiles/newer.txt
zip test.zip testfiles/newer.txt
mkdir update_test
cp testfiles/doc1.txt update_test/  # old version
unzip -u test.zip -d update_test
ls -l update_test/

echo -e "\\n5. Password extraction (if encrypted):"
zip -e -P secret encrypted.zip testfiles/doc1.txt
unzip -P secret encrypted.zip -d encrypt_out
ls encrypt_out/

echo -e "\\n6. Extract files matching a pattern:"
mkdir pattern_out
unzip test.zip "*.png" -d pattern_out
ls pattern_out/

# Cleanup
rm -rf testfiles test.zip verbose_out junked update_test encrypted.zip encrypt_out pattern_out`,y=`#!/bin/bash
# unzip_selective.sh - Extracting specific files

echo "=== Selective Extraction ==="

# Create a structured ZIP
mkdir -p project/{src,doc,backup}
echo "main() { }" > project/src/main.c
echo "README" > project/README.md
echo "config" > project/settings.ini
echo "old data" > project/backup/old_backup.txt
zip -r project.zip project

echo -e "\\n1. Extract only specific file types:"
mkdir only_c
unzip project.zip "*.c" -d only_c
find only_c -type f

echo -e "\\n2. Extract excluding certain files (-x):"
mkdir exclude_backup
unzip project.zip -x "*/backup/*" -d exclude_backup
find exclude_backup -type f

echo -e "\\n3. Extract files matching multiple patterns:"
mkdir multi_pattern
unzip project.zip "*.md" "*.ini" -d multi_pattern
ls multi_pattern/project/

echo -e "\\n4. Extract files by name (literal):"
mkdir specific
unzip project.zip project/README.md project/settings.ini -d specific
ls specific/project/

echo -e "\\n5. Extract from stdin using -p (pipe):"
unzip -p project.zip project/README.md
echo "Content piped to stdout above"

echo -e "\\n6. Extract newest file only (using -l and tail):"
latest=$(unzip -l project.zip | grep -v '/' | tail -1 | awk '{print $4}')
echo "Latest file: $latest"
unzip project.zip "$latest" -d latest_only

# Cleanup
rm -rf project project.zip only_c exclude_backup multi_pattern specific latest_only`,b=`#!/bin/bash
# unzip_scripting.sh - Using unzip in automation

echo "=== Scripting with unzip ==="

# Function: extract all ZIPs in a directory
extract_all_zips() {
    local dir=$1
    for zipfile in "$dir"/*.zip; do
        if [ -f "$zipfile" ]; then
            local base=$(basename "$zipfile" .zip)
            mkdir -p "$dir/extracted_$base"
            unzip -q "$zipfile" -d "$dir/extracted_$base"
            echo "Extracted: $zipfile -> extracted_$base/"
        fi
    done
}

# Function: extract only config files from a backup
extract_configs() {
    local archive=$1
    local outdir=$2
    if [ -f "$archive" ]; then
        unzip -j "$archive" "*.conf" "*.cfg" "*.ini" -d "$outdir" 2>/dev/null
        echo "Config files extracted to $outdir"
    else
        echo "Archive not found"
    fi
}

# Create sample ZIPs
echo "Creating test environment..."
mkdir -p zips
for i in 1 2 3; do
    mkdir -p "data$i"
    echo "content $i" > "data$i/file$i.txt"
    echo "config $i" > "data$i/app$i.conf"
    zip -q -r "zips/backup$i.zip" "data$i"
done

echo -e "\\n1. Batch extract all ZIPs:"
extract_all_zips zips
ls -l zips/

echo -e "\\n2. Extract only config files from backup:"
zip -r all.zip data1 data2
mkdir config_out
extract_configs all.zip config_out
ls -l config_out/

echo -e "\\n3. Unzip with progress using pv (if installed):"
if command -v pv &>/dev/null; then
    pv all.zip | unzip -q -d pv_out
    echo "Extracted with progress"
else
    unzip -q all.zip -d pv_out
    echo "pv not installed, regular unzip used"
fi

echo -e "\\n4. Validate all ZIPs in a directory:"
for zipf in zips/*.zip; do
    if unzip -t "$zipf" &>/dev/null; then
        echo "✓ $zipf is valid"
    else
        echo "✗ $zipf is corrupt"
    fi
done

echo -e "\\n5. Extract respecting timestamps (default behavior):"
mkdir timestamps
unzip -q all.zip -d timestamps
ls -l timestamps/data1/

# Cleanup
rm -rf data1 data2 data3 zips all.zip config_out pv_out timestamps`,C=()=>{const d=new Date().getFullYear()-1998,[t,p]=s.useState("default"),[n,h]=s.useState("extracted_files"),[r,x]=s.useState(!1),[i,l]=s.useState("default"),[w,k]=s.useState(5242880),[u,c]=s.useState(!1);return s.useEffect(()=>{c(!0),setTimeout(()=>c(!1),300)},[t,n,r,i]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-4",children:"📂 The `unzip` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Extract files from ZIP archives — restore compressed packages, software, and backups."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Simulate unzip extraction"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Extraction mode:"}),e.jsxs("select",{value:t,onChange:o=>p(o.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700",children:[e.jsx("option",{value:"default",children:"Default (extract all)"}),e.jsx("option",{value:"subdir",children:"Extract to subdirectory"}),e.jsx("option",{value:"list",children:"List contents (-l)"}),e.jsx("option",{value:"test",children:"Test integrity (-t)"}),e.jsx("option",{value:"quiet",children:"Quiet extraction (-q)"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Target directory:"}),e.jsx("input",{type:"text",value:n,onChange:o=>h(o.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 font-mono",disabled:t!=="subdir"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>x(!r)}),e.jsx("span",{children:"Verbose output (-v)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i==="never",onChange:()=>l(i==="never"?"default":"never")}),e.jsx("span",{children:"Never overwrite (-n)"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:i==="always",onChange:()=>l(i==="always"?"default":"always")}),e.jsx("span",{children:"Force overwrite (-o)"})]})]}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsxs("span",{children:["unzip ",t==="list"?"-l ":"",t==="test"?"-t ":"",t==="quiet"?"-q ":"",r?"-v ":"",i==="never"?"-n ":"",i==="always"?"-o ":"",t==="subdir"?`-d ${n} `:"","archive.zip"]})]}),e.jsxs("pre",{className:m("transition-opacity duration-300 whitespace-pre-wrap",u?"opacity-70":"opacity-100"),children:[t==="list"&&`Archive:  archive.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
     1234  2025-03-18 10:00   file1.txt
     5678  2025-03-18 10:01   file2.txt
---------                     -------
     6912                     2 files`,t==="test"&&`Archive:  archive.zip
    testing: file1.txt                 OK
    testing: file2.txt                 OK
No errors detected in compressed data.`,t!=="list"&&t!=="test"&&`Archive:  archive.zip
  inflating: ${t==="subdir"?n+"/":""}file1.txt  
  inflating: ${t==="subdir"?n+"/":""}file2.txt  
${r?`   creating: extracted_files/subdir/
  inflating: extracted_files/subdir/data.txt
`:""}Extraction complete.`]})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 `unzip` is available on Linux, macOS, and Windows (via tools like Cygwin or Git Bash)."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `unzip`?"}),e.jsxs("p",{className:"mb-3",children:[e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"unzip"})," extracts files from ZIP archives created by `zip` or other archivers. It restores the original directory structure, permissions, and timestamps."]}),e.jsx("p",{children:"As the counterpart to `zip`, `unzip` is essential for handling software packages, email attachments, backup restoration, and any ZIP file you encounter in cross-platform environments."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"unzip [options] archive.zip [-d directory] [file(s)] [-x pattern]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Extract files from ZIP archives."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Exit 0 on success, non-zero on error (bad archive, missing files)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," Whenever you need to open or restore a ZIP file."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Software installation:"})," Many downloadable packages come as `.zip` files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email attachments:"})," Extract documents sent as ZIP archives."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Backup recovery:"})," ",e.jsx("code",{className:"text-sm",children:"unzip backup.zip -d /restore/path"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Selective extraction:"})," ",e.jsx("code",{className:"text-sm",children:'unzip archive.zip "*.txt" -x "*.log"'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Batch processing:"})," Loop over multiple ZIP files and extract them."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"List contents:"})," ",e.jsx("code",{className:"text-sm",children:"unzip -l archive.zip"})," (no extraction)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test archive integrity:"})," ",e.jsx("code",{className:"text-sm",children:"unzip -t archive.zip"})," before extraction."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extract to different directory:"})," ",e.jsx("code",{className:"text-sm",children:"unzip archive.zip -d /target/dir"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extract specific files:"})," ",e.jsx("code",{className:"text-sm",children:"unzip archive.zip document.pdf image.jpg"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quiet extraction:"})," ",e.jsx("code",{className:"text-sm",children:"unzip -q archive.zip"})," for scripts."]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `unzip` Extracts an Archive"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. ZIP archive"}),e.jsx("text",{x:"100",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"archive.zip"}),e.jsx("line",{x1:"180",y1:"70",x2:"230",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow9)"}),e.jsx("rect",{x:"240",y:"30",width:"160",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"320",y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"13",fontWeight:"bold",children:"2. Read central dir"}),e.jsx("text",{x:"320",y:"70",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Index of files"}),e.jsx("text",{x:"320",y:"85",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"timestamps, sizes"}),e.jsx("line",{x1:"400",y1:"70",x2:"450",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow9)"}),e.jsx("rect",{x:"460",y:"30",width:"160",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"540",y:"50",textAnchor:"middle",fill:"currentColor",fontSize:"13",fontWeight:"bold",children:"3. DEFLATE inflate"}),e.jsx("text",{x:"540",y:"70",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"Decompress each"}),e.jsx("text",{x:"540",y:"85",textAnchor:"middle",fill:"currentColor",fontSize:"11",children:"file stream"}),e.jsx("line",{x1:"620",y1:"70",x2:"670",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow9)"}),e.jsx("rect",{x:"680",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"750",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Restored files"}),e.jsx("text",{x:"750",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"original names & paths"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow9",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:".zip → index → inflate → original files"}),e.jsx("rect",{x:"680",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"720",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Restored"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(a,{fileModule:z,title:"Basic Extraction",highlightLines:[4,9]}),e.jsx(a,{fileModule:v,title:"Extraction Options (-d, -l, -t, -q)",highlightLines:[6,12,18]}),e.jsx(a,{fileModule:y,title:"Selective File Extraction",highlightLines:[5,10,15]}),e.jsx(a,{fileModule:b,title:"Scripting with unzip",highlightLines:[8,16,24]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extracting into current directory without checking contents:"})," ZIP may overwrite existing files; use `-n` or extract to subdir."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting `-d` target directory:"})," Archive contents spam the current folder."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not quoting wildcards:"}),' `unzip archive.zip *.txt` - shell expands `*.txt` before unzip sees it; use quotes: `"*.txt"`.']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `unzip` is installed on minimal systems:"})," Some Linux servers don't have it by default; install `unzip` package."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extracting from UTF-8 filenames incorrectly:"})," Older `unzip` versions may mangle Unicode. Use `-O` option to specify charset."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always list contents first:"})," `unzip -l archive.zip` before full extraction."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test archive integrity before extracting important data:"})," `unzip -t archive.zip`."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extract to a temporary directory to avoid clutter:"})," ",e.jsx("code",{className:"text-sm",children:"unzip archive.zip -d temp/"}),"."]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `-q` in scripts to suppress verbose output."})}),e.jsx("li",{children:e.jsx("strong",{children:"Set file permissions using `umask` before extraction if needed."})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"What could happen if you extract a ZIP that contains absolute paths (e.g., `/etc/passwd`)?"}),e.jsx("li",{children:"How would you extract only files modified after a certain date from a ZIP?"}),e.jsx("li",{children:'Why might `unzip` fail with "End-of-central-directory signature not found"?'})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can extract a ZIP archive with `unzip archive.zip`."}),e.jsx("li",{children:"✅ Can list contents using `-l`."}),e.jsx("li",{children:"✅ Can test integrity with `-t`."}),e.jsx("li",{children:"✅ Can extract to a specific directory with `-d`."}),e.jsx("li",{children:'✅ Can extract specific files (e.g., `"*.txt"`).'}),e.jsx("li",{children:"✅ Can suppress output with `-q`."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(f,{title:"Frequently Asked Questions about unzip Command",questions:g})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",d," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"})," Bring a real-world scenario: Download a ZIP from the internet (e.g., a book from Project Gutenberg), then demonstrate `unzip -l`, `unzip -t`, and finally `unzip -d book/`. Show how to extract only the text files using wildcards. This bridges theory and practice."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"}),' Warn students about "zip bombs" – a malicious zip that expands to huge size. Always test with `unzip -l` and `unzip -t` before full extraction, especially for untrusted sources.']}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that finds all `.zip` files in a directory, tests each, and if valid, extracts them into subdirectories named after the zip file (without extension). This simulates a bulk extraction utility."]})]})]})})]})};export{C as default};

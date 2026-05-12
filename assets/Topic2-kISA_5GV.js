import{r as o,j as e}from"./index-keUzLGou.js";import{c as m}from"./clsx-B-dksMZM.js";import{S as l}from"./ShellFileLoader-Dq5qQ-_v.js";import{F as j}from"./FAQTemplate-xDcKA5Xm.js";import"./prism-BLp_EZQ1.js";const v=[{question:"What does the `pr` command do?",shortAnswer:"Formats text files for printing by adding headers, footers, page numbers, and multi-column layout.",explanation:"`pr` paginates a file, adds a header with date/time and filename (or custom text), and can arrange text into columns.",hint:"Think of it as a pre-processor for line printers.",level:"basic",codeExample:"pr file.txt"},{question:"How do you display a file in 3 columns using `pr`?",shortAnswer:"`pr -3 file.txt`",explanation:"The `-num` flag (where num is a number) creates that many columns.",hint:"`pr -2` gives two columns, `pr -4` gives four.",level:"basic",codeExample:"pr -3 data.txt"},{question:"What is the default page length for `pr`?",shortAnswer:"66 lines (traditional line printer page length).",explanation:"You can change it with `-l` option, e.g., `pr -l 50`.",hint:"Most terminal windows are around 24 lines, so you may need `-l 24` for on-screen paging.",level:"intermediate",codeExample:"pr -l 30 file.txt"},{question:"How do you suppress the header and footer in `pr` output?",shortAnswer:"Use `-T` option.",explanation:"`-T` eliminates page headers and footers, providing raw pagination only.",hint:"Useful when piping to `less` or another pager.",level:"basic",codeExample:"pr -T file.txt"},{question:"How can you add a custom header instead of the default?",shortAnswer:'`pr -h "My Header" file.txt`',explanation:"The `-h` option sets a header string; it appears centered at the top of each page.",hint:"Enclose multi-word header in quotes.",level:"intermediate",codeExample:'pr -h "Sales Report 2025" sales.txt'},{question:"What does `pr -d` do?",shortAnswer:"Double-spaces the output.",explanation:"Equivalent to inserting a blank line after every line of input.",hint:"Same as `sed G`.",level:"intermediate",codeExample:"pr -d letter.txt"},{question:"How do you create line numbers on the left margin?",shortAnswer:"`pr -n` or `--number-lines`.",explanation:"Each line gets a 5-digit number, a tab, and then the original text.",hint:"Combine with `-l` to control page length.",level:"intermediate",codeExample:"pr -n script.sh"},{question:"Can `pr` handle files wider than 72 columns?",shortAnswer:"Yes, using `-W` (GNU pr) to set page width, or `-w` (older).",explanation:"Default width is 72; use `-W 200` to avoid truncation.",hint:"`-W` is specific to GNU coreutils. On BSD/macOS, `-w` works differently.",level:"expert",codeExample:"pr -W 120 wide_data.txt"},{question:"What is the difference between `pr` and `column`?",shortAnswer:"`pr` is for pagination and printing; `column` is for formatting into columns without pagination.",explanation:"`pr` adds headers, footers, page breaks; `column` just rearranges columns.",hint:"Use `column -t` for table alignment.",level:"advanced",codeExample:"column -t data.txt"},{question:"How do you send `pr` output directly to a printer?",shortAnswer:"Pipe to `lpr`: `pr file.txt | lpr`",explanation:"`lpr` sends to the default printer. Use `-P` to specify a printer.",hint:"`pr -l 66` matches typical paper length.",level:"intermediate",codeExample:'pr -h "Report" data.txt | lpr -P office_printer'},{question:"What does the `-o` option do?",shortAnswer:"Indent lines by a given number of spaces (offset margins).",explanation:"`pr -o 5` adds 5 spaces to the left of every line.",hint:"Useful for binding or hole-punch margin.",level:"intermediate",codeExample:"pr -o 10 letter.txt"},{question:"How can you make `pr` output start at a specific page number?",shortAnswer:"`pr -f` (form feed) combined with `-N` (starting page number) in GNU pr.",explanation:"`pr -N 10` starts numbering pages from 10.",hint:"Not all versions support `-N`.",level:"expert",codeExample:"pr -N 5 -h 'Continuation' report.txt"},{question:"Does `pr` modify the original file?",shortAnswer:"No, `pr` only produces output on stdout (or redirected file).",explanation:"The original file remains unchanged.",hint:"Always redirect to a new file if you want to save formatting.",level:"basic",codeExample:"pr myfile.txt > formatted.txt"},{question:"How do you display a file with both line numbers and double-spacing?",shortAnswer:"`pr -n -d file.txt`",explanation:"Options can be combined. Order generally doesn't matter.",hint:"`pr -nd` also works (combine flags).",level:"intermediate",codeExample:"pr -n -d script.sh"},{question:"What is the purpose of `pr -t`?",shortAnswer:"Suppress page headers and footers (similar to `-T` in GNU).",explanation:"In POSIX, `-t` suppresses headers/footers. GNU accepts both `-T` and `-t`.",hint:"Check `man pr` to see which works on your system.",level:"advanced",codeExample:"pr -t data.txt"},{question:"How can you merge two files side by side using `pr`?",shortAnswer:"`pr -m file1.txt file2.txt`",explanation:"The `-m` (merge) option displays files in parallel columns.",hint:"Useful for comparing two versions of a file.",level:"expert",codeExample:"pr -m -t left.txt right.txt"},{question:"What is the default header format of `pr`?",shortAnswer:"Date and time on left, filename on right, page number centered.",explanation:"Example: '2025-03-18 14:30              myfile.txt              Page 1'",hint:"Override with `-h`.",level:"basic",codeExample:"pr sample.txt | head -5"},{question:"How do you get `pr` to output a form feed after each page?",shortAnswer:"Use `-f` option.",explanation:"`-f` outputs form feed characters (`\f`) between pages, useful for actual printers.",hint:"Without `-f`, `pr` uses line feeds and a header for each page.",level:"advanced",codeExample:"pr -f -l 60 report.txt | lpr"},{question:"Can `pr` accept input from stdin?",shortAnswer:"Yes, if no filename is given, `pr` reads from standard input.",explanation:"`cat file.txt | pr -3` works.",hint:"Useful in pipelines.",level:"intermediate",codeExample:"ls -1 | pr -4 -h 'Directory Listing'"},{question:"What is the difference between `pr -2` and `pr -a -2`?",shortAnswer:"`-a` (across) fills columns row by row instead of down each column.",explanation:"Default is down each column; `-a` fills left to right across the page.",hint:"Try with a numbered list to see difference.",level:"expert",codeExample:`seq 1 12 | pr -3 -a   # across
seq 1 12 | pr -3     # down`},{question:"How would you use `pr` to print a wide spreadsheet?",shortAnswer:"Use `pr -W` to set width, and `-l` to set page length.",explanation:"For very wide data, consider `pr -W 200 -l 30 data.csv`.",hint:"Also combine with `column -t` first.",level:"expert",codeExample:"column -t -s, data.csv | pr -W 150 -l 40"},{question:"Why does `pr` sometimes add extra blank pages?",shortAnswer:"Because the page length (`-l`) is too small or the input ends exactly at page boundary causing trailing form feeds.",explanation:"Adjust `-l` or use `-T` to suppress headers that cause extra pages.",hint:"Test with `-l 10` on a 20-line file to see behavior.",level:"intermediate",codeExample:"pr -l 10 sample.txt | wc -l"},{question:"How can you make `pr` honor tabs and not expand them?",shortAnswer:"Use `-e` to specify tab expansion; or preprocess with `expand`.",explanation:"By default, `pr` may expand tabs to spaces. Use `-e` to control.",hint:"`pr -e 4` sets tab stops every 4 columns.",level:"expert",codeExample:"pr -e 4 file_with_tabs.txt"},{question:"What does `pr -s` do?",shortAnswer:"Separate columns by a single character (e.g., tabs).",explanation:"When using multi-column output, `-s` changes the column separator (default is space).",hint:"`pr -3 -s','` creates comma-separated columns.",level:"advanced",codeExample:"pr -3 -s$'	' data.txt"},{question:"Can `pr` rotate the output landscape?",shortAnswer:"No, `pr` does not rotate. Use `enscript -r` for landscape.",explanation:"Landscape rotation is a printer feature; `pr` only formats text.",hint:"`enscript -r -2 file.txt | lpr` gives two-up landscape.",level:"expert",codeExample:"pr -2 file.txt | enscript -r -o - | lpr"},{question:"How do you get `pr` to start a new page after a specific line pattern?",shortAnswer:"`pr` cannot insert page breaks based on content; use `sed` to insert form feeds, then pipe to `pr -f`.",explanation:"Example: `sed '/^$/s//\\f/' file.txt | pr -f` starts new page on blank lines.",hint:"Combine `sed` and `pr` for advanced pagination.",level:"expert",codeExample:"sed '/==SECTION==/s//\\f\\n&/' report.txt | pr -f"},{question:"What is the difference between `pr` and `a2ps`?",shortAnswer:"`pr` is basic text formatting; `a2ps` is a full 'any to PostScript' converter with fonts, frames, and multiple pages per sheet.",explanation:"`a2ps` is far more powerful for generating professional printouts.",hint:"Use `a2ps` if you need pretty printing with syntax highlighting.",level:"expert",codeExample:"a2ps --columns=2 file.txt -o output.ps"},{question:"How would you use `pr` to create a booklet?",shortAnswer:"`pr` alone cannot create booklets; combine with `psbook` and `psnup` from psutils.",explanation:"First paginate with `pr`, then convert to PostScript, then arrange into booklet.",hint:"`pr -2 file.txt | enscript -o - | psbook | psnup -2 | lpr`",level:"expert",codeExample:"pr -l 60 report.txt | enscript -o temp.ps && psbook temp.ps | psnup -2 | lpr"},{question:"What does the `-i` option do in `pr`?",shortAnswer:"Replace spaces with tabs in output (for column padding).",explanation:"`-i` reduces output size by using tabs instead of multiple spaces.",hint:"Useful for reducing file size when printing source code.",level:"advanced",codeExample:"pr -i -2 script.sh"},{question:"Why does `pr -3 sample.txt` sometimes misalign columns?",shortAnswer:"Because lines have varying lengths; `pr` does not auto-adjust column widths dynamically.",explanation:"Use `-W` to set a fixed width, or pre-format with `column -t` before piping to `pr`.",hint:"`column -t sample.txt | pr -3` usually aligns better.",level:"intermediate",codeExample:"column -t data.txt | pr -3 -h 'Aligned Columns'"},{question:"How do you create a `pr` output that can be viewed on a terminal without scrolling?",shortAnswer:"Match page length to terminal height, e.g., `pr -l $(tput lines) -T file.txt | less`.",explanation:"Use `tput lines` to get terminal height, and `-T` to suppress extra headers.",hint:"Pipe to `less` anyway for manual scrolling.",level:"expert",codeExample:"pr -l $(tput lines) -T longfile.txt | less"}],N=`#!/bin/bash
# pr_basic.sh - Basic pagination with pr

echo "=== Basic pr usage ==="
echo "1. Simple pagination with default header (66 lines per page):"
pr -l 10 sample.txt

echo -e "\\n2. Without header/footer (-T):"
pr -T sample.txt

echo -e "\\n3. Double-spaced output (-d):"
pr -d sample.txt

echo -e "\\n4. Custom page length (-l 5):"
pr -l 5 sample.txt

# Create a sample file
cat > sample.txt <<EOF
Apple
Banana
Cherry
Date
Elderberry
Fig
Grape
Honeydew
EOF
echo "Sample file created: sample.txt"`,k=`#!/bin/bash
# pr_columns.sh - Displaying text in multiple columns

echo "=== Multi-column output ==="
cat > fruits.txt <<EOF
Apple
Apricot
Avocado
Banana
Blackberry
Blueberry
Cherry
Coconut
Cranberry
Date
Elderberry
Fig
Grape
Grapefruit
Guava
Honeydew
Kiwi
Lemon
Lime
Mango
EOF

echo "1. Two columns:"
pr -2 fruits.txt

echo -e "\\n2. Three columns with custom header:"
pr -3 -h "Fruit List (3 columns)" fruits.txt

echo -e "\\n3. Four columns, no header:"
pr -4 -T fruits.txt

echo -e "\\n4. Wide columns (-W 50) for long names:"
pr -4 -W 50 fruits.txt`,A=`#!/bin/bash
# pr_headers.sh - Adding headers and footers

echo "=== Custom headers and footers ==="
cat > report.txt <<EOF
Sales Report Q1
----------------
January: $12,000
February: $13,500
March: $14,200
Total: $39,700

Top Products:
1. Widget A
2. Gadget B
3. Thing C
EOF

echo "1. Default header (date + file name):"
pr -l 15 report.txt

echo -e "\\n2. Custom header (-h):"
pr -l 15 -h "QUARTERLY SALES REPORT" report.txt

echo -e "\\n3. Suppress header and footer (-T):"
pr -T report.txt

echo -e "\\n4. Add line numbers (-n):"
pr -n -l 20 report.txt`,S=`#!/bin/bash
# pr_printing.sh - Preparing files for printing

echo "=== Ready for printing ==="
# Suppose we have a long script
cat > script.sh <<'EOF'
#!/bin/bash
# demo script
echo "Hello"
echo "World"
for i in 1 2 3; do
    echo $i
done
EOF

echo "1. Format with page numbers and send to printer (commented out):"
# pr -l 66 -h "Script Listing" script.sh | lpr

echo "2. Preview with less:"
pr -l 24 -h "My Script" script.sh | less

echo "3. Save to a file for later printing:"
pr -l 66 -h "Backup Report" script.sh > printable_report.txt
echo "Saved to printable_report.txt"

echo "4. Two-up printing (2 pages per sheet) using pr and psutils:"
# pr -2 script.sh | psnup -2 | lpr
echo "(Requires psutils installed)"`,U=()=>{const u=new Date().getFullYear()-1998,[n,g]=o.useState("pr"),[f,b]=o.useState(""),[y,d]=o.useState(!1),t=`Student Name    Subject     Marks
Swadeep         Math        85
Tuhina          Science     92
Abhronila       English     88
Debangshu       History     76
Rohit           Geography   81
Priya           Physics     95
Aniket          Chemistry   79
Swati           Biology     84`;return o.useEffect(()=>{d(!0),setTimeout(()=>d(!1),300);const r={pr:()=>t,"pr -3":()=>{const s=t.split(`
`),i=Math.ceil(s.length/3);let p=s.slice(0,i),c=s.slice(i,2*i),h=s.slice(2*i);const w=Math.max(p.length,c.length,h.length);let x="";for(let a=0;a<w;a++)x+=(p[a]||"").padEnd(25)+(c[a]||"").padEnd(25)+(h[a]||"")+`
`;return x},"pr -l 10":()=>t+`

[Page break simulation]
(remaining content on next page)`,'pr -h "Student Report"':()=>`


${" ".repeat(30)}Student Report

${t}`,"pr -o 5":()=>t.split(`
`).map(s=>"     "+s).join(`
`)};b(r[n]?r[n]():t)},[n,t]),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4",children:"📄 The `pr` Command"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Format text files for printing — paginate, columnize, add headers, and prepare reports."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-green-500",children:"$"})," Try it live"]}),e.jsx("div",{className:"flex flex-wrap gap-3 mb-6",children:["pr","pr -3","pr -l 10",'pr -h "Student Report"',"pr -o 5"].map(r=>e.jsx("button",{onClick:()=>g(r),className:m("px-4 py-2 rounded-lg font-mono text-sm transition-all",n===r?"bg-blue-600 text-white shadow-md":"bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r},r))}),e.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[e.jsx("span",{className:"text-green-400",children:"$"}),e.jsx("span",{children:n})]}),e.jsx("pre",{className:m("whitespace-pre-wrap transition-opacity duration-300",y?"opacity-70":"opacity-100"),children:f})]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:"💡 The `pr` command does not change the original file; it only formats output."})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `pr`?"}),e.jsxs("p",{className:"mb-3",children:["The ",e.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"pr"})," command (short for ",e.jsx("strong",{children:"print"}),") formats text files for printing. It adds headers, footers, page numbers, converts text into multi-column layouts, and adjusts margins."]}),e.jsx("p",{children:"Originally designed for line printers, `pr` is still useful for generating reports, preparing data for mailing, or simply viewing wide text in columns."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),e.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:e.jsx("code",{children:"pr [options] [file...]"})}),e.jsxs("ul",{className:"mt-4 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Purpose:"})," Paginate and columnize text files for printing or display."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return:"})," Outputs formatted text to stdout (exit 0 on success)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When used:"})," Before sending text to a printer, or to create multi-column terminal output."]})]})]})]}),e.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Printing reports:"})," Add date/time and page numbers automatically."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Creating columnar data:"})," ",e.jsx("code",{className:"text-sm",children:"pr -3 data.txt"})," for 3-column output."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preparing mailing labels:"})," Combine with ",e.jsx("code",{className:"text-sm",children:"fold"})," and ",e.jsx("code",{className:"text-sm",children:"pr"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Source code listing:"})," ",e.jsx("code",{className:"text-sm",children:'pr -l 60 -h "My Script" script.sh | lpr'})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Log file pagination:"})," View long logs page by page using ",e.jsx("code",{className:"text-sm",children:"pr -l 24 log.txt | less"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Double-space output:"})," ",e.jsx("code",{className:"text-sm",children:"pr -d"})," (like `sed 'G'`)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Suppress headers:"})," ",e.jsx("code",{className:"text-sm",children:"pr -T"})," (no page headers/footers)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom page length:"})," ",e.jsx("code",{className:"text-sm",children:"pr -l 66"})," (standard line printer)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Combine with `enscript`:"})," For even fancier printing (PostScript)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Wide output without truncation:"})," ",e.jsx("code",{className:"text-sm",children:"pr -W 200"})," (GNU pr)."]})]})]})]})]})}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `pr` Transforms a File"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:e.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"180",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"110",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. Input file"}),e.jsx("text",{x:"110",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"data.txt (plain text)"}),e.jsx("line",{x1:"200",y1:"70",x2:"250",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow2)"}),e.jsx("rect",{x:"260",y:"30",width:"180",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. Apply options"}),e.jsx("text",{x:"350",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"-3 (columns), -h (header)"}),e.jsx("line",{x1:"440",y1:"70",x2:"490",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow2)"}),e.jsx("rect",{x:"500",y:"30",width:"180",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"590",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. Paginate & format"}),e.jsx("text",{x:"590",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"add headers, page breaks"}),e.jsx("line",{x1:"680",y1:"70",x2:"730",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow2)"}),e.jsx("rect",{x:"740",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),e.jsx("text",{x:"810",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Output"}),e.jsx("text",{x:"810",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"formatted for printer"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow2",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),e.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Plain text → columnization → headers/pagination → printable format"}),e.jsx("rect",{x:"720",y:"180",width:"80",height:"30",rx:"4",fill:"#ef4444",fillOpacity:"0.3",children:e.jsx("animate",{attributeName:"opacity",values:"0.3;0.6;0.3",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"760",y:"200",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Print"})]})})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[e.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),e.jsxs("div",{className:"grid gap-6",children:[e.jsx(l,{fileModule:N,title:"Basic Pagination",highlightLines:[4,8]}),e.jsx(l,{fileModule:k,title:"Multi-Column Output",highlightLines:[6,12]}),e.jsx(l,{fileModule:A,title:"Custom Headers & Footers",highlightLines:[5,10]}),e.jsx(l,{fileModule:S,title:"Preparing for Printing",highlightLines:[7,14]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming `pr` modifies the original file:"})," It does not; output must be redirected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing up `-l` and `-L`:"})," `-l` sets page length, `-L` sets line length (GNU)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overly narrow columns:"})," Default 72 columns may truncate wide lines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Headers on every page even when not desired:"})," Use `-T` to suppress."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Confusing `pr` with `printf`:"})," Different tools; `pr` is for pagination."]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[e.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Always redirect output:"})," ",e.jsx("code",{className:"text-sm",children:"pr file.txt > formatted.txt"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Test with `less` first:"})," ",e.jsx("code",{className:"text-sm",children:"pr -3 file.txt | less"})]}),e.jsx("li",{children:e.jsx("strong",{children:"Use `-h` to add descriptive headers for printing."})}),e.jsx("li",{children:e.jsx("strong",{children:"Adjust column width with `-W` (GNU) for wide data."})}),e.jsx("li",{children:e.jsxs("strong",{children:["Combine with `enscript` for PDF generation: ",e.jsx("code",{className:"text-sm",children:"pr ... | enscript -o -"}),"."]})})]})]})]}),e.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[e.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"How would you create a 4-column list from a file of names?"}),e.jsx("li",{children:"Why might you want to suppress page headers when piping to `less`?"}),e.jsx("li",{children:"If you have a 200-line file, how many pages will `pr -l 50` produce?"})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[e.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),e.jsxs("ul",{className:"list-check space-y-2",children:[e.jsx("li",{children:"✅ Can produce a simple paginated output with headers."}),e.jsx("li",{children:"✅ Can create multi-column output using `-num`."}),e.jsx("li",{children:"✅ Can set custom page length with `-l`."}),e.jsx("li",{children:"✅ Can add a custom header using `-h`."}),e.jsx("li",{children:"✅ Knows that `pr` does not edit files in place."})]})]})]}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:e.jsx(j,{title:"Frequently Asked Questions about pr Command",questions:v})}),e.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",u," years experience (since 1998)"]})]})]}),e.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",e.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),e.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),e.jsxs("p",{children:[e.jsx("strong",{children:"🎓 Classroom Tip:"}),' Have students use `pr` on a directory listing (`ls -l | pr -3 -h "Directory Contents"`) to see immediate real-world value. Then ask them to pipe the output to `lpr` if a printer is available (or to `pdf` generator).']}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚠️ Remember:"})," `pr` is rarely used in modern GUI environments but remains essential for CLI reporting and automated print jobs. Teach it as a bridge between raw text and printer-ready format."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a script that takes a CSV file, uses `pr` to format it into 2 columns, and adds a timestamp header. Then pipe to `enscript` to produce a PDF report."]})]})]})})]})};export{U as default};

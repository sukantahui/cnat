import{r as reactExports,j as jsxRuntimeExports}from"./index-BZ1-3x1c.js";import{c as clsx}from"./clsx-B-dksMZM.js";import{S as ShellFileLoader}from"./ShellFileLoader-CLbCSpME.js";import{F as FAQTemplate}from"./FAQTemplate-BtWzcOn9.js";import"./prism-BzNpjcfR.js";const questions=[{question:"What does the `bc` command stand for and what does it do?",shortAnswer:"Basic Calculator — an arbitrary-precision arithmetic language.",explanation:"`bc` performs arithmetic with numbers of any size, supports decimal, hex, binary, variables, functions, and control flow.",hint:"It's like a programming language just for math.",level:"basic",codeExample:"echo '2^100' | bc"},{question:"How do you perform floating-point division with `bc`?",shortAnswer:"Set the `scale` variable before division, e.g., `scale=2; 10/3`.",explanation:"Default scale is 0, so integer division occurs. Setting scale to positive integer yields that many decimal digits.",hint:"`scale=0; 5/2` gives 2; `scale=3; 5/2` gives 2.500.",level:"basic",codeExample:"echo 'scale=4; 22/7' | bc"},{question:"What is the difference between `bc` and `expr` or `$(( ))`?",shortAnswer:"`bc` handles floating-point and large numbers; shell arithmetic only integers.",explanation:"Shell arithmetic is fast but limited to integers. `bc` is slower but supports decimals, big integers, and math functions.",hint:"Use bc when you need division with decimals or huge numbers.",level:"intermediate",codeExample:"echo 'scale=5; 1/3' | bc vs echo $((1/3))"},{question:"How can you calculate the square root of 2 to 10 decimal places?",shortAnswer:"`echo 'scale=10; sqrt(2)' | bc -l`",explanation:"The `-l` option loads the math library which includes `sqrt()`, `sin()`, `cos()`, `a()` (arctan), `l()` (natural log), `e()` (exponential).",hint:"`-l` also sets scale to 20 by default.",level:"intermediate",codeExample:"echo 'scale=15; sqrt(2)' | bc -l"},{question:"How do you convert a hexadecimal number to decimal using `bc`?",shortAnswer:"Set `ibase=16` then echo the number: `echo 'ibase=16; FF' | bc`",explanation:"`ibase` sets input base (2-16). `obase` sets output base. Default both are 10.",hint:"Set `obase` before `ibase` if both are changed, because `obase` value is interpreted in current `ibase`.",level:"intermediate",codeExample:"echo 'ibase=16; obase=10; FF' | bc"},{question:"What is the purpose of `bc -l`?",shortAnswer:"Loads the standard math library (sine, cosine, arctangent, log, exp) and sets scale to 20.",explanation:"Without `-l`, math functions like `s()`, `c()`, `a()`, `l()`, `e()` are not available.",hint:"`l(x)` is natural log, not log base 10.",level:"advanced",codeExample:"echo 'scale=5; e(1)' | bc -l   # e^1 = 2.71828"},{question:"Why does `echo '10/3' | bc` output 3 instead of 3.333?",shortAnswer:"Because default scale=0, so division results in integer truncation.",explanation:"`bc` does not automatically use floating point; you must set scale explicitly.",hint:"Always set `scale` when expecting decimal results.",level:"basic",codeExample:"echo 'scale=3; 10/3' | bc"},{question:"How can you store the result of a bc calculation in a shell variable?",shortAnswer:"Use command substitution: `result=$(echo '2+2' | bc)`",explanation:"The output of bc is captured, leading/trailing whitespace may appear; use `printf` or trim if needed.",hint:"For floating results, combine with `printf '%.2f'`.",level:"basic",codeExample:"pi=$(echo 'scale=5; 4*a(1)' | bc -l); echo $pi"},{question:"What is the difference between `bc` and `dc`?",shortAnswer:"`bc` is a higher-level language (C-like syntax); `dc` is a reverse-polish notation (RPN) calculator.",explanation:"`bc` is more user-friendly; `dc` is older, uses postfix notation, and is often used internally by `bc`.",hint:"`bc` is essentially a preprocessor for `dc`.",level:"expert",codeExample:"echo '2 3 + p' | dc"},{question:"How can you define a function in `bc`?",shortAnswer:"Use `define name(params) { ... }` syntax.",explanation:"Functions can be recursive, have local variables (with `auto`), and return values with `return`.",hint:"Define factorial or Fibonacci as examples.",level:"expert",codeExample:`bc << 'EOF'
define fact(x) { if (x<=1) return 1; return x*fact(x-1); }
fact(5)
EOF`},{question:"How do you comment in `bc`?",shortAnswer:"Use `/* comment */` for multi-line or `#` for single-line (GNU bc).",explanation:"POSIX bc only supports `/* */`. GNU bc also supports `#` to end of line.",hint:"Comments are useful in bc scripts.",level:"intermediate",codeExample:"echo '/* compute pi */ scale=5; 4*a(1)' | bc -l"},{question:"What does the `last` variable (or `.`) do?",shortAnswer:"It holds the result of the last expression evaluated.",explanation:"GNU bc stores the last result in `last` (or `.` in older versions). You can use it in subsequent calculations.",hint:"`echo '2+3; .*4' | bc` outputs 5 and 20.",level:"advanced",codeExample:"echo '7*6; .+1' | bc"},{question:"How can you repeat an operation many times with `bc`?",shortAnswer:"Use a `for` loop inside bc.",explanation:"`bc` supports `for (init; cond; inc)`, `while`, and `if` statements.",hint:"Useful for summation, factorial, or series.",level:"expert",codeExample:`bc << EOF
sum=0; for(i=1;i<=100;i++) sum+=i; sum
EOF`},{question:"How do you calculate the natural log of 10 using bc?",shortAnswer:"`echo 'l(10)' | bc -l` (since `-l` loads `l()` for natural log).",explanation:"The math library function `l(x)` returns natural logarithm. For base-10, divide by `l(10)`.",hint:"`log10(x) = l(x)/l(10)`.",level:"intermediate",codeExample:"echo 'scale=5; l(100)/l(10)' | bc -l"},{question:"What is the maximum precision (scale) that `bc` can handle?",shortAnswer:"Limited only by memory; you can set scale to thousands or millions.",explanation:"`bc` uses arbitrary-precision arithmetic; huge scales will slow computation and consume memory.",hint:"`scale=10000; 4*a(1)` calculates Pi to 10000 digits (slow but possible).",level:"expert",codeExample:"time echo 'scale=5000; 4*a(1)' | bc -l > pi.txt"},{question:"Why does `bc` treat numbers starting with 0 as octal?",shortAnswer:"By default, bc interprets numbers with leading 0 as octal (0-7).",explanation:"To force decimal, set `ibase=10` before interpreting such numbers, or avoid leading zeros.",hint:"`echo 'ibase=8; 10' | bc` gives 8 decimal; confusing.",level:"advanced",codeExample:"echo '010' | bc   # outputs 8"},{question:"How can you perform bitwise operations in `bc`?",shortAnswer:"Use `&` (AND), `|` (OR), `^` (XOR), `<<` (left shift), `>>` (right shift) — available in GNU bc.",explanation:"Older versions may not support bitwise; GNU bc and most Linux versions do.",hint:"`echo '12 & 5' | bc` → 4 (1100 & 0101 = 0100).",level:"expert",codeExample:"echo 'obase=2; 12 & 5' | bc"},{question:"What is the difference between `bc` and `python` for math?",shortAnswer:"`bc` is lighter, faster for interactive simple math, but `python` is more powerful and easier for complex logic.",explanation:"`bc` is a specialized tool; python is a full language. In scripts, bc is often used for quick calculations.",hint:"For serious numeric computing, use Python with decimal or numpy.",level:"expert",codeExample:"python -c 'print(10/3)'"},{question:"Can `bc` handle scientific notation like 1e-5?",shortAnswer:"No, bc does not support scientific notation natively; you must use scale and small numbers.",explanation:"You can simulate: `scale=10; 0.00001` or use powers: `10^-5`.",hint:"`echo '10^-5' | bc` works (exponentiation).",level:"advanced",codeExample:"echo 'scale=10; 1/100000' | bc"},{question:"How do you print a result without newline in bc?",shortAnswer:"Use `print` statement with no trailing newline: `print result`.",explanation:'`print` outputs exactly what you specify; `print "hello"` without `;` after will not add newline.',hint:"`echo 'print 2+3' | bc` outputs 5 with no newline, but shell may add one.",level:"expert",codeExample:`echo 'print 2+3, " " , 4*5' | bc`},{question:"What is the purpose of the `scale` variable in `bc`?",shortAnswer:"Determines the number of decimal places for division, modulo, and some other operations.",explanation:"Multiplication and addition are not affected by scale (they produce full precision).",hint:"`scale` only affects operation results that involve division or `sqrt`.",level:"intermediate",codeExample:`scale=3; 1/3   # 0.333
scale=6; 1/3   # 0.333333`},{question:"How can you use `bc` to calculate compound interest?",shortAnswer:"`echo 'principal * (1 + rate)^years' | bc`",explanation:"Set scale to appropriate number of decimal places (2 for currency).",hint:'Example: `p=1000; r=0.05; t=5; echo "scale=2; $p * (1 + $r)^$t" | bc`',level:"intermediate",codeExample:"echo 'scale=2; 1000 * (1 + 0.05)^5' | bc"},{question:"What are the magic numbers `0` and `1` in bc's math library?",shortAnswer:"In `bc -l`, `a(1)` returns π/4, `l(1)` returns 0, `e(1)` returns e.",explanation:"These are useful for deriving constants: π = 4*a(1), e = e(1).",hint:"`echo '4*a(1)' | bc -l` gives π.",level:"advanced",codeExample:"echo 'scale=10; 4*a(1)' | bc -l"},{question:"How do you generate a random number in bc?",shortAnswer:"bc does not have built-in random; use shell's `$RANDOM` and pass to bc.",explanation:'You can simulate: `echo "$RANDOM / 32768" | bc -l`.',hint:"Or use `od -An -N2 -i /dev/urandom`.",level:"expert",codeExample:'echo "scale=4; $RANDOM / 32768" | bc -l'},{question:"Why does my `bc` script show 'parse error' when using `^` for exponent?",shortAnswer:"Some older bc versions use `^`, but POSIX requires `^`. GNU bc accepts both `^` and `**`.",explanation:"If you get errors, use `^` and ensure you have GNU bc. Alternatively, use `pow()` if defined.",hint:"Check `bc --version`.",level:"expert",codeExample:"echo '2^10' | bc   # works on GNU"},{question:"How can you use `bc` to compute Fibonacci numbers?",shortAnswer:"Write a recursive or iterative function inside bc.",explanation:"Example iterative: `a=0; b=1; for(i=1;i<=n;i++){c=a+b; a=b; b=c}; a`",hint:"For large n, loops are fine.",level:"advanced",codeExample:`bc << 'EOF'
n=10;a=0;b=1;for(i=1;i<=n;i++){c=a+b;a=b;b=c};a
EOF`},{question:"What is the difference between `bc` and `calc`?",shortAnswer:"`calc` is another arbitrary-precision calculator with more features (e.g., fractions, complex numbers), but not standard on all systems.",explanation:"`calc` is more feature-rich, but `bc` is universally available on Unix.",hint:"For portability, use bc.",level:"expert",codeExample:"calc '2/3'"},{question:"How can you debug a long bc script?",shortAnswer:"Use print statements, or run bc interactively: `bc -q` then load script with `source`.",explanation:"Set `print` inside loops and conditionals. Use comments to trace.",hint:'`bc -l` then `define t(x){print "x=",x,"\\n"; return x*x;}`.',level:"expert",codeExample:`bc -q
t(x)=x*2
print t(5)`},{question:"Can `bc` read input from a file?",shortAnswer:"Yes, `bc filename` executes commands in that file.",explanation:"You can write bc scripts, include function definitions, and run them.",hint:"Make sure to end with `quit` or use `-q`.",level:"intermediate",codeExample:"bc mymath.bc"},{question:"What is the output of `echo '5/2' | bc` without scale?",shortAnswer:"2 (integer division, truncated toward zero).",explanation:"Because scale defaults to 0, division drops the fractional part.",hint:"Not rounding; truncation.",level:"basic",codeExample:"echo '5/2' | bc   # 2"},{question:"How to compute the sine of 30 degrees in bc?",shortAnswer:"Convert degrees to radians: sin(30°) = sin(π/6). Use `s(30 * a(1) / 45)` because a(1)=π/4.",explanation:"Alternatively: `define dtor(d) { return d * a(1) / 45; }`",hint:"`echo 'scale=10; s(30 * a(1) / 45)' | bc -l`.",level:"expert",codeExample:"echo 'scale=6; s(30*4*a(1)/180)' | bc -l"}],bcBasicSh=`#!/bin/bash
# bc_basic.sh - Basic arithmetic with bc

echo "=== Basic bc Usage ==="

echo "1. Simple addition:"
echo "2 + 3" | bc

echo -e "\\n2. Multiplication and division (integer division by default):"
echo "10 / 3" | bc

echo -e "\\n3. Setting scale for decimal precision:"
echo "scale=2; 10 / 3" | bc

echo -e "\\n4. Using bc in command substitution:"
result=$(echo "scale=4; 22/7" | bc)
echo "22/7 = $result"

echo -e "\\n5. Multiple expressions:"
echo "x=5; y=3; x*y; x^y" | bc

echo -e "\\n6. Using bc with here-document:"
bc <<EOF
scale=3
(10 + 5) / 3
EOF`,bcVariablesSh=`#!/bin/bash
# bc_variables.sh - Using variables and scale

echo "=== Variables and Scale in bc ==="

echo "1. Setting and using variables:"
bc <<EOF
price = 29.99
tax_rate = 0.08
total = price * (1 + tax_rate)
total
EOF

echo -e "\\n2. Scale affects division:"
bc <<EOF
scale=0
5/2
scale=3
5/2
EOF

echo -e "\\n3. Assigning scale inside bc:"
bc -l <<EOF
scale=10
sqrt(2)
EOF

echo -e "\\n4. Using last result variable (dot):"
bc <<EOF
3.5 * 2
. + 1
EOF

echo -e "\\n5. Arrays in bc:"
bc <<EOF
arr[0]=10; arr[1]=20; arr[0] + arr[1]
EOF`,bcAdvancedSh=`#!/bin/bash
# bc_advanced.sh - Math library, base conversion, functions

echo "=== Advanced bc Features ==="

echo "1. Using bc -l (math library):"
echo "scale=10; s(3.14159/2)" | bc -l
echo "Cosine of 0: c(0)" | bc -l
echo "Arctan(1) * 4 (pi): a(1)*4" | bc -l

echo -e "\\n2. Base conversion (hex to decimal):"
echo "ibase=16; FF" | bc

echo -e "\\n3. Decimal to hex:"
echo "obase=16; 255" | bc

echo -e "\\n4. Binary conversion:"
echo "obase=2; 13" | bc

echo -e "\\n5. Defining a custom function:"
bc <<EOF
define factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n-1);
}
factorial(5)
EOF

echo -e "\\n6. Conditional logic:"
bc <<EOF
x = 42
if (x > 40) print "Large\\n" else print "Small\\n"
EOF`,bcScriptingSh=`#!/bin/bash
# bc_scripting.sh - Practical scripting with bc

echo "=== Scripting Examples ==="

# Example 1: Calculate average of numbers from stdin
echo "1. Average of numbers:"
echo "10 20 30 45 50" | tr ' ' '\\n' | (sum=0; count=0; while read n; do sum=$(echo "$sum + $n" | bc); count=$((count+1)); done; echo "scale=2; $sum / $count" | bc)

# Example 2: Compute compound interest
principal=1000
rate=5
years=3
interest=$(bc <<EOF
scale=2
p = $principal
r = $rate / 100
t = $years
p * (1 + r)^t - p
EOF)
echo "Compound interest on $principal at $rate% for $years years: \\$$interest"

# Example 3: Convert Celsius to Fahrenheit
celsius=25
fahrenheit=$(echo "scale=1; ($celsius * 9/5) + 32" | bc)
echo "$celsius°C = $fahrenheit°F"

# Example 4: Disk usage percentage report
total=500000
used=375000
percent=$(echo "scale=2; ($used / $total) * 100" | bc)
echo "Disk usage: $percent%"

# Example 5: Calculate Pi to 100 digits
echo "Pi to 50 digits:"
echo "scale=50; 4*a(1)" | bc -l`,Topic4=()=>{const currentYear=new Date().getFullYear(),experienceYears=currentYear-1998,[expression,setExpression]=reactExports.useState("10 * 3.14159"),[scale,setScale]=reactExports.useState(2),[bcResult,setBcResult]=reactExports.useState(""),[isAnimating,setIsAnimating]=reactExports.useState(!1);reactExports.useEffect(()=>{setIsAnimating(!0),setTimeout(()=>setIsAnimating(!1),300);try{let expr=expression;expr=expr.replace(/\^/g,"**");let result;if(expr.includes("sqrt(")){const match=expr.match(/sqrt\(([^)]+)\)/);match?result=Math.sqrt(parseFloat(match[1])):result=eval(expr)}else result=eval(expr);result=result.toFixed(scale),setBcResult(result)}catch(e){setBcResult("Error: invalid expression")}},[expression,scale]);const keyframesStyle=`
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
  `;return jsxRuntimeExports.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed",children:[jsxRuntimeExports.jsx("style",{children:keyframesStyle}),jsxRuntimeExports.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-12 md:py-16 animate-fade-slide-up",children:[jsxRuntimeExports.jsxs("div",{className:"text-center mb-12",children:[jsxRuntimeExports.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4",children:"🧮 The `bc` Command"}),jsxRuntimeExports.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Arbitrary-precision calculator language — perform math from simple arithmetic to complex scripting."})]}),jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12 transition-all duration-300 hover:shadow-xl card-hover",children:[jsxRuntimeExports.jsxs("h2",{className:"text-2xl font-semibold mb-4 flex items-center gap-2",children:[jsxRuntimeExports.jsx("span",{className:"text-green-500",children:"$"})," Try bc live"]}),jsxRuntimeExports.jsxs("div",{className:"mb-4",children:[jsxRuntimeExports.jsx("label",{className:"block text-sm font-medium mb-2",children:"Expression:"}),jsxRuntimeExports.jsx("input",{type:"text",value:expression,onChange:e=>setExpression(e.target.value),className:"w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono",placeholder:"e.g., 10 * 3.14159"})]}),jsxRuntimeExports.jsxs("div",{className:"mb-4",children:[jsxRuntimeExports.jsx("label",{className:"block text-sm font-medium mb-2",children:"Scale (decimal places):"}),jsxRuntimeExports.jsx("input",{type:"number",value:scale,onChange:e=>setScale(parseInt(e.target.value)||0),min:"0",max:"20",className:"w-24 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700"})]}),jsxRuntimeExports.jsxs("div",{className:"bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-green-400",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-2 text-gray-400 mb-2",children:[jsxRuntimeExports.jsx("span",{className:"text-green-400",children:"$"}),jsxRuntimeExports.jsxs("span",{children:['echo "scale=',scale,"; ",expression,'" | bc']})]}),jsxRuntimeExports.jsx("pre",{className:clsx("transition-opacity duration-300",isAnimating?"opacity-70":"opacity-100"),children:bcResult})]}),jsxRuntimeExports.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-3 italic",children:'💡 `bc` stands for "basic calculator" — supports variables, functions, and conditionals.'})]})]}),jsxRuntimeExports.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8",children:jsxRuntimeExports.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[jsxRuntimeExports.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.1s"},children:[jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold border-l-4 border-blue-500 pl-3 mb-4",children:"📖 What is `bc`?"}),jsxRuntimeExports.jsxs("p",{className:"mb-3",children:["The ",jsxRuntimeExports.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"bc"})," command is an arbitrary-precision calculator language. It can handle numbers of any size (limited only by memory) and supports decimal, binary, hex, and custom bases."]}),jsxRuntimeExports.jsx("p",{children:"Unlike shell arithmetic (`$(( ))`), `bc` handles floating-point numbers, has variables, loops, functions, and is fully programmable."})]}),jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold border-l-4 border-green-500 pl-3 mb-4",children:"🎯 Prototype & Signature"}),jsxRuntimeExports.jsx("div",{className:"font-mono text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded",children:jsxRuntimeExports.jsx("code",{children:"bc [ -hlwsqv ] [long-options] [ file ... ]"})}),jsxRuntimeExports.jsxs("ul",{className:"mt-4 space-y-2",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Purpose:"})," Perform arbitrary-precision arithmetic and script math operations."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Return:"})," Outputs calculation result to stdout (exit 0 on success)."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"When used:"})," When shell arithmetic is insufficient (floats, large numbers, complex expressions)."]})]})]})]}),jsxRuntimeExports.jsxs("div",{className:"space-y-6 animate-fade-slide-up",style:{animationDelay:"0.2s"},children:[jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold border-l-4 border-purple-500 pl-3 mb-4",children:"🌍 Real-World Use Cases"}),jsxRuntimeExports.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Scientific calculations:"})," Pi to 1000 decimal places: ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:'echo "scale=1000; 4*a(1)" | bc -l'})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Financial scripts:"})," Interest calculations with exact decimal precision."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Unit conversions:"})," Temperature, currency, or data size conversions in scripts."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"System monitoring:"})," Calculate average load, memory usage percentages."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Birthday/age calculations:"})," Floating-point division of days."]})]})]}),jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold border-l-4 border-amber-500 pl-3 mb-4",children:"💡 Professional Tips & Tricks"}),jsxRuntimeExports.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Use `-l` for math library:"})," Loads standard functions (sine, cosine, arctangent, natural log, exponential)."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Set scale for decimal precision:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:"scale=10; 22/7"})," gives 10 decimal digits."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Use here-documents for multi-line scripts:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:"bc << EOF ... EOF"})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Change input/output base:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:"obase=16; ibase=10; 255"})," → FF."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Define custom functions:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:"define f(x) { return x^2; }"})]})]})]})]})]})}),jsxRuntimeExports.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.3s"},children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"🔄 How `bc` Processes Expressions"}),jsxRuntimeExports.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md",children:jsxRuntimeExports.jsxs("svg",{viewBox:"0 0 900 300",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[jsxRuntimeExports.jsx("rect",{x:"20",y:"30",width:"180",height:"80",rx:"8",fill:"#3b82f6",fillOpacity:"0.1",stroke:"#3b82f6",strokeWidth:"2",className:"svg-step-hover"}),jsxRuntimeExports.jsx("text",{x:"110",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"1. User input"}),jsxRuntimeExports.jsx("text",{x:"110",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:'echo "10/3" | bc'}),jsxRuntimeExports.jsx("line",{x1:"200",y1:"70",x2:"250",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow4)"}),jsxRuntimeExports.jsx("rect",{x:"260",y:"30",width:"180",height:"80",rx:"8",fill:"#10b981",fillOpacity:"0.1",stroke:"#10b981",strokeWidth:"2",className:"svg-step-hover"}),jsxRuntimeExports.jsx("text",{x:"350",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"2. Parse & tokenize"}),jsxRuntimeExports.jsx("text",{x:"350",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"variable, number, operator"}),jsxRuntimeExports.jsx("line",{x1:"440",y1:"70",x2:"490",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow4)"}),jsxRuntimeExports.jsx("rect",{x:"500",y:"30",width:"180",height:"80",rx:"8",fill:"#f59e0b",fillOpacity:"0.1",stroke:"#f59e0b",strokeWidth:"2",className:"svg-step-hover"}),jsxRuntimeExports.jsx("text",{x:"590",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"3. Evaluate"}),jsxRuntimeExports.jsx("text",{x:"590",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"arbitrary-precision arithmetic"}),jsxRuntimeExports.jsx("line",{x1:"680",y1:"70",x2:"730",y2:"70",stroke:"#9ca3af",strokeWidth:"2",markerEnd:"url(#arrow4)"}),jsxRuntimeExports.jsx("rect",{x:"740",y:"30",width:"140",height:"80",rx:"8",fill:"#8b5cf6",fillOpacity:"0.1",stroke:"#8b5cf6",strokeWidth:"2",className:"svg-step-hover"}),jsxRuntimeExports.jsx("text",{x:"810",y:"55",textAnchor:"middle",fill:"currentColor",fontSize:"14",fontWeight:"bold",children:"4. Output"}),jsxRuntimeExports.jsx("text",{x:"810",y:"75",textAnchor:"middle",fill:"currentColor",fontSize:"12",children:"3.333333..."}),jsxRuntimeExports.jsx("defs",{children:jsxRuntimeExports.jsx("marker",{id:"arrow4",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:jsxRuntimeExports.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#9ca3af"})})}),jsxRuntimeExports.jsx("text",{x:"450",y:"200",textAnchor:"middle",fill:"#6b7280",fontSize:"12",fontStyle:"italic",children:"Input → parsing → arbitrary evaluation → formatted result"}),jsxRuntimeExports.jsx("circle",{cx:"810",cy:"180",r:"15",fill:"#ef4444",fillOpacity:"0.3",children:jsxRuntimeExports.jsx("animate",{attributeName:"r",values:"15;18;15",dur:"2s",repeatCount:"indefinite"})}),jsxRuntimeExports.jsx("text",{x:"810",y:"184",textAnchor:"middle",fill:"currentColor",fontSize:"10",children:"Result"})]})})]}),jsxRuntimeExports.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-slide-up",style:{animationDelay:"0.4s"},children:[jsxRuntimeExports.jsx("h2",{className:"text-2xl font-bold",children:"📁 Practical Shell Scripts"}),jsxRuntimeExports.jsxs("div",{className:"grid gap-6",children:[jsxRuntimeExports.jsx(ShellFileLoader,{fileModule:bcBasicSh,title:"Basic Arithmetic",highlightLines:[4,10]}),jsxRuntimeExports.jsx(ShellFileLoader,{fileModule:bcVariablesSh,title:"Variables & Scale",highlightLines:[6,14]}),jsxRuntimeExports.jsx(ShellFileLoader,{fileModule:bcAdvancedSh,title:"Math Library & Base Conversion",highlightLines:[8,16]}),jsxRuntimeExports.jsx(ShellFileLoader,{fileModule:bcScriptingSh,title:"Scripting with bc",highlightLines:[12,20]})]})]}),jsxRuntimeExports.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.5s"},children:[jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-xl font-bold text-red-500 dark:text-red-400 mb-4",children:"⚠️ Common Pitfalls"}),jsxRuntimeExports.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Forgetting to set scale:"})," `bc` defaults to scale=0 (integer division). 5/2 = 2, not 2.5."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Confusing `ibase` and `obase` order:"})," Set `obase` before `ibase` if they differ, because `ibase` affects how `obase` is read."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Using `^` for exponentiation:"})," `bc` uses `^` (power), not `**`. However, in POSIX, `^` is used; GNU bc supports both."]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Not quoting expressions with asterisks:"}),' `*` may be expanded by shell; use quotes or escape: `"3 * 4"`.']}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Assuming `bc -l` loads everything:"})," It loads standard math functions but still uses scale=20; you may need to set scale separately."]})]})]}),jsxRuntimeExports.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover",children:[jsxRuntimeExports.jsx("h2",{className:"text-xl font-bold text-green-500 dark:text-green-400 mb-4",children:"✅ Best Practices"}),jsxRuntimeExports.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Always set scale for decimal results:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:"scale=10"})," before division."]}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("strong",{children:"Use `bc << EOF ... EOF` for multi-line calculations."})}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Combine with `printf` for formatting:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:'printf "%.2f\\n" $(bc <<< "scale=2; 10/3")'})]}),jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsx("strong",{children:"Store results in variables:"})," ",jsxRuntimeExports.jsx("code",{className:"text-sm",children:'result=$(bc <<< "10 * 3.14")'})]}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("strong",{children:"For production scripts, validate inputs to avoid injection."})})]})]})]}),jsxRuntimeExports.jsxs("section",{className:"max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 animate-fade-slide-up",style:{animationDelay:"0.6s"},children:[jsxRuntimeExports.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-8 border-blue-400",children:[jsxRuntimeExports.jsx("h2",{className:"text-xl font-bold text-blue-700 dark:text-blue-300 mb-3",children:"💭 Think About..."}),jsxRuntimeExports.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300",children:[jsxRuntimeExports.jsx("li",{children:"What happens if you set `scale=0` and compute 5/2? Why is that useful in some cases?"}),jsxRuntimeExports.jsx("li",{children:"How would you calculate the square root of 2 to 50 decimal places?"}),jsxRuntimeExports.jsx("li",{children:"Why does `bc` treat numbers starting with 0 as octal by default? How to force decimal?"})]})]}),jsxRuntimeExports.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-l-8 border-green-400",children:[jsxRuntimeExports.jsx("h2",{className:"text-xl font-bold text-green-700 dark:text-green-300 mb-3",children:"📋 Student Mini Checklist"}),jsxRuntimeExports.jsxs("ul",{className:"list-check space-y-2",children:[jsxRuntimeExports.jsx("li",{children:'✅ Can perform basic arithmetic with `echo "2+2" | bc`.'}),jsxRuntimeExports.jsx("li",{children:"✅ Can set decimal precision using `scale`."}),jsxRuntimeExports.jsx("li",{children:"✅ Can use `bc -l` for advanced math (sqrt, sin, cos, log)."}),jsxRuntimeExports.jsx("li",{children:"✅ Can convert between number bases (hex ↔ decimal)."}),jsxRuntimeExports.jsx("li",{children:"✅ Can write simple bc scripts with variables and conditionals."})]})]})]}),jsxRuntimeExports.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.7s"},children:jsxRuntimeExports.jsx(FAQTemplate,{title:"Frequently Asked Questions about bc Command",questions})}),jsxRuntimeExports.jsx("section",{className:"max-w-6xl mx-auto px-4 py-8 animate-fade-slide-up",style:{animationDelay:"0.8s"},children:jsxRuntimeExports.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-8 border-indigo-500 teacher-note-hover transition-all",children:[jsxRuntimeExports.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[jsxRuntimeExports.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-xl",children:"👨‍🏫"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("h3",{className:"text-xl font-bold text-indigo-800 dark:text-indigo-300",children:"Teacher's Note"}),jsxRuntimeExports.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Sukanta Hui • ",experienceYears," years experience (since 1998)"]})]})]}),jsxRuntimeExports.jsxs("div",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"✉️ Email:"})," sukantahui@codernaccotax.co.in | ",jsxRuntimeExports.jsx("strong",{children:"📞 Mobile:"})," 7003756860"]}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"💻 Expertise:"})," Programming Language, RDBMs, Operating System, Web Development"]}),jsxRuntimeExports.jsx("hr",{className:"my-3 border-gray-300 dark:border-gray-700"}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"🎓 Classroom Tip:"})," When teaching `bc`, start with a calculator comparison: shell `$((5/2))` gives 2, but `bc` with scale gives 2.5. This immediately highlights why `bc` is needed for real-world math. Then demonstrate calculating compound interest or EMI — students appreciate the financial application."]}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"⚠️ Remember:"})," `bc` is not just a calculator; it's a programming language. Students can write loops and functions. Introduce them to `for (i=1; i &gt =10; i++)` to generate tables."]}),jsxRuntimeExports.jsxs("p",{children:[jsxRuntimeExports.jsx("strong",{children:"🚀 Pro Challenge:"})," Write a bc script that computes the factorial of a number (n!). Use a loop and recursion. Then compute e^x using Taylor series. This shows bc's power for numerical methods."]})]})]})})]})};export{Topic4 as default};

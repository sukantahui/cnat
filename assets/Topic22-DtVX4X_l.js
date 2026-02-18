import{j as e}from"./index-BFnLuail.js";import{S as s}from"./ShellFileLoader-BgOvPFCh.js";import"./prism-DTsTe1iV.js";const i=`#!/bin/bash
# Common Mistakes Demonstration
# Showing frequent errors and how to fix them

echo "=== Common Mistakes in Text Processing ==="
echo ""

# Create test files
echo "Creating test files..."
echo "Hello World" > /tmp/test1.txt
echo "Goodbye World" > /tmp/test2.txt
echo "file with spaces.txt" > "/tmp/file with spaces.txt"

echo ""
echo "=== Mistake 1: Unquoted Variables ==="
echo ""

filename="file with spaces.txt"
echo "filename='$filename'"
echo ""
echo "Wrong: ls $filename"
echo "Expands to: ls file with spaces.txt (3 arguments)"
ls $filename 2>&1 || echo "Command failed (expected)"
echo ""
echo "Right: ls \\"$filename\\""
echo "Expands to: ls 'file with spaces.txt' (1 argument)"
ls "$filename"
echo ""

echo "=== Mistake 2: Missing grep -i ==="
echo ""

echo "File contents:"
cat /tmp/test1.txt
echo ""
echo "Wrong: grep 'hello' /tmp/test1.txt"
grep 'hello' /tmp/test1.txt || echo "No match (case sensitive)"
echo ""
echo "Right: grep -i 'hello' /tmp/test1.txt"
grep -i 'hello' /tmp/test1.txt
echo ""

echo "=== Mistake 3: Unescaped dots in regex ==="
echo ""

echo "Testing: echo 'file.txt' | sed 's/.txt/.backup/'"
echo "file.txt" | sed 's/.txt/.backup/'
echo ""
echo "What happened? '.' matches any character, so 'f.txt' -> '.backup'"
echo ""
echo "Fix: echo 'file.txt' | sed 's/\\\\.txt/.backup/'"
echo "file.txt" | sed 's/\\.txt/.backup/'
echo ""

echo "=== Mistake 4: Greedy regex matching ==="
echo ""

echo "Input: 'foo bar foo baz'"
echo "Goal: Remove everything from first 'foo' to next 'foo'"
echo ""
echo "Wrong: echo 'foo bar foo baz' | sed 's/foo.*foo//'"
echo "foo bar foo baz" | sed 's/foo.*foo//'
echo "Matches too much! Removes entire string"
echo ""
echo "Right: echo 'foo bar foo baz' | sed 's/foo[^f]*foo//'"
echo "foo bar foo baz" | sed 's/foo[^f]*foo//'
echo "Non-greedy: stops at next 'foo'"
echo ""

echo "=== Mistake 5: Not checking file existence ==="
echo ""

echo "Wrong: wc -l /tmp/nonexistent.txt"
wc -l /tmp/nonexistent.txt 2>&1
echo ""
echo "Right: test -f /tmp/nonexistent.txt && wc -l /tmp/nonexistent.txt || echo 'File not found'"
test -f /tmp/nonexistent.txt && wc -l /tmp/nonexistent.txt || echo 'File not found'
echo ""

echo "=== Mistake 6: Forgetting awk field separators ==="
echo ""

echo "Input: 'John,Doe,25'"
echo "Goal: Extract last name"
echo ""
echo "Wrong: echo 'John,Doe,25' | awk '{print \\$2}'"
echo "John,Doe,25" | awk '{print $2}'
echo "Default FS is whitespace, so \\$2 is empty"
echo ""
echo "Right: echo 'John,Doe,25' | awk -F, '{print \\$2}'"
echo "John,Doe,25" | awk -F, '{print $2}'
echo ""

echo "=== Mistake 7: Pipeline exit codes ==="
echo ""

echo "Testing: grep 'nonexistent' /tmp/test1.txt | wc -l"
grep 'nonexistent' /tmp/test1.txt | wc -l
echo "Exit code: $?"
echo "Shows wc's exit code (0), not grep's (1)"
echo ""
echo "Solution 1: set -o pipefail"
(set -o pipefail; grep 'nonexistent' /tmp/test1.txt | wc -l; echo "Exit: $?")
echo ""
echo "Solution 2: Check PIPESTATUS"
grep 'nonexistent' /tmp/test1.txt | wc -l
echo "PIPESTATUS: \${PIPESTATUS[@]}"
echo ""

echo "=== Mistake 8: sed without backup ==="
echo ""

echo "DANGER ZONE: Always backup before sed -i"
echo "Create test file: echo 'original' > /tmp/sed_test.txt"
echo "original" > /tmp/sed_test.txt
echo ""
echo "Wrong: sed -i 's/original/changed/' /tmp/sed_test.txt"
echo "(If regex is wrong, data is lost)"
echo ""
echo "Right: sed -i.bak 's/original/changed/' /tmp/sed_test.txt"
sed -i.bak 's/original/changed/' /tmp/sed_test.txt
echo "File: $(cat /tmp/sed_test.txt)"
echo "Backup: $(cat /tmp/sed_test.txt.bak)"
echo ""

echo "=== Debugging Technique: Use echo ==="
echo ""

echo "When debugging, echo shows what will happen:"
echo "echo rm \\"\\$filename\\""
echo "rm \\"$filename\\""
echo ""
echo "Or for complex commands:"
cmd="grep pattern *.txt | awk '{print \\$1}' | sort -u"
echo "Command: $cmd"
echo "Debug: set -x; $cmd; set +x"
echo ""
echo "=== Summary ==="
echo "1. Quote variables: \\"\\$var\\""
echo "2. Use grep -i for case-insensitive"
echo "3. Escape regex special chars: \\\\. \\\\* \\\\["
echo "4. Use non-greedy patterns: [^x]*"
echo "5. Check file existence: test -f"
echo "6. Set awk field separator: -F,"
echo "7. Use pipefail or PIPESTATUS"
echo "8. Backup before sed -i"`,r=`#!/bin/bash
# Debugging Techniques for Shell Scripts
# Systematic approach to finding and fixing errors

echo "=== Systematic Debugging Techniques ==="
echo ""

# Create a problematic script
cat > /tmp/broken_script.sh << 'EOF'
#!/bin/bash
# This script has multiple bugs
# Purpose: Process student data and calculate averages

input_file="$1"
threshold="$2"

# Bug 1: Unquoted variable
echo Processing $input_file

# Bug 2: No error checking
grades=$(cat $input_file)

# Bug 3: Wrong field number
total=0
count=0
for grade in $grades; do
    # Bug 4: Arithmetic in wrong context
    student_grade=$grade
    total=$total + $student_grade
    count=$((count + 1))
done

# Bug 5: Division by zero possible
average=$((total / count))

# Bug 6: Wrong comparison syntax
if [ $average > $threshold ]; then
    echo "Average $average exceeds threshold $threshold"
else
    echo "Average $average is below threshold $threshold"
fi
EOF

chmod +x /tmp/broken_script.sh

# Create test data
echo -e "85\\n92\\n78\\n88\\n95" > /tmp/grades.txt

echo "Broken script created: /tmp/broken_script.sh"
echo "Test data: /tmp/grades.txt"
echo ""
echo "=== Step 1: Run the script ==="
echo ""

echo "./tmp/broken_script.sh /tmp/grades.txt 85"
./tmp/broken_script.sh /tmp/grades.txt 85
echo "Exit code: $?"
echo ""

echo "=== Step 2: Enable tracing with set -x ==="
echo ""

cat > /tmp/debug_script1.sh << 'EOF'
#!/bin/bash
set -x  # Enable tracing
input_file="$1"
echo Processing $input_file
set +x  # Disable tracing
EOF

chmod +x /tmp/debug_script1.sh
echo "./tmp/debug_script1.sh 'file with spaces.txt'"
./tmp/debug_script1.sh 'file with spaces.txt'
echo ""

echo "=== Step 3: Check syntax with shellcheck ==="
echo ""

echo "If shellcheck is installed:"
echo "shellcheck /tmp/broken_script.sh"
if command -v shellcheck &> /dev/null; then
    shellcheck /tmp/broken_script.sh
else
    echo "shellcheck not installed. Install with: sudo apt-get install shellcheck"
fi
echo ""

echo "=== Step 4: Add debugging prints ==="
echo ""

cat > /tmp/debug_script2.sh << 'EOF'
#!/bin/bash
input_file="$1"
threshold="$2"

echo "DEBUG: input_file='$input_file'"
echo "DEBUG: threshold='$threshold'"

# Test file existence
if [ ! -f "$input_file" ]; then
    echo "ERROR: File not found: $input_file" >&2
    exit 1
fi

# Read file safely
grades=$(cat "$input_file")
echo "DEBUG: grades='$grades'"

# Process grades
total=0
count=0
for grade in $grades; do
    echo "DEBUG: Processing grade: $grade"
    # Validate numeric grade
    if ! [[ "$grade" =~ ^[0-9]+$ ]]; then
        echo "WARNING: Skipping non-numeric grade: $grade" >&2
        continue
    fi
    total=$((total + grade))
    count=$((count + 1))
    echo "DEBUG: total=$total, count=$count"
done

echo "DEBUG: Final total=$total, count=$count"

# Check for division by zero
if [ $count -eq 0 ]; then
    echo "ERROR: No valid grades found" >&2
    exit 1
fi

average=$((total / count))
echo "DEBUG: average=$average"

# Correct comparison
if [ $average -gt $threshold ]; then
    echo "Average $average exceeds threshold $threshold"
else
    echo "Average $average is below threshold $threshold"
fi
EOF

chmod +x /tmp/debug_script2.sh
echo ""
echo "Fixed script output:"
./tmp/debug_script2.sh /tmp/grades.txt 85
echo ""

echo "=== Step 5: Use tee to debug pipelines ==="
echo ""

echo "Complex pipeline debugging:"
echo "cat /tmp/grades.txt | awk '{print \\"DEBUG: \\", \\$0} {sum+=\\$1} END{print sum}'"
cat /tmp/grades.txt | awk '{print "DEBUG: ", $0} {sum+=$1} END{print "Sum:", sum}'
echo ""

echo "Or with tee to save intermediate results:"
echo "cat /tmp/grades.txt | tee /tmp/step1.out | awk '{sum+=\\$1} END{print sum}' | tee /tmp/step2.out"
cat /tmp/grades.txt | tee /tmp/step1.out | awk '{sum+=$1} END{print "Sum:", sum}' | tee /tmp/step2.out
echo "Step1 output: $(cat /tmp/step1.out)"
echo "Step2 output: $(cat /tmp/step2.out)"
echo ""

echo "=== Step 6: Check exit codes ==="
echo ""

cat > /tmp/exit_test.sh << 'EOF'
#!/bin/bash
# Demonstrate exit code checking
echo "Testing command that fails:"
grep "nonexistent" /tmp/grades.txt
echo "Exit code: $?"
echo ""
echo "Testing command that succeeds:"
grep "85" /tmp/grades.txt
echo "Exit code: $?"
EOF

chmod +x /tmp/exit_test.sh
./tmp/exit_test.sh
echo ""

echo "=== Step 7: Use strace for system-level debugging ==="
echo ""

echo "If strace is installed:"
echo "strace -e open,read ls /tmp/grades.txt 2>&1 | head -20"
if command -v strace &> /dev/null; then
    strace -e open,read ls /tmp/grades.txt 2>&1 | head -20
else
    echo "strace not installed. Install with: sudo apt-get install strace"
fi
echo ""

echo "=== Debugging Summary ==="
echo "1. set -x / set +x for command tracing"
echo "2. Add echo statements for variable inspection"
echo "3. Use shellcheck for static analysis"
echo "4. Check exit codes with \\$?"
echo "5. Use tee to save intermediate pipeline results"
echo "6. Test with small data first"
echo "7. Create minimal reproducible test cases"`,o=`#!/bin/bash
# Common Regex Mistakes and Debugging
# Focusing on pattern matching errors

echo "=== Regex Debugging Techniques ==="
echo ""

echo "=== Mistake 1: Not escaping special characters ==="
echo ""

echo "Test string: 'file.txt backup.tar.gz'"
echo "Goal: Match 'file.txt'"
echo ""
echo "Wrong: grep 'file.txt' <<< 'file.txt backup.tar.gz'"
grep 'file.txt' <<< 'file.txt backup.tar.gz'
echo "Actually matches 'fileAtxt' where A is any character!"
echo ""
echo "Debug with: echo 'file.txt' | grep -o 'file.txt'"
echo "file.txt" | grep -o 'file.txt'
echo ""
echo "Right: grep 'file\\\\.txt' <<< 'file.txt backup.tar.gz'"
grep 'file\\.txt' <<< 'file.txt backup.tar.gz'
echo ""

echo "=== Mistake 2: Greedy vs non-greedy matching ==="
echo ""

echo "Test string: '<b>bold</b> and <i>italic</i>'"
echo "Goal: Extract first HTML tag content"
echo ""
echo "Wrong greedy: sed 's/<.*>//' <<< '<b>bold</b> and <i>italic</i>'"
sed 's/<.*>//' <<< '<b>bold</b> and <i>italic</i>'
echo "Matches from first < to last >"
echo ""
echo "Right (non-greedy): sed 's/<[^>]*>//' <<< '<b>bold</b> and <i>italic</i>'"
sed 's/<[^>]*>//' <<< '<b>bold</b> and <i>italic</i>'
echo "Stops at first >"
echo ""

echo "=== Mistake 3: Anchors missing ==="
echo ""

echo "Test data:"
echo "error: something went wrong"
echo "warning: minor issue"
echo "another error: critical"
echo ""
echo "Goal: Find lines starting with 'error:'"
echo ""
echo "Wrong: grep 'error:'"
grep 'error:' <<< $'error: something went wrong\\nwarning: minor issue\\nanother error: critical'
echo "Matches both lines with 'error:'"
echo ""
echo "Right: grep '^error:'"
grep '^error:' <<< $'error: something went wrong\\nwarning: minor issue\\nanother error: critical'
echo ""

echo "=== Mistake 4: Character class errors ==="
echo ""

echo "Test string: 'ABC123 DEF456'"
echo "Goal: Match 'ABC123' (letters followed by numbers)"
echo ""
echo "Wrong: grep '[A-Z][0-9]' <<< 'ABC123 DEF456'"
grep '[A-Z][0-9]' <<< 'ABC123 DEF456'
echo "Matches 'C1' not the whole pattern"
echo ""
echo "Debug step by step:"
echo "echo 'ABC123' | grep -o '[A-Z]\\+'"
echo "ABC123" | grep -o '[A-Z]\\+'
echo "echo 'ABC123' | grep -o '[0-9]\\+'"
echo "ABC123" | grep -o '[0-9]\\+'
echo ""
echo "Right: grep '[A-Z]\\\\+[0-9]\\\\+' <<< 'ABC123 DEF456'"
grep '[A-Z]\\+[0-9]\\+' <<< 'ABC123 DEF456'
echo ""

echo "=== Mistake 5: Backreference confusion ==="
echo ""

echo "Test string: 'hello hello'"
echo "Goal: Detect repeated words"
echo ""
echo "Wrong: grep '\\\\(\\\\w\\\\)\\\\1' <<< 'hello hello'"
grep '\\(\\w\\)\\1' <<< 'hello hello' 2>&1 || echo "Matches repeated characters, not words"
echo ""
echo "Right: grep '\\\\(\\\\w\\\\+\\\\) \\\\1' <<< 'hello hello'"
grep '\\(\\w\\+\\) \\1' <<< 'hello hello'
echo ""

echo "=== Debugging Technique: Test with echo ==="
echo ""

echo "When debugging regex, test with known strings:"
echo "echo 'test.string' | grep -o 'test\\\\.string'"
echo "test.string" | grep -o 'test\\.string'
echo ""
echo "Or use regex debuggers online, or in Python/Perl:"
cat > /tmp/regex_test.py << 'EOF'
import re
pattern = r'file\\.txt'
test_string = 'file.txt backup.tar.gz'
match = re.search(pattern, test_string)
print(f"Pattern: {pattern}")
print(f"String: {test_string}")
print(f"Match: {match.group() if match else 'No match'}")
EOF
echo "python3 /tmp/regex_test.py"
python3 /tmp/regex_test.py
echo ""

echo "=== Debugging Technique: Stepwise refinement ==="
echo ""

echo "Complex regex: Match email addresses"
echo "Test strings:"
echo "  valid@example.com"
echo "  invalid@com"
echo "  another.valid@test.co.in"
echo ""
echo "Step 1: Basic pattern"
echo "grep '@'"
grep '@' <<< $'valid@example.com\\ninvalid@com\\nanother.valid@test.co.in'
echo ""
echo "Step 2: Add domain"
echo "grep '@.*\\\\.'"
grep '@.*\\.' <<< $'valid@example.com\\ninvalid@com\\nanother.valid@test.co.in'
echo ""
echo "Step 3: Refine"
echo "grep '[a-zA-Z0-9._%+-]\\\\+@[a-zA-Z0-9.-]\\\\+\\\\.[a-zA-Z]\\\\{2,\\\\}'"
grep '[a-zA-Z0-9._%+-]\\+@[a-zA-Z0-9.-]\\+\\.[a-zA-Z]\\{2,\\}' <<< $'valid@example.com\\ninvalid@com\\nanother.valid@test.co.in'
echo ""

echo "=== Common Regex Tips ==="
echo ""
echo "1. Escape dots: \\\\. not ."
echo "2. Use ^ and $ for line boundaries"
echo "3. Prefer [^>]* over .*? for non-greedy"
echo "4. Test with echo and small samples"
echo "5. Use regex debuggers or online tools"
echo "6. Remember: regex engines differ (grep vs sed vs awk)"`,a=`#!/bin/bash
# Quoting and Variable Expansion Issues
# The most common source of bugs in shell scripts

echo "=== Quoting and Variable Expansion Pitfalls ==="
echo ""

echo "=== The Great Shell Expansion Order ==="
echo "1. Brace expansion: {a,b,c}"
echo "2. Tilde expansion: ~"
echo "3. Parameter expansion: \\$VAR"
echo "4. Command substitution: \\$(cmd)"
echo "5. Arithmetic expansion: \\$((expression))"
echo "6. Word splitting"
echo "7. Pathname expansion: *"
echo "8. Quote removal"
echo ""

echo "=== Problem 1: Word Splitting ==="
echo ""

echo "Create test variable:"
files="file1.txt file2.txt 'file3 with spaces.txt'"
echo "files=\\"$files\\""
echo ""
echo "Wrong: ls \\$files"
ls $files 2>&1 || echo "Fails because of spaces"
echo ""
echo "What shell sees: ls file1.txt file2.txt 'file3 with spaces.txt'"
echo "The quotes are just characters, not syntax!"
echo ""
echo "Right: Use array instead"
files_array=(file1.txt file2.txt "file3 with spaces.txt")
echo "files_array=(\\\${files_array[@]})"
echo "ls \\"\\\${files_array[@]}\\""
ls "\${files_array[@]}"
echo ""

echo "=== Problem 2: Globbing at wrong time ==="
echo ""

echo "Create test files:"
touch /tmp/test_{a,b,c}.txt
touch /tmp/test_document.txt
echo "Files: $(ls /tmp/test_*.txt)"
echo ""
echo "Variable with glob:"
pattern="/tmp/test_*.txt"
echo "pattern=\\"\\$pattern\\""
echo ""
echo "Wrong: echo \\$pattern"
echo $pattern
echo "Globbing happens after expansion!"
echo ""
echo "Right: echo \\"\\$pattern\\""
echo "$pattern"
echo "Or delay globbing:"
echo "for file in \\$pattern; do echo \\"\\$file\\"; done"
for file in $pattern; do echo "$file"; done
echo ""

echo "=== Problem 3: Command substitution quirks ==="
echo ""

echo "Get list of files:"
echo "files=\\$(ls /tmp/test_*.txt)"
echo "\\$files"
files=$(ls /tmp/test_*.txt)
echo "$files"
echo ""
echo "Word splitting happens on newlines!"
echo "echo \\$files | wc -w"
echo $files | wc -w
echo "Not what you expect!"
echo ""
echo "Right: Use array or handle carefully"
echo "mapfile -t files_array <<< \\"\\$(ls /tmp/test_*.txt)\\""
mapfile -t files_array <<< "$(ls /tmp/test_*.txt)"
echo "Array has \\\${#files_array[@]} elements"
echo ""

echo "=== Problem 4: Nested quotes ==="
echo ""

echo "Trying to pass quoted string through commands:"
echo "echo 'Hello World' | awk '{print \\$1}'"
echo 'Hello World' | awk '{print $1}'
echo ""
echo "But what if we need quotes in awk?"
echo "Wrong: echo 'Hello World' | awk '{print \\"\\$1\\": \\$1}'"
echo 'Hello World' | awk '{print "$1": $1}'
echo "Works, but gets complex with shell variables:"
shell_var="test"
echo "shell_var=\\"\\$shell_var\\""
echo "Wrong: echo 'Hello World' | awk '{print \\"'\\"\\$shell_var\\"'\\": \\$1}'"
echo 'Hello World' | awk '{print "'"$shell_var"'": $1}'
echo "Very confusing!"
echo ""
echo "Better: Use awk -v"
echo "echo 'Hello World' | awk -v var=\\"\\$shell_var\\" '{print var \\": \\" \\$1}'"
echo 'Hello World' | awk -v var="$shell_var" '{print var ": " $1}'
echo ""

echo "=== Problem 5: Arithmetic in quotes ==="
echo ""

echo "Arithmetic needs unquoted expansion:"
a=5
b=10
echo "a=\\$a, b=\\$b"
echo ""
echo "Wrong: result=\\"\\$((a + b))\\""
result="$((a + b))"
echo "result: \\$result"
echo "$result"
echo "Actually works, but be careful with spaces:"
echo "Wrong with spaces: result=\\"\\$(( a + b ))\\""
result="$(( a + b ))"
echo "$result"
echo ""
echo "Right: result=\\$((a + b))"
result=$((a + b))
echo "result: \\$result"
echo "$result"
echo ""

echo "=== Debugging Technique: set -x ==="
echo ""

echo "set -x shows expansions:"
set -x
test_var="file with spaces.txt"
echo $test_var
echo "$test_var"
set +x
echo ""

echo "=== Debugging Technique: printf for inspection ==="
echo ""

echo "printf shows exact content:"
problematic="file with spaces.txt"
echo "Variable:"
printf '%q\\n' "$problematic"
echo "Length: \${#problematic}"
echo ""

echo "=== Quoting Rules Summary ==="
echo ""
echo "1. Always quote variables: \\"\\$var\\""
echo "2. Use arrays for lists: array=(\\"item1\\" \\"item2\\")"
echo "3. Use \\$() for command substitution, not backticks"
echo "4. Use [[ ]] for tests in bash, not [ ]"
echo "5. Use printf for safe output"
echo "6. Use set -x for debugging expansions"
echo "7. Remember: Single quotes ' literal, Double quotes \\" expand"
echo ""
echo "=== When to use which ==="
echo ""
echo "Single quotes:"
echo "  echo 'Cost: \\$100'  # Literal dollar sign"
echo "  awk '{print \\$1}'   # Awk program"
echo ""
echo "Double quotes:"
echo "  echo \\"Hello \\$name\\"  # Variable expansion"
echo "  echo \\"*.txt\\"        # Prevent globbing"
echo ""
echo "No quotes:"
echo "  var=\\$(command)     # Command substitution"
echo "  num=\\$((1 + 2))     # Arithmetic"
echo "  [[ \\$var == test ]] # Bash tests"`,l=`#!/bin/bash
# Debugging Complex Pipelines
# Techniques for troubleshooting multi-command workflows

echo "=== Debugging Complex Pipelines ==="
echo ""

# Create test data
echo "Creating test data..."
cat > /tmp/pipeline_input.txt << 'EOF'
2023-01-15 10:30:45 INFO: User login from 192.168.1.100
2023-01-15 10:31:22 ERROR: Database connection failed
2023-01-15 10:32:10 WARNING: High memory usage (85%)
2023-01-15 10:33:00 INFO: Backup started
2023-01-15 10:34:15 ERROR: File not found: data.txt
2023-01-15 10:35:30 INFO: User logout
2023-01-15 10:36:45 WARNING: CPU threshold exceeded
EOF

echo "Input data:"
cat /tmp/pipeline_input.txt
echo ""

echo "=== Problem: Broken Pipeline ==="
echo ""

echo "Pipeline to extract error counts by hour:"
echo "grep ERROR /tmp/pipeline_input.txt | cut -d' ' -f2 | cut -d: -f1 | sort | uniq -c"
echo ""
echo "Running pipeline:"
grep ERROR /tmp/pipeline_input.txt | cut -d' ' -f2 | cut -d: -f1 | sort | uniq -c
echo ""

echo "=== Debugging Step 1: Test each command ==="
echo ""

echo "Step 1: grep ERROR"
echo "grep ERROR /tmp/pipeline_input.txt"
grep ERROR /tmp/pipeline_input.txt
echo "Exit code: $?"
echo ""

echo "Step 2: First cut"
echo "grep ERROR /tmp/pipeline_input.txt | cut -d' ' -f2"
grep ERROR /tmp/pipeline_input.txt | cut -d' ' -f2
echo "Hmm, we're getting '10:31:22' but want '10'"
echo ""

echo "Step 3: Debug with tee"
echo "grep ERROR /tmp/pipeline_input.txt | tee /tmp/step1.out | cut -d' ' -f2 | tee /tmp/step2.out"
grep ERROR /tmp/pipeline_input.txt | tee /tmp/step1.out | cut -d' ' -f2 | tee /tmp/step2.out
echo "Step1 output: $(cat /tmp/step1.out)"
echo "Step2 output: $(cat /tmp/step2.out)"
echo ""

echo "=== Debugging Step 2: Fix the cut ==="
echo ""

echo "Problem: cut -d' ' uses single space, but file has multiple spaces"
echo "Solution 1: Use awk"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\$2}'"
grep ERROR /tmp/pipeline_input.txt | awk '{print $2}'
echo ""
echo "Solution 2: Use tr to squeeze spaces"
echo "grep ERROR /tmp/pipeline_input.txt | tr -s ' ' | cut -d' ' -f2"
grep ERROR /tmp/pipeline_input.txt | tr -s ' ' | cut -d' ' -f2
echo ""

echo "=== Debugging Step 3: Complete pipeline ==="
echo ""

echo "Fixed pipeline:"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\$2}' | cut -d: -f1 | sort | uniq -c"
grep ERROR /tmp/pipeline_input.txt | awk '{print $2}' | cut -d: -f1 | sort | uniq -c
echo ""

echo "=== Advanced Debugging: set -o pipefail ==="
echo ""

echo "Without pipefail, only last command's exit code matters:"
echo "grep 'NONEXISTENT' /tmp/pipeline_input.txt | awk '{print \\$1}'"
grep 'NONEXISTENT' /tmp/pipeline_input.txt | awk '{print $1}'
echo "Exit code: $? (awk's exit code, not grep's)"
echo ""
echo "With pipefail:"
echo "(set -o pipefail; grep 'NONEXISTENT' /tmp/pipeline_input.txt | awk '{print \\$1}'; echo \\"Exit: \\$?\\")"
(set -o pipefail; grep 'NONEXISTENT' /tmp/pipeline_input.txt | awk '{print $1}'; echo "Exit: $?")
echo ""

echo "=== Debugging Technique: PIPESTATUS ==="
echo ""

echo "Check all exit codes in pipeline:"
echo "grep ERROR /tmp/pipeline_input.txt | cut -d: -f1 | wc -l"
grep ERROR /tmp/pipeline_input.txt | cut -d: -f1 | wc -l
echo "PIPESTATUS: \${PIPESTATUS[@]}"
echo ""

echo "=== Debugging Technique: Add debugging statements ==="
echo ""

echo "Add awk print to see data flow:"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\"DEBUG1: \\", \\$0}' | awk '{print \\$2}' | awk '{print \\"DEBUG2: \\", \\$0}'"
grep ERROR /tmp/pipeline_input.txt | \\
    awk '{print "DEBUG1: ", $0}' | \\
    awk '{print $2}' | \\
    awk '{print "DEBUG2: ", $0}'
echo ""

echo "=== Debugging Technique: Use temporary files ==="
echo ""

echo "For complex pipelines, save intermediate results:"
echo "grep ERROR /tmp/pipeline_input.txt > /tmp/temp1"
grep ERROR /tmp/pipeline_input.txt > /tmp/temp1
echo "cat /tmp/temp1"
cat /tmp/temp1
echo ""
echo "awk '{print \\$2}' /tmp/temp1 > /tmp/temp2"
awk '{print $2}' /tmp/temp1 > /tmp/temp2
echo "cat /tmp/temp2"
cat /tmp/temp2
echo ""
echo "cut -d: -f1 /tmp/temp2 > /tmp/temp3"
cut -d: -f1 /tmp/temp2 > /tmp/temp3
echo "cat /tmp/temp3"
cat /tmp/temp3
echo ""
echo "sort /tmp/temp3 | uniq -c"
sort /tmp/temp3 | uniq -c
echo ""

echo "=== Debugging Technique: Simplify and rebuild ==="
echo ""

echo "Start with minimal working pipeline:"
echo "grep ERROR /tmp/pipeline_input.txt"
grep ERROR /tmp/pipeline_input.txt
echo ""
echo "Add one step:"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\$2}'"
grep ERROR /tmp/pipeline_input.txt | awk '{print $2}'
echo ""
echo "Add next step:"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\$2}' | cut -d: -f1"
grep ERROR /tmp/pipeline_input.txt | awk '{print $2}' | cut -d: -f1
echo ""
echo "Complete pipeline:"
echo "grep ERROR /tmp/pipeline_input.txt | awk '{print \\$2}' | cut -d: -f1 | sort | uniq -c"
grep ERROR /tmp/pipeline_input.txt | awk '{print $2}' | cut -d: -f1 | sort | uniq -c
echo ""

echo "=== Common Pipeline Problems ==="
echo ""
echo "1. Missing/extra spaces in cut -d' '"
echo "2. Field numbers wrong (print \\$2 vs \\$3)"
echo "3. sort before uniq -c"
echo "4. grep -c vs wc -l"
echo "5. Exit code from wrong command"
echo "6. Buffering issues (use stdbuf)"
echo ""

echo "=== Pipeline Optimization ==="
echo ""
echo "Combine awk operations:"
echo "Instead of: grep ERROR | awk '{print \\$2}' | cut -d: -f1"
echo "Use: awk '/ERROR/ {split(\\$2, a, \\":\\"); print a[1]}'"
awk '/ERROR/ {split($2, a, ":"); print a[1]}' /tmp/pipeline_input.txt | sort | uniq -c
echo ""
echo "Or even:"
echo "awk '/ERROR/ {split(\\$2, a, \\":\\"); count[a[1]]++} END {for(h in count) print count[h], h}'"
awk '/ERROR/ {split($2, a, ":"); count[a[1]]++} END {for(h in count) print count[h], h}' /tmp/pipeline_input.txt
echo ""

echo "=== Debugging Summary ==="
echo "1. Test each command separately"
echo "2. Use tee to save intermediate results"
echo "3. Check PIPESTATUS for exit codes"
echo "4. Add debugging prints with awk"
echo "5. Simplify and rebuild step by step"
echo "6. Consider combining operations in single tool"`,x=()=>e.jsxs("div",{className:"dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 p-4 md:p-8",children:[e.jsx("style",{children:`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes shakeError {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-5px);
                    }
                    75% {
                        transform: translateX(5px);
                    }
                }
                
                @keyframes flashWarning {
                    0%, 100% {
                        background-color: transparent;
                    }
                    50% {
                        background-color: rgba(245, 158, 11, 0.2);
                    }
                }
                
                @keyframes pulseDebug {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
                `}),e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"animate-[fadeSlideUp_0.8s_ease-out] mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-3 h-8 bg-yellow-500 rounded-full"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent",children:"Topic 22: Common Mistakes and Debugging Text-Processing Commands"})]}),e.jsx("p",{className:"text-xl text-gray-300 leading-relaxed animate-[fadeSlideUp_1s_ease-out]",children:"Learn to identify, fix, and prevent the most common errors in Unix text processing workflows"})]}),e.jsx("div",{className:"animate-[fadeSlideUp_1s_ease-out] mb-12 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-700/50 hover:border-amber-500/50 transition-all duration-500",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 animate-[shakeError_0.5s_ease-in-out_infinite]",children:e.jsx("svg",{className:"w-12 h-12 text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-3 text-amber-300",children:"The Debugging Mindset"}),e.jsx("p",{className:"text-gray-300 leading-relaxed",children:`When Swadeep from Barrackpore spent 3 hours debugging a sed command that was deleting all his data, he realized: "The computer is always right. If it's not doing what you expect, you're telling it to do something different." This chapter saves you from learning that lesson the hard way.`})]})]})}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-red-300 border-b border-red-800 pb-2",children:"The Top 10 Most Common Mistakes"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:[{rank:"1",title:"Missing Quotes",description:"Spaces in filenames or arguments break commands",example:"rm my file.txt (deletes 'my' and 'file.txt')",fix:"rm 'my file.txt' or rm my\\ file.txt",severity:"high"},{rank:"2",title:"Regex Greediness",description:".* matches too much, eating entire lines",example:"sed 's/.*foo//' removes everything before AND including foo",fix:"sed 's/[^f]*foo//' or use non-greedy patterns",severity:"high"},{rank:"3",title:"Line Endings",description:"Windows vs Unix line endings (CRLF vs LF)",example:"grep pattern file.txt finds nothing (hidden ^M characters)",fix:"dos2unix or tr -d '\\r' < file.txt",severity:"medium"},{rank:"4",title:"Uninitialized Variables",description:"Using variables before setting them in awk/sed",example:"awk '{print total}' prints empty or 0",fix:"awk 'BEGIN{total=0} {total+=$1} END{print total}'",severity:"medium"},{rank:"5",title:"Case Sensitivity",description:"Forgetting grep -i or awk tolower()/toupper()",example:"grep 'Error' misses 'ERROR' and 'error'",fix:"grep -i 'error' or awk 'tolower($0) ~ /error/'",severity:"medium"}].map((t,n)=>e.jsx("div",{className:`animate-[fadeSlideUp_${1.2+n*.1}s_ease-out] bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border ${t.severity==="high"?"border-red-700/30 hover:border-red-500/50":"border-yellow-700/30 hover:border-yellow-500/50"} transition-all duration-300 hover:scale-[1.01]`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-full ${t.severity==="high"?"bg-red-500":"bg-yellow-500"} flex items-center justify-center flex-shrink-0`,children:e.jsx("span",{className:"text-xs font-bold",children:t.rank})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"font-bold text-lg text-gray-200",children:t.title}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${t.severity==="high"?"bg-red-900/50 text-red-300":"bg-yellow-900/50 text-yellow-300"}`,children:t.severity==="high"?"CRITICAL":"MEDIUM"})]}),e.jsx("p",{className:"text-sm text-gray-400 mb-2",children:t.description}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400 font-medium",children:"Error:"}),e.jsx("code",{className:"bg-gray-900/50 px-2 py-1 rounded",children:t.example})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400 font-medium",children:"Fix:"}),e.jsx("code",{className:"bg-gray-900/50 px-2 py-1 rounded",children:t.fix})]})]})]})]})},n))}),e.jsx("div",{className:"space-y-4",children:[{rank:"6",title:"Backslash Escaping",description:"Forgetting to escape special characters in regex",example:"sed 's/.//' removes first character (not dot)",fix:"sed 's/\\.//' to match literal dot",severity:"high"},{rank:"7",title:"Pipeline Exit Codes",description:"Only last command's exit code is captured by $?",example:"grep pattern file | wc -l; echo $? shows wc exit code",fix:"set -o pipefail or check PIPESTATUS array",severity:"medium"},{rank:"8",title:"File vs Standard Input",description:"Confusion between filename arguments and stdin",example:"cat file | grep pattern file (reads file twice)",fix:"Either grep pattern file or cat file | grep pattern",severity:"low"},{rank:"9",title:"Locale Issues",description:"Sort order changes with LC_ALL settings",example:"sort produces different order on different systems",fix:"Use LC_ALL=C sort for consistent behavior",severity:"medium"},{rank:"10",title:"Whitespace Invisibility",description:"Tabs vs spaces, trailing spaces invisible",example:"grep 'pattern$' misses lines with trailing spaces",fix:"Use [:space:] class or clean data first",severity:"low"}].map((t,n)=>e.jsx("div",{className:`animate-[fadeSlideUp_${1.2+(n+5)*.1}s_ease-out] bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-4 rounded-xl border ${t.severity==="high"?"border-red-700/30 hover:border-red-500/50":t.severity==="medium"?"border-yellow-700/30 hover:border-yellow-500/50":"border-blue-700/30 hover:border-blue-500/50"} transition-all duration-300 hover:scale-[1.01]`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`w-8 h-8 rounded-full ${t.severity==="high"?"bg-red-500":t.severity==="medium"?"bg-yellow-500":"bg-blue-500"} flex items-center justify-center flex-shrink-0`,children:e.jsx("span",{className:"text-xs font-bold",children:t.rank})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h3",{className:"font-bold text-lg text-gray-200",children:t.title}),e.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${t.severity==="high"?"bg-red-900/50 text-red-300":t.severity==="medium"?"bg-yellow-900/50 text-yellow-300":"bg-blue-900/50 text-blue-300"}`,children:t.severity.toUpperCase()})]}),e.jsx("p",{className:"text-sm text-gray-400 mb-2",children:t.description}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-red-400 font-medium",children:"Error:"}),e.jsx("code",{className:"bg-gray-900/50 px-2 py-1 rounded",children:t.example})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"text-green-400 font-medium",children:"Fix:"}),e.jsx("code",{className:"bg-gray-900/50 px-2 py-1 rounded",children:t.fix})]})]})]})]})},n))})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.4s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Live Demonstration: Common Mistakes in Action"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 mb-8",children:[e.jsx(s,{fileModule:i,title:"Common Mistakes and Their Fixes",highlightLines:[3,6,9,12,15,18,21,24]}),e.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-red-900/20 rounded-lg border border-red-500/20 animate-[flashWarning_2s_ease-in-out_infinite]",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-2",children:"Mistake Pattern: Silent Failures"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Commands that succeed but produce wrong results are the most dangerous. Tuhina from Naihati once processed 10,000 records with sed and got 0 output because of unescaped dots in regex."})]}),e.jsxs("div",{className:"p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20",children:[e.jsx("h4",{className:"font-semibold text-yellow-300 mb-2",children:"Debugging Strategy"}),e.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Test on sample data first"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Use echo or cat to see what's being processed"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),"Add debugging prints in awk scripts"]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-900/20 rounded-lg border border-blue-500/20",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-2",children:"Prevention Techniques"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-4 h-4 rounded bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Always test regex patterns with echo first"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-4 h-4 rounded bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Use shellcheck to catch common issues"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"w-4 h-4 rounded bg-green-500 flex items-center justify-center",children:e.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-300",children:"Create test files with known expected output"})]})]})]}),e.jsxs("div",{className:"p-4 bg-purple-900/20 rounded-lg border border-purple-500/20",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Quote Detective Workflow"}),e.jsxs("svg",{viewBox:"0 0 300 100",className:"w-full",children:[e.jsx("rect",{x:"10",y:"20",width:"80",height:"30",rx:"5",fill:"#4B5563"}),e.jsx("text",{x:"50",y:"40",textAnchor:"middle",fill:"#D1D5DB",fontSize:"10",children:"Command"}),e.jsx("path",{d:"M100,35 L120,35",stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"120,35 112,30 112,40",fill:"#9CA3AF"}),e.jsx("rect",{x:"130",y:"20",width:"80",height:"30",rx:"5",fill:"#7C3AED",className:"animate-[pulseDebug_2s_ease-in-out_infinite]",children:e.jsx("title",{children:"Debugging Step"})}),e.jsx("text",{x:"170",y:"40",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"Check Quotes"}),e.jsx("path",{d:"M220,35 L240,35",stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite",begin:"0.5s"})}),e.jsx("polygon",{points:"240,35 232,30 232,40",fill:"#9CA3AF"}),e.jsx("rect",{x:"250",y:"20",width:"40",height:"30",rx:"5",fill:"#10B981",children:e.jsx("title",{children:"Fixed Command"})}),e.jsx("text",{x:"270",y:"40",textAnchor:"middle",fill:"#E5E7EB",fontSize:"8",children:"Fixed"}),e.jsxs("g",{transform:"translate(0, 60)",children:[e.jsx("rect",{x:"10",y:"0",width:"280",height:"30",rx:"5",fill:"#1F2937",stroke:"#374151"}),e.jsx("text",{x:"20",y:"20",fill:"#EF4444",fontSize:"10",children:'Debug: echo "grep pattern file with spaces.txt"'})]})]})]})]})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:r,title:"Systematic Debugging Approach",highlightLines:[4,8,12,16,20,24,28]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-3",children:"Debugging Toolbox"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{tool:"echo",use:"See what's being passed",icon:"M17 8l4 4m0 0l-4 4m4-4H3",color:"blue"},{tool:"set -x",use:"Trace execution",icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",color:"green"},{tool:"shellcheck",use:"Static analysis",icon:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",color:"purple"},{tool:"strace",use:"System call tracing",icon:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",color:"red"}].map((t,n)=>e.jsxs("div",{className:"bg-gray-800/30 p-3 rounded-lg text-center hover:bg-gray-800/50 transition-all duration-300",children:[e.jsx("div",{className:`text-${t.color}-400 mb-1 flex justify-center`,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:t.icon})})}),e.jsx("div",{className:"font-semibold text-gray-200 text-sm",children:t.tool}),e.jsx("div",{className:"text-xs text-gray-400",children:t.use})]},n))})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.6s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-purple-300 border-b border-purple-800 pb-2",children:"Regex Pitfalls and Solutions"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-purple-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:o,title:"Common Regex Mistakes and Debugging",highlightLines:[3,7,11,15,19,23,27]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-3",children:"Regex Debugging Visualization"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 700 300",className:"w-full",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Problem: Greedy Matching"}),e.jsx("rect",{x:"10",y:"40",width:"680",height:"40",rx:"5",fill:"#1F2937",stroke:"#4B5563"}),e.jsx("text",{x:"20",y:"65",fill:"#D1D5DB",fontSize:"12",children:'Input: "The quick brown fox jumps over the lazy dog"'}),e.jsxs("g",{transform:"translate(20, 80)",children:[e.jsx("text",{x:"0",y:"20",fill:"#EF4444",fontSize:"12",children:"Pattern: /.*fox/"}),e.jsx("rect",{x:"0",y:"25",width:"150",height:"20",rx:"3",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"150",dur:"1s",fill:"freeze"})}),e.jsx("text",{x:"75",y:"40",textAnchor:"middle",fill:"white",fontSize:"10",children:'Matches: "The quick brown fox"'})]}),e.jsxs("g",{transform:"translate(200, 80)",children:[e.jsx("text",{x:"0",y:"20",fill:"#10B981",fontSize:"12",children:"Intended: /[^f]*fox/"}),e.jsx("rect",{x:"0",y:"25",width:"120",height:"20",rx:"3",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"120",dur:"1s",fill:"freeze",begin:"0.5s"})}),e.jsx("text",{x:"60",y:"40",textAnchor:"middle",fill:"white",fontSize:"10",children:'Matches: "The quick brown fox"'})]})]}),e.jsxs("g",{transform:"translate(0, 130)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Problem: Unescaped Special Characters"}),e.jsx("rect",{x:"10",y:"40",width:"680",height:"40",rx:"5",fill:"#1F2937",stroke:"#4B5563"}),e.jsx("text",{x:"20",y:"65",fill:"#D1D5DB",fontSize:"12",children:'Input: "file.txt backup.tar.gz important.doc"'}),e.jsxs("g",{transform:"translate(20, 90)",children:[e.jsx("text",{x:"0",y:"20",fill:"#EF4444",fontSize:"12",children:"Pattern: /file.txt/ (in regex: . means any character)"}),e.jsx("rect",{x:"0",y:"25",width:"60",height:"20",rx:"3",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"60",dur:"1s",fill:"freeze"})}),e.jsx("text",{x:"30",y:"40",textAnchor:"middle",fill:"white",fontSize:"10",children:'Matches: "file" + any char + "txt"'})]}),e.jsxs("g",{transform:"translate(300, 90)",children:[e.jsx("text",{x:"0",y:"20",fill:"#10B981",fontSize:"12",children:"Fix: /file\\.txt/ (escaped dot)"}),e.jsx("rect",{x:"0",y:"25",width:"60",height:"20",rx:"3",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"60",dur:"1s",fill:"freeze",begin:"0.5s"})}),e.jsx("text",{x:"30",y:"40",textAnchor:"middle",fill:"white",fontSize:"10",children:'Matches: "file.txt" exactly'})]})]}),e.jsxs("g",{transform:"translate(0, 200)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Problem: Missing Anchors"}),e.jsx("rect",{x:"10",y:"40",width:"680",height:"40",rx:"5",fill:"#1F2937",stroke:"#4B5563"}),e.jsx("text",{x:"20",y:"65",fill:"#D1D5DB",fontSize:"12",children:'Input: "error: something went wrong\\\\nwarning: minor issue\\\\nerror: critical failure"'}),e.jsxs("g",{transform:"translate(20, 90)",children:[e.jsx("text",{x:"0",y:"20",fill:"#EF4444",fontSize:"12",children:"Pattern: /error/ (matches anywhere in line)"}),e.jsx("rect",{x:"0",y:"25",width:"50",height:"20",rx:"3",fill:"#EF4444",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"50",dur:"1s",fill:"freeze"})}),e.jsx("text",{x:"25",y:"40",textAnchor:"middle",fill:"white",fontSize:"8",children:"Matches both lines"})]}),e.jsxs("g",{transform:"translate(200, 90)",children:[e.jsx("text",{x:"0",y:"20",fill:"#10B981",fontSize:"12",children:"Fix: /^error/ (start of line only)"}),e.jsx("rect",{x:"0",y:"25",width:"50",height:"20",rx:"3",fill:"#10B981",opacity:"0.7",children:e.jsx("animate",{attributeName:"width",from:"0",to:"50",dur:"1s",fill:"freeze",begin:"0.5s"})}),e.jsx("text",{x:"25",y:"40",textAnchor:"middle",fill:"white",fontSize:"8",children:"Matches only lines starting with error"})]})]})]})})]})]}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-red-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:a,title:"Quoting and Variable Expansion Pitfalls",highlightLines:[3,7,11,15,19,23,27]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-red-300 mb-3",children:"The Great Shell Quoting Mystery"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-red-900/20 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-red-300 mb-1",children:"When Swadeep Lost His Files"}),e.jsxs("p",{className:"text-sm text-gray-300",children:["Swadeep ran: ",e.jsx("code",{children:"rm $filename"}),' where filename was "important notes.txt". The shell expanded this to: ',e.jsx("code",{children:"rm important notes.txt"}),' - deleting "important" and "notes.txt".']})]}),e.jsxs("div",{className:"p-3 bg-yellow-900/20 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-yellow-300 mb-1",children:"The Solution"}),e.jsxs("p",{className:"text-sm text-gray-300",children:["Always quote variables: ",e.jsx("code",{children:'rm "$filename"'}),'. The shell keeps "important notes.txt" as a single argument.']})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-blue-300 mb-1",children:"Quote Rule of Thumb"}),e.jsxs("ul",{className:"text-sm text-gray-300 space-y-1",children:[e.jsxs("li",{children:["Double quotes: ",e.jsx("code",{children:'"$var"'})," - expands variables"]}),e.jsxs("li",{children:["Single quotes: ",e.jsx("code",{children:"'$var'"})," - literal text"]}),e.jsxs("li",{children:["Backticks vs $(): ",e.jsx("code",{children:"$(cmd)"})," preferred"]}),e.jsx("li",{children:"No quotes: word splitting occurs"})]})]}),e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-green-300 mb-1",children:"Debugging Technique"}),e.jsxs("p",{className:"text-sm text-gray-300",children:["Use ",e.jsx("code",{children:"set -x"})," to see how shell expands commands, or use ",e.jsx("code",{children:"echo"})," to preview: ",e.jsx("code",{children:'echo rm "$filename"'})]})]})]})]})]})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_1.8s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-800 pb-2",children:"Pipeline and Data Flow Debugging"}),e.jsxs("div",{className:"bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300",children:[e.jsx(s,{fileModule:l,title:"Debugging Complex Pipelines",highlightLines:[4,8,12,16,20,24,28]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-cyan-300 mb-3",children:"Pipeline Debugging Workflow"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 800 350",className:"w-full",children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("text",{x:"10",y:"30",fill:"#9CA3AF",fontSize:"14",children:"Debugging a Broken Pipeline: grep pattern file.txt | sed 's/old/new/' | awk '{print $1}'"}),e.jsxs("g",{transform:"translate(50, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"100",height:"60",rx:"8",fill:"#4B5563",className:"hover:fill-gray-600 transition-colors duration-300",children:e.jsx("title",{children:"Input File"})}),e.jsx("text",{x:"50",y:"35",textAnchor:"middle",fill:"#D1D5DB",fontSize:"12",children:"file.txt"}),e.jsx("text",{x:"50",y:"50",textAnchor:"middle",fill:"#9CA3AF",fontSize:"10",children:"(exists?)"})]}),e.jsx("path",{d:"M160,80 L200,80",stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite"})}),e.jsx("polygon",{points:"200,80 192,75 192,85",fill:"#9CA3AF"}),e.jsxs("g",{transform:"translate(210, 50)",children:[e.jsxs("rect",{x:"0",y:"0",width:"100",height:"60",rx:"8",fill:"#3B82F6",className:"hover:fill-blue-500 transition-colors duration-300 animate-[pulseDebug_3s_ease-in-out_infinite]",children:[e.jsx("title",{children:"grep command"}),e.jsx("animate",{attributeName:"fill",values:"#3B82F6;#1D4ED8;#3B82F6",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("text",{x:"50",y:"30",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"grep pattern"}),e.jsx("text",{x:"50",y:"45",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"Debug: check output"})]}),e.jsx("path",{d:"M320,80 L360,80",stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite",begin:"0.3s"})}),e.jsx("polygon",{points:"360,80 352,75 352,85",fill:"#9CA3AF"}),e.jsxs("g",{transform:"translate(370, 50)",children:[e.jsxs("rect",{x:"0",y:"0",width:"100",height:"60",rx:"8",fill:"#8B5CF6",className:"hover:fill-purple-500 transition-colors duration-300 animate-[pulseDebug_3s_ease-in-out_infinite]",style:{animationDelay:"0.5s"},children:[e.jsx("title",{children:"sed command"}),e.jsx("animate",{attributeName:"fill",values:"#8B5CF6;#7C3AED;#8B5CF6",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsx("text",{x:"50",y:"30",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"sed 's/old/new/'"}),e.jsx("text",{x:"50",y:"45",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"Debug: check pattern"})]}),e.jsx("path",{d:"M480,80 L520,80",stroke:"#9CA3AF",strokeWidth:"2",children:e.jsx("animate",{attributeName:"stroke-dashoffset",from:"100",to:"0",dur:"1s",repeatCount:"indefinite",begin:"0.6s"})}),e.jsx("polygon",{points:"520,80 512,75 512,85",fill:"#9CA3AF"}),e.jsxs("g",{transform:"translate(530, 50)",children:[e.jsxs("rect",{x:"0",y:"0",width:"100",height:"60",rx:"8",fill:"#10B981",className:"hover:fill-green-500 transition-colors duration-300 animate-[pulseDebug_3s_ease-in-out_infinite]",style:{animationDelay:"1s"},children:[e.jsx("title",{children:"awk command"}),e.jsx("animate",{attributeName:"fill",values:"#10B981;#059669;#10B981",dur:"2s",repeatCount:"indefinite",begin:"1s"})]}),e.jsx("text",{x:"50",y:"30",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"awk '{print $1}'"}),e.jsx("text",{x:"50",y:"45",textAnchor:"middle",fill:"#E5E7EB",fontSize:"10",children:"Debug: check field"})]})]}),e.jsxs("g",{transform:"translate(0, 150)",children:[e.jsx("rect",{x:"50",y:"0",width:"700",height:"150",rx:"10",fill:"#1F2937",stroke:"#374151"}),e.jsx("text",{x:"70",y:"30",fill:"#3B82F6",fontSize:"14",fontWeight:"bold",children:"Debugging Steps"}),e.jsx("line",{x1:"70",y1:"35",x2:"200",y2:"35",stroke:"#4B5563"}),e.jsxs("g",{transform:"translate(70, 50)",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8",fill:"#EF4444",children:e.jsx("animate",{attributeName:"r",values:"8;10;8",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"25",y:"15",fill:"#D1D5DB",fontSize:"12",children:"Step 1: Test grep alone"}),e.jsx("text",{x:"25",y:"30",fill:"#9CA3AF",fontSize:"10",children:"grep pattern file.txt | head -5"})]}),e.jsxs("g",{transform:"translate(70, 80)",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8",fill:"#F59E0B",children:e.jsx("animate",{attributeName:"r",values:"8;10;8",dur:"1s",repeatCount:"indefinite",begin:"0.3s"})}),e.jsx("text",{x:"25",y:"15",fill:"#D1D5DB",fontSize:"12",children:"Step 2: Add sed to pipeline"}),e.jsx("text",{x:"25",y:"30",fill:"#9CA3AF",fontSize:"10",children:"grep pattern file.txt | sed 's/old/new/' | head -5"})]}),e.jsxs("g",{transform:"translate(70, 110)",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8",fill:"#10B981",children:e.jsx("animate",{attributeName:"r",values:"8;10;8",dur:"1s",repeatCount:"indefinite",begin:"0.6s"})}),e.jsx("text",{x:"25",y:"15",fill:"#D1D5DB",fontSize:"12",children:"Step 3: Complete pipeline"}),e.jsx("text",{x:"25",y:"30",fill:"#9CA3AF",fontSize:"10",children:"grep pattern file.txt | sed 's/old/new/' | awk '{print $1}' | head -5"})]}),e.jsxs("g",{transform:"translate(400, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"90",rx:"5",fill:"#111827",stroke:"#374151"}),e.jsx("text",{x:"10",y:"20",fill:"#F59E0B",fontSize:"12",fontWeight:"bold",children:"Debugging Commands"}),e.jsx("text",{x:"10",y:"40",fill:"#9CA3AF",fontSize:"10",children:"set -x             # Enable tracing"}),e.jsx("text",{x:"10",y:"55",fill:"#9CA3AF",fontSize:"10",children:"set -o pipefail    # Fail on pipe errors"}),e.jsx("text",{x:"10",y:"70",fill:"#9CA3AF",fontSize:"10",children:'echo "${PIPESTATUS[@]}" # Check all exit codes'})]})]})]})})]})]})]}),e.jsxs("div",{className:"animate-[fadeSlideUp_2s_ease-out] mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-green-300 border-b border-green-800 pb-2",children:"Prevention Strategies and Best Practices"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-green-900/30 to-emerald-800/20 p-5 rounded-xl border border-green-700/30 hover:border-green-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-green-200",children:"Proactive Prevention"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-1",children:"Use ShellCheck"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Static analysis tool that catches common shell script errors"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"Install: apt-get install shellcheck, Use: shellcheck script.sh"})]}),e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-1",children:"Create Test Suites"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Test scripts with known input and expected output"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"When Abhronila from Shyamnagar created test files, bug rate dropped 80%"})]}),e.jsxs("div",{className:"p-3 bg-green-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-300 mb-1",children:"Version Control for Commands"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Save commands in scripts, not just typing in terminal"}),e.jsx("div",{className:"text-xs text-blue-400 mt-2",children:"Git tracks changes and allows rollback if something breaks"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-5 rounded-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Debugging Workflow"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Start Simple"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Test each command separately before combining"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Rule: One bug at a time is easier than ten"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Use Small Test Data"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Create 5-10 line test files instead of using production data"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:"Fast iteration = faster debugging"})]}),e.jsxs("div",{className:"p-3 bg-blue-900/20 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-300 mb-1",children:"Add Debugging Output"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Insert echo statements or awk print debugging"}),e.jsx("div",{className:"text-xs text-green-400 mt-2",children:`awk '{print "DEBUG: Processing:", $0} {actual processing}'`})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-5 rounded-xl border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-purple-200",children:"Real-World Debugging Stories"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-red-300 mb-1",children:"Debangshu's CSV Catastrophe"}),e.jsxs("p",{className:"text-sm text-gray-300",children:["Processed 10,000 student records with ",e.jsx("code",{children:"awk -F, '{print $1}'"})," but got wrong results. Problem: Some lines had commas in quotes. Solution: Used ",e.jsx("code",{children:`awk -FPAT='([^,]+)|("[^"]+")'`})]})]})]})}),e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-yellow-300 mb-1",children:"Tuhina's Silent Sed"}),e.jsxs("p",{className:"text-sm text-gray-300",children:[e.jsx("code",{children:"sed -i 's/Jan/January/' file.txt"}),' produced no changes. Problem: File had "jan" (lowercase). Solution: ',e.jsx("code",{children:"sed -i 's/Jan/January/gi' file.txt"})]})]})]})}),e.jsx("div",{className:"p-3 bg-purple-900/20 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx("svg",{className:"w-5 h-5 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-green-300 mb-1",children:"Swadeep's Backup Salvation"}),e.jsxs("p",{className:"text-sm text-gray-300",children:["Always used ",e.jsx("code",{children:"sed -i.bak"})," for in-place editing. When a regex ate his data, the .bak file saved 8 hours of work. Moral: Always make backups before destructive operations."]})]})]})})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 p-5 rounded-xl border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-yellow-200",children:"Debugging Cheat Sheet"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"set -x"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Trace execution"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"echo $?"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Check exit code"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"shellcheck"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Static analysis"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"head -5"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Test with sample"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"tee"}),e.jsx("div",{className:"text-xs text-gray-400",children:"Save intermediate"})]}),e.jsxs("div",{className:"text-center p-2 bg-gray-800/30 rounded-lg",children:[e.jsx("div",{className:"text-xs text-yellow-400 font-bold",children:"strace"}),e.jsx("div",{className:"text-xs text-gray-400",children:"System calls"})]})]})]})})]})]})]}),e.jsx("div",{className:"animate-[fadeSlideUp_2.2s_ease-out] mb-12",children:e.jsx("div",{className:"bg-gradient-to-r from-yellow-900/30 to-amber-900/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-700/50 hover:border-yellow-500/50 transition-all duration-500 group",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-gradient-to-br from-yellow-600 to-amber-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-yellow-300",children:"Teacher's Note"}),e.jsx("div",{className:"mb-6 p-4 bg-gray-900/40 rounded-xl border border-gray-700",children:e.jsx("p",{className:"text-gray-300 leading-relaxed",children:`Dear students, debugging is not a sign of failure—it's a core programming skill. In my 27 years, I've made every mistake in this chapter (and invented some new ones). The difference between beginners and experts isn't that experts don't make mistakes; it's that experts have systematic ways to find and fix them. Remember: "The most dangerous command is the one you're sure will work."`})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-yellow-300",children:"Sukanta Hui"}),e.jsx("div",{className:"text-sm text-gray-400",children:"27 years experience"})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-amber-300",children:"Debugging Rule"}),e.jsx("div",{className:"text-sm text-gray-400",children:'"When in doubt, print it out"'})]}),e.jsxs("div",{className:"p-3 bg-gray-800/50 rounded-lg",children:[e.jsx("div",{className:"font-semibold text-red-300",children:"Contact"}),e.jsx("div",{className:"text-sm text-gray-400",children:"sukantahui@codernaccotax.co.in"})]})]}),e.jsxs("div",{className:"p-4 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-xl",children:[e.jsx("h4",{className:"font-bold text-lg mb-2 text-red-200",children:"Exam Survival Tip"}),e.jsx("p",{className:"text-gray-300",children:"In practical exams, if your command isn't working: 1) Write it down on paper first, 2) Test each part separately, 3) Check quotes and special characters, 4) Use small test data. Showing your debugging process can earn partial marks even if the final command isn't perfect."})]})]})]})})}),e.jsx("div",{className:"animate-[fadeSlideUp_2.4s_ease-out]",children:e.jsxs("div",{className:"bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/30 transition-all duration-500",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 text-yellow-300 border-b border-yellow-800 pb-2",children:"Debugging Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"space-y-4",children:[{num:"1",title:"Test with Sample Data",desc:"Use head/tail or create small test files"},{num:"2",title:"Check File Existence",desc:"ls -la or test -f before processing"},{num:"3",title:"Verify Permissions",desc:"Can you read the file? ls -la filename"},{num:"4",title:"Check Line Endings",desc:"cat -A shows $ (LF) or ^M$ (CRLF)"}].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:t.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-yellow-200",children:t.title}),e.jsx("p",{className:"text-sm text-gray-300",children:t.desc})]})]},n))}),e.jsx("div",{className:"space-y-4",children:[{num:"5",title:"Use set -x",desc:"Enable command tracing to see expansions"},{num:"6",title:"Check Exit Codes",desc:"echo $? after each command"},{num:"7",title:"Test Regex Separately",desc:"Use echo 'test' | grep pattern"},{num:"8",title:"Backup Before -i",desc:"Always use sed -i.bak or cp first"}].map((t,n)=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-gray-800/40 rounded-lg hover:bg-gray-800/60 transition-all duration-300",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-xs font-bold",children:t.num})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-200",children:t.title}),e.jsx("p",{className:"text-sm text-gray-300",children:t.desc})]})]},n))})]}),e.jsxs("div",{className:"mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700",children:[e.jsx("h3",{className:"font-bold text-lg mb-3 text-blue-200",children:"Hint Section"}),e.jsx("p",{className:"text-gray-300 italic",children:"Think about: How would you debug a pipeline that works on your machine but fails on another? Observe carefully: What's different between successful and failed runs? Try changing this: Instead of fixing the error, try to reproduce it consistently first."})]}),e.jsxs("div",{className:"mt-6 p-4 bg-gray-900/50 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-300 mb-2",children:"Professional Tip from Experience"}),e.jsx("p",{className:"text-gray-300 text-sm",children:'When Tuhina debugged the Naihati school database issue, she created a "debugging diary" documenting: 1) What she expected, 2) What actually happened, 3) What she tried, 4) What worked. This systematic approach solved in 30 minutes what would have taken 3 hours.'})]})]})})]})]});export{x as default};

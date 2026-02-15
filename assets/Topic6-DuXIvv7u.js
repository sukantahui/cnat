import{j as e}from"./index-CG3iA-Ea.js";import{S as r}from"./ShellFileLoader-DaQ5Qy3C.js";import"./prism-DRxy4y8s.js";const n=`#!/bin/bash
# Indexed Array Examples

echo "=== Indexed Arrays (Numbered Indices) ==="
echo ""

# 1. Creating indexed arrays
echo "1. Different ways to create indexed arrays:"

# Method 1: Direct assignment
fruits=("Apple" "Banana" "Cherry" "Date")
echo "  Method 1: fruits=(\\"Apple\\" \\"Banana\\" \\"Cherry\\" \\"Date\\")"
echo "  Result: \${fruits[@]}"
echo ""

# Method 2: Piecemeal assignment
colors[0]="Red"
colors[1]="Green"
colors[2]="Blue"
echo "  Method 2: colors[0]=\\"Red\\"; colors[1]=\\"Green\\"; colors[2]=\\"Blue\\""
echo "  Result: \${colors[@]}"
echo ""

# Method 3: Using declare (explicit but optional for indexed)
declare -a numbers=(10 20 30 40 50)
echo "  Method 3: declare -a numbers=(10 20 30 40 50)"
echo "  Result: \${numbers[@]}"
echo ""

# 2. Accessing array elements
echo "2. Accessing array elements:"
echo "  fruits array: \${fruits[@]}"
echo "  First element (index 0): \${fruits[0]}"
echo "  Second element (index 1): \${fruits[1]}"
echo "  Last element: \${fruits[-1]}"
echo "  Second to last: \${fruits[-2]}"
echo ""

# 3. Array length and indices
echo "3. Array length and indices:"
echo "  Number of elements in fruits: \${#fruits[@]}"
echo "  Indices in fruits: \${!fruits[@]}"
echo "  Length of first element: \${#fruits[0]} (Apple has \${#fruits[0]} characters)"
echo ""

# 4. Slicing arrays
echo "4. Array slicing (bash 4.0+):"
echo "  Elements 1-2: \${fruits[@]:1:2}"
echo "  All elements from index 2: \${fruits[@]:2}"
echo "  Last 2 elements: \${fruits[@]: -2}"
echo ""

# 5. Modifying arrays
echo "5. Modifying arrays:"

# Append elements
fruits+=("Elderberry" "Fig")
echo "  After append: \${fruits[@]}"

# Insert at specific index (bash 4.3+)
fruits=("\${fruits[@]:0:2}" "Apricot" "\${fruits[@]:2}")
echo "  After inserting at index 2: \${fruits[@]}"

# Remove element (unset)
unset 'fruits[1]'
echo "  After removing index 1: \${fruits[@]}"
echo "  Note: Index 1 is now empty, indices: \${!fruits[@]}"
echo ""

# 6. Looping through arrays
echo "6. Different ways to loop through arrays:"

echo "  Method 1: Standard for loop"
for fruit in "\${fruits[@]}"; do
    echo "    - $fruit"
done
echo ""

echo "  Method 2: C-style for loop with indices"
for ((i=0; i<\${#fruits[@]}; i++)); do
    echo "    Index $i: \${fruits[i]}"
done
echo ""

echo "  Method 3: Loop with indices only"
for index in "\${!fruits[@]}"; do
    echo "    Index $index: \${fruits[index]}"
done
echo ""

# 7. Reading command output into array
echo "7. Reading command output into array:"
files=(*.sh)
echo "  Shell files in current directory: \${#files[@]} files"
echo "  First 3 files: \${files[@]:0:3}"
echo ""

# 8. Multi-dimensional arrays (simulated)
echo "8. Simulating multi-dimensional arrays:"
matrix[0]="1 2 3"
matrix[1]="4 5 6"
matrix[2]="7 8 9"

echo "  Matrix representation:"
for row in "\${matrix[@]}"; do
    echo "    $row"
done
echo "  Element at [1,2] (row 1, col 2):"
row=(\${matrix[1]})
echo "    \${row[1]}"
echo ""

# 9. Copying and comparing arrays
echo "9. Copying arrays:"
fruits_copy=("\${fruits[@]}")
echo "  Original: \${fruits[@]}"
echo "  Copy: \${fruits_copy[@]}"
echo "  Are they the same? $( [[ "\${fruits[*]}" == "\${fruits_copy[*]}" ]] && echo "Yes" || echo "No" )"
echo ""

# 10. Sorting arrays
echo "10. Sorting arrays:"
sorted_fruits=($(printf "%s\\n" "\${fruits[@]}" | sort))
echo "  Original: \${fruits[@]}"
echo "  Sorted: \${sorted_fruits[@]}"
echo ""

# 11. Searching in arrays
echo "11. Searching in arrays:"
search_for="Fig"
if [[ " \${fruits[@]} " =~ " \${search_for} " ]]; then
    echo "  '$search_for' found in fruits array"
else
    echo "  '$search_for' not found"
fi
echo ""

# 12. Common pitfalls
echo "12. Common pitfalls with indexed arrays:"
echo "  Pitfall 1: Forgetting arrays start at 0"
echo "    fruits[1] is the SECOND element, not first"
echo ""
echo "  Pitfall 2: Sparse arrays after unset"
sparse=("a" "b" "c" "d")
unset 'sparse[1]'
echo "    After unset sparse[1]: \${sparse[@]}"
echo "    Indices: \${!sparse[@]} (note the gap)"
echo ""
echo "  Pitfall 3: Word splitting without quotes"
echo "    Always use: \\"\\\${array[@]}\\" not \\\${array[@]}"
echo ""

echo "=== When to Use Indexed Arrays ==="
echo "• When order matters (processing files in order)"
echo "• When you need to preserve sequence"
echo "• For lists where position has meaning"
echo "• When reading line-by-line from files/commands"`,a=`#!/bin/bash
# Associative Array Examples

echo "=== Associative Arrays (Key-Value Pairs) ==="
echo ""
echo "IMPORTANT: Associative arrays require Bash 4.0+"
echo "           and must be declared with 'declare -A'"
echo ""

# Check Bash version
bash_version=\${BASH_VERSION%%[^0-9.]*}
echo "Bash version: $bash_version"
if [[ $(echo "$bash_version < 4.0" | bc) -eq 1 ]]; then
    echo "WARNING: Associative arrays require Bash 4.0 or higher"
    echo "Some examples may not work on this system"
fi
echo ""

# 1. Declaring associative arrays
echo "1. Declaring associative arrays:"

# Method 1: Declare then assign
declare -A student
student["name"]="Swadeep"
student["age"]=22
student["city"]="Barrackpore"
student["course"]="Computer Science"
echo "  Method 1: declare -A then assign"
echo "  Student: \${student[@]}"
echo ""

# Method 2: Declare and initialize
declare -A teacher=(
    ["name"]="Sukanta Hui"
    ["experience"]=27
    ["email"]="sukantahui@codernaccotax.co.in"
    ["skills"]="Programming, RDBMS, OS"
)
echo "  Method 2: declare -A with initialization"
echo "  Teacher: \${teacher[@]}"
echo ""

# 2. Accessing elements
echo "2. Accessing elements:"
echo "  Student name: \${student["name"]}"
echo "  Student age: \${student["age"]}"
echo "  Student city: \${student["city"]}"
echo ""

# 3. Getting keys and values
echo "3. Getting keys and values separately:"
echo "  All keys: \${!student[@]}"
echo "  All values: \${student[@]}"
echo "  Number of elements: \${#student[@]}"
echo ""

# 4. Iterating through associative arrays
echo "4. Iterating through associative arrays:"

echo "  Method 1: Loop through keys"
for key in "\${!student[@]}"; do
    echo "    $key: \${student[$key]}"
done
echo ""

echo "  Method 2: Loop through values only"
for value in "\${student[@]}"; do
    echo "    Value: $value"
done
echo ""

# 5. Modifying associative arrays
echo "5. Modifying associative arrays:"

# Add new key-value pair
student["grade"]="A"
echo "  After adding grade:"
for key in "\${!student[@]}"; do
    echo "    $key: \${student[$key]}"
done
echo ""

# Update existing value
student["age"]=23
echo "  After updating age to 23: \${student["age"]}"
echo ""

# Remove a key-value pair
unset student["course"]
echo "  After removing course key:"
echo "  Keys: \${!student[@]}"
echo ""

# 6. Checking if key exists
echo "6. Checking if key exists:"
check_key="email"
if [[ -v student["$check_key"] ]]; then
    echo "  Key '$check_key' exists with value: \${student[$check_key]}"
else
    echo "  Key '$check_key' does not exist"
fi
echo ""

# 7. Nested associative arrays (simulated)
echo "7. Simulating nested associative arrays:"

declare -A student1
student1["name"]="Tuhina"
student1["city"]="Shyamnagar"
student1["age"]=21

declare -A student2
student2["name"]="Abhronila"
student2["city"]="Ichapur"
student2["age"]=22

declare -A student3
student3["name"]="Debangshu"
student3["city"]="Naihati"
student3["age"]=23

# Array of associative arrays (simulated by prefix)
echo "  Multiple students:"
for i in 1 2 3; do
    declare -n current_student="student$i"
    echo "    Student $i: \${current_student["name"]} from \${current_student["city"]}"
done
echo ""

# 8. Practical example: Word frequency counter
echo "8. Practical example: Word frequency counter:"

text="apple banana apple cherry banana apple date apple cherry"
declare -A word_count

for word in $text; do
    if [[ -v word_count["$word"] ]]; then
        ((word_count["$word"]++))
    else
        word_count["$word"]=1
    fi
done

echo "  Text: $text"
echo "  Word frequencies:"
for word in "\${!word_count[@]}"; do
    echo "    $word: \${word_count[$word]}"
done
echo ""

# 9. Practical example: Configuration storage
echo "9. Configuration storage example:"

declare -A server_config
server_config["hostname"]="web-server-01"
server_config["ip_address"]="192.168.1.100"
server_config["port"]=8080
server_config["max_connections"]=1000
server_config["timeout"]=30

echo "  Server Configuration:"
for key in "\${!server_config[@]}"; do
    printf "    %-20s: %s\\n" "$key" "\${server_config[$key]}"
done
echo ""

# 10. Copying associative arrays
echo "10. Copying associative arrays:"
declare -A student_copy
for key in "\${!student[@]}"; do
    student_copy["$key"]="\${student[$key]}"
done

echo "  Original student keys: \${!student[@]}"
echo "  Copied student keys: \${!student_copy[@]}"
echo "  Are they equal? $( [[ "\${student[*]}" == "\${student_copy[*]}" ]] && echo "Yes" || echo "No" )"
echo ""

# 11. Merging associative arrays
echo "11. Merging associative arrays:"
declare -A personal_info
personal_info["phone"]="7003756860"
personal_info["address"]="123 Main Street"

declare -A complete_profile
# Copy student info
for key in "\${!student[@]}"; do
    complete_profile["$key"]="\${student[$key]}"
done
# Merge with personal info
for key in "\${!personal_info[@]}"; do
    complete_profile["$key"]="\${personal_info[$key]}"
done

echo "  Complete profile keys: \${!complete_profile[@]}"
echo "  Complete profile values: \${complete_profile[@]}"
echo ""

# 12. Common operations
echo "12. Common operations on associative arrays:"

# Check if array is empty
declare -A empty_array
if [[ \${#empty_array[@]} -eq 0 ]]; then
    echo "  empty_array is empty"
fi

# Get all keys as array
keys_array=("\${!student[@]}")
echo "  Keys as array: \${keys_array[@]}"

# Get all values as array
values_array=("\${student[@]}")
echo "  Values as array: \${values_array[@]}"
echo ""

# 13. Limitations and workarounds
echo "13. Limitations and workarounds:"
echo "  Limitation 1: Keys with spaces need special handling"
declare -A test_array
test_array["key with spaces"]="value with spaces"
echo "    Key with spaces: \${test_array["key with spaces"]}"
echo ""
echo "  Limitation 2: Cannot store arrays inside associative arrays"
echo "    Workaround: Use serialization (JSON, comma-separated)"
echo ""

echo "=== When to Use Associative Arrays ==="
echo "• Configuration data with named parameters"
echo "• Counting occurrences (word frequencies, stats)"
echo "• Lookup tables (error codes, status messages)"
echo "• Object-like structures (user profiles, settings)"
echo "• When you need to access data by meaningful names, not positions"`,s=`#!/bin/bash
# Array Operations Examples

echo "=== Common Array Operations ==="
echo ""

# 1. Creating arrays from different sources
echo "1. Creating arrays from different sources:"

# From string
echo "  From string:"
string="apple,banana,cherry,date"
IFS=',' read -ra fruits_from_string <<< "$string"
echo "    String: $string"
echo "    Array: \${fruits_from_string[@]}"
echo ""

# From command output
echo "  From command output (ls):"
files_array=($(ls -1 | head -5))
echo "    First 5 files: \${files_array[@]}"
echo ""

# From file lines
echo "  From file lines:"
cat > /tmp/test_array.txt << EOF
Line 1
Line 2
Line 3
Line 4
EOF
mapfile -t lines_array < /tmp/test_array.txt
echo "    Lines from file: \${#lines_array[@]} lines"
echo "    First line: \${lines_array[0]}"
echo ""

# 2. Array concatenation
echo "2. Array concatenation:"
array1=("A" "B" "C")
array2=("D" "E" "F")
array3=("\${array1[@]}" "\${array2[@]}")
echo "  array1: \${array1[@]}"
echo "  array2: \${array2[@]}"
echo "  Concatenated: \${array3[@]}"
echo ""

# 3. Array slicing
echo "3. Array slicing:"
numbers=(0 1 2 3 4 5 6 7 8 9)
echo "  Original: \${numbers[@]}"
echo "  Slice 2-5: \${numbers[@]:2:4}"
echo "  Slice from 5 to end: \${numbers[@]:5}"
echo "  Last 3 elements: \${numbers[@]: -3}"
echo ""

# 4. Searching in arrays
echo "4. Searching in arrays:"
search_array=("apple" "banana" "cherry" "date" "elderberry")
search_for="cherry"

echo "  Array: \${search_array[@]}"
echo "  Searching for: '$search_for'"

# Method 1: Using regex
if [[ " \${search_array[@]} " =~ " \${search_for} " ]]; then
    echo "  Found using regex"
fi

# Method 2: Loop and check
found=false
for element in "\${search_array[@]}"; do
    if [[ "$element" == "$search_for" ]]; then
        found=true
        break
    fi
done
[[ $found == true ]] && echo "  Found using loop" || echo "  Not found"
echo ""

# 5. Removing duplicates
echo "5. Removing duplicates:"
duplicate_array=("apple" "banana" "apple" "cherry" "banana" "date")
echo "  With duplicates: \${duplicate_array[@]}"

declare -A seen
unique_array=()
for element in "\${duplicate_array[@]}"; do
    if [[ ! -v seen["$element"] ]]; then
        unique_array+=("$element")
        seen["$element"]=1
    fi
done
echo "  Without duplicates: \${unique_array[@]}"
echo ""

# 6. Sorting arrays
echo "6. Sorting arrays:"
unsorted=("zebra" "apple" "mango" "banana" "cherry")
echo "  Unsorted: \${unsorted[@]}"

# Ascending sort
sorted_asc=($(printf "%s\\n" "\${unsorted[@]}" | sort))
echo "  Ascending: \${sorted_asc[@]}"

# Descending sort
sorted_desc=($(printf "%s\\n" "\${unsorted[@]}" | sort -r))
echo "  Descending: \${sorted_desc[@]}"
echo ""

# 7. Reversing arrays
echo "7. Reversing arrays:"
original=("A" "B" "C" "D" "E")
echo "  Original: \${original[@]}"

reversed=()
for ((i=\${#original[@]}-1; i>=0; i--)); do
    reversed+=("\${original[i]}")
done
echo "  Reversed: \${reversed[@]}"
echo ""

# 8. Array comparison
echo "8. Array comparison:"
array_a=("A" "B" "C")
array_b=("A" "B" "C")
array_c=("A" "B" "D")

echo "  array_a: \${array_a[@]}"
echo "  array_b: \${array_b[@]}"
echo "  array_c: \${array_c[@]}"

# Compare as strings
if [[ "\${array_a[*]}" == "\${array_b[*]}" ]]; then
    echo "  array_a equals array_b"
else
    echo "  array_a not equal to array_b"
fi

if [[ "\${array_a[*]}" == "\${array_c[*]}" ]]; then
    echo "  array_a equals array_c"
else
    echo "  array_a not equal to array_c"
fi
echo ""

# 9. Array intersection
echo "9. Array intersection:"
array1=("A" "B" "C" "D" "E")
array2=("C" "D" "E" "F" "G")

declare -A count
intersection=()

# Count occurrences in first array
for element in "\${array1[@]}"; do
    count["$element"]=1
done

# Check second array
for element in "\${array2[@]}"; do
    if [[ \${count["$element"]} -eq 1 ]]; then
        intersection+=("$element")
        count["$element"]=2
    fi
done

echo "  Array1: \${array1[@]}"
echo "  Array2: \${array2[@]}"
echo "  Intersection: \${intersection[@]}"
echo ""

# 10. Array union
echo "10. Array union:"
declare -A union_map
union=()

for element in "\${array1[@]}" "\${array2[@]}"; do
    if [[ ! -v union_map["$element"] ]]; then
        union+=("$element")
        union_map["$element"]=1
    fi
done

echo "  Array1: \${array1[@]}"
echo "  Array2: \${array2[@]}"
echo "  Union: \${union[@]}"
echo ""

# 11. Array difference
echo "11. Array difference (elements in array1 but not in array2):"
declare -A array2_map
difference=()

# Create map of array2
for element in "\${array2[@]}"; do
    array2_map["$element"]=1
done

# Check array1 against map
for element in "\${array1[@]}"; do
    if [[ ! -v array2_map["$element"] ]]; then
        difference+=("$element")
    fi
done

echo "  Array1: \${array1[@]}"
echo "  Array2: \${array2[@]}"
echo "  Difference (A - B): \${difference[@]}"
echo ""

# 12. Transforming arrays
echo "12. Transforming arrays:"
numbers=(1 2 3 4 5)
echo "  Original numbers: \${numbers[@]}"

# Square each number
squares=()
for num in "\${numbers[@]}"; do
    squares+=($((num * num)))
done
echo "  Squares: \${squares[@]}"

# Convert to uppercase
words=("apple" "banana" "cherry")
uppercase_words=()
for word in "\${words[@]}"; do
    uppercase_words+=("\${word^^}")
done
echo "  Uppercase: \${uppercase_words[@]}"
echo ""

# 13. Filtering arrays
echo "13. Filtering arrays:"
mixed_numbers=(1 2 3 4 5 6 7 8 9 10)
even_numbers=()

for num in "\${mixed_numbers[@]}"; do
    if (( num % 2 == 0 )); then
        even_numbers+=("$num")
    fi
done

echo "  All numbers: \${mixed_numbers[@]}"
echo "  Even numbers only: \${even_numbers[@]}"
echo ""

# 14. Chunking arrays
echo "14. Chunking arrays (split into smaller arrays):"
big_array=(1 2 3 4 5 6 7 8 9 10 11 12)
chunk_size=3
chunks=()

for ((i=0; i<\${#big_array[@]}; i+=chunk_size)); do
    chunks+=("\${big_array[@]:i:chunk_size}")
done

echo "  Big array: \${big_array[@]}"
echo "  Chunk size: $chunk_size"
echo "  Chunks:"
for ((i=0; i<\${#chunks[@]}; i++)); do
    echo "    Chunk $((i+1)): \${chunks[i]}"
done
echo ""

# 15. Joining arrays
echo "15. Joining arrays into strings:"
array_to_join=("apple" "banana" "cherry")

# Join with comma
joined_comma=$(IFS=,; echo "\${array_to_join[*]}")
echo "  Joined with comma: $joined_comma"

# Join with newline
joined_newline=$(printf "%s\\n" "\${array_to_join[@]}")
echo "  Joined with newline:"
echo "$joined_newline"

# Join with custom separator
function join_by {
    local IFS="$1"
    shift
    echo "$*"
}
joined_custom=$(join_by ' - ' "\${array_to_join[@]}")
echo "  Joined with ' - ': $joined_custom"
echo ""

echo "=== Array Operations Summary ==="
echo "• Use mapfile for reading files into arrays"
echo "• Use parameter expansion for slicing: \\\${array[@]:start:length}"
echo "• Use associative arrays for efficient lookups and counting"
echo "• Always quote array expansions: \\"\\\${array[@]}\\""
echo "• Consider performance for large arrays (use external tools)"`,t=`#!/bin/bash
# Complete Array Management System

echo "=== Professional Array Management System ==="
echo ""

# Configuration
declare -A CONFIG
CONFIG=(
    ["MAX_ITEMS"]=100
    ["LOG_LEVEL"]="INFO"
    ["DATA_DIR"]="/tmp/array_data"
    ["BACKUP_ENABLED"]="true"
)

# Function to display array in formatted way
display_array() {
    local array_name="$1"
    declare -n arr_ref="$2"
    local array_type="$3"
    
    echo "=== $array_name ($array_type) ==="
    
    if [[ \${#arr_ref[@]} -eq 0 ]]; then
        echo "  [Empty array]"
        echo ""
        return
    fi
    
    case $array_type in
        "indexed")
            echo "  Elements: \${#arr_ref[@]}"
            echo "  Indices: \${!arr_ref[@]}"
            echo ""
            echo "  Values:"
            for index in "\${!arr_ref[@]}"; do
                printf "    [%d] = %s\\n" "$index" "\${arr_ref[$index]}"
            done
            ;;
        "associative")
            echo "  Elements: \${#arr_ref[@]}"
            echo ""
            echo "  Key-Value Pairs:"
            local max_key_len=0
            for key in "\${!arr_ref[@]}"; do
                if [[ \${#key} -gt $max_key_len ]]; then
                    max_key_len=\${#key}
                fi
            done
            
            for key in $(echo "\${!arr_ref[@]}" | tr ' ' '\\n' | sort); do
                printf "    %-\${max_key_len}s = %s\\n" "$key" "\${arr_ref[$key]}"
            done
            ;;
    esac
    echo ""
}

# Function to validate array operations
validate_array_operation() {
    local operation="$1"
    local array_name="$2"
    declare -n arr_ref="$3"
    
    case $operation in
        "add"|"update")
            if [[ \${#arr_ref[@]} -ge \${CONFIG[MAX_ITEMS]} ]]; then
                echo "ERROR: Cannot $operation. Maximum items (\${CONFIG[MAX_ITEMS]}) reached." >&2
                return 1
            fi
            ;;
        "get")
            if [[ \${#arr_ref[@]} -eq 0 ]]; then
                echo "ERROR: Array is empty." >&2
                return 1
            fi
            ;;
    esac
    return 0
}

# Function to backup array state
backup_array() {
    local array_name="$1"
    declare -n arr_ref="$2"
    local backup_file="\${CONFIG[DATA_DIR]}/backup_\${array_name}_$(date +%Y%m%d_%H%M%S).txt"
    
    if [[ "\${CONFIG[BACKUP_ENABLED]}" != "true" ]]; then
        return 0
    fi
    
    mkdir -p "\${CONFIG[DATA_DIR]}"
    
    echo "# Backup of $array_name at $(date)" > "$backup_file"
    echo "# Type: \${#arr_ref[@]} elements" >> "$backup_file"
    
    for key in "\${!arr_ref[@]}"; do
        echo "$key=\${arr_ref[$key]}" >> "$backup_file"
    done
    
    echo "  Backup saved to: $backup_file"
}

# Student Management System using arrays
main() {
    echo "Initializing Student Management System..."
    echo ""
    
    # Create necessary directories
    mkdir -p "\${CONFIG[DATA_DIR]}"
    
    # 1. Indexed array for student roll numbers in order
    echo "1. Creating indexed array for student roll numbers..."
    declare -a student_roll_numbers=()
    
    # Add students
    student_roll_numbers+=("S001")
    student_roll_numbers+=("S002")
    student_roll_numbers+=("S003")
    student_roll_numbers+=("S004")
    
    display_array "Student Roll Numbers" student_roll_numbers "indexed"
    backup_array "student_roll_numbers" student_roll_numbers
    
    # 2. Associative array for student details
    echo "2. Creating associative arrays for student details..."
    
    declare -A student_s001
    student_s001=(
        ["roll_no"]="S001"
        ["name"]="Swadeep Das"
        ["age"]=22
        ["city"]="Barrackpore"
        ["course"]="Computer Science"
        ["grades"]="A,B+,A-,B"
    )
    
    declare -A student_s002
    student_s002=(
        ["roll_no"]="S002"
        ["name"]="Tuhina Roy"
        ["age"]=21
        ["city"]="Shyamnagar"
        ["course"]="Information Technology"
        ["grades"]="A,A,B+,A-"
    )
    
    declare -A student_s003
    student_s003=(
        ["roll_no"]="S003"
        ["name"]="Abhronila Sen"
        ["age"]=22
        ["city"]="Ichapur"
        ["course"]="Electronics"
        ["grades"]="B+,A-,B,A"
    )
    
    declare -A student_s004
    student_s004=(
        ["roll_no"]="S004"
        ["name"]="Debangshu Ghosh"
        ["age"]=23
        ["city"]="Naihati"
        ["course"]="Mechanical"
        ["grades"]="A,A,A,B+"
    )
    
    # Display student details
    for student_ref in student_s001 student_s002 student_s003 student_s004; do
        declare -n student=$student_ref
        display_array "Student: \${student["name"]}" student "associative"
    done
    
    # 3. Array of student references (simulating array of objects)
    echo "3. Creating array of student references..."
    declare -a all_students=("student_s001" "student_s002" "student_s003" "student_s004")
    
    # 4. Operations on the student database
    echo "4. Performing operations on student database..."
    echo ""
    
    # Operation 1: Find student by roll number
    echo "Operation 1: Find student by roll number"
    search_roll="S002"
    found=false
    
    for student_ref in "\${all_students[@]}"; do
        declare -n student=$student_ref
        if [[ "\${student["roll_no"]}" == "$search_roll" ]]; then
            echo "  Found: \${student["name"]} from \${student["city"]}"
            found=true
            break
        fi
    done
    
    if [[ $found == false ]]; then
        echo "  Student with roll number $search_roll not found"
    fi
    echo ""
    
    # Operation 2: Calculate average age
    echo "Operation 2: Calculate statistics"
    total_age=0
    student_count=0
    cities=()
    
    for student_ref in "\${all_students[@]}"; do
        declare -n student=$student_ref
        total_age=$((total_age + student["age"]))
        student_count=$((student_count + 1))
        cities+=("\${student["city"]}")
    done
    
    average_age=$((total_age / student_count))
    echo "  Total students: $student_count"
    echo "  Average age: $average_age"
    echo "  Cities: \${cities[@]}"
    echo ""
    
    # Operation 3: Group by course
    echo "Operation 3: Group students by course"
    declare -A course_groups
    
    for student_ref in "\${all_students[@]}"; do
        declare -n student=$student_ref
        course="\${student["course"]}"
        
        if [[ -v course_groups["$course"] ]]; then
            course_groups["$course"]="\${course_groups["$course"]}, \${student["name"]}"
        else
            course_groups["$course"]="\${student["name"]}"
        fi
    done
    
    echo "  Course distribution:"
    for course in "\${!course_groups[@]}"; do
        echo "    $course: \${course_groups[$course]}"
    done
    echo ""
    
    # Operation 4: Parse and analyze grades
    echo "Operation 4: Grade analysis"
    declare -A grade_points=(
        ["A"]=4.0 ["A-"]=3.7 ["B+"]=3.3 ["B"]=3.0
        ["B-"]=2.7 ["C+"]=2.3 ["C"]=2.0 ["D"]=1.0 ["F"]=0.0
    )
    
    for student_ref in "\${all_students[@]}"; do
        declare -n student=$student_ref
        grades_str="\${student["grades"]}"
        
        # Convert comma-separated grades to array
        IFS=',' read -ra grades <<< "$grades_str"
        
        total_points=0
        grade_count=0
        
        for grade in "\${grades[@]}"; do
            grade_trimmed=\${grade// /}  # Remove spaces
            if [[ -v grade_points["$grade_trimmed"] ]]; then
                # Use bc for floating point arithmetic
                total_points=$(echo "$total_points + \${grade_points[$grade_trimmed]}" | bc)
                grade_count=$((grade_count + 1))
            fi
        done
        
        if [[ $grade_count -gt 0 ]]; then
            gpa=$(echo "scale=2; $total_points / $grade_count" | bc)
            student["gpa"]=$gpa
            echo "  \${student["name"]}: GPA = $gpa"
        fi
    done
    echo ""
    
    # 5. Export data to files
    echo "5. Exporting data to files..."
    
    # Export student list
    student_list_file="\${CONFIG[DATA_DIR]}/student_list.csv"
    echo "Roll No,Name,Age,City,Course,GPA" > "$student_list_file"
    
    for student_ref in "\${all_students[@]}"; do
        declare -n student=$student_ref
        echo "\${student["roll_no"]},\${student["name"]},\${student["age"]},\${student["city"]},\${student["course"]},\${student["gpa"]:-N/A}" >> "$student_list_file"
    done
    
    echo "  Student list exported to: $student_list_file"
    
    # Export configuration
    config_file="\${CONFIG[DATA_DIR]}/system_config.txt"
    echo "# System Configuration" > "$config_file"
    echo "# Generated: $(date)" >> "$config_file"
    echo "" >> "$config_file"
    
    for key in "\${!CONFIG[@]}"; do
        echo "$key=\${CONFIG[$key]}" >> "$config_file"
    done
    
    echo "  Configuration exported to: $config_file"
    echo ""
    
    # 6. Performance metrics
    echo "6. Performance metrics:"
    echo "  Total indexed arrays: 2"
    echo "  Total associative arrays: 4"
    echo "  Total array elements: $(( \${#student_roll_numbers[@]} + \${#all_students[@]} ))"
    echo "  Memory usage (estimated): Small"
    echo ""
    
    # 7. Cleanup demonstration
    echo "7. Array cleanup demonstration:"
    
    # Create a temporary array
    declare -a temp_array=("temp1" "temp2" "temp3")
    echo "  Before cleanup - temp_array: \${temp_array[@]}"
    
    # Proper array cleanup
    unset temp_array
    echo "  After unset - temp_array: \${temp_array[@]:-array deleted}"
    echo ""
    
    # 8. Best practices summary
    echo "8. Best Practices Used in This System:"
    echo "  ✓ Used indexed arrays for ordered data (roll numbers)"
    echo "  ✓ Used associative arrays for structured data (student details)"
    echo "  ✓ Used declare -n for name references (simulating pointers)"
    echo "  ✓ Validated array operations before performing them"
    echo "  ✓ Implemented backup functionality"
    echo "  ✓ Exported data to persistent storage"
    echo "  ✓ Properly cleaned up temporary arrays"
    echo ""
    
    # 9. Interactive demonstration
    echo "9. Interactive array exploration:"
    echo "  Try these commands in your shell:"
    echo ""
    echo "  # View all arrays in the script"
    echo "  declare -p | grep -E '(student_|CONFIG)'"
    echo ""
    echo "  # Access specific student data"
    echo "  echo \\"Swadeep's city: \\\${student_s001[\\"city\\"]}\\""
    echo ""
    echo "  # Loop through all students"
    echo "  for student_ref in \\"\\\${all_students[@]}\\"; do"
    echo "    declare -n student=\\$student_ref"
    echo "    echo \\"\\\${student[\\"name\\"]} - \\\${student[\\"course\\"]}\\""
    echo "  done"
    echo ""
    
    echo "=== System Initialization Complete ==="
    echo "Total students managed: \${#all_students[@]}"
    echo "Data directory: \${CONFIG[DATA_DIR]}"
    echo "Backup enabled: \${CONFIG[BACKUP_ENABLED]}"
    echo ""
    
    # Cleanup temporary files
    rm -f /tmp/test_array.txt
}

# Run the main function
main

echo ""
echo "=== Array Management Tips ==="
echo "• Use indexed arrays when order matters"
echo "• Use associative arrays for key-value data"
echo "• Always quote array expansions"
echo "• Use declare -n for indirect references"
echo "• Implement backup for important array data"
echo "• Validate array bounds before operations"`,l=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto animate-[fadeInUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"mb-10 animate-[fadeInUp_0.8s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent",children:"Topic 6: Arrays in Bash"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Mastering indexed and associative arrays for data organization"})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("div",{children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Arrays in Bash allow you to store multiple values in a single variable. Bash supports two types of arrays: ",e.jsx("strong",{children:"indexed arrays"})," (numbered indices) and ",e.jsx("strong",{children:"associative arrays"})," (key-value pairs). Understanding arrays is essential for handling lists of data, configuration sets, and complex data structures in shell scripts."]})})]})})]}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-700",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Array Types Visualization"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 800 550",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead-indigo",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6366f1"})}),e.jsxs("linearGradient",{id:"indexedGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#4f46e5"}),e.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]}),e.jsxs("linearGradient",{id:"assocGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#10b981"})]}),e.jsxs("linearGradient",{id:"cellGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),e.jsx("stop",{offset:"100%",stopColor:"#fbbf24"})]})]}),e.jsx("rect",{x:"50",y:"30",width:"300",height:"50",rx:"8",fill:"url(#indexedGradient)"}),e.jsx("text",{x:"200",y:"60",textAnchor:"middle",fill:"white",className:"font-sans text-lg font-bold",children:"Indexed Array"}),e.jsx("text",{x:"200",y:"85",textAnchor:"middle",fill:"#c7d2fe",className:"font-sans text-xs",children:"Numbered indices starting from 0"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"70",y:"110",width:"60",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"100",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"0"}),e.jsx("text",{x:"100",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:'"Apple"'}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M100 150 L100 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"100",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"index"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"140",y:"110",width:"60",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"170",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"1"}),e.jsx("text",{x:"170",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:'"Banana"'}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"0.3s"})]}),e.jsx("path",{d:"M170 150 L170 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"170",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"index"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"210",y:"110",width:"60",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"240",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"2"}),e.jsx("text",{x:"240",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:'"Cherry"'}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"0.6s"})]}),e.jsx("path",{d:"M240 150 L240 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"240",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"index"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"280",y:"110",width:"60",height:"40",rx:"6",fill:"#6b7280"}),e.jsx("text",{x:"310",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"..."})]}),e.jsx("rect",{x:"450",y:"30",width:"300",height:"50",rx:"8",fill:"url(#assocGradient)"}),e.jsx("text",{x:"600",y:"60",textAnchor:"middle",fill:"white",className:"font-sans text-lg font-bold",children:"Associative Array"}),e.jsx("text",{x:"600",y:"85",textAnchor:"middle",fill:"#d1fae5",className:"font-sans text-xs",children:"String keys (like dictionaries)"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"470",y:"110",width:"100",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"520",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'"name"'}),e.jsx("text",{x:"520",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:'"Swadeep"'}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"0.9s"})]}),e.jsx("path",{d:"M520 150 L520 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"520",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"key"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"580",y:"110",width:"100",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"630",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'"age"'}),e.jsx("text",{x:"630",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:"22"}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"1.2s"})]}),e.jsx("path",{d:"M630 150 L630 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"630",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"key"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"690",y:"110",width:"100",height:"40",rx:"6",fill:"url(#cellGradient)"}),e.jsx("text",{x:"740",y:"135",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'"city"'}),e.jsx("text",{x:"740",y:"155",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:'"Barrackpore"'}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"1.5s"})]}),e.jsx("path",{d:"M740 150 L740 180",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-indigo)"}),e.jsx("text",{x:"740",y:"170",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-xs",children:"key"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"220",width:"250",height:"120",rx:"10",fill:"#1f2937"}),e.jsx("text",{x:"175",y:"250",textAnchor:"middle",fill:"#60a5fa",className:"font-sans text-sm font-bold",children:"Array Operations"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"70",y:"270",width:"80",height:"30",rx:"6",fill:"#3b82f6"}),e.jsx("text",{x:"110",y:"290",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Declare"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"160",y:"270",width:"80",height:"30",rx:"6",fill:"#3b82f6"}),e.jsx("text",{x:"200",y:"290",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Access"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"70",y:"310",width:"80",height:"30",rx:"6",fill:"#3b82f6"}),e.jsx("text",{x:"110",y:"330",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Loop"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"160",y:"310",width:"80",height:"30",rx:"6",fill:"#3b82f6"}),e.jsx("text",{x:"200",y:"330",textAnchor:"middle",fill:"white",className:"font-sans text-xs",children:"Modify"})]})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"330",y:"220",width:"420",height:"120",rx:"10",fill:"#1f2937"}),e.jsx("text",{x:"540",y:"250",textAnchor:"middle",fill:"#10b981",className:"font-sans text-sm font-bold",children:"Code Examples"}),e.jsx("text",{x:"340",y:"280",textAnchor:"start",fill:"#60a5fa",className:"font-sans text-xs font-mono",children:"# Indexed"}),e.jsx("text",{x:"340",y:"300",textAnchor:"start",fill:"#e5e7eb",className:"font-sans text-xs font-mono",children:'fruits=("Apple" "Banana" "Cherry")'}),e.jsx("text",{x:"340",y:"330",textAnchor:"start",fill:"#60a5fa",className:"font-sans text-xs font-mono",children:"# Associative"}),e.jsx("text",{x:"340",y:"350",textAnchor:"start",fill:"#e5e7eb",className:"font-sans text-xs font-mono",children:'declare -A person=([name]="Swadeep" [age]=22)'})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"380",width:"700",height:"140",rx:"10",fill:"#111827"}),e.jsx("text",{x:"400",y:"410",textAnchor:"middle",fill:"#f59e0b",className:"font-sans text-sm font-bold",children:"Memory Representation"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"80",y:"440",width:"60",height:"30",rx:"4",fill:"#374151"}),e.jsx("text",{x:"110",y:"460",textAnchor:"middle",fill:"#9ca3af",className:"font-sans text-xs",children:"0x1000"}),e.jsx("text",{x:"110",y:"480",textAnchor:"middle",fill:"#60a5fa",className:"font-sans text-xs",children:'"Apple"'})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"150",y:"440",width:"60",height:"30",rx:"4",fill:"#374151"}),e.jsx("text",{x:"180",y:"460",textAnchor:"middle",fill:"#9ca3af",className:"font-sans text-xs",children:"0x1008"}),e.jsx("text",{x:"180",y:"480",textAnchor:"middle",fill:"#60a5fa",className:"font-sans text-xs",children:'"Banana"'})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"220",y:"440",width:"60",height:"30",rx:"4",fill:"#374151"}),e.jsx("text",{x:"250",y:"460",textAnchor:"middle",fill:"#9ca3af",className:"font-sans text-xs",children:"0x1010"}),e.jsx("text",{x:"250",y:"480",textAnchor:"middle",fill:"#60a5fa",className:"font-sans text-xs",children:'"Cherry"'})]}),e.jsx("text",{x:"300",y:"460",textAnchor:"start",fill:"#9ca3af",className:"font-sans text-xs",children:"..."}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"340",y:"440",width:"80",height:"30",rx:"4",fill:"#374151"}),e.jsx("text",{x:"380",y:"460",textAnchor:"middle",fill:"#9ca3af",className:"font-sans text-xs",children:"Hash Table"}),e.jsx("text",{x:"380",y:"480",textAnchor:"middle",fill:"#10b981",className:"font-sans text-xs",children:'"name"→"Swadeep"'})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"430",y:"440",width:"80",height:"30",rx:"4",fill:"#374151"}),e.jsx("text",{x:"470",y:"460",textAnchor:"middle",fill:"#9ca3af",className:"font-sans text-xs",children:"Hash Table"}),e.jsx("text",{x:"470",y:"480",textAnchor:"middle",fill:"#10b981",className:"font-sans text-xs",children:'"age"→22'})]}),e.jsx("path",{d:"M290 455 L340 455",stroke:"#6b7280",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("text",{x:"315",y:"450",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Contiguous"}),e.jsx("path",{d:"M420 455 L470 455",stroke:"#6b7280",strokeWidth:"2",strokeDasharray:"5,5"}),e.jsx("text",{x:"445",y:"450",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Hash-based"})]}),e.jsx("rect",{x:"50",y:"530",width:"250",height:"40",rx:"6",fill:"#1f2937",fillOpacity:"0.8"}),e.jsx("text",{x:"60",y:"550",fill:"#6366f1",className:"font-sans text-xs",children:"Indexed: Numbered, ordered"}),e.jsx("text",{x:"60",y:"565",fill:"#10b981",className:"font-sans text-xs",children:"Associative: Key-value, unordered"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700",children:[e.jsxs("h3",{className:"font-bold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Indexed Arrays"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Numbered indices starting from 0. Perfect for ordered lists, sequences, and when you need to preserve order."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700",children:[e.jsxs("h3",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),"Associative Arrays"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"String keys (like dictionaries). Ideal for configuration data, properties, and when you need named access."})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Array Types & Operations"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700",children:[e.jsx("h3",{className:"font-bold text-xl text-indigo-600 dark:text-indigo-400 mb-3",children:"Indexed Arrays (Numbered)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Indexed arrays use numeric indices starting from 0. They're perfect for ordered collections where position matters, like lists of files, commands in sequence, or results from command output."}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-indigo-800 dark:text-indigo-300 font-semibold",children:"Key Characteristics"}),e.jsxs("div",{className:"text-indigo-700 dark:text-indigo-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsx("span",{children:"Indices: 0, 1, 2, 3, ..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsx("span",{children:"Elements stored in insertion order"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsxs("span",{children:["Automatically created when you assign to a variable with ",e.jsx("code",{children:"()"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-500",children:"•"}),e.jsx("span",{children:"Can have sparse indices (gaps)"})]})]})]})]})}),e.jsx(r,{fileModule:n,title:"Indexed Array Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700",children:[e.jsx("h3",{className:"font-bold text-xl text-emerald-600 dark:text-emerald-400 mb-3",children:"Associative Arrays (Key-Value)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Associative arrays use string keys instead of numeric indices. They behave like dictionaries or hash maps in other languages. Must be explicitly declared with ",e.jsx("code",{children:"declare -A"}),"."]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 dark:border-emerald-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-800 dark:text-emerald-300 font-semibold",children:"When to Use Associative Arrays"}),e.jsxs("div",{className:"text-emerald-700 dark:text-emerald-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Configuration data with named parameters"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Counting occurrences (word frequencies)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Lookup tables and mappings"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Properties of objects (user data, settings)"})]})]})]})]})}),e.jsx(r,{fileModule:a,title:"Associative Array Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700",children:[e.jsx("h3",{className:"font-bold text-xl text-amber-600 dark:text-amber-400 mb-3",children:"Common Array Operations"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:"Both array types share common operations but with different syntax for accessing elements. Mastering these operations is key to effective array usage."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-amber-700 dark:text-amber-300 mb-2",children:"Indexed Array Operations"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsx("code",{children:"arr=(a b c)"})," - Create"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsx("code",{children:"${arr[0]}"})," - Access element"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsx("code",{children:"${#arr[@]}"})," - Get length"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"▶"}),e.jsx("code",{children:"arr+=(d e)"})," - Append"]})]})]}),e.jsxs("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2",children:"Associative Array Operations"}),e.jsxs("ul",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"▶"}),e.jsx("code",{children:"declare -A arr"})," - Create"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"▶"}),e.jsx("code",{children:"${arr[key]}"})," - Access element"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"▶"}),e.jsx("code",{children:"${!arr[@]}"})," - Get keys"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"▶"}),e.jsx("code",{children:"arr[key]=value"})," - Set value"]})]})]})]}),e.jsx(r,{fileModule:s,title:"Array Operations Examples",highlightLines:[1,3,5,7,9,11,13,15,17,19]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Real-World Scenarios & Student Projects"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})}),"Swadeep's Student Management System"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Swadeep from Barrackpore is building a script to manage student records for his college project. He needs to handle multiple students with different attributes."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"I"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Indexed Array:"})," List of student names in roll number order"]}),e.jsx("code",{className:"text-xs bg-indigo-100 dark:bg-indigo-900 p-1 rounded block mt-1",children:'students=("Swadeep" "Tuhina" "Abhronila" "Debangshu")'})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"A"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Associative Array:"})," Student details with named fields"]}),e.jsx("code",{className:"text-xs bg-emerald-100 dark:bg-emerald-900 p-1 rounded block mt-1",children:'declare -A swadeep=([name]="Swadeep" [age]=22 [city]="Barrackpore")'})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"2D"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Array of Arrays:"})," Multiple students with same structure"]}),e.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900 p-1 rounded block mt-1",children:"# Using indexed array of associative arrays"})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Tuhina's Server Monitoring Dashboard"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Tuhina from Shyamnagar is creating a monitoring script that collects and displays statistics from multiple servers."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"!"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Problem:"})," Hardcoded server names in multiple places"]}),e.jsx("code",{className:"text-xs bg-red-100 dark:bg-red-900 p-1 rounded block mt-1",children:`# Hard to maintain
                                                    check_server1() { ... }
                                                    check_server2() { ... }
                                                    check_server3() { ... }`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"✓"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Solution:"})," Array-based server configuration"]}),e.jsx("code",{className:"text-xs bg-green-100 dark:bg-green-900 p-1 rounded block mt-1",children:`servers=("web1" "web2" "db1" "cache1")
                                                for server in "\${servers[@]}"; do
                                                    check_server "$server"
                                                done`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"K"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Associative Array:"})," Server configuration with keys"]}),e.jsx("code",{className:"text-xs bg-purple-100 dark:bg-purple-900 p-1 rounded block mt-1",children:'declare -A server_config=([web1]="192.168.1.10" [web2]="192.168.1.11")'})]})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:t,title:"Complete Array Management System",highlightLines:[1,3,5,7,9,11,13,15,17,19,21]})})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Common Array Pitfalls & Solutions"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 1: Forgetting declare -A for Associative Arrays"}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:["Associative arrays MUST be declared with ",e.jsx("code",{children:"declare -A"}),". Without it, bash treats them as indexed arrays."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Wrong"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`#!/bin/bash
# Missing declare -A
person["name"]="Swadeep"
person["age"]=22

echo \${person["name"]}  # Might work but unpredictable
echo \${person["age"]}   # Could be wrong!`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Correct"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`#!/bin/bash
# Proper declaration
declare -A person
person["name"]="Swadeep"
person["age"]=22

echo \${person["name"]}  # Correct: Swadeep
echo \${person["age"]}   # Correct: 22`})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 2: Array Index Starting at 1 (Not 0)"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Bash arrays start at index 0, but many beginners assume they start at 1, leading to off-by-one errors."}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-800 dark:text-yellow-300 font-semibold",children:"Common Mistake"}),e.jsx("code",{className:"text-yellow-700 dark:text-yellow-400 text-sm mt-1 block",children:`fruits=("Apple" "Banana" "Cherry")

# WRONG: Trying to get "Apple" with index 1
echo "First fruit: \${fruits[1]}"  # Output: Banana (not Apple!)

# CORRECT: Index 0 for first element
echo "First fruit: \${fruits[0]}"  # Output: Apple`})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 3: Quoting Array Elements Incorrectly"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Forgetting to quote array expansions can cause word splitting and globbing issues, especially with filenames or strings with spaces."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Dangerous"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`files=("my document.txt" "another file.pdf")

                                            # WRONG: No quotes - word splitting occurs
                                            for file in \${files[@]}; do
                                                echo "Processing: $file"
                                            done
                                            # Would try to process 4 files: my, document.txt, another, file.pdf`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Safe"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`files=("my document.txt" "another file.pdf")

                                                # CORRECT: Always quote array expansions
                                                for file in "\${files[@]}"; do
                                                    echo "Processing: $file"
                                                done
                                                # Correctly processes 2 files with spaces`})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-6 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Best Practices & Performance Tips"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Array Usage Guidelines"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Always use ",e.jsxs("code",{children:['"${array[@]}','"']})," for iteration"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use indexed arrays for ordered lists"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"Use associative arrays for key-value data"})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Performance Considerations"}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Indexed Array Access"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-500 h-2 rounded-full w-32"})}),e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400",children:"Fast"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Associative Array Access"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-400 h-2 rounded-full w-24"})}),e.jsx("span",{className:"text-emerald-500 dark:text-emerald-300",children:"Medium"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Large Array Iteration"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-300 h-2 rounded-full w-20"})}),e.jsx("span",{className:"text-emerald-400 dark:text-emerald-200",children:"Slow"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:"Tip: For large datasets, consider external tools like awk or jq"})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl shadow-lg p-6 border border-violet-200 dark:border-violet-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Array Essentials Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"1"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"declare -A"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Always use for associative arrays"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"2"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Index 0"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Arrays start at 0, not 1"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"3"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Quote Expansions"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[e.jsx("code",{children:'"${array[@]}"'})," always"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"4"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Choose Right Type"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Indexed for order, associative for keys"})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-amber-600 dark:text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Exercises"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Think about..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Why would Abhronila, managing a library database in Ichapur, choose associative arrays over indexed arrays for storing book information?"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Observe carefully..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["What happens when you create an associative array without ",e.jsx("code",{children:"declare -A"})," and then try to access elements by string keys? Try it with different bash versions."]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Try changing this..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Create a script that reads a CSV file into arrays. First use indexed arrays, then refactor to use associative arrays. Which is easier to maintain?"})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s]",children:e.jsx("div",{className:"bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Sukanta Hui • 27 years experience"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 dark:border-indigo-600 p-4 rounded-r-lg mb-4",children:e.jsxs("p",{className:"text-indigo-800 dark:text-indigo-300",children:[e.jsx("strong",{children:"Memory Aid:"})," Think of arrays like different types of storage.",e.jsx("strong",{children:"Indexed arrays"})," are like numbered lockers - you remember which locker (0, 1, 2) has your stuff.",e.jsx("strong",{children:"Associative arrays"}),' are like labeled drawers - you look for "socks" or "shirts" not drawer numbers. Remember: ',e.jsx("code",{children:"declare -A"})," is your label maker for associative arrays. Without it, bash thinks you're still using lockers!"]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Classroom Exercise"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Have students create both array types for the same data (student records). Compare accessing elements by index vs by key. Show how associative arrays make code more readable."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Insight"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"In production scripts, use arrays to avoid temporary files. Process command output directly into arrays instead of writing to disk. For configuration, associative arrays are much cleaner than multiple separate variables."})]})]})]})]})})})]}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-\\[fadeInUp_0\\.8s_ease-out\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.1s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.2s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.3s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.4s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.5s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.6s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.7s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.8s\\],
                    .animate-\\[fadeInUp_0\\.8s_ease-out_0\\.9s\\] {
                        animation: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `})]});export{l as default};

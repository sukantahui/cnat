import{j as e}from"./index-Do7ncMju.js";import{S as r}from"./ShellFileLoader-CfxYwE3z.js";import"./prism-B9ltoSp8.js";const n=`#!/bin/bash
# (( )) Arithmetic Examples

echo "=== (( )) Arithmetic Evaluation ==="
echo ""

# 1. Basic arithmetic
echo "1. Basic operations:"
a=10
b=3

(( sum = a + b ))
(( diff = a - b ))
(( product = a * b ))
(( quotient = a / b ))
(( remainder = a % b ))

echo "  $a + $b = $sum"
echo "  $a - $b = $diff"
echo "  $a * $b = $product"
echo "  $a / $b = $quotient  (integer division)"
echo "  $a % $b = $remainder"
echo ""

# 2. No $ needed for variables
echo "2. Automatic variable dereferencing:"
x=5
y=2
(( result = x * y + 10 ))
echo "  x * y + 10 = $result"
echo "  Note: No \\$ needed inside (( ))"
echo ""

# 3. C-style operators
echo "3. C-style compound assignment:"
counter=0
echo "  Initial: counter = $counter"

(( counter++ ))
echo "  After counter++: $counter"

(( counter += 5 ))
echo "  After counter += 5: $counter"

(( counter *= 2 ))
echo "  After counter *= 2: $counter"

(( counter-- ))
echo "  After counter--: $counter"
echo ""

# 4. Return status (true/false)
echo "4. Using as condition (exit status):"
num=10

if (( num > 5 )); then
    echo "  $num > 5 is true"
fi

if (( num % 2 == 0 )); then
    echo "  $num is even"
else
    echo "  $num is odd"
fi

# Check the actual exit status
(( num == 10 ))
echo "  Exit status of (( num == 10 )): $? (0=true)"
(( num == 5 ))
echo "  Exit status of (( num == 5 )): $? (1=false)"
echo ""

# 5. Multiple operations
echo "5. Multiple operations in one (( )):"
x=5
y=3
z=2

(( x += y, y *= z, z = x + y ))
echo "  After (( x += y, y *= z, z = x + y )):"
echo "  x = $x, y = $y, z = $z"
echo ""

# 6. Different bases
echo "6. Working with different bases:"
hex_num=0xFF
oct_num=077
bin_num=2#1010

(( dec_from_hex = hex_num ))
(( dec_from_oct = oct_num ))
(( dec_from_bin = bin_num ))

echo "  Hex 0xFF = $dec_from_hex decimal"
echo "  Oct 077 = $dec_from_oct decimal"
echo "  Binary 1010 = $dec_from_bin decimal"
echo ""

# 7. Complex expressions
echo "7. Complex expressions with parentheses:"
a=10
b=3
c=2

(( result = (a + b) * c - b / 2 ))
echo "  (a + b) * c - b / 2 = $result"
echo "  Calculation: (10 + 3) * 2 - 3 / 2 = 13 * 2 - 1 = 25"
echo ""

# 8. Comparison operators
echo "8. Comparison operators:"
x=10
y=20

echo "  Comparisons with (( )):"
echo "  $x == $y : $(( x == y ))"  # 0=false, 1=true
echo "  $x != $y : $(( x != y ))"
echo "  $x < $y  : $(( x < y ))"
echo "  $x > $y  : $(( x > y ))"
echo "  $x <= $y : $(( x <= y ))"
echo "  $x >= $y : $(( x >= y ))"
echo ""

# 9. Bitwise operations
echo "9. Bitwise operations:"
a=5    # 0101
b=3    # 0011

echo "  Bitwise operations on a=5 (0101), b=3 (0011):"
echo "  a & b (AND): $(( a & b ))  # 0101 & 0011 = 0001 (1)"
echo "  a | b (OR):  $(( a | b ))  # 0101 | 0011 = 0111 (7)"
echo "  a ^ b (XOR): $(( a ^ b ))  # 0101 ^ 0011 = 0110 (6)"
echo "  ~a (NOT):    $(( ~a ))     # ~0101 = ...11111010 (-6 in two's complement)"
echo "  a << 1:      $(( a << 1 )) # 0101 << 1 = 1010 (10)"
echo "  a >> 1:      $(( a >> 1 )) # 0101 >> 1 = 0010 (2)"
echo ""

# 10. Using with arrays
echo "10. Arithmetic with array indices:"
numbers=(10 20 30 40 50)

(( sum = numbers[0] + numbers[1] + numbers[2] ))
echo "  Sum of first three elements: $sum"

for (( i = 0; i < \${#numbers[@]}; i++ )); do
    (( numbers[i] *= 2 ))
done
echo "  After doubling all elements: \${numbers[@]}"
echo ""

echo "=== Key Points About (( )) ==="
echo "• No \\$ needed for variables"
echo "• Supports C-style operators (++, +=, etc.)"
echo "• Returns exit status (0 for true/non-zero, 1 for false/zero)"
echo "• Can be used directly in if statements"
echo "• Fastest arithmetic method in bash"
echo "• Bash-specific (not POSIX)"`,t=`#!/bin/bash
# let Command Examples

echo "=== let Command for Arithmetic ==="
echo ""

# 1. Basic let usage
echo "1. Basic let commands:"
a=10
b=3

let "sum = a + b"
echo "  let \\"sum = a + b\\": sum = $sum"

let "diff = a - b"
echo "  let \\"diff = a - b\\": diff = $diff"

let "product = a * b"
echo "  let \\"product = a * b\\": product = $product"

let "quotient = a / b"
echo "  let \\"quotient = a / b\\": quotient = $quotient"

let "remainder = a % b"
echo "  let \\"remainder = a % b\\": remainder = $remainder"
echo ""

# 2. Without quotes (spaces matter!)
echo "2. Without quotes (note spacing):"
x=5
y=2

let z=x+y      # No spaces around =
let "w = x + y"  # Spaces okay with quotes

echo "  let z=x+y: z = $z"
echo "  let \\"w = x + y\\": w = $w"
echo "  Note: Without quotes, no spaces allowed!"
echo ""

# 3. Multiple assignments
echo "3. Multiple assignments in one let:"
x=5
y=10
z=15

let "x += 5" "y *= 2" "z = x + y"
echo "  After let \\"x += 5\\" \\"y *= 2\\" \\"z = x + y\\":"
echo "  x = $x, y = $y, z = $z"
echo ""

# 4. Increment/decrement
echo "4. Increment and decrement:"
counter=0
echo "  Initial: counter = $counter"

let "counter++"
echo "  After let \\"counter++\\": $counter"

let "counter += 5"
echo "  After let \\"counter += 5\\": $counter"

let "counter *= 2"
echo "  After let \\"counter *= 2\\": $counter"

let "counter--"
echo "  After let \\"counter--\\": $counter"
echo ""

# 5. Return value and error handling
echo "5. Return values and errors:"
num=10

# let returns 0 for success, 1 for failure (division by zero)
let "result = num / 2"
echo "  let \\"result = num / 2\\": result = $result, exit status: $?"

let "result = num / 0" 2>/dev/null
echo "  let \\"result = num / 0\\": exit status: $? (division by zero)"
echo ""

# 6. Different number bases
echo "6. Different number bases:"
let "dec = 42"
let "hex = 0x2A"
let "oct = 052"
let "bin = 2#101010"

echo "  Different representations of 42:"
echo "  Decimal: let \\"dec = 42\\": $dec"
echo "  Hex: let \\"hex = 0x2A\\": $hex"
echo "  Octal: let \\"oct = 052\\": $oct"
echo "  Binary: let \\"bin = 2#101010\\": $bin"
echo ""

# 7. Complex expressions
echo "7. Complex expressions:"
a=10
b=3
c=2

let "result = (a + b) * c - b / 2"
echo "  let \\"result = (a + b) * c - b / 2\\": $result"
echo "  Calculation: (10 + 3) * 2 - 3 / 2 = 13 * 2 - 1 = 25"
echo ""

# 8. Bitwise operations
echo "8. Bitwise operations:"
a=5    # 0101
b=3    # 0011

let "and = a & b"
let "or = a | b"
let "xor = a ^ b"
let "leftshift = a << 1"
let "rightshift = a >> 1"

echo "  Bitwise operations on a=5 (0101), b=3 (0011):"
echo "  a & b: $and"
echo "  a | b: $or"
echo "  a ^ b: $xor"
echo "  a << 1: $leftshift"
echo "  a >> 1: $rightshift"
echo ""

# 9. Comparison expressions
echo "9. Comparison expressions:"
x=10
y=20

let "is_equal = x == y"
let "not_equal = x != y"
let "less_than = x < y"
let "greater_than = x > y"

echo "  Comparisons (1=true, 0=false):"
echo "  $x == $y: $is_equal"
echo "  $x != $y: $not_equal"
echo "  $x < $y: $less_than"
echo "  $x > $y: $greater_than"
echo ""

# 10. Using let in conditionals
echo "10. Using let in conditionals:"
num=7

if let "num % 2 == 0"; then
    echo "  $num is even"
else
    echo "  $num is odd"
fi

if let "num > 5 && num < 10"; then
    echo "  $num is between 5 and 10"
fi
echo ""

# 11. Performance comparison
echo "11. Performance note:"
echo "  Creating test..."
time for (( i=0; i<10000; i++ )); do
    let "result = i * 2"
done > /dev/null

echo "  let is slightly slower than (( )) but more readable for assignments"
echo ""

# 12. Common errors
echo "12. Common errors with let:"
echo "  Error 1: Spaces without quotes"
echo "    let x = 5 + 3  # Error: 'let: =: syntax error: operand expected'"
echo ""
echo "  Error 2: Using \\$ unnecessarily"
echo "    let \\"result = \\$a + \\$b\\"  # Works but \\$ not needed"
echo "    let \\"result = a + b\\"      # Better"
echo ""
echo "  Error 3: Division by zero"
echo "    let \\"x = 5 / 0\\"  # Error: division by 0"
echo ""

echo "=== When to Use let ==="
echo "• When you want explicit assignment"
echo "• For complex expressions with quotes"
echo "• When you need multiple assignments in one statement"
echo "• When portability is important (works in older bash)"
echo "• For base conversion: let \\"hex = 0xFF\\""`,s=`#!/bin/bash
# expr Command Examples

echo "=== expr Command for Arithmetic ==="
echo ""
echo "IMPORTANT: expr requires spaces around operators!"
echo ""

# 1. Basic arithmetic (MUST have spaces!)
echo "1. Basic arithmetic operations:"
a=10
b=3

echo "  Addition:"
result=$(expr $a + $b)
echo "    expr $a + $b = $result"

echo ""
echo "  Subtraction:"
result=$(expr $a - $b)
echo "    expr $a - $b = $result"

echo ""
echo "  Multiplication (must escape *):"
result=$(expr $a \\* $b)
echo "    expr $a \\\\* $b = $result"

echo ""
echo "  Division:"
result=$(expr $a / $b)
echo "    expr $a / $b = $result (integer division)"

echo ""
echo "  Modulus:"
result=$(expr $a % $b)
echo "    expr $a % $b = $result"
echo ""

# 2. Common errors
echo "2. Common expr errors:"
echo "  No spaces (ERROR):"
echo "    expr 10+20  # Error: 'expr: syntax error'"
echo ""
echo "  Unescaped * (ERROR):"
echo "    expr 10 * 20  # Error: * expands to files"
echo ""
echo "  Correct way:"
echo "    expr 10 \\\\* 20  # Works: 200"
echo ""

# 3. Using parentheses
echo "3. Using parentheses (must escape them):"
a=10
b=3
c=2

result=$(expr \\( $a + $b \\) \\* $c)
echo "  expr \\\\( $a + $b \\\\) \\\\* $c = $result"
echo "  Calculation: (10 + 3) * 2 = 26"
echo ""

# 4. Comparison operations
echo "4. Comparison operations (return 1 for true, 0 for false):"
x=10
y=20

echo "  Comparisons:"
echo "    expr $x = $y : $(expr $x = $y)  # Equality"
echo "    expr $x != $y : $(expr $x != $y)  # Inequality"
echo "    expr $x \\\\> $y : $(expr $a \\> $b)  # Greater than"
echo "    expr $x \\\\< $y : $(expr $a \\< $b)  # Less than"
echo ""
echo "  Note: > and < must be escaped to avoid redirection!"
echo ""

# 5. String operations
echo "5. String operations with expr:"
str1="hello"
str2="world"
str3="hello"

echo "  String length:"
length=$(expr length "$str1")
echo "    expr length \\"$str1\\" = $length"
echo ""
echo "  Substring:"
substr=$(expr substr "$str1" 2 3)
echo "    expr substr \\"$str1\\" 2 3 = \\"$substr\\""
echo ""
echo "  String match (returns matched length or 0):"
match=$(expr "$str1" : "$str3")
echo "    expr \\"$str1\\" : \\"$str3\\" = $match"
echo ""
echo "  Index of character:"
index=$(expr index "$str1" "l")
echo "    expr index \\"$str1\\" \\"l\\" = $index (first 'l' at position $index)"
echo ""

# 6. Logical operations
echo "6. Logical operations:"
echo "  OR (|): Returns first non-zero, or 0 if both zero"
echo "    expr 0 \\\\| 5 = $(expr 0 \\| 5)"
echo "    expr 3 \\\\| 5 = $(expr 3 \\| 5)"
echo "    expr 0 \\\\| 0 = $(expr 0 \\| 0)"
echo ""
echo "  AND (&): Returns first if both non-zero, or 0"
echo "    expr 3 \\\\& 5 = $(expr 3 \\& 5)"
echo "    expr 0 \\\\& 5 = $(expr 0 \\& 5)"
echo ""

# 7. Working with command substitution
echo "7. Using expr with command substitution:"
file_count=$(ls -1 /tmp 2>/dev/null | wc -l)
max_files=50

echo "  Files in /tmp: $file_count"
echo "  Max allowed: $max_files"

if [ $(expr $file_count \\> $max_files) -eq 1 ]; then
    echo "  WARNING: Too many files!"
else
    echo "  OK: File count within limits"
fi
echo ""

# 8. Performance test
echo "8. Performance comparison (expr vs (( ))):"
echo "  Testing expr:"
time for i in $(seq 1 1000); do
    expr $i + 1 > /dev/null
done

echo ""
echo "  Note: expr spawns a new process for each calculation"
echo "        This makes it MUCH slower than (( )) or let"
echo ""

# 9. Portability example
echo "9. Portable script example:"
cat << 'EOF'
#!/bin/sh
# POSIX-compliant script using expr

calculate() {
    a=$1
    b=$2
    # Use expr for maximum portability
    sum=$(expr $a + $b)
    diff=$(expr $a - $b)
    product=$(expr $a \\* $b)
    
    echo "Sum: $sum"
    echo "Difference: $diff"
    echo "Product: $product"
}

calculate 10 3
EOF
echo ""

# 10. Error handling
echo "10. Error handling with expr:"
echo "  Division by zero:"
expr 10 / 0 2>/dev/null || echo "  Error caught: division by zero"
echo ""
echo "  Non-numeric argument:"
expr 10 + "abc" 2>/dev/null || echo "  Error caught: non-numeric argument"
echo ""

# 11. Real-world example: Calculating percentages
echo "11. Real-world example: Disk usage percentage"
total_space=1000
used_space=750

percentage=$(expr $used_space \\* 100 / $total_space)
echo "  Disk usage: $used_space / $total_space = $percentage%"
echo ""
echo "  Note: Integer division - multiply before dividing!"
echo ""

# 12. Tips and tricks
echo "12. expr tips and tricks:"
echo "  • Always use spaces around operators"
echo "  • Escape *, (, ), <, >, &, | with backslash"
echo "  • Use command substitution: \\$(expr ...)"
echo "  • Check exit status for errors"
echo "  • For complex math, consider bc or awk instead"
echo "  • Use for maximum portability across different shells"
echo ""

echo "=== When to Use expr ==="
echo "• Writing POSIX-compliant scripts (#!/bin/sh)"
echo "• Working on systems without bash"
echo "• When you need string operations along with arithmetic"
echo "• For maximum portability across Unix systems"
echo "• When performance is not critical"`,a=`#!/bin/bash
# Complete Calculator Script

echo "=== Professional Arithmetic Calculator ==="
echo ""

# Function to show usage
show_usage() {
    cat << EOF
Usage: $0 [OPTIONS] [VALUES]

A professional arithmetic calculator supporting multiple methods.

Options:
  -m METHOD    Arithmetic method: paren, let, expr, dollar (default: paren)
  -o OPERATION Operation: add, sub, mul, div, mod, pow, avg, perc
  -p PRECISION Decimal precision for floating point (default: 2)
  -v           Verbose output
  -h           Show this help

Examples:
  $0 -m paren -o add 10 20 30
  $0 -o mul 5 6
  $0 -o perc 25 80

Supported methods:
  paren    : (( )) - Fastest, bash only
  let      : let command - Good for assignments
  expr     : expr command - POSIX portable
  dollar   : \\$(( )) - Expression substitution
EOF
}

# Function for floating point calculations
float_calc() {
    local expression="$1"
    local scale="\${2:-2}"
    
    # Use bc for floating point
    result=$(echo "scale=$scale; $expression" | bc 2>/dev/null)
    
    if [ $? -ne 0 ]; then
        echo "Error in calculation" >&2
        return 1
    fi
    
    echo "$result"
}

# Function using (( ))
calculate_paren() {
    local operation="$1"
    shift
    local numbers=("$@")
    
    case $operation in
        add)
            local sum=0
            for num in "\${numbers[@]}"; do
                (( sum += num ))
            done
            echo "$sum"
            ;;
        sub)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                (( result -= numbers[i] ))
            done
            echo "$result"
            ;;
        mul)
            local product=1
            for num in "\${numbers[@]}"; do
                (( product *= num ))
            done
            echo "$product"
            ;;
        div)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: Division requires exactly 2 numbers" >&2
                return 1
            fi
            if [ \${numbers[1]} -eq 0 ]; then
                echo "Error: Division by zero" >&2
                return 1
            fi
            (( result = numbers[0] / numbers[1] ))
            echo "$result"
            ;;
        mod)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: Modulus requires exactly 2 numbers" >&2
                return 1
            fi
            (( result = numbers[0] % numbers[1] ))
            echo "$result"
            ;;
        pow)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: Power requires exactly 2 numbers" >&2
                return 1
            fi
            (( result = numbers[0] ** numbers[1] ))
            echo "$result"
            ;;
        *)
            echo "Unknown operation: $operation" >&2
            return 1
            ;;
    esac
}

# Function using let
calculate_let() {
    local operation="$1"
    shift
    local numbers=("$@")
    
    case $operation in
        add)
            local sum=0
            for num in "\${numbers[@]}"; do
                let "sum += num"
            done
            echo "$sum"
            ;;
        sub)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                let "result -= numbers[i]"
            done
            echo "$result"
            ;;
        mul)
            local product=1
            for num in "\${numbers[@]}"; do
                let "product *= num"
            done
            echo "$product"
            ;;
        div|mod|pow)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: $operation requires exactly 2 numbers" >&2
                return 1
            fi
            
            if [ "$operation" = "div" ] && [ \${numbers[1]} -eq 0 ]; then
                echo "Error: Division by zero" >&2
                return 1
            fi
            
            local op_symbol
            case $operation in
                div) op_symbol="/" ;;
                mod) op_symbol="%" ;;
                pow) op_symbol="**" ;;
            esac
            
            let "result = numbers[0] $op_symbol numbers[1]"
            echo "$result"
            ;;
        *)
            echo "Unknown operation: $operation" >&2
            return 1
            ;;
    esac
}

# Function using expr
calculate_expr() {
    local operation="$1"
    shift
    local numbers=("$@")
    
    case $operation in
        add)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                result=$(expr $result + \${numbers[i]})
            done
            echo "$result"
            ;;
        sub)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                result=$(expr $result - \${numbers[i]})
            done
            echo "$result"
            ;;
        mul)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                result=$(expr $result \\* \${numbers[i]})
            done
            echo "$result"
            ;;
        div|mod)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: $operation requires exactly 2 numbers" >&2
                return 1
            fi
            
            if [ "$operation" = "div" ] && [ \${numbers[1]} -eq 0 ]; then
                echo "Error: Division by zero" >&2
                return 1
            fi
            
            local op_symbol
            case $operation in
                div) op_symbol="/" ;;
                mod) op_symbol="%" ;;
            esac
            
            result=$(expr \${numbers[0]} $op_symbol \${numbers[1]})
            echo "$result"
            ;;
        *)
            echo "expr doesn't support $operation" >&2
            return 1
            ;;
    esac
}

# Function using $(( ))
calculate_dollar() {
    local operation="$1"
    shift
    local numbers=("$@")
    
    case $operation in
        add)
            local sum=0
            for num in "\${numbers[@]}"; do
                sum=$((sum + num))
            done
            echo "$sum"
            ;;
        sub)
            local result=\${numbers[0]}
            for (( i=1; i<\${#numbers[@]}; i++ )); do
                result=$((result - numbers[i]))
            done
            echo "$result"
            ;;
        mul)
            local product=1
            for num in "\${numbers[@]}"; do
                product=$((product * num))
            done
            echo "$product"
            ;;
        div|mod|pow)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: $operation requires exactly 2 numbers" >&2
                return 1
            fi
            
            if [ "$operation" = "div" ] && [ \${numbers[1]} -eq 0 ]; then
                echo "Error: Division by zero" >&2
                return 1
            fi
            
            local expression
            case $operation in
                div) expression="\${numbers[0]} / \${numbers[1]}" ;;
                mod) expression="\${numbers[0]} % \${numbers[1]}" ;;
                pow) expression="\${numbers[0]} ** \${numbers[1]}" ;;
            esac
            
            result=$((expression))
            echo "$result"
            ;;
        *)
            echo "Unknown operation: $operation" >&2
            return 1
            ;;
    esac
}

# Function for special operations
calculate_special() {
    local operation="$1"
    local method="$2"
    shift 2
    local numbers=("$@")
    
    case $operation in
        avg)
            # Calculate sum first
            local sum
            case $method in
                paren) sum=$(calculate_paren add "\${numbers[@]}") ;;
                let) sum=$(calculate_let add "\${numbers[@]}") ;;
                expr) sum=$(calculate_expr add "\${numbers[@]}") ;;
                dollar) sum=$(calculate_dollar add "\${numbers[@]}") ;;
            esac
            
            # Then divide by count
            local count=\${#numbers[@]}
            case $method in
                paren|let|dollar)
                    local avg=$((sum / count))
                    echo "$avg"
                    ;;
                expr)
                    local avg=$(expr $sum / $count)
                    echo "$avg"
                    ;;
            esac
            ;;
            
        perc)
            if [ \${#numbers[@]} -ne 2 ]; then
                echo "Error: Percentage requires exactly 2 numbers" >&2
                return 1
            fi
            
            # percentage = (value * 100) / total
            local value=\${numbers[0]}
            local total=\${numbers[1]}
            
            if [ $total -eq 0 ]; then
                echo "Error: Total cannot be zero" >&2
                return 1
            fi
            
            # Use floating point for percentage
            local percentage=$(float_calc "($value * 100) / $total" "$precision")
            echo "\${percentage}%"
            ;;
            
        *)
            echo "Unknown special operation: $operation" >&2
            return 1
            ;;
    esac
}

# Main execution
main() {
    # Default values
    local method="paren"
    local operation="add"
    local precision=2
    local verbose=false
    
    # Parse options
    while getopts "m:o:p:vh" opt; do
        case $opt in
            m) method="$OPTARG" ;;
            o) operation="$OPTARG" ;;
            p) precision="$OPTARG" ;;
            v) verbose=true ;;
            h) show_usage; return 0 ;;
            *) show_usage; return 1 ;;
        esac
    done
    
    shift $((OPTIND - 1))
    
    # Check if we have numbers
    if [ $# -eq 0 ]; then
        echo "Error: No numbers provided" >&2
        show_usage
        return 1
    fi
    
    local numbers=("$@")
    
    # Validate method
    case $method in
        paren|let|expr|dollar) ;;
        *)
            echo "Error: Unknown method '$method'" >&2
            show_usage
            return 1
            ;;
    esac
    
    # Show verbose info
    if $verbose; then
        echo "Method: $method"
        echo "Operation: $operation"
        echo "Numbers: \${numbers[@]}"
        echo "Count: \${#numbers[@]}"
        echo ""
    fi
    
    # Perform calculation
    local result
    local start_time end_time duration
    
    # Special operations
    if [[ "$operation" == "avg" || "$operation" == "perc" ]]; then
        start_time=$(date +%s%N)
        result=$(calculate_special "$operation" "$method" "\${numbers[@]}")
        end_time=$(date +%s%N)
    else
        # Regular operations
        start_time=$(date +%s%N)
        case $method in
            paren) result=$(calculate_paren "$operation" "\${numbers[@]}") ;;
            let) result=$(calculate_let "$operation" "\${numbers[@]}") ;;
            expr) result=$(calculate_expr "$operation" "\${numbers[@]}") ;;
            dollar) result=$(calculate_dollar "$operation" "\${numbers[@]}") ;;
        esac
        end_time=$(date +%s%N)
    fi
    
    duration=$(( (end_time - start_time) / 1000 ))  # microseconds
    
    # Check if calculation was successful
    if [ $? -ne 0 ]; then
        return 1
    fi
    
    # Display result
    echo ""
    echo "=== CALCULATION RESULT ==="
    echo "Method: $method"
    echo "Operation: $operation"
    echo "Input: \${numbers[@]}"
    echo "Result: $result"
    echo "Time: \${duration} microseconds"
    echo ""
    
    # Show equivalent in other methods
    if $verbose; then
        echo "=== EQUIVALENT IN OTHER METHODS ==="
        
        for alt_method in paren let expr dollar; do
            if [ "$alt_method" != "$method" ]; then
                case $alt_method in
                    paren)
                        if [[ "$operation" == "avg" || "$operation" == "perc" ]]; then
                            alt_result=$(calculate_special "$operation" "$alt_method" "\${numbers[@]}" 2>/dev/null)
                        else
                            alt_result=$(calculate_paren "$operation" "\${numbers[@]}" 2>/dev/null)
                        fi
                        ;;
                    let)
                        if [[ "$operation" == "avg" || "$operation" == "perc" ]]; then
                            alt_result=$(calculate_special "$operation" "$alt_method" "\${numbers[@]}" 2>/dev/null)
                        else
                            alt_result=$(calculate_let "$operation" "\${numbers[@]}" 2>/dev/null)
                        fi
                        ;;
                    expr)
                        if [[ "$operation" == "avg" || "$operation" == "perc" ]]; then
                            alt_result=$(calculate_special "$operation" "$alt_method" "\${numbers[@]}" 2>/dev/null)
                        else
                            alt_result=$(calculate_expr "$operation" "\${numbers[@]}" 2>/dev/null)
                        fi
                        ;;
                    dollar)
                        if [[ "$operation" == "avg" || "$operation" == "perc" ]]; then
                            alt_result=$(calculate_special "$operation" "$alt_method" "\${numbers[@]}" 2>/dev/null)
                        else
                            alt_result=$(calculate_dollar "$operation" "\${numbers[@]}" 2>/dev/null)
                        fi
                        ;;
                esac
                
                if [ $? -eq 0 ]; then
                    echo "  $alt_method: $alt_result"
                else
                    echo "  $alt_method: Not supported"
                fi
            fi
        done
    fi
    
    echo ""
    echo "=== TIPS ==="
    case $method in
        paren) echo "• (( )) is fastest but bash-specific" ;;
        let) echo "• let is good for complex assignments" ;;
        expr) echo "• expr is portable but slower" ;;
        dollar) echo "• \\$(( )) is good for inline calculations" ;;
    esac
}

# Run main function
main "$@"`,d=()=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 p-4 md:p-8 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto animate-[fadeInUp_0.8s_ease-out]",children:[e.jsxs("div",{className:"mb-10 animate-[fadeInUp_0.8s_ease-out_0.1s]",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent",children:"Topic 5: Arithmetic Operations"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mt-1",children:"Mastering (( )), let, expr, and $(( )) for shell math calculations"})]})]}),e.jsx("div",{className:"bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-yellow-300 dark:hover:border-yellow-700",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("div",{children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["Shell scripting provides multiple ways to perform arithmetic operations. Understanding the differences between ",e.jsx("code",{className:"text-sm bg-yellow-100 dark:bg-yellow-900 px-1 rounded",children:"(( ))"}),", ",e.jsx("code",{className:"text-sm bg-yellow-100 dark:bg-yellow-900 px-1 rounded",children:"let"}),", and ",e.jsx("code",{className:"text-sm bg-yellow-100 dark:bg-yellow-900 px-1 rounded",children:"expr"})," is crucial for writing efficient and portable scripts. Each method has its own use cases and limitations."]})})]})})]}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.2s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-yellow-300 dark:hover:border-yellow-700",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-yellow-600 dark:text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Arithmetic Methods Comparison"]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"mb-8",children:e.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 800 500",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsx("marker",{id:"arrowhead-yellow",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#f59e0b"})}),e.jsxs("linearGradient",{id:"doubleParenGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#d97706"}),e.jsx("stop",{offset:"100%",stopColor:"#f59e0b"})]}),e.jsxs("linearGradient",{id:"letGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#059669"}),e.jsx("stop",{offset:"100%",stopColor:"#10b981"})]}),e.jsxs("linearGradient",{id:"exprGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#7c3aed"}),e.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]}),e.jsxs("linearGradient",{id:"dollarParenGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#3b82f6"}),e.jsx("stop",{offset:"100%",stopColor:"#60a5fa"})]})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"50",y:"50",width:"250",height:"60",rx:"10",fill:"#4b5563",className:"transition-all duration-300 hover:stroke-gray-400 hover:stroke-2"}),e.jsx("text",{x:"175",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Arithmetic Expression"}),e.jsx("text",{x:"175",y:"105",textAnchor:"middle",fill:"#d1d5db",className:"font-sans text-xs",children:"a + b * c"}),e.jsx("animate",{attributeName:"opacity",values:"0.8;1;0.8",dur:"3s",repeatCount:"indefinite"})]}),e.jsx("path",{d:"M300 80 L350 80",stroke:"#6b7280",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsx("text",{x:"325",y:"70",textAnchor:"middle",fill:"#6b7280",className:"font-sans text-xs",children:"Choose method"}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"30",width:"180",height:"100",rx:"10",fill:"url(#doubleParenGradient)",className:"transition-all duration-300 hover:fill-amber-500"}),e.jsx("text",{x:"440",y:"55",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"(( ))"}),e.jsx("text",{x:"440",y:"75",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:"Arithmetic Evaluation"}),e.jsx("text",{x:"440",y:"95",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:"Bash Built-in"}),e.jsx("text",{x:"440",y:"115",textAnchor:"middle",fill:"#fef3c7",className:"font-sans text-xs",children:"No $ needed"}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"150",width:"180",height:"100",rx:"10",fill:"url(#letGradient)",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"440",y:"175",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"let"}),e.jsx("text",{x:"440",y:"195",textAnchor:"middle",fill:"#d1fae5",className:"font-sans text-xs",children:"Variable Assignment"}),e.jsx("text",{x:"440",y:"215",textAnchor:"middle",fill:"#d1fae5",className:"font-sans text-xs",children:"Bash Built-in"}),e.jsx("text",{x:"440",y:"235",textAnchor:"middle",fill:"#d1fae5",className:"font-sans text-xs",children:"Space-separated"}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"0.5s"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"270",width:"180",height:"100",rx:"10",fill:"url(#exprGradient)",className:"transition-all duration-300 hover:fill-purple-500"}),e.jsx("text",{x:"440",y:"295",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"expr"}),e.jsx("text",{x:"440",y:"315",textAnchor:"middle",fill:"#ede9fe",className:"font-sans text-xs",children:"External Command"}),e.jsx("text",{x:"440",y:"335",textAnchor:"middle",fill:"#ede9fe",className:"font-sans text-xs",children:"POSIX Compliant"}),e.jsx("text",{x:"440",y:"355",textAnchor:"middle",fill:"#ede9fe",className:"font-sans text-xs",children:"Spaces required"}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"1s"})]}),e.jsxs("g",{className:"cursor-pointer hover:scale-105 transition-transform duration-300",children:[e.jsx("rect",{x:"350",y:"390",width:"180",height:"80",rx:"10",fill:"url(#dollarParenGradient)",className:"transition-all duration-300 hover:fill-blue-500"}),e.jsx("text",{x:"440",y:"415",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"$(( ))"}),e.jsx("text",{x:"440",y:"435",textAnchor:"middle",fill:"#dbeafe",className:"font-sans text-xs",children:"Expression Substitution"}),e.jsx("text",{x:"440",y:"455",textAnchor:"middle",fill:"#dbeafe",className:"font-sans text-xs",children:"Returns value"}),e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite",begin:"1.5s"})]}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"550",y:"60",width:"220",height:"40",rx:"6",fill:"#f59e0b",className:"transition-all duration-300 hover:fill-amber-500"}),e.jsx("text",{x:"660",y:"85",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"(( result = a + b * c ))"})]}),e.jsx("path",{d:"M530 80 L550 80",stroke:"#f59e0b",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"550",y:"180",width:"220",height:"40",rx:"6",fill:"#10b981",className:"transition-all duration-300 hover:fill-emerald-500"}),e.jsx("text",{x:"660",y:"205",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:'let "result = a + b * c"'})]}),e.jsx("path",{d:"M530 200 L550 200",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"550",y:"300",width:"220",height:"40",rx:"6",fill:"#8b5cf6",className:"transition-all duration-300 hover:fill-purple-500"}),e.jsx("text",{x:"660",y:"325",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"result=$(expr $a + $b \\* $c)"})]}),e.jsx("path",{d:"M530 320 L550 320",stroke:"#8b5cf6",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"550",y:"410",width:"220",height:"40",rx:"6",fill:"#3b82f6",className:"transition-all duration-300 hover:fill-blue-500"}),e.jsx("text",{x:"660",y:"435",textAnchor:"middle",fill:"white",className:"font-sans text-sm",children:"result=$((a + b * c))"})]}),e.jsx("path",{d:"M530 430 L550 430",stroke:"#3b82f6",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsxs("g",{className:"cursor-pointer hover:opacity-90 transition-opacity duration-300",children:[e.jsx("rect",{x:"790",y:"220",width:"120",height:"60",rx:"10",fill:"#059669",className:"transition-all duration-300 hover:fill-emerald-600"}),e.jsx("text",{x:"850",y:"255",textAnchor:"middle",fill:"white",className:"font-sans text-sm font-bold",children:"Result"}),e.jsx("text",{x:"850",y:"275",textAnchor:"middle",fill:"#a7f3d0",className:"font-sans text-xs",children:"42"})]}),e.jsx("path",{d:"M770 80 L790 250",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsx("path",{d:"M770 200 L790 250",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsx("path",{d:"M770 320 L790 250",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsx("path",{d:"M770 430 L790 250",stroke:"#059669",strokeWidth:"2",markerEnd:"url(#arrowhead-yellow)"}),e.jsx("rect",{x:"50",y:"420",width:"250",height:"70",rx:"8",fill:"#1f2937",fillOpacity:"0.8"}),e.jsx("text",{x:"60",y:"440",fill:"#f59e0b",className:"font-sans text-xs font-bold",children:"(( ))"}),e.jsx("text",{x:"60",y:"455",fill:"#9ca3af",className:"font-sans text-xs",children:"Fastest, Bash only"}),e.jsx("text",{x:"60",y:"470",fill:"#10b981",className:"font-sans text-xs font-bold",children:"let"}),e.jsx("text",{x:"60",y:"485",fill:"#9ca3af",className:"font-sans text-xs",children:"Assignment focused"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-700",children:[e.jsxs("h3",{className:"font-bold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"(( )) Compound Command"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Bash built-in for arithmetic evaluation. Fastest method, supports C-style operations."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700",children:[e.jsxs("h3",{className:"font-bold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"let Command"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Bash built-in for variable assignment with arithmetic. Good for complex expressions."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsxs("h3",{className:"font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"})}),"expr Command"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"External POSIX command. Portable but slower. Requires spaces around operators."})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700",children:[e.jsxs("h3",{className:"font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),"$(( )) Expansion"]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Arithmetic expansion. Returns value, can be used in command substitution."})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.3s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),"Arithmetic Methods Deep Dive"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-700",children:[e.jsx("h3",{className:"font-bold text-xl text-amber-600 dark:text-amber-400 mb-3",children:"(( )) - Arithmetic Evaluation"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sm bg-amber-100 dark:bg-amber-900 px-1 rounded",children:"(( ))"})," construct is a ",e.jsx("strong",{children:"bash built-in compound command"})," that evaluates arithmetic expressions. It's the fastest method and supports C-style syntax with automatic variable dereferencing (no $ needed)."]}),e.jsx("div",{className:"bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-amber-800 dark:text-amber-300 font-semibold",children:"Key Features"}),e.jsxs("div",{className:"text-amber-700 dark:text-amber-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"•"}),e.jsxs("span",{children:["No ",e.jsx("code",{children:"$"})," needed for variables: ",e.jsx("code",{children:"((a = b + c))"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"•"}),e.jsxs("span",{children:["Supports C-style operators: ",e.jsx("code",{children:"++"}),", ",e.jsx("code",{children:"+="}),", ",e.jsx("code",{children:"%="})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"•"}),e.jsx("span",{children:"Returns exit code: 0 for true (non-zero), 1 for false (zero)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-500",children:"•"}),e.jsxs("span",{children:["Can be used in conditionals: ",e.jsx("code",{children:"if (( a > b ))"})]})]})]})]})]})}),e.jsx(r,{fileModule:n,title:"(( )) Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700",children:[e.jsx("h3",{className:"font-bold text-xl text-emerald-600 dark:text-emerald-400 mb-3",children:"let - Variable Assignment"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:["The ",e.jsx("code",{className:"text-sm bg-emerald-100 dark:bg-emerald-900 px-1 rounded",children:"let"})," command is a ",e.jsx("strong",{children:"bash built-in"})," specifically designed for arithmetic variable assignment. It evaluates expressions and assigns results to variables."]}),e.jsx("div",{className:"bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 dark:border-emerald-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-emerald-800 dark:text-emerald-300 font-semibold",children:"When to Use let"}),e.jsxs("div",{className:"text-emerald-700 dark:text-emerald-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Multiple assignments in one statement"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"Complex expressions with quotes"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsx("span",{children:"When you need explicit assignment"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-500",children:"•"}),e.jsxs("span",{children:["Base conversion: ",e.jsx("code",{children:'let "hex = 0xFF"'})]})]})]})]})]})}),e.jsx(r,{fileModule:t,title:"let Command Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-700",children:[e.jsx("h3",{className:"font-bold text-xl text-purple-600 dark:text-purple-400 mb-3",children:"expr - Portable Arithmetic"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.jsx("code",{className:"text-sm bg-purple-100 dark:bg-purple-900 px-1 rounded",children:"expr"})," is an ",e.jsx("strong",{children:"external command"})," available on all POSIX systems. It's slower (spawns new process) but portable. Requires proper spacing and escaping of operators."]}),e.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-purple-800 dark:text-purple-300 font-semibold",children:"Important Rules for expr"}),e.jsxs("div",{className:"text-purple-700 dark:text-purple-400 text-sm mt-1 space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Spaces are required"})," around operators"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:["Special characters must be escaped: ",e.jsx("code",{children:"\\*"}),", ",e.jsx("code",{children:"\\("}),", ",e.jsx("code",{children:"\\)"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsx("span",{children:"Only integer arithmetic"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"}),e.jsxs("span",{children:["Use command substitution: ",e.jsx("code",{children:"$(expr 1 + 2)"})]})]})]})]})]})}),e.jsx(r,{fileModule:s,title:"expr Command Examples",highlightLines:[1,3,5,7,9,11,13,15,17]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s]",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-orange-600 dark:text-orange-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Real-World Scenarios & Student Projects"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Swadeep's Grade Calculator"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Swadeep from Barrackpore is creating a script to calculate student grades with different weights and rounding."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"("}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Using (( )):"})," For fast calculations and conditions"]}),e.jsx("code",{className:"text-xs bg-amber-100 dark:bg-amber-900 p-1 rounded block mt-1",children:"(( final_grade = (exam * 0.6) + (assignment * 0.4) ))"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"l"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Using let:"})," For multiple calculations in one line"]}),e.jsx("code",{className:"text-xs bg-emerald-100 dark:bg-emerald-900 p-1 rounded block mt-1",children:'let "total = math + science + english"'})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"$"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Using $(( )):"})," For inline calculations"]}),e.jsx("code",{className:"text-xs bg-blue-100 dark:bg-blue-900 p-1 rounded block mt-1",children:"average=$(( (score1 + score2 + score3) / 3 ))"})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/10 dark:to-blue-900/10 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800 transition-all duration-300 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700",children:[e.jsxs("h3",{className:"font-bold text-lg text-cyan-700 dark:text-cyan-400 mb-3 flex items-center gap-2",children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Tuhina's System Monitoring Script"]}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-4",children:"Tuhina from Shyamnagar is writing a system monitoring script that calculates percentages, rates, and thresholds."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"!"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Problem:"})," Integer division gives wrong percentage"]}),e.jsx("code",{className:"text-xs bg-red-100 dark:bg-red-900 p-1 rounded block mt-1",children:`# Wrong: 3/5 = 0
percentage=$(( (3 / 5) * 100 ))  # Result: 0`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"✓"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Solution:"})," Multiply before dividing"]}),e.jsx("code",{className:"text-xs bg-green-100 dark:bg-green-900 p-1 rounded block mt-1",children:`# Correct: 3*100/5 = 60
percentage=$(( (3 * 100) / 5 ))  # Result: 60`})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5",children:"e"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[e.jsx("strong",{children:"Using expr:"})," For portability in older systems"]}),e.jsx("code",{className:"text-xs bg-purple-100 dark:bg-purple-900 p-1 rounded block mt-1",children:"memory_used=$(expr $used * 100 / $total)"})]})]})]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsx(r,{fileModule:a,title:"Complete Calculator Script",highlightLines:[1,3,5,7,9,11,13,15,17,19,21]})})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.5s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 rounded-2xl shadow-lg p-6 border border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-red-600 dark:text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Common Arithmetic Pitfalls"]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 1: Integer Division"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Shell arithmetic only works with integers. Division truncates toward zero."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Wrong"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`# Expecting 66.67%
used=2
total=3
percent=$(( (used / total) * 100 ))  # Result: 0`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Correct"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`# Multiply before dividing
percent=$(( (used * 100) / total ))  # Result: 66

# Or use bc for floating point
percent=$(echo "scale=2; $used * 100 / $total" | bc)`})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 2: Missing Spaces in expr"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"expr requires spaces around operators. Missing spaces cause syntax errors."}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("svg",{className:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-yellow-800 dark:text-yellow-300 font-semibold",children:"Common expr Mistakes"}),e.jsx("code",{className:"text-yellow-700 dark:text-yellow-400 text-sm mt-1 block",children:`# WRONG: No spaces
expr 1+2      # Error: "1+2" not a valid expression
expr 2 * 3    # Error: * expands to files in directory

# CORRECT: Spaces and escaping
expr 1 + 2    # 3
expr 2 * 3   # 6 (escape *)
expr ( 2 + 3 ) * 4  # 20`})]})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-red-600 dark:text-red-400 mb-3",children:"Pitfall 3: Uninitialized Variables"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300 mb-3",children:"Using uninitialized variables in arithmetic causes errors or unexpected results."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-red-700 dark:text-red-300 mb-2",children:"Risky Code"}),e.jsx("code",{className:"text-red-700 dark:text-red-400 text-sm block",children:`#!/bin/bash
# Uninitialized variable
count=$((count + 1))  # Error if set -u is used
echo "Count: $count"  # Might be empty`})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-900/20 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-bold text-green-700 dark:text-green-300 mb-2",children:"Safe Code"}),e.jsx("code",{className:"text-green-700 dark:text-green-400 text-sm block",children:`#!/bin/bash
set -u  # Fail on uninitialized variables

# Initialize first
count=0
count=$((count + 1))  # Safe: count is initialized
echo "Count: $count"  # Output: 1`})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl shadow-lg p-6 border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Best Practices & Performance Tips"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Method Selection Guide"}),e.jsxs("ul",{className:"space-y-3",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"(( ))"})," for performance (bash scripts)"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"expr"})," for POSIX portability"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Use ",e.jsx("code",{children:"$(( ))"})," for inline value substitution"]})]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-md",children:[e.jsx("h3",{className:"font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3",children:"Performance Comparison"}),e.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"(( ))"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-500 h-2 rounded-full w-32"})}),e.jsx("span",{className:"text-emerald-600 dark:text-emerald-400",children:"Fastest"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"$(( ))"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-400 h-2 rounded-full w-28"})}),e.jsx("span",{className:"text-emerald-500 dark:text-emerald-300",children:"Fast"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"let"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-300 h-2 rounded-full w-24"})}),e.jsx("span",{className:"text-emerald-400 dark:text-emerald-200",children:"Medium"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"expr"}),e.jsx("div",{className:"w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2",children:e.jsx("div",{className:"bg-emerald-200 h-2 rounded-full w-16"})}),e.jsx("span",{className:"text-emerald-300 dark:text-emerald-100",children:"Slowest"})]})]})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.7s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl shadow-lg p-6 border border-violet-200 dark:border-violet-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-violet-600 dark:text-violet-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),"Arithmetic Operations Checklist"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"1"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Choose Method"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:[e.jsx("code",{children:"(( ))"})," for bash, ",e.jsx("code",{children:"expr"})," for POSIX"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"2"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Integer Division"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Multiply before dividing"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"3"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Initialize Variables"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Set before arithmetic operations"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700",children:[e.jsx("div",{className:"w-8 h-8 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 rounded-full flex items-center justify-center mb-3",children:"4"}),e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"expr Spacing"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Spaces around operators, escape *"})]})]})]})}),e.jsx("div",{className:"mb-12 animate-[fadeInUp_0.8s_ease-out_0.8s]",children:e.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl shadow-lg p-6 border border-amber-200 dark:border-amber-800 transition-all duration-300 hover:shadow-xl",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",children:[e.jsx("svg",{className:"w-6 h-6 text-amber-600 dark:text-amber-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Thinking Exercises"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Think about..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["Why would Abhronila, working on a script that needs to run on both modern and old servers in Ichapur, choose between ",e.jsx("code",{children:"(( ))"})," and ",e.jsx("code",{children:"expr"}),"?"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Observe carefully..."}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:["What happens when you use ",e.jsx("code",{children:'let "x = 5 / 2"'})," vs ",e.jsx("code",{children:"(( x = 5 / 2 ))"})," vs ",e.jsx("code",{children:"expr 5 / 2"}),"? Why are the results different?"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm",children:[e.jsx("p",{className:"text-amber-700 dark:text-amber-400 font-semibold mb-2",children:"Try changing this..."}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Write a script that calculates the percentage increase between two numbers. Try it with integer division first, then fix it to show decimal places."})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.8s_ease-out_0.9s]",children:e.jsx("div",{className:"bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-2xl shadow-xl p-6 border border-slate-300 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:border-yellow-400 dark:hover:border-yellow-600",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})})}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs("div",{className:"flex justify-between items-start mb-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-gray-100",children:"Teacher's Note"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:"Sukanta Hui • 27 years experience"})]}),e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full",children:"sukantahui@codernaccotax.co.in"})]}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-4 rounded-r-lg mb-4",children:e.jsxs("p",{className:"text-yellow-800 dark:text-yellow-300",children:[e.jsx("strong",{children:"Memory Aid:"})," Think of arithmetic methods like different types of calculators.",e.jsx("code",{children:"(( ))"})," is your modern scientific calculator - fast and feature-rich.",e.jsx("code",{children:"let"})," is your pocket calculator - simple and straightforward.",e.jsx("code",{children:"expr"})," is an abacus - ancient but works everywhere.",e.jsx("code",{children:"$(( ))"})," is the calculator's display - shows you the result. Remember: Choose your tool based on where your script needs to run."]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Classroom Exercise"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Have students write the same calculation using all four methods. Time each method with a loop of 10,000 iterations to show performance differences."})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm",children:[e.jsx("h4",{className:"font-bold text-gray-800 dark:text-gray-200 mb-2",children:"Professional Insight"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In production scripts, use ",e.jsx("code",{children:"(( ))"})," for performance in bash-only environments. For floating-point calculations, pipe to ",e.jsx("code",{children:"bc"})," or use ",e.jsx("code",{children:"awk"}),". Always validate numeric input before arithmetic to prevent errors."]})]})]})]})]})})})]}),e.jsx("style",{jsx:!0,children:`
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
            `})]});export{d as default};

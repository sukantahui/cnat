import{j as e,b as o,bh as l}from"./vendor-react-core-CaA1o1Cx.js";import{J as d}from"./JavaFileLoader-BYsFDtcs.js";import{F as c}from"./FAQTemplate-D_90hN4m.js";import{P as m}from"./PlainTextPrint-yt10TRX1.js";import{T as h}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const u=`/**
 * ============================================================================
 * ICSE CLASS X COMPUTER APPLICATIONS - 10-YEAR BOARD PATTERN MASTER
 * ============================================================================
 * Educator: Sukanta Hui | Barrackpore, Kolkata
 * Institute: Coder & AccoTax
 * 
 * This class consolidates the top recurring program archetypes that have
 * appeared in CISCE ICSE Class 10 Board Examinations over the past 10 years:
 * 1. Slab-rate Commercial Class Design (Electric / Cinema / Book Fair)
 * 2. High-Yield String Handling (Piglatin Word Transformation)
 * 3. 1D Array Bubble Sort Algorithm (Ascending Numerical Order)
 * 4. Special Number Verification (Automorphic & Krishnamurthy/Special Number)
 * ============================================================================
 */

import java.util.Scanner;

public class BoardTenYearPatternMasterDemo {

    // ------------------------------------------------------------------------
    // ARCHETYPE 1: PIGLATIN STRING TRANSFORMATION (Repeated in 2015, 2018, 2023)
    // ------------------------------------------------------------------------
    public static String toPiglatin(String word) {
        word = word.trim().toUpperCase();
        int vowelIndex = -1;
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                vowelIndex = i;
                break;
            }
        }
        if (vowelIndex == -1) {
            return word + "AY";
        }
        return word.substring(vowelIndex) + word.substring(0, vowelIndex) + "AY";
    }

    // ------------------------------------------------------------------------
    // ARCHETYPE 2: BUBBLE SORT ON 1D NUMERIC ARRAY (Repeated in 2014, 2017, 2021)
    // ------------------------------------------------------------------------
    public static void bubbleSortAscending(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // ------------------------------------------------------------------------
    // ARCHETYPE 3: SPECIAL / KRISHNAMURTHY NUMBER CHECK (Repeated 2016, 2020, 2024)
    // Sum of factorials of each digit equals the number itself (e.g. 145 = 1! + 4! + 5!)
    // ------------------------------------------------------------------------
    public static boolean isSpecialNumber(int num) {
        int temp = num;
        int sumOfFactorials = 0;
        while (temp > 0) {
            int digit = temp % 10;
            // Compute factorial of digit
            int fact = 1;
            for (int f = 1; f <= digit; f++) {
                fact *= f;
            }
            sumOfFactorials += fact;
            temp /= 10;
        }
        return sumOfFactorials == num;
    }

    // ------------------------------------------------------------------------
    // ARCHETYPE 4: AUTOMORPHIC NUMBER CHECK (Repeated in 2019, 2022)
    // A number whose square ends in the number itself (e.g. 25^2 = 625 -> ends in 25)
    // ------------------------------------------------------------------------
    public static boolean isAutomorphic(int num) {
        long square = (long) num * num;
        int temp = num;
        long divisor = 1;
        while (temp > 0) {
            divisor *= 10;
            temp /= 10;
        }
        return (square % divisor) == num;
    }

    // ------------------------------------------------------------------------
    // MAIN DEMONSTRATION HARNESS
    // ------------------------------------------------------------------------
    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println(" ICSE CLASS X - 10-YEAR BOARD PATTERN HARNESS     ");
        System.out.println("==================================================");

        // 1. Test Piglatin
        String sampleWord = "TROUBLE";
        System.out.println("1. Piglatin Transformation:");
        System.out.println("   Original: " + sampleWord);
        System.out.println("   Piglatin: " + toPiglatin(sampleWord));

        // 2. Test Bubble Sort
        int[] scores = { 85, 42, 99, 12, 77, 56, 30, 91 };
        System.out.println("\\n2. Bubble Sort (Ascending):");
        System.out.print("   Before: ");
        for (int v : scores) System.out.print(v + " ");
        bubbleSortAscending(scores);
        System.out.print("\\n   After : ");
        for (int v : scores) System.out.print(v + " ");
        System.out.println();

        // 3. Test Special Number (145)
        int testNum1 = 145;
        System.out.println("\\n3. Krishnamurthy / Special Number Check:");
        System.out.println("   " + testNum1 + " is Special: " + isSpecialNumber(testNum1));

        // 4. Test Automorphic Number (25, 76)
        int testNum2 = 25;
        System.out.println("\\n4. Automorphic Number Check:");
        System.out.println("   " + testNum2 + " is Automorphic: " + isAutomorphic(testNum2) + " (Square = " + (testNum2 * testNum2) + ")");
        System.out.println("==================================================");
    }
}
`,p=`================================================================================
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS
MODULE 008_002: Selection Examination & Final ICSE Board Prep
TOPIC 1: Previous 10-Year CISCE Board Question Paper Solutions & Patterns
Educator: Sukanta Hui | Barrackpore, Kolkata
================================================================================

1. CISCE SECTION B PROGRAMMING BLUEPRINT (10-YEAR TREND)
--------------------------------------------------------------------------------
Every year, Section B offers 6 programming questions (15 marks each).
Candidates must attempt ANY FOUR questions (Total: 60 marks).

Recurring Question Archetypes:
--------------------------------------------------------------------------------
1. Question 3: Class Design & Encapsulation
   - Real-world entity with instance variables, constructor/accept(), calculate(), print().
   - Slab rates (Electricity, Taxi, Library fine, Book fair discount).
   
2. Question 4: 1D Numeric Array Processing
   - Binary Search (ascending/descending sorted array).
   - Bubble Sort or Selection Sort.
   - Frequency / Standard deviation / Parallel arrays.

3. Question 5: String Manipulation & Character Processing
   - Piglatin word transformation.
   - Capitalizing each word (Title Case).
   - Palindrome words / Longest word / Vowel counting.

4. Question 6: Method Overloading
   - Overloading mathematical series (sum of x^n / n).
   - Overloading geometric area/volume (Circle, Rectangle, Trapezium).
   - Overloading polygon drawing or number checks.

5. Question 7: Digit Extraction & Special Numbers
   - Armstrong, Krishnamurthy (Special), Tech, Automorphic, Neon, Disarium, Duck, Spy.

6. Question 8: 2D Matrices / Menu-Driven Applications
   - 4x4 matrix diagonals, row/col sum, symmetry test.
   - Switch-case menu driven calculator or utility.

2. HIGH-YIELD SPECIAL NUMBER CHECKS SUMMARY
--------------------------------------------------------------------------------
- Armstrong Number  : Sum of digits^total_digits == Number (e.g. 153 = 1^3 + 5^3 + 3^3)
- Krishnamurthy/Sp. : Sum of factorials of digits == Number (e.g. 145 = 1! + 4! + 5!)
- Tech Number       : (First_half + Second_half)^2 == Number (e.g. 3025: (30+25)^2 = 3025)
- Automorphic Number: (Number^2) ends in Number (e.g. 25^2 = 625 -> ends in 25)
- Neon Number       : Sum of digits of (Number^2) == Number (e.g. 9^2 = 81 -> 8+1 = 9)
- Disarium Number   : Sum of digit_i^position_i == Number (e.g. 135 = 1^1 + 3^2 + 5^3)
- Spy Number        : Sum of digits == Product of digits (e.g. 1124: 1+1+2+4 = 8, 1*1*2*4 = 8)
- Duck Number       : Contains at least one '0' and does NOT start with '0' (e.g. 402)

3. 15-MARK SECTION B SCORING FORMULA
--------------------------------------------------------------------------------
[✓] Class & Variable Declaration : 3 Marks
[✓] Core Algorithmic Logic       : 7 Marks
[✓] Clean Output & User Prompt   : 2 Marks
[✓] Variable Description Table   : 3 Marks
TOTAL                            : 15 Marks

================================================================================
End of Printable Note
================================================================================
`,x=[{question:"What are the most frequently recurring programming archetypes in ICSE Class X Section B?",shortAnswer:"The top 5 recurring archetypes are: Class Design with tariff slabs, 1D Array Search/Sort, String manipulation (Piglatin/Palindrome), Function Overloading, and Digit-Extraction Special Numbers.",explanation:"CISCE maintains a well-defined syllabus blueprint. Across 2014-2024, Question 3 has almost always been Class Design (Encapsulation), Question 4 is Array Search or Sort (Binary Search or Bubble Sort), Question 5 is String processing (Piglatin, Title Case, or Vowel extraction), Question 6 is Method Overloading (Series or Shapes), and Question 7/8 is Special Number or Matrix operations.",hint:"Prepare 1 program from each of these 5 categories to guarantee solving 4 out of 6 questions.",level:"basic",codeExample:"// Common structure: Class + 3 methods (input, calc, display)"},{question:"How does the Piglatin string algorithm work in ICSE board questions?",shortAnswer:"Find the index of the first vowel ('A','E','I','O','U'). Slice the string from that vowel to the end, append the prefix before that vowel, and add 'AY'.",explanation:"If input is 'LONDON', the first vowel 'O' is at index 1. Substring from vowel: 'ONDON', prefix: 'L'. Result = 'ONDON' + 'L' + 'AY' = 'ONDONLAY'. If the word starts with a vowel (e.g., 'APPLE'), first vowel is index 0, so result is 'APPLEAY'.",hint:"Always use .toUpperCase() before scanning to handle lowercase inputs safely.",level:"intermediate",codeExample:`int vIdx = -1;
for (int i = 0; i < s.length(); i++) {
    char c = s.charAt(i);
    if ("AEIOU".indexOf(c) != -1) { vIdx = i; break; }
}
String piglatin = s.substring(vIdx) + s.substring(0, vIdx) + "AY";`},{question:"What is an Automorphic number, and how has it appeared in CISCE examinations?",shortAnswer:"An Automorphic number is a number whose square ends in the same digits as the number itself (e.g., 25^2 = 625, 76^2 = 5776).",explanation:"To check, count digits `d` of `num`. Compute divisor `10^d`. If `(square % divisor) == num`, then the number is automorphic. In ICSE 2019, students were asked to check this in a menu-driven program.",hint:"Store square in `long` to avoid integer overflow for larger inputs.",level:"intermediate",codeExample:`long sq = (long) n * n;
int temp = n, div = 1;
while(temp > 0) { div *= 10; temp /= 10; }
boolean isAuto = (sq % div) == n;`},{question:"What is a Special (or Krishnamurthy) Number in ICSE Java?",shortAnswer:"A number where the sum of factorials of its digits equals the original number (e.g., 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145).",explanation:"Use a `while(temp > 0)` loop, extract the last digit with `temp % 10`, compute its factorial with a small inner loop `for(int i=1; i<=digit; i++)`, add to sum, and update `temp /= 10`. Finally check `sum == num`.",hint:"0! is 1, though standard ICSE test cases use positive digits 1-9.",level:"basic",codeExample:`int sum = 0, temp = n;
while(temp > 0) {
    int d = temp % 10, fact = 1;
    for(int i = 1; i <= d; i++) fact *= i;
    sum += fact;
    temp /= 10;
}`},{question:"Why does Bubble Sort use `n - 1 - i` comparisons in the inner loop?",shortAnswer:"Because after each outer pass `i`, the largest `i` elements have already bubbled up to their final correct positions at the end of the array.",explanation:"In pass 0, the largest element reaches index `n-1`. In pass 1, the second largest reaches `n-2`. Comparing already sorted elements is redundant, so `j` only needs to iterate up to `n - 1 - i`.",hint:"Using `n - 1` still works correctly but performs unnecessary redundant comparisons.",level:"intermediate",codeExample:`for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            int t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t;
        }
    }
}`},{question:"What is the key difference between Bubble Sort and Selection Sort as evaluated in CISCE marking schemes?",shortAnswer:"Bubble Sort repeatedly swaps adjacent out-of-order elements, while Selection Sort searches for the minimum element in the unsorted sub-array and performs only one swap per pass.",explanation:"Examiners strictly look for the selection mechanism: an index pointer `minIdx = i`, an inner loop finding the smaller element, and a single swap outside the inner loop. Confusing the two causes severe mark deduction.",hint:"Selection Sort does at most N-1 swaps total; Bubble Sort can do up to N*(N-1)/2 swaps.",level:"intermediate",codeExample:`// Selection Sort swap happens OUTSIDE inner loop:
int minIdx = i;
for(int j = i + 1; j < n; j++) if(arr[j] < arr[minIdx]) minIdx = j;
int t = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = t;`},{question:"How should tariff slab calculations (e.g. Electricity, Water, Taxi) be structured to avoid double-charging?",shortAnswer:"Always calculate cumulative tier differences (e.g., first 100 at tier 1, next 200 at tier 2, remaining above 300 at tier 3), never applying the highest rate to the entire volume.",explanation:"If units = 350: First 100 units = 100 * 2.50 = 250. Next 200 units = 200 * 3.50 = 700. Remaining = (350 - 300) * 4.50 = 225. Total = 250 + 700 + 225 = 1175. Multiplying 350 * 4.50 is the most common student error.",hint:"Sketch a number line with boundaries: 0 --- 100 --- 300 --- units.",level:"basic",codeExample:`if (u <= 100) bill = u * 2.5;
else if (u <= 300) bill = (100 * 2.5) + ((u - 100) * 3.5);
else bill = (100 * 2.5) + (200 * 3.5) + ((u - 300) * 4.5);`},{question:"What is a Tech Number, which was introduced in recent ICSE board examinations?",shortAnswer:"A number with an even number of digits where the square of the sum of its two equal halves equals the original number (e.g., 3025: 30 + 25 = 55, 55^2 = 3025).",explanation:"Count digits. If odd, reject. If even, compute `div = 10^(digits/2)`. Split into `first = n / div` and `second = n % div`. If `(first + second)^2 == n`, it is a Tech Number.",hint:"Other examples: 2025 (20+25=45, 45^2=2025), 9801 (98+01=99, 99^2=9801).",level:"advanced",codeExample:`int d = String.valueOf(n).length();
if (d % 2 == 0) {
    int div = (int)Math.pow(10, d / 2);
    int sum = (n / div) + (n % div);
    if (sum * sum == n) System.out.println("Tech Number");
}`},{question:"What is a Disarium Number (ICSE 2020)?",shortAnswer:"A number where the sum of its digits powered to their respective positions equals the number itself (e.g., 135 = 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135).",explanation:"Unlike Armstrong number where every digit is raised to the same power (count of digits), in Disarium the powers increase left-to-right from 1 to N.",hint:"Reverse the number or extract digits into an array to raise digits to 1, 2, 3...",level:"advanced",codeExample:`String s = String.valueOf(n);
int sum = 0;
for (int i = 0; i < s.length(); i++) {
    sum += Math.pow(s.charAt(i) - '0', i + 1);
}
boolean isDisarium = (sum == n);`},{question:"What is an Armstrong number and how does it differ from a Disarium number?",shortAnswer:"In an Armstrong number, the sum of digits raised to the power of the total number of digits equals the original number (e.g., 153 = 1^3 + 5^3 + 3^3 = 153).",explanation:"In Armstrong numbers, every digit is raised to the constant power `D` (number of digits). For 3-digit numbers, `d^3`. In Disarium, powers vary by digit position (1, 2, 3...).",hint:"153, 370, 371, 407 are classic 3-digit Armstrong numbers.",level:"basic",codeExample:`int temp = n, sum = 0, digits = String.valueOf(n).length();
while(temp > 0) {
    sum += Math.pow(temp % 10, digits);
    temp /= 10;
}`},{question:"In String manipulation, how do you capitalize the first letter of each word (Title Case)?",shortAnswer:"Trim the sentence, add a leading space or split words by spaces, and convert character after each space to uppercase.",explanation:'Two common techniques: 1) Split sentence with `sentence.split(" ")`, then take `w.substring(0,1).toUpperCase() + w.substring(1).toLowerCase()`. 2) Loop through characters, if character is preceded by a space, uppercase it.',hint:"Remember to handle punctuation and multiple consecutive spaces.",level:"intermediate",codeExample:`String[] words = s.trim().split("\\\\s+");
for (String w : words) {
    System.out.print(Character.toUpperCase(w.charAt(0)) + w.substring(1).toLowerCase() + " ");
}`},{question:"What is a Duck Number?",shortAnswer:"A positive number that contains at least one zero, but does NOT start with zero (e.g., 302, 1020).",explanation:"Leading zeros are discarded by numeric types, but when input as a String or integer, a Duck number has '0' not at the beginning. If String begins with '0' (like '0123'), it is not a duck number.",hint:"503 is a Duck number; 543 is not (no zero); 045 is not (starts with 0).",level:"basic",codeExample:'boolean isDuck = (n > 0 && String.valueOf(n).contains("0"));'},{question:"What is a Neon Number?",shortAnswer:"A number where the sum of the digits of its square is equal to the number itself (e.g., 9^2 = 81 -> 8 + 1 = 9).",explanation:"Compute square = `n * n`. Extract digits of square using `% 10` and sum them. If `sum == n`, it is a Neon number.",hint:"9 is the only non-trivial single-digit Neon number (besides 0 and 1).",level:"basic",codeExample:`int sq = n * n, sum = 0;
while(sq > 0) { sum += sq % 10; sq /= 10; }
boolean isNeon = (sum == n);`},{question:"What is a Spy Number?",shortAnswer:"A number where the sum of its digits equals the product of its digits (e.g., 1124: 1+1+2+4 = 8, 1*1*2*4 = 8).",explanation:"Extract each digit using a `while(temp > 0)` loop. Add to `sum`, multiply with `prod`. Check `sum == prod` at the end.",hint:"123 is also a Spy Number: 1+2+3 = 6, 1*2*3 = 6.",level:"basic",codeExample:`int sum = 0, prod = 1, temp = n;
while(temp > 0) {
    int d = temp % 10;
    sum += d; prod *= d;
    temp /= 10;
}
boolean isSpy = (sum == prod);`},{question:"What is a Palindrome Word and how to check it without using reverse() method?",shortAnswer:"A word that reads the same forwards and backwards (e.g. 'MADAM', 'NITIN', 'LEVEL').",explanation:"Compare characters from both ends: `char at i` vs `char at len - 1 - i` up to `len / 2`. If any pair differs, it is not a palindrome.",hint:"This two-pointer technique runs in O(N/2) time and avoids creating a new reversed string.",level:"basic",codeExample:`boolean isPal = true;
for (int i = 0; i < s.length() / 2; i++) {
    if (s.charAt(i) != s.charAt(s.length() - 1 - i)) { isPal = false; break; }
}`},{question:"How does Method Overloading work when parameters differ by number vs type?",shortAnswer:"Overloaded methods must have the same name but distinct parameter lists (different number of parameters, different types, or different order of types).",explanation:"The return type alone cannot be used to overload a method. If two methods have identical names and parameter signatures, the compiler throws 'method already defined' error even if return types differ.",hint:"Signature = Method Name + Parameter Types list.",level:"intermediate",codeExample:`void area(double r) { ... }       // Circle
void area(double l, double b) { ... } // Rectangle
void area(int s) { ... }          // Square`},{question:"What is Binary Search and what is its mandatory prerequisite?",shortAnswer:"Binary Search is a divide-and-conquer search algorithm with O(log N) complexity. The array MUST be sorted beforehand.",explanation:"Binary search compares the target key with the middle element `mid = (low + high) / 2`. If matching, found. If key is smaller, search left half (`high = mid - 1`). Otherwise search right half (`low = mid + 1`).",hint:"Always mention in your VDT that `low`, `high`, `mid` are indices.",level:"intermediate",codeExample:`int low = 0, high = arr.length - 1;
while(low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == key) return mid;
    else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
}`},{question:"What is Linear Search and when is it preferred over Binary Search?",shortAnswer:"Linear search checks every element one by one from index 0 to N-1. It is preferred when the array is unsorted or small.",explanation:"Linear search has O(N) complexity. It requires no sorting, works on any collection, and stops immediately upon finding the first match.",hint:"Use a boolean flag `boolean found = false;` to track if match occurred.",level:"basic",codeExample:`for (int i = 0; i < arr.length; i++) {
    if (arr[i] == key) { found = true; pos = i; break; }
}`},{question:"How are 2D Arrays traversed for Principal vs Secondary diagonals?",shortAnswer:"For an N × N matrix: Principal (Left) diagonal elements satisfy `i == j`. Secondary (Right) diagonal elements satisfy `i + j == N - 1`.",explanation:"Both diagonals can be traversed in a single loop `for(int i=0; i<N; i++)`: left diagonal is `mat[i][i]`, right diagonal is `mat[i][N - 1 - i]`. This avoids an O(N^2) nested loop.",hint:"For a 4x4 matrix, secondary diagonal indices are: [0][3], [1][2], [2][1], [3][0].",level:"intermediate",codeExample:`int leftSum = 0, rightSum = 0;
for (int i = 0; i < N; i++) {
    leftSum += mat[i][i];
    rightSum += mat[i][N - 1 - i];
}`},{question:"What is a Symmetric Matrix and how to verify it?",shortAnswer:"A square matrix where the element at row `i`, column `j` equals the element at row `j`, column `i` for all elements (A = A^T).",explanation:"Check `mat[i][j] == mat[j][i]` for all `i` and `j`. If any pair doesn't match, set flag to false and break. Only elements where `j > i` need checking.",hint:"Diagonal elements `mat[i][i]` are always equal to themselves.",level:"advanced",codeExample:`boolean sym = true;
for (int i = 0; i < N; i++) {
    for (int j = i + 1; j < N; j++) {
        if (mat[i][j] != mat[j][i]) { sym = false; break; }
    }
    if(!sym) break;
}`},{question:"Why should `sc.nextLine()` be called after `sc.nextInt()` when reading strings?",shortAnswer:"`sc.nextInt()` only reads the numeric token and leaves the newline character `\\n` in the buffer. The subsequent `sc.nextLine()` immediately consumes this newline and returns an empty string.",explanation:"Adding a dummy `sc.nextLine();` right after `nextInt()` or `nextDouble()` clears the trailing carriage return from the input buffer so the actual text input can be read properly.",hint:"This is one of the most common student bugs in Class Design questions.",level:"intermediate",codeExample:`int age = sc.nextInt();
sc.nextLine(); // Flush buffer
String name = sc.nextLine();`},{question:"What is the return type and behavior of `compareTo()` when strings match partially?",shortAnswer:"If one string is a prefix of another, `compareTo()` returns `this.length() - another.length()`. Otherwise it returns the difference between the first non-matching characters.",explanation:'"CAT".compareTo("CATERPILLAR") returns `3 - 11 = -8`. "BAT".compareTo("CAT") returns `\'B\' - \'C\' = 66 - 67 = -1`.',hint:"0 indicates both strings are identical in character content and length.",level:"advanced",codeExample:'int diff = "APPLE".compareTo("APP"); // returns 5 - 3 = 2'},{question:"What is the difference between `Math.round()`, `Math.floor()`, and `Math.ceil()` for negative numbers?",shortAnswer:"`floor()` rounds down (towards -infinity), `ceil()` rounds up (towards +infinity), and `round()` adds 0.5 and floors to long/int.",explanation:"For -4.3: floor(-4.3) is -5.0, ceil(-4.3) is -4.0, round(-4.3) is -4. For -4.8: floor is -5.0, ceil is -4.0, round is -5.",hint:"Remember: 'Floor' goes down into the basement; 'Ceiling' goes up towards the roof.",level:"intermediate",codeExample:`Math.floor(-3.2) -> -4.0
Math.ceil(-3.2)  -> -3.0
Math.round(-3.2) -> -3`},{question:"What is a Pure Method vs an Impure Method?",shortAnswer:"A Pure method (accessor) returns a calculated value without modifying the state of the object or actual arguments. An Impure method (mutator) alters the state of the object or parameters.",explanation:"Example of pure: `int getArea() { return length * breadth; }`. Example of impure: `void setLength(int l) { length = l; }` or array modifying methods.",hint:"Pure functions have no side-effects.",level:"intermediate",codeExample:`// Pure:
int square(int x) { return x * x; }
// Impure:
void modify(int[] a) { a[0] = 99; }`},{question:"How are marks distributed in a 15-mark Section B question in ICSE Board Examinations?",shortAnswer:"Class & Variable declaration: 3 marks, Algorithm Logic & Syntax: 7 marks, Proper Display & formatting: 2 marks, Variable Description Table (VDT) & comments: 3 marks.",explanation:"A student who writes working code without a Variable Description Table loses 3 full marks immediately! Always budget 3 minutes at the end of every program to draw the VDT.",hint:"VDT columns: Variable Name | Data Type | Purpose.",level:"basic",codeExample:`// Mandatory VDT format:
// Variable Name | Data Type | Purpose`}],f=()=>{const[r,s]=o.useState(0),i=[{title:"Class Design & Slab Calculations",frequency:"10 / 10 Years (100%)",qNumber:"Question 3",marks:"15 Marks",tags:["Encapsulation","Tariff Slabs","OOP Objects"],description:"Every single year without fail, Question 3 asks for a real-world commercial entity (Electricity, Telephone, Taxi, Book Fair, Railway Ticket). Requires instance variables, accept(), calculate(), and display() methods.",trap:"Common trap: Applying the highest tariff rate to the entire volume rather than calculating cumulative slabs."},{title:"1D Array Search & Sort Algorithms",frequency:"10 / 10 Years (100%)",qNumber:"Question 4",marks:"15 Marks",tags:["Binary Search","Bubble Sort","Selection Sort"],description:"Alternates between Binary Search on pre-sorted arrays and Bubble / Selection Sort in ascending or descending numerical order. Sometimes combined with parallel String arrays.",trap:"Common trap: Forgetting that Binary Search strictly requires a sorted array; confusing Bubble Sort inner bounds with Selection Sort."},{title:"String Handling & Word Parsing",frequency:"10 / 10 Years (100%)",qNumber:"Question 5",marks:"15 Marks",tags:["Piglatin","Title Case","Vowels","Palindrome"],description:"Requires looping over characters, extracting words using split() or space-detection, counting vowels, transforming words to Piglatin, or checking consecutive identical letters.",trap:"Common trap: Off-by-one errors with charAt() and substring(); forgetting to uppercase before checking vowels."},{title:"Method (Function) Overloading",frequency:"9 / 10 Years (90%)",qNumber:"Question 6",marks:"15 Marks",tags:["Polymorphism","Series Sum","Geometric Shapes"],description:"Defines two or three overloaded versions of the same method name (e.g. series(int, int) and series(int)) to calculate nested mathematical series or geometrical area/volume.",trap:"Common trap: Integer division truncation in series terms like 1/2 returning 0.0 instead of 0.5."},{title:"Special Numbers & Digit Extraction",frequency:"8 / 10 Years (80%)",qNumber:"Question 7",marks:"15 Marks",tags:["Tech","Krishnamurthy","Armstrong","Automorphic"],description:"Extracts digits using modulo 10 and integer division by 10 to test unique mathematical properties: Tech Number, Krishnamurthy/Special, Disarium, Duck, Neon, or Spy.",trap:"Common trap: Modifying the original number during digit extraction and comparing against 0 instead of the original number."},{title:"2D Matrix Grid Operations",frequency:"7 / 10 Years (70%)",qNumber:"Question 8",marks:"15 Marks",tags:["4x4 Matrix","Diagonals","Symmetry","Boundary"],description:"Accepts elements into a double-dimensional array (3x3 or 4x4). Computes Left and Right diagonal sums, row/column totals, boundary elements, or tests for symmetry.",trap:"Common trap: Mixing row index i and column index j in condition (arr[i][j] == arr[j][i])."}];return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2",children:i.map((t,n)=>e.jsxs("button",{onClick:()=>s(n),className:l("p-3 rounded-xl border text-left transition-all",r===n?"bg-amber-500/10 border-amber-500/40 text-amber-300 font-semibold shadow-md shadow-amber-500/5":"bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("div",{className:"text-xs font-mono text-amber-400/80 mb-1",children:t.qNumber}),e.jsx("div",{className:"text-xs line-clamp-2 leading-tight",children:t.title})]},n))}),(()=>{const t=i[r];return e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 mr-2",children:t.qNumber}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",children:t.marks}),e.jsx("h3",{className:"text-lg font-bold text-white mt-1",children:t.title})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"10-Year Frequency"}),e.jsx("div",{className:"text-sm font-bold text-amber-400",children:t.frequency})]})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:t.description}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs",children:[e.jsx("strong",{className:"text-rose-400",children:"⚠️ Examiner Pitfall: "})," ",t.trap]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:t.tags.map((n,a)=>e.jsxs("span",{className:"text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:["#",n]},a))})]})})()]})},A=()=>e.jsxs("div",{className:"space-y-12 text-slate-200",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }
        `}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20",children:"Module 008_002 · Topic 1"}),e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20",children:"CISCE 10-Year Solved Analysis"}),e.jsx("span",{className:"text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",children:"Score: 100/100 Target"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Previous 10-Year CISCE Board Question Paper Solutions & Patterns"}),e.jsx("p",{className:"text-base text-slate-400 max-w-4xl leading-relaxed",children:"Master the exact recurring question blueprints from 2014 to 2026 ICSE Computer Applications board papers. Learn to recognize the 6 core Section B archetypes, eliminate examiner traps, and write high-scoring answers."})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," Anatomy of the ICSE Computer Applications Examination"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"In ICSE Class X, the Computer Applications paper follows an exceptionally consistent pattern year after year. The 100-mark paper is split into:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",children:[e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-sky-400",children:"Section A (Compulsory)"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-sky-400/10 text-sky-300",children:"40 Marks"})]}),e.jsx("h3",{className:"text-base font-semibold text-white",children:"Theory, MCQs & Code Prediction"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Consists of Question 1 (20 MCQs x 1 Mark) and Question 2 (10 Short output/snippet/differentiate questions x 2 Marks). Tests fundamental concepts, Math library functions, wrapper classes, loop execution traces, and string methods."})]}),e.jsxs("div",{className:"p-5 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-amber-400",children:"Section B (Choice 4 of 6)"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300",children:"60 Marks"})]}),e.jsx("h3",{className:"text-base font-semibold text-white",children:"Full Java Program Implementation"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Consists of Questions 3 through 8 (15 Marks each). You must choose the 4 questions that best match your strengths. Every program requires complete class structure, Scanner input, algorithmic logic, clean output, and a Variable Description Table."})]})]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-6 shadow-lg",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," CISCE 10-Year Weightage & Archetype Matrix"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Click any question archetype below to inspect its recurrence rate, core concepts, and examiner traps:"})]})}),e.jsx(f,{}),e.jsx("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-center",children:e.jsxs("svg",{viewBox:"0 0 900 240",className:"w-full max-w-4xl h-auto",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradSecA",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#0284c7",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#0369a1",stopOpacity:"0.4"})]}),e.jsxs("linearGradient",{id:"gradSecB",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#d97706",stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]})]}),e.jsx("rect",{x:"10",y:"10",width:"880",height:"220",rx:"14",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("rect",{x:"40",y:"35",width:"360",height:"170",rx:"10",fill:"url(#gradSecA)",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"60",y:"70",fill:"#ffffff",fontSize:"18",fontWeight:"bold",children:"SECTION A: 40 MARKS"}),e.jsx("text",{x:"60",y:"95",fill:"#bae6fd",fontSize:"13",fontWeight:"bold",children:"ALL COMPULSORY"}),e.jsx("rect",{x:"60",y:"115",width:"150",height:"70",rx:"6",fill:"#0c4a6e"}),e.jsx("text",{x:"75",y:"140",fill:"#ffffff",fontSize:"13",fontWeight:"bold",children:"Question 1"}),e.jsx("text",{x:"75",y:"160",fill:"#7dd3fc",fontSize:"11",children:"20 MCQs (20 Marks)"}),e.jsx("text",{x:"75",y:"175",fill:"#94a3b8",fontSize:"10",children:"Basic types, library, OOP"}),e.jsx("rect",{x:"230",y:"115",width:"150",height:"70",rx:"6",fill:"#0c4a6e"}),e.jsx("text",{x:"245",y:"140",fill:"#ffffff",fontSize:"13",fontWeight:"bold",children:"Question 2"}),e.jsx("text",{x:"245",y:"160",fill:"#7dd3fc",fontSize:"11",children:"10 Snippets (20 Marks)"}),e.jsx("text",{x:"245",y:"175",fill:"#94a3b8",fontSize:"10",children:"Dry-run outputs, traps"}),e.jsx("path",{d:"M 425 120 L 455 120",stroke:"#fbbf24",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("circle",{cx:"440",cy:"120",r:"14",fill:"#1e293b",stroke:"#fbbf24",strokeWidth:"1.5"}),e.jsx("text",{x:"434",y:"125",fill:"#fbbf24",fontSize:"14",fontWeight:"bold",children:"+"}),e.jsx("rect",{x:"480",y:"35",width:"380",height:"170",rx:"10",fill:"url(#gradSecB)",stroke:"#fbbf24",strokeWidth:"1.5"}),e.jsx("text",{x:"500",y:"70",fill:"#ffffff",fontSize:"18",fontWeight:"bold",children:"SECTION B: 60 MARKS"}),e.jsx("text",{x:"500",y:"95",fill:"#fef08a",fontSize:"13",fontWeight:"bold",children:"ANSWER ANY 4 OUT OF 6 (15 Marks Each)"}),e.jsxs("g",{transform:"translate(500, 115)",children:[e.jsx("rect",{x:"0",y:"0",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"10",y:"20",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q3: Class Design"}),e.jsx("rect",{x:"120",y:"0",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"130",y:"20",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q4: Array Sort/Find"}),e.jsx("rect",{x:"240",y:"0",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"250",y:"20",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q5: String Ops"}),e.jsx("rect",{x:"0",y:"40",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"10",y:"60",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q6: Overloading"}),e.jsx("rect",{x:"120",y:"40",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"130",y:"60",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q7: Special Num"}),e.jsx("rect",{x:"240",y:"40",width:"105",height:"32",rx:"4",fill:"#78350f"}),e.jsx("text",{x:"250",y:"60",fill:"#fef3c7",fontSize:"11",fontWeight:"bold",children:"Q8: 2D Matrix"})]})]})})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-6 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," 10-Year Special Numbers Definitive Cheatsheet"]}),e.jsx("p",{className:"text-sm text-slate-300",children:"CISCE examiners frequently ask students to extract digits and verify special numeric properties. Keep these core definitions at your fingertips:"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-300 font-semibold uppercase tracking-wider",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 border-b border-slate-800",children:"Special Number"}),e.jsx("th",{className:"p-3 border-b border-slate-800",children:"Condition / Mathematical Rule"}),e.jsx("th",{className:"p-3 border-b border-slate-800",children:"Classic Examples"}),e.jsx("th",{className:"p-3 border-b border-slate-800",children:"Board Occurrence"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Krishnamurthy / Special"}),e.jsx("td",{className:"p-3",children:"Sum of factorials of each digit equals the number itself."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"145 (1! + 4! + 5! = 145)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2016, 2020, 2024"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Tech Number"}),e.jsx("td",{className:"p-3",children:"Even digit number; square of sum of two equal halves equals number."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"3025 ((30+25)^2 = 3025), 2025, 9801"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2021, 2025 (Specimen)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Automorphic Number"}),e.jsx("td",{className:"p-3",children:"A number whose square ends in the number itself."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"25 (25^2=625), 76 (76^2=5776)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2019, 2022"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Armstrong Number"}),e.jsx("td",{className:"p-3",children:"Sum of digits raised to power of count of digits equals number."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"153 (1^3 + 5^3 + 3^3), 370, 371"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2014, 2018"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Disarium Number"}),e.jsx("td",{className:"p-3",children:"Sum of digits raised to their positional powers equals number."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"135 (1^1 + 3^2 + 5^3 = 135)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2020, 2023"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Neon Number"}),e.jsx("td",{className:"p-3",children:"Sum of digits of the square of the number equals number."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"9 (9^2 = 81 -> 8 + 1 = 9)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2017"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-400",children:"Spy Number"}),e.jsx("td",{className:"p-3",children:"Sum of digits of the number equals product of its digits."}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"1124 (1+1+2+4 = 8, 1*1*2*4 = 8)"}),e.jsx("td",{className:"p-3 text-slate-400",children:"2023 Specimen"})]})]})]})})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4 shadow-lg",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"✦"})," Consolidated 10-Year Board Pattern Master Code"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Runnable Java class implementing Piglatin, Bubble Sort, Krishnamurthy Number, and Automorphic Number."})]})}),e.jsx(d,{fileModule:u,title:"BoardTenYearPatternMasterDemo.java",highlightLines:[22,39,58,77]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4 shadow-lg",children:[e.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"⚠️"})," Top 5 Section B Mark-Loss Traps & How to Avoid Them"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-300",children:"1. Scanner Buffer Leaks with nextLine()"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When reading an integer followed by a String (e.g. consumer units then consumer address), calling ",e.jsx("code",{className:"text-amber-300",children:"sc.nextInt()"})," leaves the newline in the buffer. Always insert an extra ",e.jsx("code",{className:"text-amber-300",children:"sc.nextLine()"})," to consume the newline!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-300",children:"2. Integer Division Truncation in Series"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-amber-300",children:"sum += Math.pow(x, i) / i"})," when ",e.jsx("code",{className:"text-amber-300",children:"i"})," is an integer can lead to truncation if both operands evaluate to integers. Ensure floating point division by using ",e.jsx("code",{className:"text-amber-300",children:"(double) i"})," or 1.0."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-300",children:"3. Missing Variable Description Table (VDT)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Every year students lose 8 to 12 marks across Section B simply because they did not write the VDT. The VDT carries 3 marks per question in the official CISCE marking scheme!"})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-300",children:"4. Selection Sort Swap Placed Inside Inner Loop"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In Selection Sort, the swap MUST take place ",e.jsx("em",{children:"outside"})," the inner comparison loop. Swapping inside turns it into a flawed hybrid and forfeits 3 marks on algorithmic correctness."]})]})]})]}),e.jsxs("div",{className:"p-6 md:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:"💡 Think About This: The 15-Minute Reading Time Strategy"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"During the mandatory 15 minutes before the exam begins, you are NOT permitted to write with your pen. Use this time exclusively to:"}),e.jsxs("ul",{className:"list-disc pl-5 text-xs text-slate-300 space-y-1.5",children:[e.jsx("li",{children:"Read all 6 Section B questions and immediately eliminate the 2 hardest ones."}),e.jsx("li",{children:"For the chosen 4 questions, mentally sketch the class names and method signatures."}),e.jsx("li",{children:"For Section A snippets, mentally trace the loop conditions to spot prefix/postfix traps."})]})]}),e.jsx(c,{title:"Previous 10-Year ICSE Board Exam Solutions & Insights FAQs",questions:x}),e.jsx(m,{content:p,title:"Module 008_002 Topic 1: 10-Year CISCE Board Solutions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download 10-Year Board Cheatsheet",downloadFileName:"008_002_selection-exam_topic1_10year_note.txt"}),e.jsx(h,{note:"Dear students of Barrackpore, Shyamnagar, Ichapur, and Naihati: When sitting for your ICSE Computer Applications board exam, remember that precision always beats haste. Never rush Section A; 40 out of 40 in Section A creates an unstoppable psychological advantage. Draw your VDT with a ruler and pen immediately after finishing each program in Section B. You are thoroughly prepared to achieve your 100/100! — Sukanta Hui"})]});export{A as default};

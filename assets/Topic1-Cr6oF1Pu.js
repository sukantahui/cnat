import{b as p,j as e,bh as u}from"./vendor-react-core-CaA1o1Cx.js";import{J as v}from"./JavaFileLoader-BYsFDtcs.js";import{F as S}from"./FAQTemplate-D_90hN4m.js";import{P as N}from"./PlainTextPrint-yt10TRX1.js";import{T as C}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const E=`/**\r
 * Topic 1: Matrix Input and Output using Nested Loops\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
import java.util.Scanner;\r
\r
public class MatrixInputOutputDemo {\r
\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: MATRIX INPUT & OUTPUT DEMO");\r
        System.out.println("==================================================");\r
\r
        // Step 1: Input dimensions\r
        System.out.print("Enter number of rows (M): ");\r
        int m = sc.nextInt();\r
        System.out.print("Enter number of columns (N): ");\r
        int n = sc.nextInt();\r
\r
        // Validate positive dimensions\r
        if (m <= 0 || n <= 0) {\r
            System.out.println("Error: Dimensions must be positive integers.");\r
            sc.close();\r
            return;\r
        }\r
\r
        // Step 2: Declare and instantiate the 2D array\r
        int[][] matrix = new int[m][n];\r
\r
        // Step 3: Input matrix elements using nested loops (Row-Major Order)\r
        System.out.println("\\nEnter " + (m * n) + " elements row by row:");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("Enter element at [" + i + "][" + j + "]: ");\r
                matrix[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 4: Display matrix in proper tabular grid format\r
        System.out.println("\\n--- Displaying Matrix (" + m + " x " + n + ") ---");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                // Using \\t (tab space) for clean column alignment\r
                System.out.print(matrix[i][j] + "\\t");\r
            }\r
            // Essential: Newline after every row completion\r
            System.out.println();\r
        }\r
\r
        System.out.println("==================================================");\r
        sc.close();\r
    }\r
}\r
\r
/*\r
 * ============================================================================\r
 * VARIABLE DESCRIPTION TABLE (ICSE BOARD STANDARD DOCUMENTATION)\r
 * ============================================================================\r
 * Variable Name   Data Type   Purpose\r
 * ----------------------------------------------------------------------------\r
 * sc              Scanner     Object of Scanner class to accept user input\r
 * m               int         Stores the number of rows in the matrix\r
 * n               int         Stores the number of columns in the matrix\r
 * matrix          int[][]     Stores 2D array elements entered by user\r
 * i               int         Outer loop index for row traversal (0 to m - 1)\r
 * j               int         Inner loop index for column traversal (0 to n - 1)\r
 * ============================================================================\r
 */`,A=`/**
 * Topic 1 - Example 2: Column-Major Matrix Traversal
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Column-by-Column traversal (Outer loop cols j, Inner loop rows i)
 * 2. Contrasting Row-Major vs Column-Major output order
 * 3. Processing matrices oriented by columns
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

import java.util.Scanner;

public class ColumnMajorTraversalDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("============================================================");
        System.out.println("  TOPIC 1 · EXAMPLE 2: COLUMN-MAJOR TRAVERSAL DEMO");
        System.out.println("============================================================");

        // Pre-populated 3x4 Matrix for clear visualization
        int[][] matrix = {
            {11, 12, 13, 14},
            {21, 22, 23, 24},
            {31, 32, 33, 34}
        };

        int rows = matrix.length;       // 3
        int cols = matrix[0].length;    // 4

        // 1. Standard Tabular Grid Output (Row-Major)
        System.out.println("1. Standard Grid Layout (Row-Major Order):");
        for (int i = 0; i < rows; i++) {
            System.out.print("   Row " + i + ":\\t");
            for (int j = 0; j < cols; j++) {
                System.out.print(matrix[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        // 2. Column-Major Traversal: Outer loop j (0 to cols-1), Inner loop i (0 to rows-1)
        System.out.println("2. Traversing Column-by-Column (Column-Major Order):");
        for (int j = 0; j < cols; j++) {
            System.out.print("   Column " + j + " elements: ");
            for (int i = 0; i < rows; i++) {
                System.out.print(matrix[i][j] + "  ");
            }
            System.out.println();
        }
        System.out.println();

        // 3. Linear Sequence Comparison
        System.out.println("3. Linear Output Comparison:");
        System.out.print("   Row-Major Stream:    ");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(matrix[i][j] + " ");
            }
        }
        System.out.println();

        System.out.print("   Column-Major Stream: ");
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < rows; i++) {
                System.out.print(matrix[i][j] + " ");
            }
        }
        System.out.println("\\n============================================================");
        sc.close();
    }
}
`,T=`/**
 * Topic 1 - Example 3: Professional Matrix Formatted Printing
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Formatted output using System.out.printf with width specifiers (%4d, %6s)
 * 2. Boxed ASCII frame border rendering around matrices
 * 3. Handling uneven multi-digit numbers and negative integers neatly
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class PrettyMatrixFormattingDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 1 · EXAMPLE 3: PRETTY MATRIX FORMATTING");
        System.out.println("============================================================");

        // Matrix containing positive, negative, and varying digit lengths
        int[][] data = {
            {5, -12, 1024, 0},
            {256, 3, -7, 88},
            {-999, 45, 12, 7}
        };

        int rows = data.length;
        int cols = data[0].length;

        // 1. Unformatted raw print showing why formatting is needed
        System.out.println("1. Problem with Unformatted Output (Misaligned Columns):");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.print(data[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();

        // 2. Formatted with printf specifier %6d
        System.out.println("2. Aligned with System.out.printf(\\"%6d\\", val):");
        System.out.print("       ");
        for (int j = 0; j < cols; j++) {
            System.out.printf(" Col %d", j);
        }
        System.out.println();

        for (int i = 0; i < rows; i++) {
            System.out.printf("Row %d: ", i);
            for (int j = 0; j < cols; j++) {
                System.out.printf("%6d", data[i][j]);
            }
            System.out.println();
        }
        System.out.println();

        // 3. Professional ASCII Box Matrix Output
        System.out.println("3. Boxed Grid Framing Output:");
        printHorizontalDivider(cols);
        for (int i = 0; i < rows; i++) {
            System.out.print("| ");
            for (int j = 0; j < cols; j++) {
                System.out.printf("%5d | ", data[i][j]);
            }
            System.out.println();
            printHorizontalDivider(cols);
        }
        System.out.println("============================================================");
    }

    private static void printHorizontalDivider(int cols) {
        System.out.print("+");
        for (int j = 0; j < cols; j++) {
            System.out.print("-------+");
        }
        System.out.println();
    }
}
`,I=`/**
 * Topic 1 - Example 4: Linear Search & Frequency Count in a 2D Matrix
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Searching for an element K in a 2D array
 * 2. Recording and printing all coordinate pairs (row, col) where K occurs
 * 3. Counting total frequency and displaying "Not Found" message if absent
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

import java.util.Scanner;

public class MatrixSearchAndCountDemo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("============================================================");
        System.out.println("  TOPIC 1 · EXAMPLE 4: 2D MATRIX SEARCH & FREQUENCY COUNT");
        System.out.println("============================================================");

        int[][] grid = {
            {15, 23, 42, 15},
            {88, 15, 60, 71},
            {42, 90, 15, 33}
        };

        int rows = grid.length;
        int cols = grid[0].length;

        // Display current matrix
        System.out.println("Current Matrix (" + rows + " x " + cols + "):");
        for (int i = 0; i < rows; i++) {
            System.out.print("   ");
            for (int j = 0; j < cols; j++) {
                System.out.print(grid[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        // Target key to search
        int target = 15;
        System.out.println("Searching for target key: " + target);

        int count = 0;
        boolean found = false;

        System.out.println("\\nSearch Findings:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == target) {
                    count++;
                    found = true;
                    System.out.println("   -> Match #" + count + " found at Row " + i + ", Column " + j + " (index [" + i + "][" + j + "])");
                }
            }
        }

        if (found) {
            System.out.println("\\nResult: Element " + target + " was found " + count + " time(s) in the matrix.");
        } else {
            System.out.println("\\nResult: Element " + target + " does NOT exist in the matrix.");
        }

        // Search for an absent key to demonstrate failure path
        int absentKey = 999;
        System.out.println("\\nSearching for absent key: " + absentKey);
        boolean foundAbsent = false;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == absentKey) {
                    foundAbsent = true;
                    break;
                }
            }
            if (foundAbsent) break;
        }

        if (!foundAbsent) {
            System.out.println("Result: Key " + absentKey + " not found (Successfully confirmed absent).");
        }
        System.out.println("============================================================");
        sc.close();
    }
}
`,M=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 1: Matrix Input and Output Using Nested Loops\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. CORE CONCEPT: NESTED LOOPS FOR 2D ARRAYS\r
--------------------------------------------------------------------------------\r
- A 2D array contains elements at coordinates (i, j), where:\r
    i = Row Index (0 to Rows - 1)\r
    j = Column Index (0 to Columns - 1)\r
- Traversal requires two nested loops:\r
    * Outer Loop (i): Controls the active row.\r
    * Inner Loop (j): Traverses each column in that active row.\r
- Total iterations = Rows * Columns.\r
\r
2. SCANNER INPUT TEMPLATE (ROW-MAJOR ORDER)\r
--------------------------------------------------------------------------------\r
Scanner sc = new Scanner(System.in);\r
System.out.print("Enter rows: ");\r
int m = sc.nextInt();\r
System.out.print("Enter cols: ");\r
int n = sc.nextInt();\r
\r
int[][] matrix = new int[m][n];\r
\r
System.out.println("Enter " + (m * n) + " elements:");\r
for (int i = 0; i < m; i++) {\r
    for (int j = 0; j < n; j++) {\r
        System.out.print("matrix[" + i + "][" + j + "]: ");\r
        matrix[i][j] = sc.nextInt();\r
    }\r
}\r
\r
3. FORMATTED TABULAR OUTPUT TEMPLATE\r
--------------------------------------------------------------------------------\r
System.out.println("--- Formatted Matrix Grid ---");\r
for (int i = 0; i < m; i++) {\r
    for (int j = 0; j < n; j++) {\r
        System.out.print(matrix[i][j] + "\\t");   // '\\t' provides column alignment\r
    }\r
    System.out.println();                       // Essential: new line after row\r
}\r
\r
4. ROW-MAJOR VS COLUMN-MAJOR TRAVERSAL\r
--------------------------------------------------------------------------------\r
Row-Major Traversal (Standard):\r
  - Loop i (0 to m-1) on outer, Loop j (0 to n-1) on inner.\r
  - Visited order: (0,0), (0,1), (0,2) ... (1,0), (1,1), (1,2) ...\r
\r
Column-Major Traversal:\r
  - Loop j (0 to n-1) on outer, Loop i (0 to m-1) on inner.\r
  - Visited order: (0,0), (1,0), (2,0) ... (0,1), (1,1), (2,1) ...\r
\r
5. EXECUTION TRACE TABLE (2x2 Matrix)\r
--------------------------------------------------------------------------------\r
Outer (i) | Inner (j) | Accessed Cell | Output Display\r
----------+-----------+---------------+-----------------\r
    0     |     0     |  mat[0][0]=10 | 10\\t\r
    0     |     1     |  mat[0][1]=20 | 10\\t 20\\t \\n\r
----------+-----------+---------------+-----------------\r
    1     |     0     |  mat[1][0]=30 | 30\\t\r
    1     |     1     |  mat[1][1]=40 | 30\\t 40\\t \\n\r
--------------------------------------------------------------------------------\r
\r
6. COMMON BOARD EXAM PITFALLS\r
--------------------------------------------------------------------------------\r
[!] Error: Using System.out.println() inside the inner loop.\r
    Result: Every number prints on its own line vertically.\r
\r
[!] Error: Forgetting System.out.println() after inner loop.\r
    Result: Entire matrix prints in a single long horizontal line.\r
\r
[!] Error: Swapping loop limits for non-square matrices.\r
    In a 3x5 matrix: outer loop must be i < 3, inner loop must be j < 5.\r
\r
7. ICSE SECTION B CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Prompting the user clearly before reading input.\r
[✓] Using tab space '\\t' for neat alignment.\r
[✓] Complete Variable Description Table attached at the bottom.\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"In ICSE Board Exams, presentation matters! Always ensure your matrix output\r
looks like a real mathematical grid using '\\\\t' and a clean newline after\r
each row!"\r
================================================================================`,k=[{question:"Why are nested loops required to input and display a 2D matrix in Java?",shortAnswer:"Because a 2D matrix has two independent coordinate dimensions (rows and columns); an outer loop iterates through rows, and an inner loop iterates through columns.",explanation:"A single loop can only vary one variable at a time (linear traversal). To visit every cell in a 2D grid, the outer loop fixes row index i, while the inner loop scans column index j through all valid column values 0 to n - 1.",hint:"Two dimensions require two nested control loops.",level:"basic",codeExample:`for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        matrix[i][j] = sc.nextInt();
    }
}`},{question:"What is the critical difference between System.out.print() and System.out.println() when printing a 2D matrix?",shortAnswer:"System.out.print() outputs elements of the same row on the same line, while System.out.println() (placed outside the inner loop) moves the cursor to the next line after completing a row.",explanation:"If you use System.out.println() inside the inner loop, each element prints on a new vertical line. To achieve a grid format, print each element with a space or tab using print(), and issue a single println() after the inner loop finishes.",hint:"Print horizontally inside the inner loop; drop to the next line after the inner loop completes.",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        System.out.print(arr[i][j] + "\\t"); // Same line
    }
    System.out.println(); // New row
}`},{question:"What is Row-Major Order versus Column-Major Order during matrix input?",shortAnswer:"In Row-Major order, elements are processed row-by-row (Row 0 elements, then Row 1, etc.). In Column-Major order, elements are processed column-by-column (Col 0 elements, then Col 1, etc.).",explanation:"Standard matrix entry in Java uses row-major: outer loop i (rows) and inner loop j (columns). In column-major entry, outer loop j (columns) and inner loop i (rows) fill each vertical column first.",hint:"Row-Major: row changes slowly, col changes rapidly. Column-Major: col changes slowly, row changes rapidly.",level:"basic",codeExample:`// Row-Major: arr[0][0], arr[0][1], arr[0][2], arr[1][0]...
// Column-Major: arr[0][0], arr[1][0], arr[2][0], arr[0][1]...`},{question:"How many total iterations execute during the nested loop traversal of an M x N matrix?",shortAnswer:"Total iterations = M * N.",explanation:"The outer loop runs M times. For each iteration of the outer loop, the inner loop runs N times. Therefore, the body of the inner loop executes M * N times in total.",hint:"Multiply outer loop count by inner loop count.",level:"basic",codeExample:"// If M = 3 and N = 4: Total iterations = 3 * 4 = 12"},{question:"Why is the tab character ('\\t') preferred over a single space (' ') when printing matrices in ICSE programs?",shortAnswer:"The tab character '\\t' ensures uniform column alignment even when matrix elements have varying numbers of digits (e.g., 5 vs 150).",explanation:"Spaces can cause columns to become misaligned when single-digit and multi-digit numbers appear in the same column. The tab character aligns numbers to standard tab stops (usually 4 or 8 characters).",hint:"Tab stops create clean vertical columns.",level:"basic",codeExample:'System.out.print(matrix[i][j] + "\\t");'},{question:"What is the trace table sequence of (i, j) index pairs for a 2x3 matrix during standard nested loop execution?",shortAnswer:"(0,0) -> (0,1) -> (0,2) -> (1,0) -> (1,1) -> (1,2)",explanation:"Starting with i=0, j iterates through 0, 1, 2. When j reaches 3, the inner loop terminates. The outer loop increments i to 1, and j resets to 0 and iterates through 0, 1, 2 again.",hint:"Trace row 0 completely, then trace row 1 completely.",level:"basic",codeExample:`/* Execution Trace:
Step 1: i=0, j=0
Step 2: i=0, j=1
Step 3: i=0, j=2
Step 4: i=1, j=0
Step 5: i=1, j=1
Step 6: i=1, j=2 */`},{question:"How do you accept matrix input using Scanner in BlueJ without hardcoding array dimensions?",shortAnswer:"Prompt the user for rows 'm' and columns 'n' first, then instantiate: int[][] arr = new int[m][n];",explanation:"Dynamic sizing allows your program to handle any valid matrix size provided by the user or required by the ICSE question paper.",hint:"Read dimensions into variables first, then create the array using those variables.",level:"basic",codeExample:`int m = sc.nextInt();
int n = sc.nextInt();
int[][] arr = new int[m][n];`},{question:"What occurs if a student writes 'for (int j = 0; j < cols; i++)' inside the inner loop?",shortAnswer:"An infinite loop occurs because j is never incremented, and i keeps increasing until it causes an ArrayIndexOutOfBoundsException.",explanation:"This is a common typo where the programmer mistakenly increments the outer loop counter 'i' instead of the inner loop counter 'j'.",hint:"Watch out for accidentally writing i++ in the inner j loop.",level:"intermediate",codeExample:`// BUG:
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; i++) { // BUG: i++ instead of j++
        System.out.print(arr[i][j]);
    }
}`},{question:"How do you display a 2D matrix in reverse row-major order (from bottom-right to top-left)?",shortAnswer:"Run the outer loop backwards from i = rows - 1 down to 0, and the inner loop backwards from j = cols - 1 down to 0.",explanation:"Starting indices at length - 1 and decrementing with i-- and j-- visits cells in reverse order: [M-1][N-1], [M-1][N-2] ... down to [0][0].",hint:"Initialize loops at length - 1, condition >= 0, step --.",level:"intermediate",codeExample:`for (int i = rows - 1; i >= 0; i--) {
    for (int j = cols - 1; j >= 0; j--) {
        System.out.print(arr[i][j] + "\\t");
    }
    System.out.println();
}`},{question:"How do you search for an element X in an M x N matrix and print its row and column coordinates?",shortAnswer:"Traverse the matrix using nested loops; if matrix[i][j] == X, print the coordinates (i, j) and set a boolean flag.",explanation:"Linear search on a 2D array checks each cell sequentially. If found, report the exact indices. If the loops finish and the flag remains false, report 'Element not found'.",hint:"Compare matrix[i][j] with search target X.",level:"intermediate",codeExample:`boolean found = false;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (arr[i][j] == key) {
            System.out.println("Found at Row: " + i + ", Col: " + j);
            found = true;
            break;
        }
    }
}
if (!found) System.out.println("Not found");`},{question:"How do you break out of both nested loops immediately upon finding a search element?",shortAnswer:"Use a labeled break statement (e.g., 'break searchLoop;') or a boolean flag combined with break.",explanation:"A standard 'break;' only terminates the innermost loop. A labeled break in Java can exit both the inner and outer loops simultaneously.",hint:"Place a label before the outer loop and target it with break labelName;.",level:"advanced",codeExample:`searchLoop:
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (arr[i][j] == key) {
            System.out.println("Found at [" + i + "][" + j + "]");
            break searchLoop;
        }
    }
}`},{question:"What is the time complexity of inputting and displaying an N x N square matrix?",shortAnswer:"O(N^2) quadratic time complexity.",explanation:"Because the outer loop runs N times and the inner loop runs N times for every outer step, the total number of basic operations is N * N = N^2.",hint:"N rows * N columns = N^2 operations.",level:"intermediate",codeExample:"// For N = 100: 10,000 cell operations -> O(N^2)"},{question:"Can an enhanced for-each loop be used to input elements into a 2D matrix?",shortAnswer:"No, the enhanced for-each loop cannot modify primitive array elements during input.",explanation:"In Java's for-each loop (for (int val : row)), 'val' is a copy of the element value, not a reference to the array slot. Assigning to 'val' does not write into the matrix. Traditional indexed for loops must be used for input.",hint:"For-each loops are read-only for primitives.",level:"intermediate",codeExample:`// CANNOT DO THIS FOR INPUT:
// for (int[] row : matrix) {
//     for (int val : row) { val = sc.nextInt(); } // Fails!
// }`},{question:"Can an enhanced for-each loop be used to display a 2D matrix?",shortAnswer:"Yes, for-each is ideal for read-only traversal and printing.",explanation:"Outer loop iterates through each 1D row array (int[] row : matrix), and inner loop iterates through each integer in that row (int val : row).",hint:"Outer type is int[], inner type is int.",level:"intermediate",codeExample:`for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + "\\t");
    }
    System.out.println();
}`},{question:"What happens if the user enters fewer inputs than required (e.g. 8 numbers for a 3x3 matrix)?",shortAnswer:"Scanner.nextInt() blocks and waits for the user to provide the remaining input.",explanation:"Scanner's nextInt() method is a blocking call. It will wait indefinitely on standard input until a token is available or an EOF/InputMismatchException occurs.",hint:"Scanner waits until all requested tokens are supplied.",level:"basic",codeExample:"// 3x3 matrix needs exactly 9 integer inputs"},{question:"What exception is thrown if the user enters a non-integer string like 'hello' during matrix integer input?",shortAnswer:"java.util.InputMismatchException",explanation:"Scanner.nextInt() expects a valid integer token. If the input cannot be parsed into a 32-bit signed integer, an InputMismatchException is thrown.",hint:"Input type does not match the method type.",level:"basic",codeExample:"// Entering 'abc' when sc.nextInt() is called -> InputMismatchException"},{question:"How do you count the total number of even numbers and odd numbers in an M x N matrix?",shortAnswer:"Initialize evenCount = 0 and oddCount = 0; inside the nested loops, test if (arr[i][j] % 2 == 0) evenCount++ else oddCount++.",explanation:"Traverse every cell in row-major order and check divisibility by 2 using the modulus operator '%'.",hint:"Use num % 2 == 0 for even check.",level:"basic",codeExample:`int even = 0, odd = 0;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (arr[i][j] % 2 == 0) even++;
        else odd++;
    }
}`},{question:"How do you find the maximum and minimum element in a 2D matrix?",shortAnswer:"Initialize max = arr[0][0] and min = arr[0][0]; iterate through all cells and update max/min whenever a larger/smaller element is encountered.",explanation:"Never initialize max to 0 or arbitrary values because matrix elements might all be negative. Always seed with arr[0][0].",hint:"Always initialize max and min with the first matrix element arr[0][0].",level:"basic",codeExample:`int max = arr[0][0], min = arr[0][0];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (arr[i][j] > max) max = arr[i][j];
        if (arr[i][j] < min) min = arr[i][j];
    }
}`},{question:"In an ICSE Board exam question, what must be written before calling sc.nextInt() for matrix elements?",shortAnswer:'A descriptive prompt message such as System.out.println("Enter elements:"); or System.out.print("Enter element at [" + i + "][" + j + "]:");',explanation:"Good user prompts improve readability and make programs user-friendly, adhering to ICSE programming standards.",hint:"Always prompt before reading input.",level:"basic",codeExample:`System.out.print("Enter value for [" + i + "][" + j + "]: ");
mat[i][j] = sc.nextInt();`},{question:"What is the output if you forget the System.out.println() after the inner loop?",shortAnswer:"All elements of the entire matrix will print consecutively on a single horizontal line.",explanation:"Without the newline statement, the console cursor never moves down, destroying the 2D grid structure.",hint:"The inner loop prints a single row; println() ends that row.",level:"basic",codeExample:`// Without println(): 10 20 30 40 50 60
// With println():
// 10 20 30
// 40 50 60`},{question:"How do you input a matrix of floating point numbers (double)?",shortAnswer:"Declare double[][] mat = new double[m][n]; and read elements using sc.nextDouble().",explanation:"The data type double accommodates decimal values. The Scanner method nextDouble() parses floating-point tokens.",hint:"Use double data type with nextDouble().",level:"basic",codeExample:`double[][] mat = new double[3][3];
mat[i][j] = sc.nextDouble();`},{question:"How do you count the frequency of a particular number K in a 2D matrix?",shortAnswer:"Initialize count = 0; traverse the matrix with nested loops and execute count++ whenever matrix[i][j] == K.",explanation:"Linear check of every cell against the target K tallies all occurrences.",hint:"Increment counter when element matches K.",level:"basic",codeExample:`int count = 0;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (arr[i][j] == K) count++;
    }
}`},{question:"Why should we close the Scanner object (sc.close()) at the end of the program?",shortAnswer:"To prevent resource leaks by closing the underlying input stream.",explanation:"While not strictly penalized in ICSE class 10, closing system resources is good programming practice in Java.",hint:"Free system resources when done with input.",level:"intermediate",codeExample:"sc.close();"},{question:"What is the effect of writing 'for (int i = 0; i < n; i++)' for rows and 'for (int j = 0; j < m; j++)' for columns when m != n?",shortAnswer:"An ArrayIndexOutOfBoundsException will occur because dimensions m and n are swapped.",explanation:"Outer loop index i goes up to row dimension m (arr.length), and inner loop index j goes up to column dimension n (arr[0].length). Swapping them in a non-square matrix causes index out of range.",hint:"Rows go with M, Columns go with N.",level:"intermediate",codeExample:`// In a 2x4 matrix: arr has 2 rows and 4 cols.
// If i < 4 and accesses arr[3][0], crash occurs!`},{question:"How do you write the Variable Description Table for a Matrix Input/Output program in Section B of the ICSE exam?",shortAnswer:"Include all variables: sc (Scanner), m (int - row count), n (int - col count), arr (int[][] - matrix), i (int - outer loop index), j (int - inner loop index).",explanation:"A complete table lists every identifier declared, its exact data type, and its functional purpose in the solution.",hint:"Document every variable declared in your code.",level:"board-hot",codeExample:`/*
 * VARIABLE TABLE:
 * sc   | Scanner | For keyboard input
 * m    | int     | Number of rows
 * n    | int     | Number of columns
 * arr  | int[][] | 2D matrix to store numbers
 * i    | int     | Row index counter
 * j    | int     | Column index counter
 */`}],O=()=>{const[i,j]=p.useState(3),[t,m]=p.useState(3),[s,f]=p.useState([[12,25,34],[41,56,62],[78,89,90]]),[x,g]=p.useState("rowMajor"),y=(n,r)=>{const a=Math.max(1,Math.min(4,n)),o=Math.max(1,Math.min(4,r));j(a),m(o);const l=[];for(let d=0;d<a;d++){const h=[];for(let c=0;c<o;c++)h.push(s[d]?.[c]??(d+1)*10+(c+1));l.push(h)}f(l)},b=(n,r,a)=>{const o=parseInt(a,10),l=s.map((d,h)=>d.map((c,w)=>h===n&&w===r?isNaN(o)?0:o:c));f(l)};return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧮 Interactive 2D Matrix Input & Format Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust matrix dimensions, edit cell input values, and view formatted console output."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Rows (R):"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[2,3,4].map(n=>e.jsx("button",{onClick:()=>y(n,t),className:u("px-2.5 py-1 text-xs font-mono rounded transition-all",i===n?"bg-sky-500 text-white font-bold":"text-slate-400 hover:text-slate-200"),children:n},n))})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Cols (C):"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[2,3,4].map(n=>e.jsx("button",{onClick:()=>y(i,n),className:u("px-2.5 py-1 text-xs font-mono rounded transition-all",t===n?"bg-indigo-500 text-white font-bold":"text-slate-400 hover:text-slate-200"),children:n},n))})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider",children:[e.jsx("span",{children:"2D Input Cells [i][j]"}),e.jsxs("span",{className:"text-sky-400 font-mono",children:[i," x ",t," (",i*t," Total Elements)"]})]}),e.jsx("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2",children:s.map((n,r)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-xs font-mono text-slate-500 w-12",children:["Row ",r,":"]}),e.jsx("div",{className:"flex gap-2 flex-1",children:n.map((a,o)=>e.jsxs("div",{className:"flex-1",children:[e.jsx("input",{type:"number",value:a,onChange:l=>b(r,o,l.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-lg py-2 text-xs font-mono text-amber-300 outline-none transition-all"}),e.jsxs("div",{className:"text-[9px] text-center text-slate-500 mt-0.5",children:["[",r,"][",o,"]"]})]},o))})]},r))})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Terminal Output Preview"}),e.jsxs("div",{className:"flex gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800",children:[e.jsx("button",{onClick:()=>g("rowMajor"),className:u("px-2 py-0.5 text-[11px] font-medium rounded transition-all",x==="rowMajor"?"bg-emerald-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Row-Major"}),e.jsx("button",{onClick:()=>g("colMajor"),className:u("px-2 py-0.5 text-[11px] font-medium rounded transition-all",x==="colMajor"?"bg-indigo-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Column-Major"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-2",children:[e.jsx("div",{className:"text-slate-500 text-[11px]",children:'// Java Output (using System.out.print(matrix[i][j] + "\\t"))'}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800/80 space-y-1 overflow-x-auto",children:x==="rowMajor"?s.map((n,r)=>e.jsx("div",{className:"text-emerald-400 flex gap-6",children:n.map((a,o)=>e.jsx("span",{className:"w-8 text-right inline-block",children:a},o))},r)):Array.from({length:t}).map((n,r)=>e.jsx("div",{className:"text-indigo-400 flex gap-6",children:s.map((a,o)=>e.jsx("span",{className:"w-8 text-right inline-block",children:a[r]},o))},r))}),e.jsx("div",{className:"text-[11px] text-slate-400 pt-1",children:x==="rowMajor"?"▶ Outer loop iterates rows (i = 0..R-1), inner loop prints columns (j = 0..C-1).":"▶ Outer loop iterates columns (j = 0..C-1), inner loop prints rows (i = 0..R-1)."})]})]})]})]})},H=()=>{const[i,j]=p.useState(0),t=[{id:"input-output-basic",title:"1. Scanner Input & Output",file:"MatrixInputOutputDemo.java",description:"Standard ICSE Class 10 row-major input loop with user prompts and tabbed grid printing with println() linebreaks.",code:E,highlights:[14,21,23,34,38,39,41,47,50,53]},{id:"col-major",title:"2. Column-Major Traversal",file:"ColumnMajorTraversalDemo.java",description:"Traversing column-by-column (outer loop cols j, inner loop rows i), contrasting row-major and column-major element streams.",code:A,highlights:[25,27,28,37,39,40,56,64]},{id:"pretty-format",title:"3. Formatted Matrix Display",file:"PrettyMatrixFormattingDemo.java",description:'Professional matrix layout with System.out.printf("%6d"), index column headers, and boxed ASCII border frames.',code:T,highlights:[22,23,38,39,47,49,58,67]},{id:"search-count",title:"4. Search & Frequency Count",file:"MatrixSearchAndCountDemo.java",description:"Linear search across 2D matrix cells, recording matching row-column coordinate pairs, and counting total key frequency.",code:I,highlights:[29,39,40,41,42,49,58]}];return e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Matrix Input & Output Using Nested Loops"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Reading 2D array elements from users via Scanner or BufferedReader and displaying formatted matrix grids using nested ",e.jsx("code",{className:"text-amber-300 font-mono",children:"for"})," loops."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: The Nested Loop Traversal Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["To process a 2D matrix in Java, you need ",e.jsx("strong",{children:"two nested loops"}),":"]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Outer Loop (",e.jsx("code",{className:"text-amber-300 font-mono",children:"i"}),"):"]})," Controls the current ",e.jsx("strong",{children:"row index"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"0"})," to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"rows - 1"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Inner Loop (",e.jsx("code",{className:"text-amber-300 font-mono",children:"j"}),"):"]})," Controls the current ",e.jsx("strong",{children:"column index"})," from ",e.jsx("code",{className:"text-sky-300 font-mono",children:"0"})," to ",e.jsx("code",{className:"text-sky-300 font-mono",children:"cols - 1"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Analogy (Shyamnagar Center):"}),e.jsx("p",{className:"text-sm",children:"Sukanta Hui asks Swadeep to enter test scores for 3 subjects across 4 students. Swadeep inputs Row 0 (Student 1's scores), then Row 1 (Student 2's scores), and so on. Each row requires an inner loop pass across all subject columns!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Matrix Builder & Formatting Tool"]}),e.jsx(O,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Input vs Output Execution Steps"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-base",children:"1. Matrix Input Phase"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Reading user elements into cell locations:"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:"matrix[i][j] = sc.nextInt();"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsx("ul",{className:"list-disc pl-4 space-y-1 text-xs text-slate-400",children:e.jsxs("li",{children:["Populates each cell ",e.jsx("code",{className:"text-sky-300 font-mono",children:"matrix[i][j]"})," sequentially in row-major order."]})})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-base",children:"2. Formatted Output Phase"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Printing cells as a neat 2D grid:"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:'System.out.print(matrix[i][j] + "\\t");'}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-indigo-400",children:"System.out.println(); // Newline per row"}),e.jsx("div",{children:"}"})]}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-xs text-slate-400",children:[e.jsxs("li",{children:["Use tab ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"\\t"})," to separate column values."]}),e.jsxs("li",{children:["Call ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"System.out.println()"})," after completing each row."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Code Studio: Input, Output & Traversal"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Explore 4 practical BlueJ-compatible Java programs covering row-major input, column traversal, neat grid formatting, and matrix search."})]}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"4 ICSE Examples"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:t.map((m,s)=>e.jsxs("button",{onClick:()=>j(s),className:u("p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",i===s?"bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 mb-1",children:m.title}),e.jsx("div",{className:"font-mono text-[11px] text-slate-400 truncate",children:m.file})]},m.id))}),e.jsxs("div",{className:"p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:"font-semibold text-emerald-300 text-sm",children:t[i].title}),e.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/50",children:t[i].file})]}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:t[i].description})]}),e.jsx(v,{fileModule:t[i].code,title:t[i].file,highlightLines:t[i].highlights})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Forgetting to place ",e.jsx("code",{className:"text-rose-300 font-mono",children:"System.out.println();"})," after the inner loop. Without it, all matrix elements will print in a single horizontal line instead of a grid!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always print user prompt messages like ",e.jsx("code",{className:"text-emerald-300 font-mono",children:'"Enter element [" + i + "][" + j + "]: "'})," so users know which cell value they are entering in BlueJ terminal."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• What happens if you swap the inner and outer loops when printing a non-square matrix (e.g. 2x4)?"}),e.jsx("li",{children:"• How can you print a 2D matrix in reverse row order (from bottom row to top row)?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(S,{title:"Matrix Input & Output FAQs",questions:k})}),e.jsx("section",{className:"space-y-5",children:e.jsx(N,{content:M,title:"Module 003_001 Topic 1: Matrix Input and Output Using Nested Loops",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic1_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(C,{note:"Remember: inner loop prints columns across the current row, outer loop moves down to the next row. Never forget System.out.println() after closing inner loop! — Sukanta Hui"})})]})};export{H as default};

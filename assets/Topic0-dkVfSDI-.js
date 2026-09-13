import{b as h,j as e,bh as c}from"./vendor-react-core-CaA1o1Cx.js";import{J as f}from"./JavaFileLoader-BYsFDtcs.js";import{F as w}from"./FAQTemplate-D_90hN4m.js";import{P as j}from"./PlainTextPrint-yt10TRX1.js";import{T as v}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const S=`/**\r
 * Topic 0: Declaration and Memory Representation of 2D Arrays\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
public class MatrixDeclarationDemo {\r
\r
    public static void main(String[] args) {\r
        // Method 1: Dynamic Allocation using new operator (3 rows x 3 columns)\r
        // In Java, Heap allocates 1 primary array of 3 references + 3 sub-arrays of integers\r
        int[][] dynamicMatrix = new int[3][3];\r
\r
        // Method 2: Direct Literal Initializer (Pre-populated values)\r
        int[][] literalMatrix = {\r
            {10, 20, 30},\r
            {40, 50, 60},\r
            {70, 80, 90}\r
        };\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: 2D ARRAY DECLARATION & MEMORY DEMO");\r
        System.out.println("==================================================");\r
\r
        // Printing dimension information using .length property\r
        System.out.println("Literal Matrix Dimensions:");\r
        System.out.println("Number of Rows (matrix.length):       " + literalMatrix.length);\r
        System.out.println("Number of Columns (matrix[0].length): " + literalMatrix[0].length);\r
        System.out.println("Total Element Cells:                  " + (literalMatrix.length * literalMatrix[0].length));\r
        System.out.println();\r
\r
        // Traversing and printing literal matrix in tabular format\r
        System.out.println("--- Tabular Grid Output (Row-Wise) ---");\r
        for (int i = 0; i < literalMatrix.length; i++) {\r
            for (int j = 0; j < literalMatrix[i].length; j++) {\r
                System.out.print(literalMatrix[i][j] + "\\t");\r
            }\r
            System.out.println(); // Newline after each row\r
        }\r
        System.out.println();\r
\r
        // Inspecting Default Values in Dynamic Matrix\r
        System.out.println("--- Default Values in Dynamic Matrix (int[3][3]) ---");\r
        for (int i = 0; i < dynamicMatrix.length; i++) {\r
            for (int j = 0; j < dynamicMatrix[i].length; j++) {\r
                System.out.print(dynamicMatrix[i][j] + "\\t"); // Default is 0 for int\r
            }\r
            System.out.println();\r
        }\r
        System.out.println();\r
\r
        // Demonstrating Jagged Array Concept (Array of Arrays with variable row sizes)\r
        int[][] jaggedArray = new int[3][];\r
        jaggedArray[0] = new int[2]; // Row 0 has 2 elements\r
        jaggedArray[1] = new int[4]; // Row 1 has 4 elements\r
        jaggedArray[2] = new int[3]; // Row 2 has 3 elements\r
\r
        System.out.println("--- Jagged Array Row Sizes (Array of Arrays) ---");\r
        for (int i = 0; i < jaggedArray.length; i++) {\r
            System.out.println("Row " + i + " length (jaggedArray[" + i + "].length): " + jaggedArray[i].length);\r
        }\r
        System.out.println("==================================================");\r
    }\r
}\r
\r
/*\r
 * ============================================================================\r
 * VARIABLE DESCRIPTION TABLE (ICSE BOARD STANDARD DOCUMENTATION)\r
 * ============================================================================\r
 * Variable Name   Data Type   Purpose\r
 * ----------------------------------------------------------------------------\r
 * dynamicMatrix   int[][]     Stores dynamically allocated 3x3 2D array\r
 * literalMatrix   int[][]     Stores pre-initialized 3x3 matrix values\r
 * jaggedArray     int[][]     Demonstrates array of arrays with different row lengths\r
 * i               int         Loop counter for row traversal\r
 * j               int         Loop counter for column traversal\r
 * ============================================================================\r
 */`,N=`/**
 * Topic 0 - Example 2: Matrix Dimensions and Memory Architecture
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. matrix.length (rows) vs matrix[i].length (columns)
 * 2. Array of Arrays memory addresses & object references
 * 3. Default element initialization across primitive and reference types
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class MatrixDimensionsAndMemoryDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 0 · EXAMPLE 2: 2D ARRAY DIMENSIONS & MEMORY REFS");
        System.out.println("============================================================");

        // 1. Instantiating a rectangular 3x4 integer matrix
        int rows = 3;
        int cols = 4;
        int[][] grid = new int[rows][cols];

        // 2. Proving "Array of Arrays" structure
        System.out.println("1. Memory Reference Hierarchy:");
        System.out.println("   grid reference (Stack -> Heap row pointer):  " + grid);
        System.out.println("   grid[0] reference (Heap -> Row 0 1D array): " + grid[0]);
        System.out.println("   grid[1] reference (Heap -> Row 1 1D array): " + grid[1]);
        System.out.println("   grid[2] reference (Heap -> Row 2 1D array): " + grid[2]);
        System.out.println();

        // 3. Dimension Inspection using .length property
        System.out.println("2. Dimension Inspection via .length Property:");
        System.out.println("   Outer array length (grid.length = Number of Rows):    " + grid.length);
        for (int r = 0; r < grid.length; r++) {
            System.out.println("   Row " + r + " length (grid[" + r + "].length = Columns in Row " + r + "): " + grid[r].length);
        }
        System.out.println("   Total elements (Rows x Cols): " + (grid.length * grid[0].length));
        System.out.println();

        // 4. Default initialization across different primitive types
        System.out.println("3. Default Values in Uninitialized 2D Arrays:");
        double[][] floatMat = new double[2][2];
        boolean[][] boolMat = new boolean[2][2];
        String[][] strMat   = new String[2][2];

        System.out.println("   int default cell value:     " + grid[0][0]);
        System.out.println("   double default cell value:  " + floatMat[0][0]);
        System.out.println("   boolean default cell value: " + boolMat[0][0]);
        System.out.println("   String default cell value:  " + strMat[0][0]);
        System.out.println();

        // 5. Demonstrating that changing a row changes the reference
        int[] replacementRow = {99, 88, 77, 66};
        grid[1] = replacementRow; // Point row 1 to a completely new 1D array
        System.out.println("4. After Reassigning grid[1] to a New 1D Array:");
        System.out.println("   New grid[1] reference: " + grid[1]);
        System.out.print("   Row 1 values: ");
        for (int val : grid[1]) {
            System.out.print(val + " ");
        }
        System.out.println("\\n============================================================");
    }
}
`,A=`/**
 * Topic 0 - Example 3: Jagged (Ragged) Array Declaration & Traversal
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Allocating 2D arrays with varying row lengths
 * 2. Pascal-style triangular array allocation
 * 3. Safe traversal using dynamic row lengths (jagged[i].length)
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class JaggedArrayDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 0 · EXAMPLE 3: JAGGED (RAGGED) ARRAYS IN JAVA");
        System.out.println("============================================================");

        // Step 1: Declare outer array with 4 rows, leaving column dimension unspecified
        int[][] jagged = new int[4][];

        // Step 2: Dynamically allocate each individual row with a different size
        jagged[0] = new int[2]; // Row 0 has 2 columns
        jagged[1] = new int[4]; // Row 1 has 4 columns
        jagged[2] = new int[3]; // Row 2 has 3 columns
        jagged[3] = new int[5]; // Row 3 has 5 columns

        // Step 3: Populate each cell with a generated value (row * 10 + col)
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = (i + 1) * 10 + (j + 1);
            }
        }

        // Step 4: Display each row's size and contents
        System.out.println("1. Traversing Non-Uniform Jagged Array:");
        for (int i = 0; i < jagged.length; i++) {
            System.out.print("Row " + i + " (Length " + jagged[i].length + "): \\t");
            for (int j = 0; j < jagged[i].length; j++) {
                System.out.print(jagged[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        // Step 5: Triangular Array (Pascal Triangle structure preview)
        int levels = 5;
        int[][] triangle = new int[levels][];
        for (int i = 0; i < levels; i++) {
            triangle[i] = new int[i + 1]; // Row i has i+1 elements
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    triangle[i][j] = 1; // Boundary 1s
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }
        }

        System.out.println("2. Pascal's Triangle (Constructed via Jagged Allocation):");
        for (int i = 0; i < triangle.length; i++) {
            // Indent for pyramidal visualization
            for (int s = 0; s < levels - i; s++) {
                System.out.print("  ");
            }
            for (int j = 0; j < triangle[i].length; j++) {
                System.out.print(triangle[i][j] + "   ");
            }
            System.out.println();
        }
        System.out.println("============================================================");
    }
}
`,D=`/**
 * Topic 0 - Example 4: 2D Arrays with Non-Integer Data Types
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. char[][] 2D array for Tic-Tac-Toe / Game Boards
 * 2. double[][] 2D array for decimal coordinates / temperature logs
 * 3. String[][] 2D array for classroom seating charts / student tables
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class DifferentDataTypesMatrixDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 0 · EXAMPLE 4: 2D ARRAYS OF DIFFERENT DATA TYPES");
        System.out.println("============================================================");

        // 1. Character Matrix: Tic-Tac-Toe Game Board
        char[][] board = {
            {'X', 'O', 'X'},
            {'O', 'X', ' '},
            {'O', ' ', 'X'}
        };

        System.out.println("1. char[][] Matrix (Tic-Tac-Toe Game Board):");
        for (int i = 0; i < board.length; i++) {
            System.out.print("   ");
            for (int j = 0; j < board[i].length; j++) {
                System.out.print(" " + board[i][j] + " ");
                if (j < board[i].length - 1) System.out.print("|");
            }
            System.out.println();
            if (i < board.length - 1) {
                System.out.println("   ---+---+---");
            }
        }
        System.out.println();

        // 2. Double Matrix: Temperature Readings (3 Cities across 4 Days)
        double[][] temperatures = {
            {28.5, 29.2, 31.0, 30.4}, // Kolkata
            {22.0, 21.5, 23.8, 24.1}, // Darjeeling
            {34.6, 35.0, 36.2, 35.8}  // Asansol
        };
        String[] cities = {"Kolkata", "Darjeeling", "Asansol"};

        System.out.println("2. double[][] Matrix (Temperature Readings in Celsius):");
        System.out.println("   City         \\tDay 1\\tDay 2\\tDay 3\\tDay 4");
        for (int i = 0; i < temperatures.length; i++) {
            System.out.printf("   %-12s\\t", cities[i]);
            for (int j = 0; j < temperatures[i].length; j++) {
                System.out.printf("%.1f°C\\t", temperatures[i][j]);
            }
            System.out.println();
        }
        System.out.println();

        // 3. String Matrix: Classroom Seating Chart (Barrackpore Lab)
        String[][] seatingChart = {
            {"Debangshu", "Swadeep", "Priyanka"},
            {"Ananya", "Rohan", "Siddhartha"},
            {"Sneha", "Subhashree", "Arpan"}
        };

        System.out.println("3. String[][] Matrix (Student Lab Seating Plan):");
        for (int i = 0; i < seatingChart.length; i++) {
            System.out.print("   Row " + i + ": ");
            for (int j = 0; j < seatingChart[i].length; j++) {
                System.out.printf("[Col %d: %-10s] ", j, seatingChart[i][j]);
            }
            System.out.println();
        }
        System.out.println("============================================================");
    }
}
`,C=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 0: Declaration and Memory Representation of 2D Arrays\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. WHAT IS A 2D ARRAY IN JAVA?\r
--------------------------------------------------------------------------------\r
- A 2D array is a tabular collection of homogeneous elements arranged in rows\r
  and columns.\r
- Unlike languages like C/C++ where 2D arrays occupy a single contiguous block,\r
  Java implements 2D arrays as an "Array of Arrays".\r
- The master reference variable (in Stack memory) points to a primary 1D array\r
  of row references on the Heap.\r
- Each row reference points to its own independent 1D array of primitive values\r
  or object references on the Heap.\r
\r
2. SYNTAX & DECLARATION VARIATIONS\r
--------------------------------------------------------------------------------\r
a) Dynamic Allocation (using 'new'):\r
   int[][] matrix = new int[3][4];\r
   - Allocates 3 rows and 4 columns (Total 12 elements).\r
   - Default value for all integer cells is 0.\r
\r
b) Direct Literal Initializer:\r
   int[][] matrix = {\r
       {10, 20, 30},\r
       {40, 50, 60},\r
       {70, 80, 90}\r
   };\r
\r
c) Other Valid Java Declaration Syntaxes:\r
   int[][] arr1 = new int[3][3]; // Standard & Preferred\r
   int arr2[][] = new int[3][3]; // Valid C-style\r
   int[] arr3[] = new int[3][3]; // Valid Java-style\r
\r
3. HEAP MEMORY ARCHITECTURE ("ARRAY OF ARRAYS")\r
--------------------------------------------------------------------------------\r
Stack Memory:\r
  [ matrix ] ---> Pointer @0x7A1B\r
\r
Heap Memory:\r
  @0x7A1B (Master Array of Row Pointers, length = 3)\r
   +----------+----------+----------+\r
   |  Row 0   |  Row 1   |  Row 2   |\r
   | @0x8B01  | @0x8B02  | @0x8B03  |\r
   +----------+----------+----------+\r
        |          |          |\r
        v          v          v\r
   +---------+ +---------+ +---------+\r
   | 10 | 20 | | 30 | 40 | | 50 | 60 |  (Sub-arrays of data)\r
   +---------+ +---------+ +---------+\r
\r
4. DIMENSION FORMULAS & PROPERTIES\r
--------------------------------------------------------------------------------\r
- Number of Rows:                matrix.length\r
- Number of Columns in Row i:    matrix[i].length\r
- Total Element Count:           matrix.length * matrix[0].length (for rectangular)\r
- First Cell Index:              matrix[0][0]\r
- Last Cell Index (M x N):       matrix[M - 1][N - 1]\r
\r
5. JAGGED / RAGGED ARRAYS\r
--------------------------------------------------------------------------------\r
- When row sub-arrays have different lengths:\r
    int[][] jagged = new int[3][];\r
    jagged[0] = new int[2]; // Row 0 has 2 columns\r
    jagged[1] = new int[4]; // Row 1 has 4 columns\r
    jagged[2] = new int[1]; // Row 2 has 1 column\r
\r
6. NESTED LOOP TRAVERSAL TEMPLATE (ROW-MAJOR)\r
--------------------------------------------------------------------------------\r
for (int i = 0; i < matrix.length; i++) {           // Outer loop for rows\r
    for (int j = 0; j < matrix[i].length; j++) {    // Inner loop for columns\r
        System.out.print(matrix[i][j] + "\\t");\r
    }\r
    System.out.println();                           // Advance to next line\r
}\r
\r
7. COMMON ICSE BOARD PITFALLS & MISTAKES\r
--------------------------------------------------------------------------------\r
[!] Error: for(int i = 0; i <= matrix.length; i++)\r
    Reason: Using '<=' leads to ArrayIndexOutOfBoundsException at i = length.\r
    Fix: Always use strict '<' (i < matrix.length).\r
\r
[!] Error: Confusing matrix.length and matrix[0].length\r
    Remember: matrix.length = Total Rows, matrix[0].length = Total Columns.\r
\r
[!] Error: int[][] a = new int[][3];\r
    Reason: Row dimension is mandatory when allocating 2D arrays in Java.\r
\r
8. ICSE SECTION B CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Class name in PascalCase (e.g., MatrixDemo).\r
[✓] Imported java.util.Scanner if keyboard input is required.\r
[✓] Proper matrix formatting with '\\t' and System.out.println().\r
[✓] Complete Variable Description Table at the end of the program.\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"Always draw a small 3x3 index grid on the rough sheet during your ICSE exam.\r
Label row indices (0, 1, 2) on the left and column indices (0, 1, 2) on top.\r
This prevents indexing blunders in 15-mark Section B questions!"\r
================================================================================`,E=[{question:"What is a Two-Dimensional (2D) array in Java, and how does Java structure it in memory?",shortAnswer:"A 2D array is an 'Array of Arrays' where a reference points to an array of row references, and each row reference points to a 1D array of elements on the Heap.",explanation:"In Java, multi-dimensional arrays are not stored as single continuous flat blocks in memory (unlike C/C++). A 2D array variable (e.g., int[][] arr) resides in the Stack memory and holds a reference to a primary 1D array of references in the Heap. Each element of this primary array holds a reference pointing to an independent 1D array of primitive values or objects.",hint:"Think of it as a master list where each entry holds the memory address of another individual list.",level:"basic",codeExample:`int[][] arr = new int[3][4];
// arr points to 1D array of size 3 (rows)
// arr[0], arr[1], arr[2] each point to 1D arrays of size 4`},{question:"What are the valid syntax forms to declare a 2D integer array in Java for ICSE Board exams?",shortAnswer:"1) int[][] a; 2) int a[][]; 3) int[] a[]; 4) int [][]a;",explanation:"Java permits square brackets to be placed immediately after the data type, after the variable name, or split between them. For ICSE Board programs, 'int[][] arr' is the standard modern Java convention and is highly recommended.",hint:"Brackets can appear with the data type or with the identifier.",level:"basic",codeExample:`int[][] arr1 = new int[3][3]; // Recommended
int arr2[][] = new int[3][3]; // Valid
int[] arr3[] = new int[3][3]; // Valid`},{question:"How do you calculate the total number of element cells in a rectangular matrix declared as int[][] mat = new int[4][5]?",shortAnswer:"Total cells = rows * columns = 4 * 5 = 20 elements.",explanation:"In a rectangular matrix with M rows and N columns, the total capacity is M * N. Here, with 4 rows and 5 columns, there are 20 individual integer storage slots.",hint:"Multiply row dimension by column dimension.",level:"basic",codeExample:`int[][] mat = new int[4][5];
int totalCells = mat.length * mat[0].length; // 4 * 5 = 20`},{question:"What is the difference between mat.length and mat[0].length in a 2D array?",shortAnswer:"mat.length returns the number of rows, while mat[0].length returns the number of columns in row 0.",explanation:"Because a 2D array is an array of row arrays, mat.length measures the length of the master array (how many row references exist). mat[0].length accesses the first row sub-array and measures its length (how many columns/elements it contains).",hint:"mat is the parent array; mat[0] is the first child array.",level:"basic",codeExample:`int[][] mat = new int[3][5];
System.out.println(mat.length);    // Output: 3 (rows)
System.out.println(mat[0].length); // Output: 5 (columns)`},{question:"What are the default values assigned to 2D array elements upon dynamic allocation with the new operator?",shortAnswer:"Numeric arrays (int, double, etc.) get 0 or 0.0, boolean gets false, char gets '\\u0000', and object/String references get null.",explanation:"When you instantiate a 2D array with 'new', Java initializes the primary reference array and all sub-arrays on the Heap, zeroing out all memory bits by default.",hint:"Java always initializes Heap-allocated objects to their type-specific zero state.",level:"basic",codeExample:`int[][] nums = new int[2][2];       // nums[0][0] is 0
boolean[][] flags = new boolean[2][2]; // flags[0][0] is false
String[][] words = new String[2][2];   // words[0][0] is null`},{question:"What happens if you try to access mat[3][2] in a matrix declared as int[][] mat = new int[3][3]?",shortAnswer:"An ArrayIndexOutOfBoundsException is thrown at runtime.",explanation:"For an array with 3 rows, valid row indices are 0, 1, and 2. Attempting to access row index 3 exceeds the upper bound, causing Java's runtime environment to throw an ArrayIndexOutOfBoundsException.",hint:"Array indices in Java are 0-indexed and run from 0 to length - 1.",level:"basic",codeExample:`int[][] mat = new int[3][3];
// System.out.println(mat[3][2]); 
// Throws java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3`},{question:"How do you declare and initialize a 2D matrix using a direct literal initializer?",shortAnswer:"Use nested curly braces: int[][] mat = {{1, 2}, {3, 4}, {5, 6}};",explanation:"A literal initializer allocates the master array and each row array in a single statement, directly assigning the values specified in inner comma-separated braces.",hint:"Outer curly braces hold the collection of inner curly braces representing each row.",level:"basic",codeExample:`int[][] matrix = {
    {10, 20, 30},
    {40, 50, 60}
}; // 2 rows x 3 cols`},{question:"What is a 'Jagged Array' (or Ragged Array) in Java?",shortAnswer:"A 2D array where different rows have different numbers of columns (unequal row lengths).",explanation:"Since Java stores a 2D array as independent 1D arrays referenced by a master array, each row array can be instantiated with a different size.",hint:"Jagged means uneven rows.",level:"intermediate",codeExample:`int[][] jagged = new int[3][];
jagged[0] = new int[2]; // 2 elements
jagged[1] = new int[5]; // 5 elements
jagged[2] = new int[3]; // 3 elements`},{question:"Can you omit the row size during dynamic allocation, e.g., int[][] a = new int[][4]?",shortAnswer:"No, this produces a compile-time error. The first dimension (row size) is mandatory.",explanation:"Java needs to allocate the master array of references first. Therefore, the first dimension (number of rows) must be specified. Omitting the row dimension while specifying the column dimension is illegal in Java syntax.",hint:"Java must know how many row reference pointers to create first.",level:"intermediate",codeExample:`// int[][] a = new int[][4]; // COMPILE ERROR: ']' expected
int[][] b = new int[3][];    // VALID (allocates master array of 3 row references)`},{question:"What is the memory size in bytes of a 2D primitive integer array of dimensions 3x4 in standard 32-bit slot calculations for ICSE theory?",shortAnswer:"Total primitive integer data size is 3 * 4 * 4 bytes = 48 bytes (excluding object headers and reference overhead).",explanation:"Each int in Java occupies 4 bytes (32 bits). With 3 rows and 4 columns, there are 12 integer elements. Thus, 12 * 4 = 48 bytes of primitive data payload.",hint:"1 int = 4 bytes. Total bytes = Total elements * 4.",level:"intermediate",codeExample:`// 3 rows * 4 columns = 12 elements
// 12 * 4 bytes = 48 bytes`},{question:"How do you traverse and print all elements of an M x N 2D array in row-major order?",shortAnswer:"Use two nested for loops: the outer loop runs from i = 0 to M - 1, and the inner loop runs from j = 0 to N - 1.",explanation:"In row-major traversal, the outer loop fixes the row index i, while the inner loop visits every column j from 0 to N-1 before advancing to the next row.",hint:"Outer loop is row (i), inner loop is column (j).",level:"basic",codeExample:`for (int i = 0; i < mat.length; i++) {
    for (int j = 0; j < mat[i].length; j++) {
        System.out.print(mat[i][j] + "\\t");
    }
    System.out.println();
}`},{question:"How do you traverse a 2D matrix in Column-Major order?",shortAnswer:"Place the column loop on the outside (j = 0 to cols - 1) and the row loop on the inside (i = 0 to rows - 1).",explanation:"Column-major traversal processes an entire vertical column from top to bottom before moving to the next column on the right.",hint:"Outer loop controls j (columns), inner loop controls i (rows).",level:"intermediate",codeExample:`for (int j = 0; j < mat[0].length; j++) {
    for (int i = 0; i < mat.length; i++) {
        System.out.print(mat[i][j] + " ");
    }
    System.out.println(); // Prints each column on a new line
}`},{question:"What is stored in the variable 'matrix' in the statement: int[][] matrix = new int[2][3]?",shortAnswer:"A reference (memory address pointer) to the primary array object in Heap memory.",explanation:"In Java, array variables are reference types. The variable 'matrix' on the Stack frame contains a 32-bit or 64-bit reference address pointing to the master 1D array object on the Heap.",hint:"Non-primitives in Java are reference variables, not value containers.",level:"intermediate",codeExample:`int[][] matrix = new int[2][3];
System.out.println(matrix); // Outputs object reference like [[I@7a81197d`},{question:"What does the type descriptor '[[I' indicate when printing a 2D integer array object reference?",shortAnswer:"'[[' denotes a 2D array, and 'I' denotes the primitive integer type.",explanation:"Java runtime uses internal JVM class name signatures: '[' represents a single dimension, '[[' represents two dimensions, and 'I' stands for primitive type int.",hint:"Each bracket represents one array dimension.",level:"advanced",codeExample:`int[][] a = new int[2][2];
System.out.println(a.getClass().getName()); // Output: [[I`},{question:"What is the index of the bottom-right corner element in an M x N matrix named 'grid'?",shortAnswer:"grid[M - 1][N - 1] or grid[grid.length - 1][grid[0].length - 1]",explanation:"Since indices in both dimensions start at 0 and end at length - 1, the bottom-most row is M-1 and the right-most column is N-1.",hint:"Subtract 1 from both maximum row and column dimensions.",level:"basic",codeExample:`int M = grid.length;
int N = grid[0].length;
int bottomRight = grid[M - 1][N - 1];`},{question:"Can you change the size of an already declared 2D array dynamically in Java?",shortAnswer:"No, array sizes in Java are fixed once instantiated on the Heap.",explanation:"Once an array object is allocated on the Heap, its length cannot be expanded or shrunk. To store more elements, you must create a new array with larger dimensions and copy the existing elements.",hint:"Arrays in Java are fixed-size data structures.",level:"basic",codeExample:`int[][] a = new int[3][3];
// To expand, create new 4x4 array and copy elements`},{question:`What is the output of the following snippet?
int[][] a = {{1, 2}, {3, 4, 5}};
System.out.println(a.length + "," + a[1].length);`,shortAnswer:"2,3",explanation:"a.length is the number of rows (2 rows). a[1] is the second row ({3, 4, 5}), whose length is 3.",hint:"Count the number of inner sets for a.length and items in the second inner set for a[1].length.",level:"basic",codeExample:`int[][] a = {{1, 2}, {3, 4, 5}};
System.out.println(a.length + "," + a[1].length); // Output: 2,3`},{question:"If int[][] arr = new int[3][]; what is the value of arr[0] before it is instantiated?",shortAnswer:"null",explanation:"The master array arr holds references to row arrays. Because reference variables default to null in Heap memory, arr[0], arr[1], and arr[2] are all null until explicitly assigned new int[cols].",hint:"Uninitialized object references are always null.",level:"intermediate",codeExample:`int[][] arr = new int[3][];
System.out.println(arr[0]); // Output: null
// System.out.println(arr[0][0]); // Throws NullPointerException!`},{question:"What exception occurs if you execute arr[0][0] when int[][] arr = new int[3][]?",shortAnswer:"NullPointerException",explanation:"arr[0] is null because the row sub-array has not yet been allocated with 'new'. Attempting to de-reference a null reference to access index 0 results in a NullPointerException.",hint:"Accessing a member or index of a null reference causes NullPointerException.",level:"intermediate",codeExample:`int[][] arr = new int[3][];
// arr[0][0] = 10; // RUNTIME ERROR: NullPointerException`},{question:"What is the difference between a square matrix and a rectangular matrix?",shortAnswer:"In a square matrix, rows == columns (M == N). In a rectangular matrix, rows != columns (M != N).",explanation:"A square matrix has equal dimensions (e.g., 3x3, 4x4) and possesses well-defined primary and secondary diagonals. A rectangular matrix has differing row and column counts (e.g., 3x5).",hint:"Square means equal width and height.",level:"basic",codeExample:`int[][] sq = new int[3][3];   // Square matrix (3x3)
int[][] rect = new int[2][4]; // Rectangular matrix (2x4)`},{question:"How do you clone or perform a shallow copy of a 2D array in Java?",shortAnswer:"Calling matrix.clone() clones only the primary array of row references; the individual row arrays are shared.",explanation:"In a shallow copy (such as clone()), the new master array receives copied reference addresses pointing to the exact same Heap sub-arrays. Modifying an element in the cloned array modifies the original.",hint:"Shallow copy copies reference pointers, not the sub-arrays themselves.",level:"advanced",codeExample:`int[][] original = {{1, 2}, {3, 4}};
int[][] shallow = original.clone();
shallow[0][0] = 99;
System.out.println(original[0][0]); // Output: 99 (affected!)`},{question:"How do you create a true Deep Copy of a 2D matrix in Java?",shortAnswer:"Instantiate a new 2D array of the same dimensions and manually copy every individual element using nested loops or row.clone().",explanation:"A deep copy creates completely new sub-arrays in Heap memory so that modifying the copy has zero effect on the original array.",hint:"Copy each element cell-by-cell into a newly allocated matrix.",level:"advanced",codeExample:`int[][] copy = new int[orig.length][orig[0].length];
for(int i = 0; i < orig.length; i++) {
    for(int j = 0; j < orig[0].length; j++) {
        copy[i][j] = orig[i][j];
    }
}`},{question:"Why does ICSE Board exam Section B require a Variable Description Table for 2D array programs?",shortAnswer:"To document the name, data type, and algorithmic purpose of each variable used, earning 2-3 marks in the marking scheme.",explanation:"The ICSE Board marking scheme allocates specific marks for documentation. A standard table listing variable names (e.g., matrix, i, j, r, c), data types (int[][], int), and clear descriptions ensures full marks.",hint:"Always include the variable table at the end of your answer in Section B.",level:"board-hot",codeExample:`/*
 * VARIABLE DESCRIPTION TABLE:
 * Variable Name | Data Type | Purpose
 * arr           | int[][]   | Stores the 3x3 input matrix
 * i             | int       | Loop index for rows
 * j             | int       | Loop index for columns
 */`},{question:"What is the effect of writing 'for(int i = 0; i <= arr.length; i++)' when traversing a 2D array?",shortAnswer:"It causes an ArrayIndexOutOfBoundsException on the final iteration when i == arr.length.",explanation:"Because row indexing is 0 to arr.length - 1, using '<=' causes the loop to attempt accessing index arr.length, which is out of bounds.",hint:"Always use strict inequality (<) with .length.",level:"basic",codeExample:`// WRONG: i <= arr.length
// CORRECT: i < arr.length`},{question:"Can a 2D array in Java store mixed data types, such as integers in row 0 and doubles in row 1?",shortAnswer:"No, Java arrays are homogeneous; all elements must be of the declared data type (or assignable subtypes in object arrays).",explanation:"Java is strongly typed. An int[][] can only store 32-bit primitive integers across all its rows and columns.",hint:"Homogeneous means all elements share the exact same data type.",level:"basic",codeExample:`int[][] a = new int[2][2];
// a[0][0] = 5.5; // COMPILE ERROR: incompatible types: possible lossy conversion from double to int`}],R=()=>{const[t,o]=h.useState({r:0,c:0}),[a,r]=h.useState("rectangular"),i=a==="rectangular"?[[10,20,30],[40,50,60],[70,80,90]]:[[5,15],[25,35,45,55],[65]];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Memory Layout Model:"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{r("rectangular"),o({r:0,c:0})},className:c("px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",a==="rectangular"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Rectangular Matrix (3x3)"}),e.jsx("button",{onClick:()=>{r("jagged"),o({r:0,c:0})},className:c("px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",a==="jagged"?"bg-indigo-500 text-white shadow-md shadow-indigo-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Jagged Array (Unequal Rows)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-sky-500/30 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"}),e.jsx("h4",{className:"text-sm font-bold text-sky-400 uppercase tracking-wider",children:"Stack Memory"})]}),e.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Local reference variable stored on the execution stack frame."}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1 font-mono text-xs",children:[e.jsx("div",{className:"text-amber-400 font-semibold",children:"int[][] matrix"}),e.jsxs("div",{className:"text-slate-400 text-[11px]",children:["Ref Pointer: ",e.jsx("span",{className:"text-emerald-400",children:"@0x7a89b"})]})]})]}),e.jsx("div",{className:"mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400",children:"Points to row array object on Heap."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-indigo-500/30 flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-400"}),e.jsx("h4",{className:"text-sm font-bold text-indigo-400 uppercase tracking-wider",children:"Heap: Row Array Object"})]}),e.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Primary 1D array holding references to each row array."}),e.jsx("div",{className:"space-y-2 font-mono text-xs",children:i.map((m,n)=>e.jsxs("div",{onClick:()=>o({r:n,c:0}),className:c("p-2.5 rounded-lg border transition-all cursor-pointer flex justify-between items-center",t.r===n?"bg-indigo-500/20 border-indigo-500/50 text-indigo-300":"bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsxs("span",{children:["matrix[",n,"]"]}),e.jsxs("span",{className:"text-[11px] text-emerald-400",children:["@row_",n]})]},n))})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400",children:["Array of length = ",i.length]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-emerald-500/30",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),e.jsx("h4",{className:"text-sm font-bold text-emerald-400 uppercase tracking-wider",children:"Heap: Primitive Element Rows"})]}),e.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Click any cell to inspect its row-column index and value."}),e.jsx("div",{className:"space-y-3 font-mono text-xs",children:i.map((m,n)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center justify-between",children:[e.jsxs("span",{children:["Row ",n," (",m.length," items)"]}),e.jsxs("span",{className:"text-emerald-400/80",children:["@row_",n]})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:m.map((d,x)=>{const s=t.r===n&&t.c===x;return e.jsx("button",{onClick:()=>o({r:n,c:x}),className:c("px-3 py-2 rounded-lg border text-xs font-semibold transition-all duration-200 min-w-[48px] text-center",s?"bg-amber-500 text-slate-950 border-amber-400 ring-2 ring-amber-400/30 scale-105":"bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700"),children:d},x)})})]},n))})]})]}),e.jsxs("div",{className:"bg-slate-950/90 p-4 rounded-xl border border-amber-500/30 flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono rounded",children:["matrix[",t.r,"][",t.c,"]"]}),e.jsxs("span",{className:"text-sm text-slate-300",children:["Value: ",e.jsx("strong",{className:"text-amber-300 font-mono text-base",children:i[t.r]?.[t.c]??"N/A"})]})]}),e.jsxs("div",{className:"text-xs text-slate-400",children:["Row index ",e.jsxs("code",{className:"text-sky-300",children:["i = ",t.r]})," | Column index ",e.jsxs("code",{className:"text-indigo-300",children:["j = ",t.c]})]})]})]})},T=()=>{const t=[[10,20],[30,40]],o=t.length,a=t[0].length,r=o*a,[l,p]=h.useState(0),[i,m]=h.useState(!1);h.useEffect(()=>{let s;return i&&(s=setInterval(()=>{p(u=>(u+1)%r)},1200)),()=>clearInterval(s)},[i,r]);const n=Math.floor(l/a),d=l%a,x=t[n][d];return e.jsxs("div",{className:"bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🔄 Interactive Nested Loop Step-by-Step Tracer"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Watch outer row loop (i) and inner column loop (j) execute step-by-step."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>p(s=>s>0?s-1:r-1),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800 transition-all",children:"◀ Prev Step"}),e.jsx("button",{onClick:()=>m(!i),className:c("px-4 py-1.5 text-xs font-bold rounded-lg shadow-md transition-all",i?"bg-amber-500 text-slate-950 hover:bg-amber-400":"bg-emerald-500 text-white hover:bg-emerald-400"),children:i?"⏸ Pause":"▶ Play Auto Trace"}),e.jsx("button",{onClick:()=>p(s=>(s+1)%r),className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-800 transition-all",children:"Next Step ▶"}),e.jsx("button",{onClick:()=>{p(0),m(!1)},className:"px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs rounded-lg border border-slate-800",children:"🔄 Reset"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"2D Array Grid (2x2 Matrix)"}),e.jsx("div",{className:"grid grid-cols-2 gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800",children:t.map((s,u)=>s.map((y,g)=>{const b=u===n&&g===d;return e.jsxs("div",{className:c("p-4 rounded-xl border text-center transition-all duration-300 font-mono",b?"bg-sky-500/20 border-sky-400 text-white ring-2 ring-sky-400/40 scale-105 shadow-lg shadow-sky-500/10":"bg-slate-950 border-slate-800 text-slate-400"),children:[e.jsxs("div",{className:"text-[10px] text-slate-500 mb-1",children:["[",u,"][",g,"]"]}),e.jsx("div",{className:"text-lg font-bold",children:y})]},`${u}-${g}`)}))})]}),e.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Live Trace Table State"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-slate-400",children:"Step Progress:"}),e.jsxs("span",{className:"text-amber-400 font-bold",children:["Step ",l+1," of ",r]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Outer Loop (Row i):"}),e.jsxs("span",{className:"text-sky-300 font-bold",children:["i = ",n]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Inner Loop (Col j):"}),e.jsxs("span",{className:"text-indigo-300 font-bold",children:["j = ",d]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Accessed Cell:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:["matrix[",n,"][",d,"] = ",x]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 text-[11px] text-slate-300 leading-relaxed font-sans",children:["💡 ",e.jsx("span",{className:"font-semibold",children:"Execution note:"})," For ",e.jsxs("code",{className:"text-sky-300",children:["i = ",n]}),", inner loop ",e.jsxs("code",{className:"text-indigo-300",children:["j = ",d]})," accesses cell value ",e.jsx("strong",{className:"text-amber-300",children:x}),"."]})]})]})]})]})},H=()=>{const[t,o]=h.useState(0),a=[{id:"decl-basic",title:"1. Core Declarations",file:"MatrixDeclarationDemo.java",description:"Dynamic allocation using new int[3][3], direct literal initializers, dimension calculation, and default value inspection.",code:S,highlights:[12,14,17,21,29,30,31,38,48]},{id:"mem-dims",title:"2. Memory & References",file:"MatrixDimensionsAndMemoryDemo.java",description:"Stack reference pointer, Heap row reference array, row length inspection, and reassigning entire row arrays.",code:N,highlights:[16,21,22,23,24,28,30,48]},{id:"ragged-jagged",title:"3. Jagged Arrays",file:"JaggedArrayDemo.java",description:"Declaring arrays with non-uniform row lengths, per-row memory allocation, and Pascal's triangle construction.",code:A,highlights:[15,18,19,20,21,30,43,44]},{id:"mixed-types",title:"4. Various Data Types",file:"DifferentDataTypesMatrixDemo.java",description:"Practical matrices of char[][] (game boards), double[][] (temperatures/coordinates), and String[][] (student seating chart).",code:D,highlights:[16,17,18,37,38,39,56,57,58]}];return e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 pt-2 sm:pt-4 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Declaration & Memory Representation of 2D Arrays"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:`Mastering row-column indexing, Heap memory allocation, and Java's "Array of Arrays" architecture for ICSE Board Exams.`})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: What is a 2D Array in Java?"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["A ",e.jsx("strong",{children:"Two-Dimensional (2D) Array"})," in Java is a collection of elements organized in a grid of ",e.jsx("strong",{children:"rows"})," and ",e.jsx("strong",{children:"columns"}),". Unlike C or C++ where 2D arrays are stored in a contiguous block of memory, Java treats a 2D array as an ",e.jsx("strong",{children:'"Array of Arrays"'}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Barrackpore Lab):"}),e.jsxs("p",{className:"text-sm",children:["Sukanta Hui asks Debangshu and Swadeep to visualize their classroom seating arrangement in Barrackpore. Row 0 has 3 students, Row 1 has 3 students, and Row 2 has 3 students. To find Swadeep at desk ",e.jsx("code",{className:"text-amber-300 font-mono",children:"[1][2]"}),", you go to ",e.jsx("strong",{children:"Row 1"})," and count to ",e.jsx("strong",{children:"Column 2"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"🧠"}),' Interactive Memory Model: "Array of Arrays" Architecture']}),e.jsx(R,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Syntax & Declaration Variations"]}),e.jsxs("div",{className:"space-y-4 text-slate-300",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("h3",{className:"font-semibold text-sky-300 mb-2",children:["1. Dynamic Allocation (using ",e.jsx("code",{className:"text-xs",children:"new"}),")"]}),e.jsx("code",{className:"text-xs text-amber-300 font-mono bg-slate-900 p-2 rounded block mb-2",children:"int[][] matrix = new int[3][4];"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Allocates 3 rows and 4 columns on the Heap. All 12 integer cells are initialized to default value ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-sky-300 mb-2",children:"2. Direct Literal Initializer"}),e.jsxs("code",{className:"text-xs text-amber-300 font-mono bg-slate-900 p-2 rounded block mb-2",children:["int[][] matrix = ","{{10, 20}, {30, 40}}",";"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Creates a 2x2 matrix pre-populated with specified integer values."})]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800",children:[e.jsx("h4",{className:"font-semibold text-emerald-400 mb-2 text-sm",children:"Valid Syntax Options in ICSE Exams:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-xs font-mono text-slate-300",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-amber-300",children:"int[][] arr = new int[3][3];"})," (Standard & Recommended)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-amber-300",children:"int arr[][] = new int[3][3];"})," (Valid C-style syntax)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-amber-300",children:"int[] arr[] = new int[3][3];"})," (Valid Java syntax)"]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Live Loop Tracer & Execution Engine"]}),e.jsx(T,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Code Studio: 2D Array Foundations"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Explore 4 comprehensive, runnable BlueJ-compatible Java programs illustrating core declaration, memory layout, and jagged arrays."})]}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"4 ICSE Examples"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:a.map((r,l)=>e.jsxs("button",{onClick:()=>o(l),className:c("p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",t===l?"bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 mb-1",children:r.title}),e.jsx("div",{className:"font-mono text-[11px] text-slate-400 truncate",children:r.file})]},r.id))}),e.jsxs("div",{className:"p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:"font-semibold text-emerald-300 text-sm",children:a[t].title}),e.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/50",children:a[t].file})]}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:a[t].description})]}),e.jsx(f,{fileModule:a[t].code,title:a[t].file,highlightLines:a[t].highlights})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices in ICSE Exams"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"matrix[3][3]"})," for a 3x3 array (Index ranges from 0 to 2; causes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"}),")."]}),e.jsxs("li",{children:["Confusing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"matrix.length"})," (Number of rows) with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"matrix[0].length"})," (Number of columns)."]})]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practices"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["Use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"matrix.length"})," for outer loop bound and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"matrix[i].length"})," for inner loop bound."]}),e.jsxs("li",{children:["Format matrix output using tab ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"\\t"})," and newline ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"System.out.println()"})," after completing inner loop."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• Why does Java allow rows in a 2D array to have different lengths (Jagged arrays)?"}),e.jsxs("li",{children:["• What is stored in ",e.jsx("code",{className:"text-sky-300 font-mono",children:"matrix[0]"}),"? (It stores a reference address to the first 1D array row!)"]})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(w,{title:"Declaration & Memory Representation FAQs",questions:E})}),e.jsx("section",{className:"space-y-5",children:e.jsx(j,{content:C,title:"Module 003_001 Topic 0: Declaration & Memory Representation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic0_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(v,{note:"Always remember that matrix[i][j] means row i, column j. Draw out your 2D grid table on scratch paper during ICSE Section B programming exams! — Sukanta Hui"})})]})};export{H as default};

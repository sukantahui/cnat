import{b as c,j as e,bh as p}from"./vendor-react-core-CaA1o1Cx.js";import{J as w}from"./JavaFileLoader-BYsFDtcs.js";import{F as v}from"./FAQTemplate-D_90hN4m.js";import{P as N}from"./PlainTextPrint-yt10TRX1.js";import{T as B}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const C=`/**\r
 * Topic 4: Matrix Addition and Subtraction\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
import java.util.Scanner;\r
\r
public class MatrixAdditionSubtractionDemo {\r
\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: MATRIX ADDITION & SUBTRACTION");\r
        System.out.println("==================================================");\r
\r
        // Input dimensions\r
        System.out.print("Enter number of rows (M): ");\r
        int m = sc.nextInt();\r
        System.out.print("Enter number of columns (N): ");\r
        int n = sc.nextInt();\r
\r
        if (m <= 0 || n <= 0) {\r
            System.out.println("Error: Dimensions must be positive integers.");\r
            sc.close();\r
            return;\r
        }\r
\r
        // Both matrices MUST have identical dimensions M x N for addition/subtraction\r
        int[][] a = new int[m][n];\r
        int[][] b = new int[m][n];\r
        int[][] sum = new int[m][n];\r
        int[][] diff = new int[m][n];\r
\r
        // Step 1: Input elements for Matrix A\r
        System.out.println("\\nEnter " + (m * n) + " elements for Matrix A:");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("A[" + i + "][" + j + "]: ");\r
                a[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 2: Input elements for Matrix B\r
        System.out.println("\\nEnter " + (m * n) + " elements for Matrix B:");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("B[" + i + "][" + j + "]: ");\r
                b[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 3: Compute Matrix Addition (A + B) and Subtraction (A - B)\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                sum[i][j] = a[i][j] + b[i][j];   // Element-wise sum\r
                diff[i][j] = a[i][j] - b[i][j];  // Element-wise difference\r
            }\r
        }\r
\r
        // Step 4: Display Resultant Sum Matrix\r
        System.out.println("\\n--- Resultant Sum Matrix (A + B) ---");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(sum[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        // Step 5: Display Resultant Difference Matrix\r
        System.out.println("\\n--- Resultant Difference Matrix (A - B) ---");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(diff[i][j] + "\\t");\r
            }\r
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
 * sc              Scanner     Object of Scanner class for user input\r
 * m               int         Stores the number of rows in both matrices\r
 * n               int         Stores the number of columns in both matrices\r
 * a               int[][]     First 2D input matrix\r
 * b               int[][]     Second 2D input matrix\r
 * sum             int[][]     Stores element-wise sum of A and B\r
 * diff            int[][]     Stores element-wise difference of A and B\r
 * i               int         Outer loop index for row traversal\r
 * j               int         Inner loop index for column traversal\r
 * ============================================================================\r
 */`,E=`/**
 * Topic 4 - Example 2: Scalar Multiplication & Linear Combinations
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Multiplying an M x N matrix by an integer scalar k: C[i][j] = k * A[i][j]
 * 2. Evaluating a linear matrix combination: Result = 2*A - 3*B
 * 3. In-place modification vs creating a new resultant matrix
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class ScalarMultiplicationDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 4 · EXAMPLE 2: SCALAR MULTIPLICATION OF MATRICES");
        System.out.println("============================================================");

        int[][] a = {
            {3, 7, 2},
            {5, 1, 9}
        };

        int[][] b = {
            {1, 4, 0},
            {2, 3, 5}
        };

        int m = a.length;
        int n = a[0].length;

        System.out.println("Matrix A (2x3):");
        printMatrix(a);

        System.out.println("Matrix B (2x3):");
        printMatrix(b);

        // 1. Scalar multiplication: C = 3 * A
        int scalarK = 3;
        int[][] scaledA = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                scaledA[i][j] = scalarK * a[i][j];
            }
        }
        System.out.println("1. Scaled Matrix (3 * A):");
        printMatrix(scaledA);

        // 2. Linear Combination: Result = 2*A - 3*B
        int[][] combination = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                combination[i][j] = (2 * a[i][j]) - (3 * b[i][j]);
            }
        }
        System.out.println("2. Linear Combination (2*A - 3*B):");
        printMatrix(combination);

        System.out.println("============================================================");
    }

    private static void printMatrix(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print("   ");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.printf("%5d", arr[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }
}
`,T=`/**
 * Topic 4 - Example 3: Matrix Transposition (Rectangular & Square In-Place)
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Transposing rectangular matrix M x N into transposed matrix N x M:
 *    transposed[j][i] = original[i][j]
 * 2. In-place transpose for N x N square matrix (swapping upper and lower triangles)
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class MatrixTransposeDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 4 · EXAMPLE 3: MATRIX TRANSPOSE (M x N & IN-PLACE)");
        System.out.println("============================================================");

        // 1. Rectangular Matrix Transpose (2 rows x 4 columns -> 4 rows x 2 columns)
        int[][] rect = {
            {10, 20, 30, 40},
            {50, 60, 70, 80}
        };

        int r = rect.length;     // 2
        int c = rect[0].length;  // 4

        System.out.println("1. Original Rectangular Matrix (2 x 4):");
        printMatrix(rect);

        int[][] transposed = new int[c][r]; // Dimensions flipped: 4 rows x 2 columns
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                transposed[j][i] = rect[i][j];
            }
        }

        System.out.println("Transposed Matrix (4 x 2):");
        printMatrix(transposed);

        // 2. Square Matrix In-Place Transpose (3x3)
        int[][] sq = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int n = sq.length;

        System.out.println("2. Square Matrix (3x3) BEFORE In-Place Transpose:");
        printMatrix(sq);

        // Only swap for j > i to avoid swapping twice and leaving it unchanged!
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = sq[i][j];
                sq[i][j] = sq[j][i];
                sq[j][i] = temp;
            }
        }

        System.out.println("Square Matrix (3x3) AFTER In-Place Transpose:");
        printMatrix(sq);
        System.out.println("============================================================");
    }

    private static void printMatrix(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print("   ");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }
}
`,I=`/**
 * Topic 4 - Example 4: Testing for Symmetric and Skew-Symmetric Matrices
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Symmetric matrix criterion: A == A^T (mat[i][j] == mat[j][i] for all i, j)
 * 2. Skew-Symmetric matrix criterion: mat[i][j] == -mat[j][i] and diagonal = 0
 * 3. Efficient verification with early termination on mismatch
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class SymmetricMatrixCheckDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 4 · EXAMPLE 4: SYMMETRIC & SKEW-SYMMETRIC TEST");
        System.out.println("============================================================");

        // Matrix 1: Symmetric Matrix
        int[][] symMatrix = {
            {1, 7, 3},
            {7, 4, -5},
            {3, -5, 6}
        };

        // Matrix 2: Non-Symmetric Matrix
        int[][] nonSymMatrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // 1. Testing First Matrix
        System.out.println("1. Testing Matrix 1:");
        printMatrix(symMatrix);
        boolean isSym1 = checkSymmetric(symMatrix);
        System.out.println("   Result: " + (isSym1 ? "Matrix IS Symmetric (A = A^T)" : "Matrix is NOT Symmetric"));
        System.out.println();

        // 2. Testing Second Matrix
        System.out.println("2. Testing Matrix 2:");
        printMatrix(nonSymMatrix);
        boolean isSym2 = checkSymmetric(nonSymMatrix);
        System.out.println("   Result: " + (isSym2 ? "Matrix IS Symmetric (A = A^T)" : "Matrix is NOT Symmetric"));
        System.out.println();

        // 3. Testing Skew-Symmetric Matrix
        int[][] skewMatrix = {
            { 0,  2, -5},
            {-2,  0,  4},
            { 5, -4,  0}
        };
        System.out.println("3. Testing Matrix 3 (Skew-Symmetric Candidate):");
        printMatrix(skewMatrix);
        boolean isSkew = checkSkewSymmetric(skewMatrix);
        System.out.println("   Result: " + (isSkew ? "Matrix IS Skew-Symmetric (A^T = -A)" : "Matrix is NOT Skew-Symmetric"));
        System.out.println("============================================================");
    }

    public static boolean checkSymmetric(int[][] mat) {
        int n = mat.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (mat[i][j] != mat[j][i]) {
                    return false; // Found asymmetry, terminate immediately
                }
            }
        }
        return true;
    }

    public static boolean checkSkewSymmetric(int[][] mat) {
        int n = mat.length;
        for (int i = 0; i < n; i++) {
            if (mat[i][i] != 0) return false; // Main diagonal elements MUST be zero
            for (int j = i + 1; j < n; j++) {
                if (mat[i][j] != -mat[j][i]) {
                    return false;
                }
            }
        }
        return true;
    }

    private static void printMatrix(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print("   ");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
        }
    }
}
`,k=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 4: Matrix Addition and Subtraction\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. MATHEMATICAL PRE-CONDITION FOR MATRIX ADDITION / SUBTRACTION\r
--------------------------------------------------------------------------------\r
- Two matrices A and B can be added or subtracted IF AND ONLY IF they have the\r
  exact same dimensions (same number of rows M and same number of columns N).\r
- Order of Matrix A: M x N\r
- Order of Matrix B: M x N\r
- Order of Resultant Matrix: M x N\r
\r
2. ELEMENT-WISE FORMULAS\r
--------------------------------------------------------------------------------\r
- Addition:     Sum[i][j]  = A[i][j] + B[i][j]\r
- Subtraction:  Diff[i][j] = A[i][j] - B[i][j]\r
\r
3. PROPERTIES OF MATRIX ADDITION\r
--------------------------------------------------------------------------------\r
a) Commutative Law:      A + B = B + A\r
b) Associative Law:      (A + B) + C = A + (B + C)\r
c) Additive Identity:    A + O = A  (where O is the Zero/Null Matrix)\r
d) Additive Inverse:     A + (-A) = O\r
e) Subtraction:          Non-commutative (A - B != B - A)\r
\r
4. STEP-BY-STEP ALGORITHM (ICSE BLUEJ STANDARD)\r
--------------------------------------------------------------------------------\r
Step 1: Input dimensions M (rows) and N (columns).\r
Step 2: Declare matrices:\r
        int[][] a = new int[m][n];\r
        int[][] b = new int[m][n];\r
        int[][] sum = new int[m][n];\r
        int[][] diff = new int[m][n];\r
Step 3: Read (M * N) elements for Matrix A using nested loops (i, j).\r
Step 4: Read (M * N) elements for Matrix B using nested loops (i, j).\r
Step 5: Compute addition and subtraction using nested loops:\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                sum[i][j] = a[i][j] + b[i][j];\r
                diff[i][j] = a[i][j] - b[i][j];\r
            }\r
        }\r
Step 6: Display Matrix A, Matrix B, Sum, and Difference in clean grid layouts.\r
\r
5. 2x2 CALCULATION EXAMPLE\r
--------------------------------------------------------------------------------\r
      Matrix A           Matrix B             Resultant (A + B)\r
   +-----+-----+      +-----+-----+        +-------------+-------------+\r
   |  2  |  4  |  +   |  1  |  3  |   =    |  2+1 = 3    |  4+3 = 7    |\r
   +-----+-----+      +-----+-----+        +-------------+-------------+\r
   |  6  |  8  |      |  5  |  7  |        |  6+5 = 11   |  8+7 = 15   |\r
   +-----+-----+      +-----+-----+        +-------------+-------------+\r
\r
6. COMMON BOARD EXAM PITFALLS\r
--------------------------------------------------------------------------------\r
[!] Error: Trying to add matrices of different dimensions (e.g., 2x3 and 3x2).\r
    Causes: ArrayIndexOutOfBoundsException at runtime.\r
\r
[!] Error: Reusing the same matrix reference for both operands.\r
    Always instantiate distinct arrays for A, B, and the Result matrix!\r
\r
7. ICSE SECTION B CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Prompt for dimensions (M and N) and check positive values.\r
[✓] Input Matrix A and Matrix B separately with clear prompts.\r
[✓] Calculate sum[i][j] = a[i][j] + b[i][j].\r
[✓] Display matrices with '\\t' and System.out.println().\r
[✓] Include comprehensive Variable Description Table.\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"Matrix Addition is one of the easiest 15-mark questions in ICSE Section B!\r
Make sure to check dimensions, create separate sum[][] arrays, and format your\r
outputs neatly!"\r
================================================================================`,O=[{question:"What is the mandatory mathematical condition for adding or subtracting two matrices?",shortAnswer:"Both matrices must have the exact same dimensions (equal number of rows and equal number of columns: M1 == M2 and N1 == N2).",explanation:"Matrix addition and subtraction are element-wise operations (C[i][j] = A[i][j] +/- B[i][j]). If dimensions differ (e.g. 2x3 and 3x2), corresponding elements do not exist and addition is mathematically undefined.",hint:"Matrices of different orders cannot be added or subtracted.",level:"basic",codeExample:`if (a.length != b.length || a[0].length != b[0].length) {
    System.out.println("Addition not possible: Dimensions do not match!");
}`},{question:"What is the mathematical formula for element-wise Matrix Addition?",shortAnswer:"C[i][j] = A[i][j] + B[i][j] for all valid row indices i and column indices j.",explanation:"Each element in the resultant matrix C is obtained by adding the element at position (i, j) in matrix A to the element at position (i, j) in matrix B.",hint:"Add elements sharing the same coordinate indices.",level:"basic",codeExample:`int[][] c = new int[rows][cols];
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        c[i][j] = a[i][j] + b[i][j];
    }
}`},{question:"What is the mathematical formula for element-wise Matrix Subtraction?",shortAnswer:"D[i][j] = A[i][j] - B[i][j] for all valid row indices i and column indices j.",explanation:"Each element in the resultant matrix D is calculated by subtracting B[i][j] from A[i][j]. Notice that unlike addition, subtraction is non-commutative: A - B != B - A.",hint:"Subtract the second matrix element from the first matrix element.",level:"basic",codeExample:"diff[i][j] = a[i][j] - b[i][j];"},{question:"Is Matrix Addition commutative in Java programming (i.e. A + B == B + A)?",shortAnswer:"Yes, because integer addition is commutative: a[i][j] + b[i][j] == b[i][j] + a[i][j].",explanation:"Since every individual element is computed via standard integer addition, the resultant matrix for A + B is identical to B + A in both dimensions and cell values.",hint:"Order does not matter in addition.",level:"basic",codeExample:"// a[i][j] + b[i][j] produces the same value as b[i][j] + a[i][j]"},{question:"Is Matrix Subtraction commutative (i.e. does A - B equal B - A)?",shortAnswer:"No, A - B != B - A (in fact, B - A = -(A - B)).",explanation:"Integer subtraction is anti-symmetric: 5 - 2 = 3, but 2 - 5 = -3. Therefore, reversing the operand matrices produces negated values in the resulting matrix.",hint:"Subtraction order changes signs of all elements.",level:"basic",codeExample:`// If a[0][0] = 10, b[0][0] = 4:
// a - b = 6
// b - a = -6`},{question:"What is the time complexity of adding two M x N matrices?",shortAnswer:"O(M * N) linear time with respect to the total number of element cells.",explanation:"Every cell (i, j) is visited exactly once to perform one addition operation. For M rows and N columns, exactly M * N additions occur.",hint:"One addition per cell across the grid.",level:"intermediate",codeExample:"// 3 rows * 3 cols = 9 addition operations -> O(M*N)"},{question:"What is the space complexity of storing the result of matrix addition?",shortAnswer:"O(M * N) auxiliary space to store the resultant sum array C.",explanation:"A new 2D array of size M x N is instantiated on the Heap to hold the calculated sum values.",hint:"Resultant array requires M * N memory slots.",level:"intermediate",codeExample:"int[][] c = new int[m][n]; // Allocates M * N slots"},{question:"Can matrix addition be performed 'in-place' without allocating a third matrix C?",shortAnswer:"Yes, by adding elements directly into Matrix A: a[i][j] += b[i][j];",explanation:"In-place addition mutates Matrix A directly, saving O(M * N) auxiliary heap memory. However, the original values of Matrix A are overwritten.",hint:"Use the compound addition assignment operator += on matrix a.",level:"intermediate",codeExample:`for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        a[i][j] += b[i][j]; // In-place update
    }
}`},{question:"What is Scalar Multiplication of a matrix by a constant factor 'k'?",shortAnswer:"Multiplying every individual element of the matrix by the scalar integer 'k': Result[i][j] = k * A[i][j].",explanation:"Scalar multiplication scales the entire matrix uniformly. For example, multiplying a matrix by 2 doubles every entry.",hint:"Multiply each cell by the scalar multiplier.",level:"basic",codeExample:`int k = 3;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        scaled[i][j] = k * a[i][j];
    }
}`},{question:"What is a 'Null Matrix' (Zero Matrix) in matrix algebra?",shortAnswer:"A matrix in which all elements are zero (A[i][j] == 0 for all i, j).",explanation:"A null matrix acts as the additive identity: A + O = A, where O is the zero matrix of the same dimension.",hint:"Every element in a null matrix is 0.",level:"basic",codeExample:"int[][] nullMat = new int[3][3]; // All cells are 0 by default in Java"},{question:"How do you check if two matrices A and B are identical (equal in dimensions and values)?",shortAnswer:"Check that both row and column dimensions match, then verify that a[i][j] == b[i][j] for every cell.",explanation:"If any single cell differs or dimensions do not match, the matrices are not equal. Use a boolean flag and break immediately upon mismatch.",hint:"All corresponding cells must be strictly equal.",level:"intermediate",codeExample:`boolean areEqual = true;
if (a.length != b.length || a[0].length != b[0].length) {
    areEqual = false;
} else {
    for (int i = 0; i < a.length; i++) {
        for (int j = 0; j < a[0].length; j++) {
            if (a[i][j] != b[i][j]) { areEqual = false; break; }
        }
    }
}`},{question:"Given Matrix A = {{2, 4}, {6, 8}} and Matrix B = {{1, 3}, {5, 7}}, what is A + B?",shortAnswer:"{{3, 7}, {11, 15}}",explanation:"Sum[0][0] = 2+1=3, Sum[0][1] = 4+3=7, Sum[1][0] = 6+5=11, Sum[1][1] = 8+7=15.",hint:"Add corresponding pairs: 2+1, 4+3, 6+5, 8+7.",level:"basic",codeExample:"// Result: [[3, 7], [11, 15]]"},{question:"Given Matrix A = {{10, 20}, {30, 40}} and Matrix B = {{3, 5}, {7, 9}}, what is A - B?",shortAnswer:"{{7, 15}, {23, 31}}",explanation:"Diff[0][0] = 10-3=7, Diff[0][1] = 20-5=15, Diff[1][0] = 30-7=23, Diff[1][1] = 40-9=31.",hint:"Subtract: 10-3, 20-5, 30-7, 40-9.",level:"basic",codeExample:"// Result: [[7, 15], [23, 31]]"},{question:"What is the difference between Matrix Addition and Matrix Multiplication?",shortAnswer:"Matrix addition is element-wise (A[i][j] + B[i][j]) requiring equal dimensions M x N. Matrix multiplication computes row-by-column dot products (requiring cols(A) == rows(B)).",explanation:"Matrix addition simply pairs corresponding cells. Matrix multiplication multiplies row vectors of A by column vectors of B and sums them, requiring column dimension of A to match row dimension of B.",hint:"Addition is element-by-element; multiplication is dot product of rows and columns.",level:"intermediate",codeExample:`// Addition: c[i][j] = a[i][j] + b[i][j];
// Multiplication: c[i][j] += a[i][k] * b[k][j];`},{question:"How do you compute 2A + 3B for two matrices A and B in Java?",shortAnswer:"result[i][j] = 2 * a[i][j] + 3 * b[i][j]; inside the nested loops.",explanation:"Linear combination applies scalar coefficients directly to each element before summation.",hint:"Combine scalar multiplications and addition in the loop body.",level:"intermediate",codeExample:`int[][] res = new int[m][n];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        res[i][j] = 2 * a[i][j] + 3 * b[i][j];
    }
}`},{question:"What happens if a student attempts to add a 2x3 matrix and a 3x2 matrix in Java?",shortAnswer:"An ArrayIndexOutOfBoundsException occurs when loop indices attempt to access non-existent rows or columns.",explanation:"A 2x3 array has 2 rows and 3 cols. A 3x2 array has 3 rows and 2 cols. Accessing b[i][j] when j = 2 crashes because b[i] only has indices 0 and 1.",hint:"Differing dimensions will exceed the sub-array length.",level:"basic",codeExample:`// a is 2x3, b is 3x2
// Accessing b[0][2] throws ArrayIndexOutOfBoundsException`},{question:"What is the additive inverse of a matrix A?",shortAnswer:"The negative matrix -A, where each element is -A[i][j], such that A + (-A) = Zero Matrix.",explanation:"Negating each element produces a matrix that, when added to A, results in all zero elements.",hint:"Negate every cell: -1 * A[i][j].",level:"intermediate",codeExample:`int[][] inv = new int[m][n];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        inv[i][j] = -a[i][j];
    }
}`},{question:"How do you display Matrix A, Matrix B, and their Sum side-by-side on the console?",shortAnswer:"In a single row loop, print row i of Matrix A, followed by ' + ', row i of Matrix B, followed by ' = ', and row i of Sum Matrix.",explanation:"Formatting equations horizontally enhances presentation in terminal outputs and reports.",hint:"Print parts of all three matrices on each line before calling println().",level:"advanced",codeExample:`for (int i = 0; i < m; i++) {
    // Print row i of A
    for (int j = 0; j < n; j++) System.out.print(a[i][j] + " ");
    System.out.print(i == m/2 ? " +  " : "    ");
    // Print row i of B
    for (int j = 0; j < n; j++) System.out.print(b[i][j] + " ");
    System.out.print(i == m/2 ? " =  " : "    ");
    // Print row i of Sum
    for (int j = 0; j < n; j++) System.out.print(sum[i][j] + " ");
    System.out.println();
}`},{question:"How do you calculate the sum of all elements in the Resultant Sum Matrix?",shortAnswer:"Sum all elements of Matrix A and Matrix B: TotalSum(A + B) = TotalSum(A) + TotalSum(B).",explanation:"By linearity of addition, the grand total of matrix (A + B) is simply the sum of grand totals of A and B.",hint:"Sum of resultant matrix equals the sum of individual grand totals.",level:"basic",codeExample:`int grandSum = 0;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        grandSum += sum[i][j];
    }
}`},{question:"Can matrix addition be applied to double precision floating-point arrays?",shortAnswer:"Yes, declare double[][] a, double[][] b, double[][] sum and perform sum[i][j] = a[i][j] + b[i][j];",explanation:"The logic is identical regardless of numeric primitive data type (byte, short, int, long, float, double).",hint:"Works identically for double arrays.",level:"basic",codeExample:`double[][] sum = new double[m][n];
sum[i][j] = a[i][j] + b[i][j];`},{question:"How do you check if Matrix B is the transpose of Matrix A during addition?",shortAnswer:"Check if A is square and b[i][j] == a[j][i] for all i, j.",explanation:"The transpose flips rows and columns. If B is the transpose of A, then A + B produces a symmetric matrix.",hint:"Transpose swaps row and column indices: a[j][i].",level:"intermediate",codeExample:"// A + A^T is always a symmetric matrix!"},{question:"Why should we validate that user-entered dimensions m and n are positive before creating matrices?",shortAnswer:"Passing zero or negative numbers to array constructor throws a NegativeArraySizeException at runtime.",explanation:"Array dimensions must be non-negative integers. Validating input ensures robust, error-free program execution.",hint:"Negative sizes cause NegativeArraySizeException.",level:"basic",codeExample:`if (m <= 0 || n <= 0) {
    System.out.println("Invalid dimension: Must be > 0");
}`},{question:"How many nested loops are required to input two matrices and compute their sum?",shortAnswer:"Three separate pairs of nested loops (one pair for Matrix A input, one pair for Matrix B input, and one pair for computing/displaying the sum) or can be combined.",explanation:"Modular coding separates input of A, input of B, computation of sum, and output for clarity and readability.",hint:"Input A, Input B, Compute Sum, Display Result.",level:"basic",codeExample:`// Loop 1: Input A
// Loop 2: Input B
// Loop 3: Compute & Display Sum`},{question:"What is the associative property of matrix addition?",shortAnswer:"(A + B) + C = A + (B + C) for matrices of identical dimensions.",explanation:"Grouping does not change the result of adding three or more matrices.",hint:"Parentheses grouping does not affect the final matrix sum.",level:"intermediate",codeExample:"// (A + B) + C == A + (B + C)"},{question:"What variables must be documented in the Variable Description Table for a Matrix Addition program in Section B of the ICSE exam?",shortAnswer:"Document sc (Scanner), m (int - row count), n (int - col count), a (int[][] - first matrix), b (int[][] - second matrix), sum (int[][] - resultant matrix), i (int - row index), j (int - col index).",explanation:"A complete table covering all inputs, arrays, loop indices, and output matrices guarantees full documentation marks.",hint:"List all matrices, dimensions, and loop indices.",level:"board-hot",codeExample:`/*
 * VARIABLE TABLE:
 * m    | int     | Number of rows
 * n    | int     | Number of columns
 * a    | int[][] | First operand matrix
 * b    | int[][] | Second operand matrix
 * sum  | int[][] | Stores element-wise sum (a[i][j] + b[i][j])
 */`}],D=()=>{const[t,d]=c.useState("add"),[n,m]=c.useState(2),[l,S]=c.useState([[10,20,30],[40,50,60]]),[x,M]=c.useState([[5,12,15],[20,25,30]]),g=(r,i,a,s)=>{const o=parseInt(s,10),A=isNaN(o)?0:o;r==="A"?S(h=>h.map((f,b)=>f.map((j,y)=>b===i&&y===a?A:j))):M(h=>h.map((f,b)=>f.map((j,y)=>b===i&&y===a?A:j)))},u=l.map((r,i)=>r.map((a,s)=>{const o=x[i]?.[s]??0;return t==="add"?a+o:t==="subtract"?a-o:a*n}));return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧪 Interactive Dual-Matrix Operations Laboratory"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Edit elements in Matrix A and Matrix B to observe real-time element-wise C[i][j] calculations."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{onClick:()=>d("add"),className:p("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",t==="add"?"bg-emerald-500 text-white shadow-md shadow-emerald-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Addition (A + B)"}),e.jsx("button",{onClick:()=>d("subtract"),className:p("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",t==="subtract"?"bg-sky-500 text-white shadow-md shadow-sky-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Subtraction (A - B)"}),e.jsx("button",{onClick:()=>d("scalar"),className:p("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",t==="scalar"?"bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20":"bg-slate-900 text-slate-400 hover:text-slate-200"),children:"Scalar (k · A)"})]})]}),t==="scalar"&&e.jsxs("div",{className:"flex items-center gap-4 bg-slate-900 p-3 rounded-xl border border-slate-800",children:[e.jsxs("span",{className:"text-xs text-amber-400 font-mono font-semibold",children:["Scalar Multiplier k = ",n]}),e.jsx("input",{type:"range",min:"1",max:"10",value:n,onChange:r=>m(parseInt(r.target.value,10)),className:"flex-1 accent-amber-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-center",children:[e.jsxs("div",{className:"space-y-2 bg-slate-900/80 p-4 rounded-xl border border-sky-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-sky-400",children:[e.jsx("span",{children:"Matrix A (2x3)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Term 1 Scores"})]}),e.jsx("div",{className:"space-y-2",children:l.map((r,i)=>e.jsx("div",{className:"flex gap-2",children:r.map((a,s)=>e.jsx("input",{type:"number",value:a,onChange:o=>g("A",i,s,o.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-sky-500 rounded-lg py-2 text-xs font-mono text-sky-300 outline-none"},s))},i))})]}),t!=="scalar"?e.jsxs("div",{className:"space-y-2 bg-slate-900/80 p-4 rounded-xl border border-indigo-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-indigo-400",children:[e.jsx("span",{children:"Matrix B (2x3)"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Term 2 Scores"})]}),e.jsx("div",{className:"space-y-2",children:x.map((r,i)=>e.jsx("div",{className:"flex gap-2",children:r.map((a,s)=>e.jsx("input",{type:"number",value:a,onChange:o=>g("B",i,s,o.target.value),className:"w-full text-center bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-lg py-2 text-xs font-mono text-indigo-300 outline-none"},s))},i))})]}):e.jsxs("div",{className:"p-4 bg-slate-900/50 rounded-xl border border-amber-500/30 flex flex-col items-center justify-center text-center space-y-2",children:[e.jsxs("div",{className:"text-2xl font-bold text-amber-400 font-mono",children:["× ",n]}),e.jsxs("div",{className:"text-xs text-slate-400",children:["Each element of A is multiplied by ",n]})]}),e.jsxs("div",{className:"space-y-2 bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-emerald-400",children:[e.jsx("span",{children:"Result Matrix C (2x3)"}),e.jsx("span",{className:"text-[10px] text-emerald-500/80",children:"C[i][j]"})]}),e.jsx("div",{className:"space-y-2 font-mono",children:u.map((r,i)=>e.jsx("div",{className:"flex gap-2",children:r.map((a,s)=>e.jsx("div",{className:"w-full text-center bg-emerald-500/10 border border-emerald-500/40 rounded-lg py-2 text-xs font-bold text-emerald-300",children:a},s))},i))})]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Element Formula for cell [0][0]:"}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[t==="add"&&`C[0][0] = A[0][0] + B[0][0] -> ${l[0][0]} + ${x[0][0]} = ${u[0][0]}`,t==="subtract"&&`C[0][0] = A[0][0] - B[0][0] -> ${l[0][0]} - ${x[0][0]} = ${u[0][0]}`,t==="scalar"&&`C[0][0] = ${n} * A[0][0] -> ${n} * ${l[0][0]} = ${u[0][0]}`]})]})]})},J=()=>{const[t,d]=c.useState(0),n=[{id:"matrix-add-sub",title:"1. Addition & Subtraction",file:"MatrixAdditionSubtractionDemo.java",description:"Element-wise matrix addition (A + B) and subtraction (A - B) for identical dimensions M x N, validating compatibility.",code:C,highlights:[22,23,24,33,34,35,59,60]},{id:"scalar-mult",title:"2. Scalar Multiplication",file:"ScalarMultiplicationDemo.java",description:"Multiplying each element by scalar k, evaluating linear matrix combinations (2*A - 3*B), and formatted grid display.",code:E,highlights:[31,33,40,42,49,51]},{id:"matrix-transpose",title:"3. Matrix Transposition",file:"MatrixTransposeDemo.java",description:"Rectangular dimension flipping (M x N to N x M) and in-place transpose for N x N square matrices without extra memory.",code:T,highlights:[26,28,29,44,46,47,48]},{id:"symmetric-matrix",title:"4. Symmetric Matrix Test",file:"SymmetricMatrixCheckDemo.java",description:"Efficient verification of symmetric (A == A^T) and skew-symmetric (A^T == -A) matrices with early termination on mismatch.",code:I,highlights:[24,30,36,44,46,56,57]}];return e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Matrix Addition & Subtraction"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Performing element-wise matrix arithmetic ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"C[i][j] = A[i][j] ± B[i][j]"})," on matching matrix dimensions."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: The Dimension Compatibility Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["To perform Matrix Addition or Subtraction in Java, ",e.jsx("strong",{children:"both matrices must have identical dimensions"})," ($R \\times C$)."]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Addition:"})," ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"C[i][j] = A[i][j] + B[i][j]"})," for all $i \\in [0, R-1]$ and $j \\in [0, C-1]$."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Subtraction:"})," ",e.jsx("code",{className:"text-sky-400 font-mono",children:"C[i][j] = A[i][j] - B[i][j]"})," for all $i \\in [0, R-1]$ and $j \\in [0, C-1]$."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Barrackpore Center):"}),e.jsx("p",{className:"text-sm",children:"Sukanta Hui combines Swadeep's Term 1 exam scores (Matrix A) and Term 2 exam scores (Matrix B) for 2 students across 3 subjects. Since both term reports have 2 rows and 3 columns, student scores add up cell-by-cell into Total Scores (Matrix C)!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Dual-Matrix Operations Laboratory"]}),e.jsx(D,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Nested Loop Execution Pattern"]}),e.jsxs("div",{className:"bg-slate-950/60 p-6 rounded-xl border border-slate-800 space-y-4 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 text-sm",children:"Java Nested Loop Implementation for Matrix Addition:"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"int[][] c = new int[rows][cols]; // Resultant matrix"}),e.jsx("div",{className:"pt-2",children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400 font-bold",children:"c[i][j] = a[i][j] + b[i][j]; // Element-wise sum"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1.5 text-xs text-slate-400",children:[e.jsxs("li",{children:["Resultant matrix ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"c"})," must be instantiated with dimensions ",e.jsx("code",{className:"text-amber-300 font-mono",children:"new int[rows][cols]"}),"."]}),e.jsxs("li",{children:["Both matrices ",e.jsx("code",{className:"text-sky-300 font-mono",children:"a"})," and ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"b"})," are accessed using the same loop indices ",e.jsx("code",{className:"text-amber-300 font-mono",children:"[i][j]"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Code Studio: Matrix Arithmetic & Transpose"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Explore 4 practical BlueJ-compatible Java programs covering matrix addition, scalar operations, matrix transposition, and symmetry testing."})]}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"4 ICSE Examples"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:n.map((m,l)=>e.jsxs("button",{onClick:()=>d(l),className:p("p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",t===l?"bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 mb-1",children:m.title}),e.jsx("div",{className:"font-mono text-[11px] text-slate-400 truncate",children:m.file})]},m.id))}),e.jsxs("div",{className:"p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:"font-semibold text-emerald-300 text-sm",children:n[t].title}),e.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/50",children:n[t].file})]}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:n[t].description})]}),e.jsx(w,{fileModule:n[t].code,title:n[t].file,highlightLines:n[t].highlights})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Rules"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Attempting matrix addition on matrices of unequal dimensions (e.g., Matrix A is 2x3 and Matrix B is 3x2). This causes an immediate ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"})," during loop execution!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always verify that ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"a.length == b.length"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"a[0].length == b[0].length"})," before running matrix addition or subtraction loops."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• Is matrix addition commutative? That is, does $A + B == B + A$? (Yes!)"}),e.jsx("li",{children:"• Is matrix subtraction commutative? Does $A - B == B - A$? (No, $A - B == -(B - A)$!)"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(v,{title:"Matrix Addition & Subtraction FAQs",questions:O})}),e.jsx("section",{className:"space-y-5",children:e.jsx(N,{content:k,title:"Module 003_001 Topic 4: Matrix Addition and Subtraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic4_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(B,{note:"In Section B matrix programs, always instantiate the third result matrix C with the same dimensions as A and B before entering the nested loops! — Sukanta Hui"})})]})};export{J as default};

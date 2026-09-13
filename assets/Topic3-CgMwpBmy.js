import{b as y,j as e,bh as l}from"./vendor-react-core-CaA1o1Cx.js";import{J as N}from"./JavaFileLoader-BYsFDtcs.js";import{F as w}from"./FAQTemplate-D_90hN4m.js";import{P as v}from"./PlainTextPrint-yt10TRX1.js";import{T as D}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const E=`/**\r
 * Topic 3: Primary and Secondary Diagonal Elements\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
import java.util.Scanner;\r
\r
public class MatrixDiagonalsDemo {\r
\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: MATRIX DIAGONAL ELEMENTS DEMO");\r
        System.out.println("==================================================");\r
\r
        // Diagonals exist only in square matrices (N x N)\r
        System.out.print("Enter size of square matrix (N): ");\r
        int n = sc.nextInt();\r
\r
        if (n <= 0) {\r
            System.out.println("Error: Size must be a positive integer.");\r
            sc.close();\r
            return;\r
        }\r
\r
        int[][] mat = new int[n][n];\r
\r
        // Step 1: Input square matrix elements\r
        System.out.println("\\nEnter " + (n * n) + " elements row by row:");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("Element [" + i + "][" + j + "]: ");\r
                mat[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 2: Display original matrix\r
        System.out.println("\\n--- Entered Matrix (" + n + " x " + n + ") ---");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(mat[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        // Step 3: Traverse and calculate Left (Primary) Diagonal (i == j)\r
        int primarySum = 0;\r
        System.out.print("\\nLeft / Primary Diagonal elements: ");\r
        for (int i = 0; i < n; i++) {\r
            System.out.print(mat[i][i] + " ");\r
            primarySum += mat[i][i];\r
        }\r
        System.out.println("\\nSum of Primary Diagonal = " + primarySum);\r
\r
        // Step 4: Traverse and calculate Right (Secondary) Diagonal (i + j == n - 1)\r
        int secondarySum = 0;\r
        System.out.print("\\nRight / Secondary Diagonal elements: ");\r
        for (int i = 0; i < n; i++) {\r
            int j = n - 1 - i;\r
            System.out.print(mat[i][j] + " ");\r
            secondarySum += mat[i][j];\r
        }\r
        System.out.println("\\nSum of Secondary Diagonal = " + secondarySum);\r
\r
        // Step 5: Combined Diagonal Sum (Handling intersection for odd N)\r
        int combinedSum = primarySum + secondarySum;\r
        if (n % 2 != 0) {\r
            int center = n / 2;\r
            combinedSum -= mat[center][center]; // Deduct duplicate central element\r
            System.out.println("\\n(Odd N = " + n + ": Central element mat[" + center + "][" + center + "] = " \r
                               + mat[center][center] + " counted once)");\r
        }\r
        System.out.println("Combined Diagonal Sum (without center duplication) = " + combinedSum);\r
\r
        // Step 6: Display Diagonal Pattern (X-shape)\r
        System.out.println("\\n--- Diagonal Matrix Visualization (X-Pattern) ---");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                if (i == j || i + j == n - 1) {\r
                    System.out.print(mat[i][j] + "\\t");\r
                } else {\r
                    System.out.print(" \\t"); // Blank space for non-diagonal cells\r
                }\r
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
 * sc              Scanner     Object of Scanner class for reading input\r
 * n               int         Dimension size of the square matrix (N x N)\r
 * mat             int[][]     Stores 2D square matrix elements\r
 * i               int         Outer loop index for row traversal\r
 * j               int         Inner loop index / derived column index (n - 1 - i)\r
 * primarySum      int         Accumulates sum of Left/Principal diagonal elements\r
 * secondarySum    int         Accumulates sum of Right/Secondary diagonal elements\r
 * combinedSum     int         Stores combined diagonal sum without center double-counting\r
 * center          int         Stores coordinate index of the central intersection element\r
 * ============================================================================\r
 */`,A=`/**
 * Topic 3 - Example 2: Optimal Single-Loop Diagonal Traversal O(N)
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Single loop O(N) calculation for both Left & Right diagonals
 * 2. Primary diagonal at [i][i], Secondary diagonal at [i][N - 1 - i]
 * 3. Avoiding double-counting the center element in odd-sized matrices (3x3, 5x5)
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class SingleLoopDiagonalsDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 3 · EXAMPLE 2: SINGLE-LOOP O(N) DIAGONAL TRAVERSAL");
        System.out.println("============================================================");

        int[][] mat = {
            {1,  2,  3},
            {4,  5,  6},
            {7,  8,  9}
        };

        int n = mat.length; // 3 (Odd dimension: center element exists at [1][1])

        System.out.println("Input 3x3 Matrix:");
        for (int i = 0; i < n; i++) {
            System.out.print("   ");
            for (int j = 0; j < n; j++) {
                System.out.print(mat[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        int primarySum = 0;
        int secondarySum = 0;

        System.out.println("Single-Loop O(N) Execution Trace (i from 0 to " + (n - 1) + "):");
        for (int i = 0; i < n; i++) {
            int primVal = mat[i][i];
            int secVal  = mat[i][n - 1 - i];

            primarySum += primVal;
            secondarySum += secVal;

            System.out.printf("   Pass i = %d: Primary mat[%d][%d] = %d | Secondary mat[%d][%d] = %d\\n",
                    i, i, i, primVal, i, (n - 1 - i), secVal);
        }
        System.out.println();

        System.out.println("Primary Diagonal Sum (Left-to-Right):   " + primarySum);
        System.out.println("Secondary Diagonal Sum (Right-to-Left): " + secondarySum);

        // Combined Diagonal Sum (Correct handling of center element for odd N)
        int combinedSum = primarySum + secondarySum;
        if (n % 2 != 0) {
            int centerIdx = n / 2;
            int centerVal = mat[centerIdx][centerIdx];
            combinedSum -= centerVal; // Subtract once because center was added to both diagonals!
            System.out.println("Notice: For odd N=" + n + ", center element mat[" + centerIdx + "][" + centerIdx + "] (" + centerVal + ") belongs to BOTH diagonals!");
            System.out.println("Total Distinct Diagonal Sum (Primary + Secondary - Center): " + combinedSum);
        } else {
            System.out.println("Total Diagonal Sum (Even N=" + n + "): " + combinedSum);
        }
        System.out.println("============================================================");
    }
}
`,C=`/**
 * Topic 3 - Example 3: Diagonal 'X' Shape Display & Non-Diagonal Sum
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Printing only diagonal elements in an 'X' shape (blanks elsewhere)
 * 2. Summing elements that DO NOT lie on either diagonal
 * 3. Frequent ICSE Board exam question pattern
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class DiagonalDisplayAndNonDiagonalsDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 3 · EXAMPLE 3: 'X' PATTERN & NON-DIAGONAL SUM");
        System.out.println("============================================================");

        int[][] mat = {
            {5,  2,  8, 1},
            {9,  3,  6, 4},
            {7,  1,  4, 2},
            {8,  5,  3, 9}
        };

        int n = mat.length; // 4x4 matrix

        System.out.println("1. Original 4x4 Matrix:");
        for (int i = 0; i < n; i++) {
            System.out.print("   ");
            for (int j = 0; j < n; j++) {
                System.out.print(mat[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        // 2. Printing in 'X' Pattern (Only Primary and Secondary Diagonals)
        System.out.println("2. 'X' Shape Display (Diagonal Elements Only):");
        for (int i = 0; i < n; i++) {
            System.out.print("   ");
            for (int j = 0; j < n; j++) {
                if (i == j || i + j == n - 1) {
                    System.out.print(mat[i][j] + "\\t");
                } else {
                    System.out.print(" \\t"); // Blank space for non-diagonal positions
                }
            }
            System.out.println();
        }
        System.out.println();

        // 3. Calculating Non-Diagonal (Off-Diagonal) Elements Sum
        int nonDiagonalSum = 0;
        int nonDiagonalCount = 0;

        System.out.print("3. Non-Diagonal Elements: ");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i != j && i + j != n - 1) {
                    System.out.print(mat[i][j] + " ");
                    nonDiagonalSum += mat[i][j];
                    nonDiagonalCount++;
                }
            }
        }
        System.out.println();
        System.out.println("   Non-Diagonal Count: " + nonDiagonalCount);
        System.out.println("   Non-Diagonal Sum:   " + nonDiagonalSum);
        System.out.println("============================================================");
    }
}
`,I=`/**
 * Topic 3 - Example 4: Interchanging Primary and Secondary Diagonals
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Swapping elements of the Left (Primary) and Right (Secondary) diagonals
 * 2. In-place matrix modification using single loop:
 *    temp = mat[i][i];
 *    mat[i][i] = mat[i][n - 1 - i];
 *    mat[i][n - 1 - i] = temp;
 * 3. Popular ICSE Board practical problem
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class DiagonalInterchangeDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 3 · EXAMPLE 4: INTERCHANGE LEFT & RIGHT DIAGONALS");
        System.out.println("============================================================");

        int[][] mat = {
            {10, 20, 30, 40},
            {50, 60, 70, 80},
            {15, 25, 35, 45},
            {55, 65, 75, 85}
        };

        int n = mat.length; // 4x4 matrix

        // 1. Display matrix before swap
        System.out.println("1. Matrix BEFORE Diagonal Swap:");
        printMatrix(mat);

        // 2. Perform diagonal interchange using single loop
        System.out.println("2. Performing Swap Steps:");
        for (int i = 0; i < n; i++) {
            int leftCol = i;
            int rightCol = n - 1 - i;

            int temp = mat[i][leftCol];
            mat[i][leftCol] = mat[i][rightCol];
            mat[i][rightCol] = temp;

            System.out.println("   Row " + i + ": Swapped mat[" + i + "][" + leftCol + "] with mat[" + i + "][" + rightCol + "]");
        }
        System.out.println();

        // 3. Display matrix after swap
        System.out.println("3. Matrix AFTER Diagonal Swap:");
        printMatrix(mat);
        System.out.println("============================================================");
    }

    private static void printMatrix(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print("   ");
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();
    }
}
`,T=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 3: Primary and Secondary Diagonal Elements\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. MATHEMATICAL CRITERIA FOR DIAGONALS (SQUARE MATRIX N x N)\r
--------------------------------------------------------------------------------\r
a) Primary (Left / Principal / Main) Diagonal:\r
   - Extends from Top-Left [0][0] to Bottom-Right [N-1][N-1]\r
   - Condition: i == j (Row index equals Column index)\r
   - Elements (3x3): [0][0], [1][1], [2][2]\r
\r
b) Secondary (Right / Anti / Opposite) Diagonal:\r
   - Extends from Top-Right [0][N-1] to Bottom-Left [N-1][0]\r
   - Condition: i + j == N - 1 (or Column index j = N - 1 - i)\r
   - Elements (3x3): [0][2], [1][1], [2][0]\r
\r
2. MATRIX REGION CLASSIFICATION MAP (3x3 Example)\r
--------------------------------------------------------------------------------\r
                  Col 0           Col 1           Col 2\r
             +---------------+---------------+---------------+\r
     Row 0   |   [0][0]      |    [0][1]     |    [0][2]     |\r
             | PRIMARY DIAG  |  UPPER TRI    | SECONDRY DIAG |\r
             |   (i == j)    |   (i < j)     | (i+j == N-1)  |\r
             +---------------+---------------+---------------+\r
     Row 1   |   [1][0]      |    [1][1]     |    [1][2]     |\r
             |  LOWER TRI    |  CENTER CELL  |  UPPER TRI    |\r
             |   (i > j)     | (BOTH DIAGS)  |   (i < j)     |\r
             +---------------+---------------+---------------+\r
     Row 2   |   [2][0]      |    [2][1]     |    [2][2]     |\r
             | SECONDRY DIAG |  LOWER TRI    | PRIMARY DIAG  |\r
             | (i+j == N-1)  |   (i > j)     |   (i == j)    |\r
             +---------------+---------------+---------------+\r
\r
3. EFFICIENT O(N) LINEAR TRAVERSAL ALGORITHMS\r
--------------------------------------------------------------------------------\r
// Primary Diagonal Sum (O(N)):\r
int primarySum = 0;\r
for (int i = 0; i < n; i++) {\r
    primarySum += mat[i][i];\r
}\r
\r
// Secondary Diagonal Sum (O(N)):\r
int secondarySum = 0;\r
for (int i = 0; i < n; i++) {\r
    secondarySum += mat[i][n - 1 - i];\r
}\r
\r
4. THE ODD-ORDER MATRIX INTERSECTION RULE\r
--------------------------------------------------------------------------------\r
- When N is odd (e.g. N = 3, 5, 7), the central cell lies on BOTH diagonals:\r
    Coordinate: [N / 2][N / 2]  (e.g., [1][1] in 3x3)\r
- If you compute Combined Diagonal Sum by (primarySum + secondarySum), the\r
  center element is counted TWICE.\r
- Deduplication formula:\r
    int combinedSum = primarySum + secondarySum;\r
    if (n % 2 != 0) {\r
        combinedSum -= mat[n / 2][n / 2]; // Subtract duplicate once\r
    }\r
\r
5. MATRIX TYPES SUMMARY\r
--------------------------------------------------------------------------------\r
- Diagonal Matrix:  mat[i][j] == 0 for all i != j\r
- Scalar Matrix:    Diagonal matrix where all mat[i][i] are equal\r
- Identity Matrix:  Scalar matrix where all mat[i][i] == 1 and all mat[i][j] == 0 (i != j)\r
- Trace of Matrix:  Sum of all primary diagonal elements (mat[0][0] + ... + mat[N-1][N-1])\r
\r
6. COMMON BOARD EXAM PITFALLS\r
--------------------------------------------------------------------------------\r
[!] Error: Using mat[i][n - i] for secondary diagonal.\r
    When i = 0, accesses mat[0][n] -> ArrayIndexOutOfBoundsException!\r
    Fix: Always use mat[i][n - 1 - i].\r
\r
[!] Error: Double-counting the central element in 3x3 diagonal sum questions.\r
    Remember to subtract mat[N/2][N/2] when N is odd!\r
\r
7. ICSE SECTION B CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Square matrix size input validation (N > 0).\r
[✓] Correct diagonal condition formulas: (i == j) and (i + j == n - 1).\r
[✓] Clean output for primary, secondary, and combined sums.\r
[✓] Complete Variable Description Table.\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"Always remember: Primary is (i == j), Secondary is (i + j == N - 1)!\r
For odd N, subtract the middle element mat[N/2][N/2] to avoid double counting!"\r
================================================================================`,O=[{question:"What is the mathematical condition for an element at (i, j) to belong to the Primary (Left/Principal) Diagonal of a square matrix?",shortAnswer:"i == j (Row index equals Column index).",explanation:"The Primary Diagonal stretches from the top-left corner [0][0] to the bottom-right corner [N-1][N-1]. Across this diagonal, the row index is always identical to the column index: [0][0], [1][1], [2][2], etc.",hint:"Both index values are equal.",level:"basic",codeExample:`if (i == j) {
    System.out.println("Primary diagonal element: " + mat[i][j]);
}`},{question:"What is the mathematical condition for an element at (i, j) to belong to the Secondary (Right/Anti) Diagonal of an N x N square matrix?",shortAnswer:"i + j == N - 1 or j == N - 1 - i.",explanation:"The Secondary Diagonal extends from top-right [0][N-1] to bottom-left [N-1][0]. In an N x N matrix, the sum of row index and column index is always constant and equal to N - 1.",hint:"Row index plus column index equals matrix dimension minus 1.",level:"basic",codeExample:`if (i + j == n - 1) {
    System.out.println("Secondary diagonal element: " + mat[i][j]);
}`},{question:"Do non-square (rectangular) matrices have standard primary and secondary diagonals in ICSE syllabus?",shortAnswer:"No, standard diagonal concepts apply strictly to square matrices (N x N) where row count equals column count.",explanation:"Diagonals connect opposite corners of a quadrilateral. In rectangular matrices (e.g. 2x4), a continuous corner-to-corner main diagonal spanning all rows and columns does not exist.",hint:"Diagonals are only defined for square matrices (M == N).",level:"basic",codeExample:"// int[][] rect = new int[2][4]; // Diagonals not applicable"},{question:"How can you traverse the Primary Diagonal in O(N) linear time using a single for loop?",shortAnswer:"Use a single loop: for (int i = 0; i < n; i++) { int elem = mat[i][i]; }",explanation:"Since row and column indices are equal on the primary diagonal (i == j), you do not need nested loops. Accessing mat[i][i] in a single loop visits all N diagonal elements in O(N) time.",hint:"Pass the same loop variable 'i' into both index brackets: mat[i][i].",level:"basic",codeExample:`int primarySum = 0;
for (int i = 0; i < n; i++) {
    primarySum += mat[i][i];
}`},{question:"How can you traverse the Secondary Diagonal in O(N) linear time using a single for loop?",shortAnswer:"Use a single loop: for (int i = 0; i < n; i++) { int elem = mat[i][n - 1 - i]; }",explanation:"Because j is always derived as n - 1 - i on the secondary diagonal, a single loop over i can access every secondary diagonal element directly.",hint:"Column index is calculated as n - 1 - i.",level:"basic",codeExample:`int secondarySum = 0;
for (int i = 0; i < n; i++) {
    secondarySum += mat[i][n - 1 - i];
}`},{question:"What is the center element overlap issue when calculating the combined sum of both diagonals for an odd-order matrix (e.g., 3x3 or 5x5)?",shortAnswer:"The central element (at [N/2][N/2]) lies on BOTH diagonals and gets added twice if primary and secondary diagonal sums are simply added together.",explanation:"In a 3x3 matrix, cell [1][1] satisfies both i == j (1==1) and i + j == N - 1 (1+1==2). Adding primarySum + secondarySum double-counts mat[1][1]. You must subtract mat[1][1] once to get the true sum.",hint:"Odd-dimension matrices have a central intersection cell counted by both diagonals.",level:"intermediate",codeExample:`int combinedSum = primarySum + secondarySum;
if (n % 2 != 0) {
    int mid = n / 2;
    combinedSum -= mat[mid][mid]; // Subtract once
}`},{question:"In a 4x4 even-order matrix, is there a single central intersection element shared by both diagonals?",shortAnswer:"No, even-order square matrices (2x2, 4x4, 6x6) do not have a single shared intersection cell; the diagonals cross between cells.",explanation:"Because N is even, no cell satisfies both i == j and i + j == N - 1 simultaneously. Thus, no deduction is required for combined diagonal sum.",hint:"Even dimensions do not have an exact middle element.",level:"intermediate",codeExample:`// For N = 4: primary elements are [0][0], [1][1], [2][2], [3][3]
// secondary elements are [0][3], [1][2], [2][1], [3][0] (All disjoint!)`},{question:"What is the condition for elements lying Strictly Above the Primary Diagonal (Upper Triangular region)?",shortAnswer:"i < j (Row index is strictly less than Column index).",explanation:"In upper triangular elements, the column position is ahead of the row position (e.g., [0][1], [0][2], [1][2]).",hint:"Row index is smaller than column index.",level:"intermediate",codeExample:`if (i < j) {
    System.out.println("Upper triangle element: " + mat[i][j]);
}`},{question:"What is the condition for elements lying Strictly Below the Primary Diagonal (Lower Triangular region)?",shortAnswer:"i > j (Row index is strictly greater than Column index).",explanation:"In lower triangular elements, the row position is greater than the column position (e.g., [1][0], [2][0], [2][1]).",hint:"Row index is greater than column index.",level:"intermediate",codeExample:`if (i > j) {
    System.out.println("Lower triangle element: " + mat[i][j]);
}`},{question:"What is the condition for an element that lies on NEITHER the primary NOR the secondary diagonal (Non-Diagonal Element)?",shortAnswer:"i != j && i + j != n - 1",explanation:"An element is non-diagonal if it fails both the primary diagonal condition (i == j) and the secondary diagonal condition (i + j == n - 1).",hint:"Use logical AND (&&) with the negation of both diagonal conditions.",level:"intermediate",codeExample:`if (i != j && i + j != n - 1) {
    nonDiagSum += mat[i][j];
}`},{question:"How do you print the matrix in an 'X-shape' pattern (only diagonal elements with spaces for the rest)?",shortAnswer:"Inside nested loops, if (i == j || i + j == n - 1) print mat[i][j] + '\\t' else print '\\t'; followed by println() after the row.",explanation:"This displays only the diagonal elements in their natural grid coordinates while leaving all other cells blank.",hint:"Print the element if it meets either diagonal condition, otherwise print a space or tab.",level:"intermediate",codeExample:`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i == j || i + j == n - 1)
            System.out.print(mat[i][j] + "\\t");
        else
            System.out.print("\\t");
    }
    System.out.println();
}`},{question:"Given a 3x3 matrix: {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}, what are the elements of the Primary Diagonal?",shortAnswer:"1, 5, 9 (Sum = 15)",explanation:"mat[0][0] = 1, mat[1][1] = 5, mat[2][2] = 9. Total sum = 1 + 5 + 9 = 15.",hint:"Top-left to bottom-right elements.",level:"basic",codeExample:"// Primary: mat[0][0]=1, mat[1][1]=5, mat[2][2]=9"},{question:"Given a 3x3 matrix: {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}, what are the elements of the Secondary Diagonal?",shortAnswer:"3, 5, 7 (Sum = 15)",explanation:"mat[0][2] = 3, mat[1][1] = 5, mat[2][0] = 7. Total sum = 3 + 5 + 7 = 15.",hint:"Top-right to bottom-left elements.",level:"basic",codeExample:"// Secondary: mat[0][2]=3, mat[1][1]=5, mat[2][0]=7"},{question:"What is the result of the combined diagonal sum (without center duplication) for the matrix: {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}?",shortAnswer:"25 (1 + 5 + 9 + 3 + 7 = 25; 5 is counted only once).",explanation:"Primary sum = 15, Secondary sum = 15. Center element 5 is shared. Combined = 15 + 15 - 5 = 25.",hint:"Add both sums and subtract the center element 5.",level:"basic",codeExample:"// Combined sum = 15 + 15 - 5 = 25"},{question:"How do you find the highest (maximum) element on the primary diagonal?",shortAnswer:"Initialize max = mat[0][0]; loop i from 1 to n - 1 and update if (mat[i][i] > max) max = mat[i][i];",explanation:"Inspect only the primary diagonal cells mat[i][i] in a single loop to find the largest value.",hint:"Check mat[i][i] across a single loop.",level:"basic",codeExample:`int max = mat[0][0];
for (int i = 1; i < n; i++) {
    if (mat[i][i] > max) max = mat[i][i];
}`},{question:"How do you swap the Primary Diagonal elements with the Secondary Diagonal elements row by row?",shortAnswer:"In a single loop i from 0 to n - 1, swap mat[i][i] with mat[i][n - 1 - i] using a temporary variable.",explanation:"At each row i, the primary diagonal element is at (i, i) and secondary is at (i, n - 1 - i). Swapping these exchanges the diagonals.",hint:"Use temp = mat[i][i]; mat[i][i] = mat[i][n-1-i]; mat[i][n-1-i] = temp;.",level:"intermediate",codeExample:`for (int i = 0; i < n; i++) {
    int temp = mat[i][i];
    mat[i][i] = mat[i][n - 1 - i];
    mat[i][n - 1 - i] = temp;
}`},{question:"What is a 'Diagonal Matrix' in Mathematics and Java programming?",shortAnswer:"A square matrix in which all non-diagonal elements are zero (i.e., mat[i][j] == 0 for all i != j).",explanation:"To check if a matrix is a diagonal matrix, verify that every cell where i != j contains the value 0.",hint:"All elements off the primary diagonal are zero.",level:"intermediate",codeExample:`boolean isDiagonal = true;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i != j && mat[i][j] != 0) {
            isDiagonal = false;
            break;
        }
    }
}`},{question:"What is a 'Scalar Matrix'?",shortAnswer:"A diagonal matrix whose primary diagonal elements are all equal to each other (and non-diagonal elements are 0).",explanation:"A scalar matrix is a diagonal matrix where mat[0][0] == mat[1][1] == ... == mat[n-1][n-1] = k.",hint:"Diagonal matrix where all diagonal values are identical.",level:"intermediate",codeExample:"// Scalar Matrix check: mat[i][j]==0 (i!=j) and mat[i][i] == mat[0][0] (i==j)"},{question:"What is an 'Identity Matrix' (Unit Matrix)?",shortAnswer:"A scalar matrix whose primary diagonal elements are all 1, and all non-diagonal elements are 0.",explanation:"For an identity matrix: mat[i][j] == 1 when i == j, and mat[i][j] == 0 when i != j.",hint:"1 on primary diagonal, 0 everywhere else.",level:"basic",codeExample:`boolean isIdentity = true;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i == j && mat[i][j] != 1) isIdentity = false;
        if (i != j && mat[i][j] != 0) isIdentity = false;
    }
}`},{question:"How do you calculate the sum of elements above the secondary diagonal?",shortAnswer:"Condition: i + j < n - 1.",explanation:"Cells strictly above the secondary diagonal have row and column indices whose sum is strictly less than n - 1.",hint:"Sum of indices i + j is strictly less than n - 1.",level:"advanced",codeExample:`int sum = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i + j < n - 1) sum += mat[i][j];
    }
}`},{question:"How do you calculate the sum of elements below the secondary diagonal?",shortAnswer:"Condition: i + j > n - 1.",explanation:"Cells strictly below the secondary diagonal have row and column indices whose sum is strictly greater than n - 1.",hint:"Sum of indices i + j is strictly greater than n - 1.",level:"advanced",codeExample:`int sum = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i + j > n - 1) sum += mat[i][j];
    }
}`},{question:"Why does traversing diagonals with single loops take O(N) instead of O(N^2)?",shortAnswer:"Because there are only N elements on each diagonal; a single loop from 0 to N - 1 visits every diagonal element exactly once without checking all N^2 cells.",explanation:"Nested loops visit all N * N = N^2 cells. Direct indexing with mat[i][i] and mat[i][N-1-i] accesses only the relevant N elements directly.",hint:"Single loop has N iterations; nested loops have N^2 iterations.",level:"intermediate",codeExample:`// O(N) loop: runs N times
for (int i = 0; i < n; i++) { sum += mat[i][i]; }`},{question:"What is the trace of a matrix in Linear Algebra and ICSE programming?",shortAnswer:"The sum of the primary diagonal elements of a square matrix: Trace = Sum of mat[i][i] for i = 0 to N - 1.",explanation:"In mathematics and computer science, the 'Trace' of an N x N matrix is defined as the sum of its main diagonal entries.",hint:"Trace = Primary diagonal sum.",level:"intermediate",codeExample:`int trace = 0;
for (int i = 0; i < n; i++) trace += mat[i][i];`},{question:"What is the effect of writing 'mat[i][n - i]' instead of 'mat[i][n - 1 - i]' for secondary diagonal?",shortAnswer:"When i = 0, n - 0 = n, which accesses index n and throws an ArrayIndexOutOfBoundsException.",explanation:"Array indices run from 0 to n - 1. When i = 0, n - i evaluates to n, which is out of bounds.",hint:"Subtract 1 because array indices are 0-based: n - 1 - i.",level:"basic",codeExample:`// WRONG: mat[i][n - i]  (When i=0, accesses mat[0][n] -> CRASH!)
// CORRECT: mat[i][n - 1 - i]`},{question:"What documentation must be provided in the Variable Description Table for a Diagonal Program in Section B of the ICSE exam?",shortAnswer:"Document sc (Scanner), n (int - matrix size), mat (int[][] - square matrix), i (int - loop counter), primarySum (int), secondarySum (int), combinedSum (int).",explanation:"Providing a complete variable table with correct types and descriptions secures all documentation marks in ICSE Section B.",hint:"Document all variables and loop counters clearly.",level:"board-hot",codeExample:`/*
 * VARIABLE TABLE:
 * n            | int     | Size of square matrix
 * mat          | int[][] | 2D square matrix
 * primarySum   | int     | Sum of Left diagonal (i == j)
 * secondarySum | int     | Sum of Right diagonal (i + j == n - 1)
 */`}],R=()=>{const[i,c]=y.useState(3),[t,o]=y.useState("primary"),m=i===3?[[12,45,67],[23,89,34],[56,78,91]]:[[10,20,30,40],[15,25,35,45],[50,60,70,80],[55,65,75,85]],a=m.length,b=(n,r)=>n===r,S=(n,r)=>n+r===a-1;let p=0,u=0;for(let n=0;n<a;n++)p+=m[n][n],u+=m[n][a-1-n];let f=p+u;if(a%2===1){const n=Math.floor(a/2);f-=m[n][n]}return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"📐 Interactive Diagonal Element Inspector"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select diagonal mode to highlight matrix cells and observe Mathematical index formulas."})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Size N:"}),e.jsx("div",{className:"flex bg-slate-900 border border-slate-800 rounded-lg p-0.5",children:[3,4].map(n=>e.jsxs("button",{onClick:()=>c(n),className:l("px-2.5 py-1 text-xs font-mono rounded transition-all",i===n?"bg-amber-500 text-slate-950 font-bold":"text-slate-400 hover:text-slate-200"),children:[n,"x",n]},n))})]}),e.jsxs("div",{className:"flex flex-wrap gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs",children:[e.jsx("button",{onClick:()=>o("primary"),className:l("px-2.5 py-1 rounded transition-all font-medium",t==="primary"?"bg-emerald-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Primary (i == j)"}),e.jsx("button",{onClick:()=>o("secondary"),className:l("px-2.5 py-1 rounded transition-all font-medium",t==="secondary"?"bg-sky-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Secondary (i + j == N - 1)"}),e.jsx("button",{onClick:()=>o("both"),className:l("px-2.5 py-1 rounded transition-all font-medium",t==="both"?"bg-indigo-500 text-white":"text-slate-400 hover:text-slate-200"),children:"Both Diagonals"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:[a,"x",a," Square Matrix Grid"]}),e.jsx("div",{className:"grid gap-2",style:{gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`},children:m.map((n,r)=>n.map((j,d)=>{const h=b(r,d),g=S(r,d);let s="bg-slate-950 text-slate-400 border-slate-800";return t==="primary"&&h?s="bg-emerald-500/20 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30 font-bold scale-105 shadow-md shadow-emerald-500/10":t==="secondary"&&g?s="bg-sky-500/20 border-sky-400 text-sky-300 ring-2 ring-sky-400/30 font-bold scale-105 shadow-md shadow-sky-500/10":t==="both"&&(h&&g?s="bg-amber-500/30 border-amber-400 text-amber-200 ring-2 ring-amber-400/50 font-bold scale-110 shadow-lg shadow-amber-500/20":h?s="bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold":g&&(s="bg-sky-500/20 border-sky-400 text-sky-300 font-bold")),e.jsxs("div",{className:l("w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 font-mono",s),children:[e.jsxs("span",{className:"text-[9px] opacity-60",children:["[",r,"][",d,"]"]}),e.jsx("span",{className:"text-sm",children:j})]},`${r}-${d}`)}))})]}),e.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"Live Diagonal Calculation Metrics"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-emerald-400 font-semibold",children:"Primary Diagonal Sum (i == j):"}),e.jsx("span",{className:"text-emerald-300 font-bold text-sm",children:p})]}),e.jsxs("div",{className:"flex justify-between items-center border-b border-slate-800 pb-2",children:[e.jsx("span",{className:"text-sky-400 font-semibold",children:"Secondary Diagonal Sum (i + j == N - 1):"}),e.jsx("span",{className:"text-sky-300 font-bold text-sm",children:u})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-amber-400 font-semibold",children:"Combined Diagonal Sum (No Double Count):"}),e.jsx("span",{className:"text-amber-300 font-bold text-sm",children:f})]})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-slate-300 font-sans text-xs",children:[e.jsxs("div",{className:"font-semibold text-sky-300",children:["Mathematical Index Rules for N = ",a,":"]}),e.jsxs("ul",{className:"space-y-1 text-slate-400 font-mono text-[11px]",children:[e.jsxs("li",{children:["• Primary Cell condition: ",e.jsx("code",{className:"text-emerald-400",children:"row == col (i == j)"})]}),e.jsxs("li",{children:["• Secondary Cell condition: ",e.jsxs("code",{className:"text-sky-400",children:["i + j == ",a-1," (j == ",a," - 1 - i)"]})]}),a%2===1&&e.jsxs("li",{className:"text-amber-300",children:["• Center Intersection Cell: ",e.jsxs("code",{className:"text-amber-300",children:["[",Math.floor(a/2),"][",Math.floor(a/2),"]"]})]})]})]})]})]})]})},F=()=>{const[i,c]=y.useState(0),t=[{id:"diagonals-basic",title:"1. Primary & Secondary Diagonals",file:"MatrixDiagonalsDemo.java",description:"Standard nested loops detecting primary diagonal (i == j) and secondary diagonal (i + j == n - 1) sums with boundary checks.",code:E,highlights:[20,21,26,27,53,54,55,63,64]},{id:"single-loop-diagonals",title:"2. Optimal O(N) Traversal",file:"SingleLoopDiagonalsDemo.java",description:"Traversing both diagonals simultaneously in a single O(N) loop and correctly avoiding double-counting the center element for odd N.",code:A,highlights:[33,34,35,36,45,48,50]},{id:"x-pattern-non-diagonals",title:"3. 'X' Pattern & Off-Diagonals",file:"DiagonalDisplayAndNonDiagonalsDemo.java",description:"Printing diagonal elements in an 'X' shape with spacing, and accumulating the sum and count of all non-diagonal cells.",code:C,highlights:[27,28,29,31,44,45,46]},{id:"diagonal-swap",title:"4. Interchanging Diagonals",file:"DiagonalInterchangeDemo.java",description:"Classic ICSE Board practical question: Swapping elements of Left and Right diagonals in an N x N matrix using a single loop.",code:I,highlights:[23,24,26,27,28]}];return e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Primary & Secondary Diagonal Elements"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Identifying left-to-right (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"i == j"}),") and right-to-left (",e.jsx("code",{className:"text-sky-400 font-mono",children:"i + j == N - 1"}),") matrix diagonals in square matrices."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: Square Matrix Diagonals"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["In ICSE Computer Applications, diagonal algorithms only apply to ",e.jsx("strong",{children:"Square Matrices"})," (where rows == columns, i.e., ",e.jsx("code",{className:"text-amber-300 font-mono",children:"N x N"}),")."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-emerald-400 mb-1",children:"1. Primary (Main) Diagonal"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Runs from top-left corner to bottom-right corner. Condition: ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"i == j"})," (e.g., [0][0], [1][1], [2][2])."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-bold text-sky-400 mb-1",children:"2. Secondary (Anti) Diagonal"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Runs from top-right corner to bottom-left corner. Condition: ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i + j == N - 1"})," (or ",e.jsx("code",{className:"text-sky-300 font-mono",children:"j == N - 1 - i"}),")."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Naihati Lab):"}),e.jsxs("p",{className:"text-sm",children:["In Naihati, Sukanta Hui shows Abhronila that on a 3x3 chessboard, the primary diagonal entries have identical row and column numbers ([0][0], [1][1], [2][2]), while the secondary diagonal indices always sum up to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"2"})," (3 - 1)!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Diagonal Inspector Tool"]}),e.jsx(R,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Algorithmic Efficiency: $O(N^2)$ vs $O(N)$ Single-Loop Optimization"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-base",children:"Standard Nested Loop ($O(N^2)$)"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < n; i++) {"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < n; j++) {"}),e.jsx("div",{className:"pl-8 text-emerald-400",children:"if (i == j) {"}),e.jsx("div",{className:"pl-12 text-slate-300",children:"sum += mat[i][j];"}),e.jsx("div",{className:"pl-8",children:"}"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Checks all $N^2$ cells using nested loops and conditional checks."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-400 text-base",children:"Optimized Single Loop ($O(N)$)"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < n; i++) {"}),e.jsx("div",{className:"pl-4 text-emerald-300 font-bold",children:"primarySum += mat[i][i]; // Primary"}),e.jsx("div",{className:"pl-4 text-sky-300 font-bold",children:"secondarySum += mat[i][n - 1 - i]; // Secondary"}),e.jsx("div",{children:"}"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Traverses only $N$ steps directly accessing diagonal cells!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Code Studio: Matrix Diagonals"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Explore 4 practical BlueJ-compatible Java programs covering standard diagonals, optimal O(N) single-loop traversal, X-patterns, and diagonal interchange."})]}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"4 ICSE Examples"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:t.map((o,x)=>e.jsxs("button",{onClick:()=>c(x),className:l("p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",i===x?"bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 mb-1",children:o.title}),e.jsx("div",{className:"font-mono text-[11px] text-slate-400 truncate",children:o.file})]},o.id))}),e.jsxs("div",{className:"p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:"font-semibold text-emerald-300 text-sm",children:t[i].title}),e.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/50",children:t[i].file})]}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:t[i].description})]}),e.jsx(N,{fileModule:t[i].code,title:t[i].file,highlightLines:t[i].highlights})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Rules"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"mat[i][n - i]"})," for secondary diagonal. This causes an immediate ",e.jsx("code",{className:"text-rose-300 font-mono",children:"ArrayIndexOutOfBoundsException"})," when ",e.jsx("code",{className:"text-rose-300 font-mono",children:"i = 0"})," because ",e.jsx("code",{className:"text-rose-300 font-mono",children:"mat[0][n]"})," is out of bounds! The correct expression is ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"mat[i][n - 1 - i]"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:"When calculating the sum of BOTH diagonals in an odd-sized matrix (e.g. 3x3 or 5x5), remember to subtract the center element once so it isn't double-counted!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsxs("li",{children:["• What index condition identifies elements ABOVE the primary diagonal? (",e.jsx("code",{className:"text-sky-300 font-mono",children:"i < j"}),")"]}),e.jsxs("li",{children:["• What index condition identifies elements BELOW the primary diagonal? (",e.jsx("code",{className:"text-sky-300 font-mono",children:"i > j"}),")"]})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(w,{title:"Primary & Secondary Diagonal FAQs",questions:O})}),e.jsx("section",{className:"space-y-5",children:e.jsx(v,{content:T,title:"Module 003_001 Topic 3: Primary and Secondary Diagonal Elements",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic3_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(D,{note:"Remember the golden formula: Primary is i == j, Secondary is i + j == N - 1. For secondary diagonal in a single loop, use mat[i][N - 1 - i]! — Sukanta Hui"})})]})};export{F as default};

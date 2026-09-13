import{j as e,b as f,bh as m}from"./vendor-react-core-CaA1o1Cx.js";import{J as b}from"./JavaFileLoader-BYsFDtcs.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as g}from"./PlainTextPrint-yt10TRX1.js";import{T as w}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const N=`/**\r
 * Topic 5: Board Pattern Programs on Matrices\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
import java.util.Scanner;\r
\r
public class ICSEMatrixPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: MATRIX BOARD PATTERNS DEMO");\r
        System.out.println("==================================================");\r
\r
        System.out.print("Enter square matrix dimension (N): ");\r
        int n = sc.nextInt();\r
\r
        if (n <= 0) {\r
            System.out.println("Error: Matrix dimension must be positive.");\r
            sc.close();\r
            return;\r
        }\r
\r
        int[][] mat = new int[n][n];\r
\r
        // Step 1: Input Matrix Elements\r
        System.out.println("\\nEnter " + (n * n) + " elements row by row:");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("Element [" + i + "][" + j + "]: ");\r
                mat[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 2: Display Original Matrix\r
        System.out.println("\\n--- 1. Original Matrix (" + n + " x " + n + ") ---");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(mat[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        // Step 3: Board Pattern A - Boundary Elements & Sum\r
        System.out.println("\\n--- 2. Boundary Elements Pattern ---");\r
        int boundarySum = 0;\r
        int nonBoundarySum = 0;\r
\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                // Condition for boundary elements (outer ring)\r
                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\r
                    System.out.print(mat[i][j] + "\\t");\r
                    boundarySum += mat[i][j];\r
                } else {\r
                    System.out.print(" \\t"); // Blank space for inner cells\r
                    nonBoundarySum += mat[i][j];\r
                }\r
            }\r
            System.out.println();\r
        }\r
        System.out.println("Sum of Boundary Elements = " + boundarySum);\r
        System.out.println("Sum of Non-Boundary (Inner) Elements = " + nonBoundarySum);\r
\r
        // Step 4: Board Pattern B - Transpose of the Matrix (Rows become Columns)\r
        int[][] transpose = new int[n][n];\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                transpose[j][i] = mat[i][j]; // Swap row and column coordinates\r
            }\r
        }\r
\r
        System.out.println("\\n--- 3. Transpose of Matrix (B[j][i] = A[i][j]) ---");\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(transpose[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        // Step 5: Board Pattern C - Symmetric Matrix Check\r
        boolean isSymmetric = true;\r
        for (int i = 0; i < n; i++) {\r
            for (int j = 0; j < n; j++) {\r
                if (mat[i][j] != mat[j][i]) {\r
                    isSymmetric = false;\r
                    break;\r
                }\r
            }\r
            if (!isSymmetric) break;\r
        }\r
\r
        System.out.println("\\n--- 4. Symmetric Matrix Test ---");\r
        if (isSymmetric) {\r
            System.out.println("Result: The matrix is SYMMETRIC (A[i][j] == A[j][i] for all cells).");\r
        } else {\r
            System.out.println("Result: The matrix is NOT symmetric.");\r
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
 * n               int         Dimension of the square matrix (N x N)\r
 * mat             int[][]     Stores original 2D square matrix\r
 * transpose       int[][]     Stores the transposed matrix\r
 * boundarySum     int         Accumulates the sum of boundary border elements\r
 * nonBoundarySum  int         Accumulates the sum of inner non-boundary elements\r
 * isSymmetric     boolean     Flag indicating whether the matrix is symmetric\r
 * i               int         Outer loop index for row traversal\r
 * j               int         Inner loop index for column traversal\r
 * ============================================================================\r
 */`,S=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 5: Board Pattern Programs on Matrices\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. SUMMARY OF COMMON ICSE MATRIX BOARD PATTERNS\r
--------------------------------------------------------------------------------\r
Pattern Name             Index Condition / Formula\r
--------------------------------------------------------------------------------\r
Primary Diagonal         i == j\r
Secondary Diagonal       i + j == N - 1\r
Upper Triangle (Strict)  i < j\r
Lower Triangle (Strict)  i > j\r
Boundary Elements        i == 0 || i == N - 1 || j == 0 || j == N - 1\r
Non-Boundary Elements    i > 0 && i < N - 1 && j > 0 && j < N - 1\r
Corners (4 vertices)     (0,0), (0, N-1), (N-1, 0), (N-1, N-1)\r
Middle Row & Column      i == N / 2 || j == N / 2  (for odd N)\r
Transpose of Matrix      Transpose[j][i] = Original[i][j]\r
Symmetric Matrix         Original[i][j] == Original[j][i] for all i, j\r
\r
2. BOUNDARY VS NON-BOUNDARY VISUAL GRID (4x4 Example)\r
--------------------------------------------------------------------------------\r
          Col 0      Col 1      Col 2      Col 3\r
       +----------+----------+----------+----------+\r
Row 0  | BOUNDARY | BOUNDARY | BOUNDARY | BOUNDARY |  (i == 0)\r
       +----------+----------+----------+----------+\r
Row 1  | BOUNDARY |  INNER   |  INNER   | BOUNDARY |\r
       | (j == 0) | (1, 1)   | (1, 2)   | (j == 3) |\r
       +----------+----------+----------+----------+\r
Row 2  | BOUNDARY |  INNER   |  INNER   | BOUNDARY |\r
       | (j == 0) | (2, 1)   | (2, 2)   | (j == 3) |\r
       +----------+----------+----------+----------+\r
Row 3  | BOUNDARY | BOUNDARY | BOUNDARY | BOUNDARY |  (i == 3)\r
       +----------+----------+----------+----------+\r
\r
- Total Boundary Elements:     4 * N - 4 = 4(4) - 4 = 12 elements\r
- Total Non-Boundary Elements: (N - 2) * (N - 2) = (2 * 2) = 4 elements\r
\r
3. MATRIX TRANSPOSE ALGORITHM\r
--------------------------------------------------------------------------------\r
Given an M x N Matrix A:\r
1. Declare Transpose matrix T of size N x M.\r
2. Traverse nested loops i (0 to M-1) and j (0 to N-1).\r
3. Set T[j][i] = A[i][j].\r
\r
4. SYMMETRIC MATRIX CHECK ALGORITHM\r
--------------------------------------------------------------------------------\r
boolean isSymmetric = true;\r
for (int i = 0; i < n; i++) {\r
    for (int j = 0; j < n; j++) {\r
        if (mat[i][j] != mat[j][i]) {\r
            isSymmetric = false;\r
            break;\r
        }\r
    }\r
    if (!isSymmetric) break;\r
}\r
if (isSymmetric) System.out.println("Matrix is SYMMETRIC");\r
else System.out.println("Matrix is NOT Symmetric");\r
\r
5. 90-DEGREE CLOCKWISE ROTATION ALGORITHM\r
--------------------------------------------------------------------------------\r
Step 1: Transpose matrix in-place:\r
        for (int i = 0; i < n; i++)\r
            for (int j = i + 1; j < n; j++) {\r
                int temp = a[i][j]; a[i][j] = a[j][i]; a[j][i] = temp;\r
            }\r
Step 2: Reverse each row horizontally:\r
        for (int i = 0; i < n; i++)\r
            for (int j = 0; j < n / 2; j++) {\r
                int temp = a[i][j]; a[i][j] = a[i][n - 1 - j]; a[i][n - 1 - j] = temp;\r
            }\r
\r
6. SADDLE POINT OF A MATRIX\r
--------------------------------------------------------------------------------\r
- An element that is the MINIMUM in its row AND MAXIMUM in its column.\r
- ICSE Algorithm:\r
  For each row i:\r
    1. Find min element in row i and note its column index c.\r
    2. Check if this min element is >= all elements in column c.\r
    3. If yes, print "Saddle point found at [" + i + "][" + c + "] = " + val.\r
\r
7. ICSE SECTION B 15-MARKS SUCCESS FORMULA\r
--------------------------------------------------------------------------------\r
[✓] Step 1: Input dimensions and instantiate 2D array (3 marks)\r
[✓] Step 2: Clear, structured nested loop algorithm (7 marks)\r
[✓] Step 3: Tabular formatted grid output using '\\t' and println() (3 marks)\r
[✓] Step 4: Complete Variable Description Table documentation (2 marks)\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"Mastering these index conditions is the key to 100% in ICSE Computer\r
Applications. Write the index table on your scratch sheet, identify which\r
condition matches the question, and the 15-mark program writes itself!"\r
================================================================================`,v=[{question:"What is the logical condition to identify Boundary (Border) Elements in an N x N or M x N matrix?",shortAnswer:"i == 0 || i == rows - 1 || j == 0 || j == cols - 1",explanation:"Boundary elements reside on the outermost perimeter of the matrix: the top row (i == 0), the bottom row (i == rows - 1), the left column (j == 0), and the right column (j == cols - 1).",hint:"Element is in the first or last row, or the first or last column.",level:"basic",codeExample:`if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
    System.out.print(mat[i][j] + "\\t");
    boundarySum += mat[i][j];
}`},{question:"What is the logical condition to identify Non-Boundary (Inner/Interior) Elements of a matrix?",shortAnswer:"i > 0 && i < rows - 1 && j > 0 && j < cols - 1",explanation:"Non-boundary elements are all elements that do not belong to the outer perimeter (i.e. strictly inside the boundary).",hint:"Elements enclosed strictly between row 1 to rows - 2 and col 1 to cols - 2.",level:"basic",codeExample:`if (i > 0 && i < m - 1 && j > 0 && j < n - 1) {
    innerSum += mat[i][j];
}`},{question:"What is the Transpose of a matrix, and what is its indexing formula?",shortAnswer:"The transpose interchanges rows and columns: Transpose[j][i] = Original[i][j].",explanation:"If original matrix A is of dimension M x N, its transpose B is of dimension N x M, where the element at row i and column j in A moves to row j and column i in B.",hint:"Row index becomes column index, and column index becomes row index.",level:"basic",codeExample:`int[][] trans = new int[cols][rows];
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        trans[j][i] = a[i][j];
    }
}`},{question:"How do you check if a square matrix is 'Symmetric' in Java?",shortAnswer:"Check if the matrix is identical to its transpose: mat[i][j] == mat[j][i] for all cells (i, j).",explanation:"A matrix is symmetric if reflecting across the primary diagonal yields the exact same values. If any pair mat[i][j] != mat[j][i], the matrix is not symmetric.",hint:"Every element mat[i][j] must equal mat[j][i].",level:"intermediate",codeExample:`boolean isSymmetric = true;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (mat[i][j] != mat[j][i]) { isSymmetric = false; break; }
    }
}`},{question:"How can the Symmetric matrix check be optimized so we don't compare elements twice?",shortAnswer:"Only check elements in the strictly upper triangular region: for (int i = 0; i < n; i++) { for (int j = i + 1; j < n; j++) ... }",explanation:"Primary diagonal elements (i == j) are always equal to themselves. Comparing pairs where j > i checks each unique pair (i, j) against (j, i) exactly once, reducing comparisons from N^2 to N*(N-1)/2.",hint:"Inner loop starts from j = i + 1.",level:"advanced",codeExample:`boolean sym = true;
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (mat[i][j] != mat[j][i]) { sym = false; break; }
    }
}`},{question:"What is a 'Skew-Symmetric' matrix?",shortAnswer:"A square matrix where the transpose equals its negation: mat[i][j] == -mat[j][i], and all primary diagonal elements are 0.",explanation:"Since mat[i][i] == -mat[i][i] means 2*mat[i][i] == 0, the main diagonal must consist entirely of zeros, and off-diagonal elements are opposite in sign.",hint:"Diagonal is all zeros, and transposed elements have opposite signs.",level:"intermediate",codeExample:"// Skew-symmetric: mat[i][i] == 0 && mat[i][j] == -mat[j][i]"},{question:"How do you display only the Upper Triangular Matrix (elements on and above the primary diagonal)?",shortAnswer:"Nested loops where if (j >= i) print mat[i][j] + '\\t' else print '\\t'; followed by println().",explanation:"On and above the main diagonal, column index j is greater than or equal to row index i (j >= i). All elements below (j < i) are printed as blank spaces.",hint:"Condition for upper triangle is j >= i.",level:"basic",codeExample:`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (j >= i) System.out.print(mat[i][j] + "\\t");
        else System.out.print("\\t");
    }
    System.out.println();
}`},{question:"How do you display only the Lower Triangular Matrix (elements on and below the primary diagonal)?",shortAnswer:"Nested loops where if (i >= j) print mat[i][j] + '\\t' else print '\\t'; followed by println().",explanation:"On and below the main diagonal, row index i is greater than or equal to column index j (i >= j).",hint:"Condition for lower triangle is i >= j.",level:"basic",codeExample:`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i >= j) System.out.print(mat[i][j] + "\\t");
        else System.out.print("\\t");
    }
    System.out.println();
}`},{question:"How do you reverse (mirror) each row of an N x N matrix horizontally?",shortAnswer:"In each row i, swap mat[i][j] with mat[i][n - 1 - j] for j from 0 to (n / 2) - 1.",explanation:"Iterating j up to n/2 swaps the first element with the last, second with second-last, effectively mirroring each row horizontally.",hint:"Swap column j with column n - 1 - j up to the midpoint.",level:"intermediate",codeExample:`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n / 2; j++) {
        int temp = mat[i][j];
        mat[i][j] = mat[i][n - 1 - j];
        mat[i][n - 1 - j] = temp;
    }
}`},{question:"How do you rotate a square matrix by 90 degrees clockwise in Java?",shortAnswer:"Step 1: Compute the Transpose of the matrix; Step 2: Reverse each row horizontally.",explanation:"Transposing flips the matrix across the primary diagonal ($A[i][j] \\to A[j][i]$). Reversing each row horizontally turns it into a 90-degree clockwise rotation.",hint:"90° Clockwise Rotation = Transpose + Row Reversal.",level:"advanced",codeExample:`// 1. Transpose in-place
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        int temp = a[i][j];
        a[i][j] = a[j][i];
        a[j][i] = temp;
    }
}
// 2. Reverse each row
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n / 2; j++) {
        int temp = a[i][j];
        a[i][j] = a[i][n - 1 - j];
        a[i][n - 1 - j] = temp;
    }
}`},{question:"What is a 'Saddle Point' of a matrix in ICSE Board questions?",shortAnswer:"An element that is the minimum in its row AND the maximum in its column.",explanation:"To find a saddle point: 1) For each row i, find the minimum element and its column index colIdx; 2) Check if that element is the maximum in that column colIdx. If yes, it is a saddle point.",hint:"Smallest in its row and largest in its column.",level:"board-hot",codeExample:"// Row min must equal Col max"},{question:"How many total boundary elements exist in an N x N square matrix?",shortAnswer:"Total boundary elements = 4 * N - 4 (or 4 * (N - 1)).",explanation:"Top row (N) + Bottom row (N) + Left col excluding corners (N-2) + Right col excluding corners (N-2) = 2N + 2N - 4 = 4N - 4.",hint:"Four sides minus four corner overlaps.",level:"basic",codeExample:`// For N = 3: 4(3) - 4 = 8 boundary elements (1 center non-boundary)
// For N = 4: 4(4) - 4 = 12 boundary elements (4 center non-boundary)`},{question:"How many non-boundary elements exist in an N x N square matrix?",shortAnswer:"Non-boundary count = (N - 2) * (N - 2) for N >= 2.",explanation:"Removing 2 rows (top & bottom) and 2 columns (left & right) leaves an inner sub-matrix of size (N - 2) x (N - 2).",hint:"(N - 2) squared.",level:"basic",codeExample:`// For N = 3: (3-2)*(3-2) = 1 non-boundary element
// For N = 4: (4-2)*(4-2) = 4 non-boundary elements`},{question:"How do you calculate the sum of elements in the four corners of an M x N matrix?",shortAnswer:"Corner Sum = mat[0][0] + mat[0][n - 1] + mat[m - 1][0] + mat[m - 1][n - 1];",explanation:"The four corner coordinates are: Top-Left (0, 0), Top-Right (0, N-1), Bottom-Left (M-1, 0), and Bottom-Right (M-1, N-1).",hint:"Directly access the 4 corner index pairs.",level:"basic",codeExample:"int cornerSum = mat[0][0] + mat[0][n - 1] + mat[m - 1][0] + mat[m - 1][n - 1];"},{question:"How do you check if a matrix is an 'Orthogonal Matrix'?",shortAnswer:"Check if the product of the matrix and its transpose equals the Identity Matrix (A * A^T == I).",explanation:"Multiply matrix A by its transpose A^T and verify that the resulting matrix is an identity matrix (1s on diagonal, 0s elsewhere).",hint:"A * Transpose(A) = Identity Matrix.",level:"advanced",codeExample:"// Product of A and Transpose(A) yields Identity matrix"},{question:"How do you sort each individual row of a 2D matrix in ascending order using Bubble Sort?",shortAnswer:"Iterate through each row i, and apply standard Bubble Sort algorithm to that 1D row array: mat[i].",explanation:"Outer loop fixes row i (0 to m-1). For that row, perform standard bubble sort passes on mat[i][k] and mat[i][k+1].",hint:"Apply 1D sorting to each row independently.",level:"intermediate",codeExample:`for (int i = 0; i < m; i++) {
    for (int p = 0; p < n - 1; p++) {
        for (int q = 0; q < n - 1 - p; q++) {
            if (mat[i][q] > mat[i][q + 1]) {
                int t = mat[i][q];
                mat[i][q] = mat[i][q + 1];
                mat[i][q + 1] = t;
            }
        }
    }
}`},{question:"How do you sort all elements of an entire N x N matrix in ascending order?",shortAnswer:"Flatten the 2D array into a 1D array of size N^2, sort the 1D array (e.g. via Bubble Sort), and repopulate the 2D matrix row by row.",explanation:"Transforming to 1D simplifies sorting into a standard algorithm, after which elements are written back into matrix[i][j].",hint:"Transfer to 1D array, sort 1D array, transfer back to 2D.",level:"intermediate",codeExample:`int[] flat = new int[m * n];
int k = 0;
for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++) flat[k++] = mat[i][j];
// Sort flat array...
k = 0;
for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++) mat[i][j] = flat[k++];`},{question:"How do you check if a matrix is an 'Upper Triangular Matrix'?",shortAnswer:"Verify that all elements strictly below the primary diagonal are zero (i.e. mat[i][j] == 0 whenever i > j).",explanation:"If any element in the lower triangular region (i > j) is non-zero, it is not an upper triangular matrix.",hint:"mat[i][j] must be 0 for all i > j.",level:"intermediate",codeExample:`boolean isUpperTri = true;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i > j && mat[i][j] != 0) isUpperTri = false;
    }
}`},{question:"How do you check if a matrix is a 'Lower Triangular Matrix'?",shortAnswer:"Verify that all elements strictly above the primary diagonal are zero (i.e. mat[i][j] == 0 whenever i < j).",explanation:"If any element in the upper triangular region (i < j) is non-zero, it is not a lower triangular matrix.",hint:"mat[i][j] must be 0 for all i < j.",level:"intermediate",codeExample:`boolean isLowerTri = true;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        if (i < j && mat[i][j] != 0) isLowerTri = false;
    }
}`},{question:"What is the result of Transposing the matrix: {{1, 2}, {3, 4}, {5, 6}}?",shortAnswer:"A 2x3 matrix: {{1, 3, 5}, {2, 4, 6}}.",explanation:"Original has 3 rows and 2 columns. Transpose will have 2 rows and 3 columns, turning Row 0 (1,2) into Col 0, Row 1 (3,4) into Col 1, and Row 2 (5,6) into Col 2.",hint:"3x2 matrix becomes a 2x3 matrix.",level:"basic",codeExample:"// Transpose of 3x2 is 2x3"},{question:"How do you invert (vertically flip) an N x N matrix?",shortAnswer:"Swap Row i with Row N - 1 - i for i from 0 to (N / 2) - 1.",explanation:"In Java, you can simply swap row references: int[] temp = mat[i]; mat[i] = mat[n - 1 - i]; mat[n - 1 - i] = temp;",hint:"Swap entire row arrays between top and bottom halves.",level:"intermediate",codeExample:`for (int i = 0; i < n / 2; i++) {
    int[] temp = mat[i];
    mat[i] = mat[n - 1 - i];
    mat[n - 1 - i] = temp;
}`},{question:"What happens if you try to compute Transpose in-place on a non-square matrix without allocating a new array?",shortAnswer:"ArrayIndexOutOfBoundsException or data corruption, because row and column capacities differ (e.g. trying to store 3 rows into 2 rows).",explanation:"In-place transpose is only mathematically possible in square matrices (N x N). Rectangular matrices (M x N) require allocating a new array of size N x M.",hint:"In-place transpose requires a square matrix.",level:"advanced",codeExample:"// For M != N, allocate: int[][] t = new int[n][m];"},{question:"In ICSE Section B, what are the standard marks allocated to a 15-mark Matrix Pattern Program?",shortAnswer:"Input & Array Creation: 3 marks, Pattern Logic & Traversal: 7 marks, Formatted Display: 3 marks, Variable Description Table & Comments: 2 marks.",explanation:"Adhering to clean structure, proper prompts, correct bounds, and the variable table secures full 15/15 marks.",hint:"Follow the 4-part structure for maximum marks.",level:"board-hot",codeExample:"// Full 15 marks breakdown: Input(3) + Logic(7) + Output(3) + Table(2)"},{question:"How do you print a Diamond / Cross pattern inside an N x N matrix?",shortAnswer:"Combine diagonal condition (i == j || i + j == n - 1) or middle row/col condition (i == n/2 || j == n/2).",explanation:"Using combinations of diagonal and center axis conditions creates artistic cross and star patterns in matrices.",hint:"Use logical OR to combine diagonal and central axis conditions.",level:"intermediate",codeExample:`if (i == n / 2 || j == n / 2 || i == j || i + j == n - 1) {
    System.out.print("*\\t");
} else {
    System.out.print(" \\t");
}`},{question:"What variables must be included in the Variable Description Table for an ICSE Matrix Pattern program in Section B?",shortAnswer:"Document sc (Scanner), n (int - dimension), mat (int[][] - input matrix), transpose (int[][] - transposed matrix), boundarySum (int), i (int - row counter), j (int - col counter), isSymmetric (boolean).",explanation:"Always document every declared variable, its exact data type, and its purpose in the solution.",hint:"Include all variables declared in the class.",level:"board-hot",codeExample:`/*
 * VARIABLE TABLE:
 * n           | int     | Matrix dimension size
 * mat         | int[][] | Stores original matrix
 * boundarySum | int     | Sum of outer perimeter cells
 * isSymmetric | boolean | Flag for matrix symmetry check
 */`}],A=()=>{const[t,d]=f.useState("boundary"),o=[[10,20,30,40],[15,25,35,45],[50,60,70,80],[55,65,75,85]],x=4,p=4,u=(a,n)=>a===0||a===x-1||n===0||n===p-1,h=(a,n)=>a>0&&a<x-1&&n>0&&n<p-1,j=(a,n)=>a<=n;let l=0;return o.forEach((a,n)=>{a.forEach((i,r)=>{t==="boundary"&&u(n,r)&&(l+=i),t==="nonBoundary"&&h(n,r)&&(l+=i),t==="upper"&&j(n,r)&&(l+=i),t==="transpose"&&(l+=i)})}),e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"🧩 ICSE 10-Year Board Matrix Pattern Simulator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a classic ICSE Board Question pattern below to observe cell filtering logic."})]}),e.jsxs("div",{className:"flex flex-wrap gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-medium",children:[e.jsx("button",{onClick:()=>d("boundary"),className:m("px-3 py-1.5 rounded-lg transition-all",t==="boundary"?"bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/20":"text-slate-400 hover:text-slate-200"),children:"Boundary Elements"}),e.jsx("button",{onClick:()=>d("nonBoundary"),className:m("px-3 py-1.5 rounded-lg transition-all",t==="nonBoundary"?"bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20":"text-slate-400 hover:text-slate-200"),children:"Non-Boundary (Core)"}),e.jsx("button",{onClick:()=>d("upper"),className:m("px-3 py-1.5 rounded-lg transition-all",t==="upper"?"bg-sky-500 text-white font-bold shadow-md shadow-sky-500/20":"text-slate-400 hover:text-slate-200"),children:"Upper Triangular"}),e.jsx("button",{onClick:()=>d("transpose"),className:m("px-3 py-1.5 rounded-lg transition-all",t==="transpose"?"bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20":"text-slate-400 hover:text-slate-200"),children:"Matrix Transpose"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center w-full px-2 text-xs text-slate-400 font-semibold",children:[e.jsx("span",{children:"4x4 Input Matrix Grid"}),e.jsxs("span",{className:"text-amber-400 font-mono",children:["Pattern Sum = ",l]})]}),e.jsx("div",{className:"grid grid-cols-4 gap-2 font-mono",children:t==="transpose"?o.map((a,n)=>o.map((i,r)=>{const s=o[r][n];return e.jsxs("div",{className:"w-14 h-14 rounded-xl border bg-amber-500/20 border-amber-400 text-amber-200 ring-2 ring-amber-400/30 flex flex-col items-center justify-center font-bold text-sm",children:[e.jsxs("span",{className:"text-[9px] opacity-60",children:["[",n,"][",r,"]"]}),e.jsx("span",{children:s})]},`t-${n}-${r}`)})):o.map((a,n)=>a.map((i,r)=>{let s=!1,c="bg-slate-950 text-slate-600 border-slate-800/80 opacity-40";return t==="boundary"&&u(n,r)?(s=!0,c="bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold ring-2 ring-emerald-500/30 scale-105"):t==="nonBoundary"&&h(n,r)?(s=!0,c="bg-indigo-500/20 border-indigo-400 text-indigo-300 font-bold ring-2 ring-indigo-400/30 scale-105"):t==="upper"&&j(n,r)&&(s=!0,c="bg-sky-500/20 border-sky-400 text-sky-300 font-bold ring-2 ring-sky-400/30 scale-105"),e.jsxs("div",{className:m("w-14 h-14 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 font-mono text-sm",c),children:[e.jsxs("span",{className:"text-[9px] opacity-60",children:["[",n,"][",r,"]"]}),e.jsx("span",{children:s?i:"·"})]},`${n}-${r}`)}))})]}),e.jsxs("div",{className:"space-y-4 font-mono text-xs",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider font-sans",children:"Java Condition & Logic Breakdown"}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[t==="boundary"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-emerald-400 font-bold text-sm font-sans",children:"Boundary Condition (Outer Border):"}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-300 text-[11px] leading-relaxed",children:["if (i == 0 || i == R - 1 || j == 0 || j == C - 1) {",e.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',e.jsx("br",{}),"} else {",e.jsx("br",{}),'  System.out.print("\\t"); // Leave blank',e.jsx("br",{}),"}"]}),e.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects outer ring cells where row index is 0/last or column index is 0/last."})]}),t==="nonBoundary"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-indigo-400 font-bold text-sm font-sans",children:"Non-Boundary Condition (Inner Core):"}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-indigo-300 text-[11px] leading-relaxed",children:["if (i > 0 && i < R - 1 && j > 0 && j < C - 1) {",e.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',e.jsx("br",{}),"}"]}),e.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects inner grid cells excluding top/bottom rows and leftmost/rightmost columns."})]}),t==="upper"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-sky-400 font-bold text-sm font-sans",children:"Upper Triangular Condition:"}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-sky-300 text-[11px] leading-relaxed",children:["if (i <= j) {",e.jsx("br",{}),'  System.out.print(mat[i][j] + "\\t");',e.jsx("br",{}),"}"]}),e.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Selects primary diagonal elements and all cells above the primary diagonal."})]}),t==="transpose"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-amber-400 font-bold text-sm font-sans",children:"Transpose Matrix Logic (Swap Rows & Cols):"}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-300 text-[11px] leading-relaxed",children:["for (int i = 0; i < C; i++) {",e.jsx("br",{}),"  for (int j = 0; j < R; j++) {",e.jsx("br",{}),'    System.out.print(mat[j][i] + "\\t"); // Access [j][i]',e.jsx("br",{}),"  }",e.jsx("br",{}),"}"]}),e.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:"Swaps row index and column index so rows become columns."})]})]})]})]})]})},D=()=>e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Board Pattern Programs on Matrices"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Solving classic ICSE Class X Section B 10-mark matrix problems: boundary elements, non-boundary elements, upper/lower triangular forms, and transpose matrices."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: ICSE Board Matrix Patterns"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["In the ICSE Class X Computer Applications Section B paper (60 marks), matrix pattern problems carry ",e.jsx("strong",{children:"10 marks each"}),". These questions test your ability to construct precise conditional checks (",e.jsx("code",{className:"text-amber-300 font-mono",children:"if"})," statements) inside nested loops."]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Scenario (Barrackpore Lab):"}),e.jsxs("p",{className:"text-sm",children:["Debangshu practices ICSE 10-year board paper questions with Sukanta Hui: printing boundary elements of a 4x4 matrix, leaving non-boundary inner spaces blank using ",e.jsx("code",{className:"text-amber-300 font-mono",children:'System.out.print("\\t")'}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive ICSE Matrix Pattern Simulator"]}),e.jsx(A,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Summary Table of Classic Board Conditions"]}),e.jsx("div",{className:"overflow-x-auto bg-slate-950/60 rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[e.jsx("thead",{className:"bg-slate-900 text-sky-300 uppercase font-semibold border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Pattern Type"}),e.jsx("th",{className:"p-3 font-mono",children:"Java Logical Condition"}),e.jsx("th",{className:"p-3",children:"Output Formatting Note"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 font-mono",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-sans font-semibold text-emerald-400",children:"Boundary Elements"}),e.jsx("td",{className:"p-3 text-amber-300",children:"i == 0 || i == R - 1 || j == 0 || j == C - 1"}),e.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Print element + \\t; else print blank \\t"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-sans font-semibold text-indigo-400",children:"Non-Boundary Elements"}),e.jsx("td",{className:"p-3 text-amber-300",children:"i > 0 && i < R - 1 && j > 0 && j < C - 1"}),e.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Excludes outer ring cells"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-sans font-semibold text-sky-400",children:"Upper Triangular"}),e.jsx("td",{className:"p-3 text-amber-300",children:"i <= j"}),e.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Elements on/above primary diagonal"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-sans font-semibold text-amber-400",children:"Lower Triangular"}),e.jsx("td",{className:"p-3 text-amber-300",children:"i >= j"}),e.jsx("td",{className:"p-3 font-sans text-slate-400",children:"Elements on/below primary diagonal"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-on Java Source Code: ",e.jsx("code",{className:"font-mono text-emerald-300",children:"ICSEMatrixPatternsDemo.java"})]}),e.jsx(b,{fileModule:N,title:"ICSEMatrixPatternsDemo.java",highlightLines:[22,23,24,26]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Forgetting the ",e.jsx("code",{className:"text-rose-300 font-mono",children:"else"})," block when printing boundary elements. If you omit ",e.jsx("code",{className:"text-rose-300 font-mono",children:'else System.out.print("\\t");'}),", inner elements disappear without preserving the 2D grid shape!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always write a ",e.jsx("strong",{children:"Variable Description Table"})," (Mnemonics, Data Type, Purpose) at the end of your Section B board program for full 10/10 marks."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsx("li",{children:"• How would you write a program to check if a matrix is Symmetric ($A[i][j] == A[j][i]$)?"}),e.jsx("li",{children:"• How can you print only the 4 corner elements of an $R \\times C$ matrix?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(y,{title:"Board Pattern Programs FAQs",questions:v})}),e.jsx("section",{className:"space-y-5",children:e.jsx(g,{content:S,title:"Module 003_001 Topic 5: Board Pattern Programs on Matrices",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic5_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(w,{note:"Practice writing Variable Description Tables for every matrix pattern program. It guarantees top marks in ICSE Board Examinations! — Sukanta Hui"})})]});export{D as default};

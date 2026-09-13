import{b as d,j as e,bh as w}from"./vendor-react-core-CaA1o1Cx.js";import{J as g}from"./JavaFileLoader-BYsFDtcs.js";import{F as f}from"./FAQTemplate-D_90hN4m.js";import{P as j}from"./PlainTextPrint-yt10TRX1.js";import{T as b}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./JavaCodeBlock-DjVlNPWU.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const y=`/**\r
 * Topic 2: Row Sum and Column Sum Calculation\r
 * ICSE Class X Computer Applications - BlueJ Compatible\r
 * \r
 * Author: Sukanta Hui (Coder & AccoTax)\r
 * Location: Barrackpore, West Bengal\r
 */\r
\r
import java.util.Scanner;\r
\r
public class MatrixRowColSumDemo {\r
\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
\r
        System.out.println("==================================================");\r
        System.out.println("  ICSE CLASS X: MATRIX ROW & COLUMN SUM DEMO");\r
        System.out.println("==================================================");\r
\r
        System.out.print("Enter number of rows (M): ");\r
        int m = sc.nextInt();\r
        System.out.print("Enter number of columns (N): ");\r
        int n = sc.nextInt();\r
\r
        int[][] matrix = new int[m][n];\r
\r
        // Step 1: Input matrix elements\r
        System.out.println("\\nEnter " + (m * n) + " elements row by row:");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print("Element [" + i + "][" + j + "]: ");\r
                matrix[i][j] = sc.nextInt();\r
            }\r
        }\r
\r
        // Step 2: Display original matrix\r
        System.out.println("\\n--- Entered Matrix (" + m + " x " + n + ") ---");\r
        for (int i = 0; i < m; i++) {\r
            for (int j = 0; j < n; j++) {\r
                System.out.print(matrix[i][j] + "\\t");\r
            }\r
            System.out.println();\r
        }\r
\r
        // Step 3: Compute and Display Row Sums\r
        System.out.println("\\n--- Row-wise Sums ---");\r
        int grandTotal = 0;\r
        for (int i = 0; i < m; i++) {\r
            int rowSum = 0; // Reset row sum accumulator for each new row\r
            for (int j = 0; j < n; j++) {\r
                rowSum += matrix[i][j];\r
            }\r
            grandTotal += rowSum;\r
            System.out.println("Sum of Row " + i + " = " + rowSum);\r
        }\r
\r
        // Step 4: Compute and Display Column Sums\r
        System.out.println("\\n--- Column-wise Sums ---");\r
        for (int j = 0; j < n; j++) {\r
            int colSum = 0; // Reset column sum accumulator for each new column\r
            for (int i = 0; i < m; i++) {\r
                colSum += matrix[i][j];\r
            }\r
            System.out.println("Sum of Column " + j + " = " + colSum);\r
        }\r
\r
        // Step 5: Display Grand Total\r
        System.out.println("\\nGrand Total of all elements = " + grandTotal);\r
        System.out.println("==================================================");\r
\r
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
 * sc              Scanner     Object of Scanner class to accept input\r
 * m               int         Stores the number of rows in the matrix\r
 * n               int         Stores the number of columns in the matrix\r
 * matrix          int[][]     Stores 2D array elements\r
 * i               int         Outer loop index for row traversal\r
 * j               int         Inner loop index for column traversal\r
 * rowSum          int         Accumulates the sum of elements of the current row\r
 * colSum          int         Accumulates the sum of elements of the current column\r
 * grandTotal      int         Accumulates the total sum of all matrix elements\r
 * ============================================================================\r
 */`,v=`/**
 * Topic 2 - Example 2: Row-wise and Column-wise Maxima & Minima
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Finding the maximum and minimum element in each row
 * 2. Finding the maximum and minimum element in each column
 * 3. Finding overall matrix max & min with coordinates (row, col)
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class MatrixRowColExtremesDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 2 · EXAMPLE 2: ROW & COLUMN MAXIMA AND MINIMA");
        System.out.println("============================================================");

        int[][] mat = {
            {28, 65, 12, 89},
            {45, 19, 73, 34},
            {92, 51, 38, 60}
        };

        int m = mat.length;
        int n = mat[0].length;

        // Display Matrix
        System.out.println("Matrix Grid (" + m + " x " + n + "):");
        for (int i = 0; i < m; i++) {
            System.out.print("   Row " + i + ":\\t");
            for (int j = 0; j < n; j++) {
                System.out.print(mat[i][j] + "\\t");
            }
            System.out.println();
        }
        System.out.println();

        // 1. Finding Row-wise Max and Min
        System.out.println("1. Row-wise Maximum and Minimum:");
        for (int i = 0; i < m; i++) {
            int rowMax = mat[i][0];
            int rowMin = mat[i][0];
            for (int j = 1; j < n; j++) {
                if (mat[i][j] > rowMax) rowMax = mat[i][j];
                if (mat[i][j] < rowMin) rowMin = mat[i][j];
            }
            System.out.println("   Row " + i + " -> Max: " + rowMax + ", Min: " + rowMin);
        }
        System.out.println();

        // 2. Finding Column-wise Max and Min
        System.out.println("2. Column-wise Maximum and Minimum:");
        for (int j = 0; j < n; j++) {
            int colMax = mat[0][j];
            int colMin = mat[0][j];
            for (int i = 1; i < m; i++) {
                if (mat[i][j] > colMax) colMax = mat[i][j];
                if (mat[i][j] < colMin) colMin = mat[i][j];
            }
            System.out.println("   Col " + j + " -> Max: " + colMax + ", Min: " + colMin);
        }
        System.out.println();

        // 3. Overall Matrix Max and Min with Exact Indices
        int overallMax = mat[0][0], maxR = 0, maxC = 0;
        int overallMin = mat[0][0], minR = 0, minC = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] > overallMax) {
                    overallMax = mat[i][j];
                    maxR = i;
                    maxC = j;
                }
                if (mat[i][j] < overallMin) {
                    overallMin = mat[i][j];
                    minR = i;
                    minC = j;
                }
            }
        }

        System.out.println("3. Overall Matrix Extremes:");
        System.out.println("   Overall Maximum = " + overallMax + " located at [" + maxR + "][" + maxC + "]");
        System.out.println("   Overall Minimum = " + overallMin + " located at [" + minR + "][" + minC + "]");
        System.out.println("============================================================");
    }
}
`,C=`/**
 * Topic 2 - Example 3: Tabular Student Marks Grade Sheet
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Practical 2D array: Rows represent students, Columns represent subjects
 * 2. Row sums -> Total marks and percentage for each student
 * 3. Column sums -> Class average for each academic subject
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class StudentMarksReportDemo {

    public static void main(String[] args) {
        System.out.println("========================================================================");
        System.out.println("  TOPIC 2 · EXAMPLE 3: STUDENT MARKS & SUBJECT PERFORMANCE REPORT");
        System.out.println("========================================================================");

        String[] students = {"Debangshu", "Swadeep", "Priyanka", "Ananya"};
        String[] subjects = {"English", "Maths", "Science", "Computers"};

        // Marks out of 100 for 4 students across 4 subjects
        int[][] marks = {
            {88, 94, 91, 98}, // Debangshu
            {76, 85, 82, 90}, // Swadeep
            {92, 98, 95, 100}, // Priyanka
            {81, 79, 88, 92}  // Ananya
        };

        int numStudents = marks.length;
        int numSubjects = marks[0].length;

        // Print Tabular Heading
        System.out.printf("%-12s", "Student");
        for (String sub : subjects) {
            System.out.printf("%-10s", sub);
        }
        System.out.printf("%-8s%-8s\\n", "Total", "%age");
        System.out.println("------------------------------------------------------------------------");

        int[] studentTotals = new int[numStudents];
        int[] subjectTotals = new int[numSubjects];

        // Calculating Row Sums (Student Totals)
        for (int i = 0; i < numStudents; i++) {
            int total = 0;
            System.out.printf("%-12s", students[i]);
            for (int j = 0; j < numSubjects; j++) {
                System.out.printf("%-10d", marks[i][j]);
                total += marks[i][j];
                subjectTotals[j] += marks[i][j]; // Accumulate into subject column total
            }
            studentTotals[i] = total;
            double pct = (double) total / numSubjects;
            System.out.printf("%-8d%6.1f%%\\n", total, pct);
        }

        System.out.println("------------------------------------------------------------------------");

        // Display Column Sums & Subject Averages
        System.out.printf("%-12s", "Sub Avg");
        for (int j = 0; j < numSubjects; j++) {
            double avg = (double) subjectTotals[j] / numStudents;
            System.out.printf("%-10.1f", avg);
        }
        System.out.println();
        System.out.println("========================================================================");

        // Highest Scorer Announcement
        int topStudentIdx = 0;
        for (int i = 1; i < numStudents; i++) {
            if (studentTotals[i] > studentTotals[topStudentIdx]) {
                topStudentIdx = i;
            }
        }
        System.out.println("★ Batch Topper: " + students[topStudentIdx] + 
                           " with " + studentTotals[topStudentIdx] + "/" + (numSubjects * 100) + 
                           " (" + String.format("%.1f", (double) studentTotals[topStudentIdx] / numSubjects) + "%)");
        System.out.println("========================================================================");
    }
}
`,A=`/**
 * Topic 2 - Example 4: Matrix Grand Total, Averages & Deviation
 * ICSE Class X Computer Applications - BlueJ Compatible
 * 
 * Demonstrates:
 * 1. Accumulating all elements to find Matrix Grand Total & Overall Mean
 * 2. Calculating per-row averages
 * 3. Counting elements strictly greater than and less than the overall mean
 * 
 * Author: Sukanta Hui (Coder & AccoTax)
 * Location: Barrackpore, West Bengal
 */

public class GrandTotalAndAveragesDemo {

    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("  TOPIC 2 · EXAMPLE 4: GRAND TOTAL, AVERAGES & STATS");
        System.out.println("============================================================");

        int[][] grid = {
            {20, 45, 30},
            {15, 60, 25},
            {50, 10, 35}
        };

        int rows = grid.length;
        int cols = grid[0].length;
        int totalCells = rows * cols;

        int grandTotal = 0;

        // 1. Grid display and Grand Sum calculation
        System.out.println("Matrix Table (" + rows + " x " + cols + "):");
        for (int i = 0; i < rows; i++) {
            System.out.print("   Row " + i + ":\\t");
            int rowSum = 0;
            for (int j = 0; j < cols; j++) {
                System.out.print(grid[i][j] + "\\t");
                rowSum += grid[i][j];
                grandTotal += grid[i][j];
            }
            double rowAvg = (double) rowSum / cols;
            System.out.printf("[Sum: %d | Avg: %.2f]\\n", rowSum, rowAvg);
        }
        System.out.println();

        double overallMean = (double) grandTotal / totalCells;

        System.out.println("Summary Statistics:");
        System.out.println("   Total Cells:   " + totalCells);
        System.out.println("   Grand Total:   " + grandTotal);
        System.out.printf("   Overall Mean:  %.2f\\n", overallMean);
        System.out.println();

        // 2. Classifying elements above and below mean
        int aboveCount = 0;
        int belowCount = 0;
        int equalCount = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] > overallMean) aboveCount++;
                else if (grid[i][j] < overallMean) belowCount++;
                else equalCount++;
            }
        }

        System.out.println("Distribution relative to Mean (" + String.format("%.2f", overallMean) + "):");
        System.out.println("   Elements > Mean: " + aboveCount);
        System.out.println("   Elements < Mean: " + belowCount);
        System.out.println("   Elements = Mean: " + equalCount);
        System.out.println("============================================================");
    }
}
`,N=`================================================================================\r
CODER & ACCOTAX - ICSE CLASS X COMPUTER APPLICATIONS MASTER STUDY NOTE\r
MODULE 003_001: Two Dimensional Array Concepts\r
TOPIC 2: Row Sum and Column Sum Calculation\r
Educator: Sukanta Hui | Barrackpore, Shyamnagar, Naihati (West Bengal)\r
================================================================================\r
\r
1. CORE MATHEMATICAL & ALGORITHMIC RULES\r
--------------------------------------------------------------------------------\r
Given an M x N Matrix 'A':\r
- Row Sum for Row i (R_i)     = Sum of A[i][j] for j from 0 to N - 1\r
- Column Sum for Column j (C_j)= Sum of A[i][j] for i from 0 to M - 1\r
- Grand Total (Total Sum)     = Sum of all R_i = Sum of all C_j\r
\r
2. ALGORITHM FOR ROW SUMS\r
--------------------------------------------------------------------------------\r
Step 1: Loop i from 0 to M - 1 (Outer Loop for Rows)\r
Step 2:   Set rowSum = 0 (CRITICAL: Reset accumulator for each new row)\r
Step 3:   Loop j from 0 to N - 1 (Inner Loop for Columns)\r
Step 4:     rowSum = rowSum + A[i][j]\r
Step 5:   End inner loop\r
Step 6:   Display "Sum of Row " + i + " = " + rowSum\r
Step 7: End outer loop\r
\r
3. ALGORITHM FOR COLUMN SUMS (LOOP INVERSION)\r
--------------------------------------------------------------------------------\r
Step 1: Loop j from 0 to N - 1 (Outer Loop for Columns)\r
Step 2:   Set colSum = 0 (CRITICAL: Reset accumulator for each new column)\r
Step 3:   Loop i from 0 to M - 1 (Inner Loop for Rows)\r
Step 4:     colSum = colSum + A[i][j]\r
Step 5:   End inner loop\r
Step 6:   Display "Sum of Column " + j + " = " + colSum\r
Step 7: End outer loop\r
\r
4. VISUAL CALCULATION MATRIX (3x3 Example)\r
--------------------------------------------------------------------------------\r
              Col 0   Col 1   Col 2  |  Row Sum (R_i)\r
            +-------+-------+-------+|\r
     Row 0  |  10   |  15   |  20   ||  --> 10 + 15 + 20 = 45\r
            +-------+-------+-------+|\r
     Row 1  |  25   |  30   |  35   ||  --> 25 + 30 + 35 = 90\r
            +-------+-------+-------+|\r
     Row 2  |  40   |  45   |  50   ||  --> 40 + 45 + 50 = 135\r
            +-------+-------+-------+|\r
    ---------------------------------+\r
    Col Sum |  75   |  90   | 105   ||  GRAND TOTAL = 270\r
    (C_j)   | (10+25| (15+30| (20+35||\r
            |  +40) |  +45) |  +50) ||\r
\r
5. COMMON BOARD EXAM PITFALLS\r
--------------------------------------------------------------------------------\r
[!] Error: Declaring 'int rowSum = 0;' outside the outer row loop.\r
    Effect: Produces cumulative totals across rows instead of separate sums.\r
\r
[!] Error: Using 'i' on outer loop and 'j' on inner loop for Column Sums.\r
    Remember: Column sums REQUIRE outer loop 'j' (0 to N-1) and inner loop 'i' (0 to M-1).\r
\r
[!] Error: Forgetting to cast to double when calculating row averages.\r
    Fix: double avg = (double) rowSum / cols;\r
\r
6. ICSE SECTION B CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Prompt user for dimensions and matrix elements.\r
[✓] Display original entered matrix in grid format.\r
[✓] Print clean row sum and column sum results.\r
[✓] Include comprehensive Variable Description Table.\r
\r
================================================================================\r
Teacher's Tip (Sukanta Hui):\r
"Notice how in Row Sum, index 'i' is fixed on outer loop, but in Column Sum,\r
index 'j' is fixed on outer loop! Memorize this inverted pattern for full\r
marks in ICSE Class 10!"\r
================================================================================`,R=[{question:"Why must the 'rowSum' accumulator variable be reset to 0 inside the outer loop when calculating row sums?",shortAnswer:"To ensure that each row's sum starts afresh from zero and does not accumulate values from previously processed rows.",explanation:"If 'rowSum' is declared and initialized outside the outer loop, Row 1 will add to Row 0's sum, Row 2 will add to Row 1's sum, producing cumulative running totals instead of independent row sums.",hint:"Each row is an independent calculation; reset the accumulator before starting its column loop.",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    int rowSum = 0; // Reset for each new row!
    for (int j = 0; j < n; j++) {
        rowSum += matrix[i][j];
    }
    System.out.println("Row " + i + " Sum = " + rowSum);
}`},{question:"How do loop structures differ between calculating Row Sums and Column Sums?",shortAnswer:"Row sum uses row index 'i' on the outer loop and column index 'j' on the inner loop. Column sum inverts this by placing column index 'j' on the outer loop and row index 'i' on the inner loop.",explanation:"To calculate the sum of Column j, you must hold column index j constant while iterating row index i through all rows from 0 to m - 1. Thus, the outer loop is 'j' and the inner loop is 'i'.",hint:"For column sums, the outer loop iterates over columns (j) and the inner loop iterates over rows (i).",level:"basic",codeExample:`// Column Sums:
for (int j = 0; j < cols; j++) {
    int colSum = 0;
    for (int i = 0; i < rows; i++) {
        colSum += matrix[i][j];
    }
    System.out.println("Col " + j + " Sum = " + colSum);
}`},{question:"Can both Row Sums and Column Sums be calculated simultaneously in a single pass of nested loops?",shortAnswer:"Yes, by maintaining 1D accumulator arrays 'int[] rowSums = new int[m]' and 'int[] colSums = new int[n]' and accumulating both inside the same nested loop.",explanation:"Inside the nested loops (i from 0 to m-1, j from 0 to n-1), you can execute rowSums[i] += matrix[i][j]; and colSums[j] += matrix[i][j]; in a single pass O(M*N).",hint:"Use 1D arrays to hold ongoing sums for all rows and columns.",level:"intermediate",codeExample:`int[] rSum = new int[m];
int[] cSum = new int[n];
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        rSum[i] += matrix[i][j];
        cSum[j] += matrix[i][j];
    }
}`},{question:"How do you find the index of the row with the Maximum Row Sum in a matrix?",shortAnswer:"Track maxSum and maxRowIndex; compare each row's calculated sum against maxSum and update both if a higher sum is found.",explanation:"Initialize maxSum to Integer.MIN_VALUE or the first row's sum. For every row i, calculate rowSum. If rowSum > maxSum, set maxSum = rowSum and maxRowIndex = i.",hint:"Compare rowSum with a running maxSum variable.",level:"intermediate",codeExample:`int maxSum = Integer.MIN_VALUE, bestRow = 0;
for (int i = 0; i < m; i++) {
    int rSum = 0;
    for (int j = 0; j < n; j++) rSum += arr[i][j];
    if (rSum > maxSum) {
        maxSum = rSum;
        bestRow = i;
    }
}
System.out.println("Row with max sum: " + bestRow + " (Sum = " + maxSum + ")");`},{question:"How do you calculate the Grand Total (sum of all elements) in a 2D matrix?",shortAnswer:"Declare a grandTotal accumulator outside all loops, initialize it to 0, and add matrix[i][j] (or rowSum) during traversal.",explanation:"Grand total is the sum of all M * N cells. It can be accumulated cell-by-cell or by adding each rowSum to grandTotal.",hint:"Grand total sums all rows together.",level:"basic",codeExample:`int grandTotal = 0;
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        grandTotal += matrix[i][j];
    }
}`},{question:"What happens if a matrix has negative numbers when calculating row sums?",shortAnswer:"Negative numbers decrease the sum algebraically (e.g., 10 + (-4) + 5 = 11).",explanation:"The addition operator '+' in Java handles signed integer arithmetic naturally, adding positive and negative integers correctly.",hint:"Standard addition handles positive and negative signs.",level:"basic",codeExample:"int sum = 10 + (-4) + 5; // sum is 11"},{question:"How do you calculate the average of elements in each individual row?",shortAnswer:"Divide the row's total sum by the number of columns: double rowAvg = (double) rowSum / cols;",explanation:"Casting rowSum to (double) before division prevents integer truncation and yields accurate decimal averages.",hint:"Cast to double to prevent integer division truncation.",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    int rSum = 0;
    for (int j = 0; j < n; j++) rSum += arr[i][j];
    double avg = (double) rSum / n;
    System.out.println("Row " + i + " Average: " + avg);
}`},{question:"In a 3x4 matrix, what are the loop boundaries for calculating the sum of column 2 specifically?",shortAnswer:"Set j = 2 and loop i from 0 to 2 (i < 3).",explanation:"To sum a single specific column, no outer loop is needed. Fix j = 2 and iterate row index i from 0 to rows - 1.",hint:"Only row index i needs to vary when column j is fixed.",level:"basic",codeExample:`int sumCol2 = 0;
for (int i = 0; i < 3; i++) {
    sumCol2 += matrix[i][2];
}`},{question:"How do you store the sums of all rows into a 1D array?",shortAnswer:"Create 'int[] rSums = new int[m];' and assign rSums[i] = rowSum after the inner loop finishes.",explanation:"An array of size m stores one integer per row, capturing all row sums for subsequent processing or sorting.",hint:"Array size equals the number of rows.",level:"basic",codeExample:`int[] rSums = new int[m];
for (int i = 0; i < m; i++) {
    int sum = 0;
    for (int j = 0; j < n; j++) sum += arr[i][j];
    rSums[i] = sum;
}`},{question:"How do you store the sums of all columns into a 1D array?",shortAnswer:"Create 'int[] cSums = new int[n];' and assign cSums[j] = colSum after the inner loop finishes.",explanation:"An array of size n stores one integer per column, capturing all column totals.",hint:"Array size equals the number of columns.",level:"basic",codeExample:`int[] cSums = new int[n];
for (int j = 0; j < n; j++) {
    int sum = 0;
    for (int i = 0; i < m; i++) sum += arr[i][j];
    cSums[j] = sum;
}`},{question:"What is a 'Magic Square' in ICSE matrix programming?",shortAnswer:"A square matrix where the sum of every row, every column, and both diagonals are all equal to the same constant sum.",explanation:"To verify a magic square: 1) Check if all row sums equal target sum; 2) Check if all column sums equal target sum; 3) Check primary diagonal sum; 4) Check secondary diagonal sum.",hint:"All rows, columns, and both diagonals must yield identical sums.",level:"advanced",codeExample:`// Magic square check snippet:
// int target = primaryDiagonalSum;
// Verify rowSums[i] == target && colSums[j] == target && secDiagSum == target`},{question:"What is the time complexity of calculating all row sums and column sums in an M x N matrix?",shortAnswer:"O(M * N) time complexity.",explanation:"Row sum calculation inspects M * N elements, and column sum calculation inspects N * M elements. Total time is proportional to 2 * (M * N), which simplifies to O(M * N).",hint:"Linear with respect to the total number of cells.",level:"intermediate",codeExample:"// For a 3x3 matrix: 9 operations for rows + 9 for cols = 18 total steps"},{question:"How do you calculate the sum of only the even elements in each row?",shortAnswer:"Inside the inner column loop, add a condition: if (matrix[i][j] % 2 == 0) rowEvenSum += matrix[i][j];",explanation:"The modulo operator % 2 filters for even numbers before adding to the row accumulator.",hint:"Use an if condition inside the inner loop.",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    int evenSum = 0;
    for (int j = 0; j < n; j++) {
        if (arr[i][j] % 2 == 0) evenSum += arr[i][j];
    }
    System.out.println("Row " + i + " Even Sum = " + evenSum);
}`},{question:"What will happen if you initialize 'colSum = 0' inside the inner loop when calculating column sums?",shortAnswer:"colSum will be reset on every row iteration, resulting in only the last row's element being retained.",explanation:"The accumulator for Column j must be reset outside the inner loop (in the outer column loop) so it can sum across all rows for that column.",hint:"Reset the column accumulator before entering the row loop, not inside it.",level:"intermediate",codeExample:`// WRONG:
// for (int j=0; j<n; j++) {
//     for (int i=0; i<m; i++) { int colSum = 0; colSum += arr[i][j]; }
// }`},{question:"How do you find the Column with the Minimum Column Sum in a matrix?",shortAnswer:"Maintain minSum = Integer.MAX_VALUE and minColIdx = 0; compare each column's calculated total and update.",explanation:"Iterate outer loop j (columns), calculate colSum across rows i. If colSum < minSum, update minSum and minColIdx.",hint:"Track running minimum across all column sums.",level:"intermediate",codeExample:`int minSum = Integer.MAX_VALUE, bestCol = 0;
for (int j = 0; j < n; j++) {
    int cSum = 0;
    for (int i = 0; i < m; i++) cSum += arr[i][j];
    if (cSum < minSum) {
        minSum = cSum;
        bestCol = j;
    }
}
System.out.println("Column with min sum: " + bestCol);`},{question:"How do you display a 2D matrix alongside its Row Sums on the right of each row?",shortAnswer:"Inside the row loop, print each element with '\\t'; after the inner loop, print the row's sum on the same line before calling println().",explanation:"This creates a neat report layout where each row displays its data followed by its total: [ 10  20  30 | Sum = 60 ].",hint:"Print the row sum before calling System.out.println().",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    int rSum = 0;
    for (int j = 0; j < n; j++) {
        System.out.print(arr[i][j] + "\\t");
        rSum += arr[i][j];
    }
    System.out.println("| Sum = " + rSum);
}`},{question:"What is the sum of row 1 in the matrix: {{5, 10, 15}, {20, 25, 30}, {35, 40, 45}}?",shortAnswer:"75 (Row 1 contains elements 20, 25, 30; 20 + 25 + 30 = 75).",explanation:"Row 0 is {5, 10, 15} (Sum=30). Row 1 is {20, 25, 30} (Sum=75). Row 2 is {35, 40, 45} (Sum=120).",hint:"Remember row indices are 0, 1, 2. Row 1 is the middle row.",level:"basic",codeExample:"// Row 1 sum = 20 + 25 + 30 = 75"},{question:"What is the sum of column 0 in the matrix: {{5, 10, 15}, {20, 25, 30}, {35, 40, 45}}?",shortAnswer:"60 (Column 0 contains elements 5, 20, 35; 5 + 20 + 35 = 60).",explanation:"Column 0 elements are arr[0][0] = 5, arr[1][0] = 20, arr[2][0] = 35. Total = 60.",hint:"Look at the first vertical column: 5 + 20 + 35.",level:"basic",codeExample:"// Col 0 sum = 5 + 20 + 35 = 60"},{question:"How can integer overflow occur during row sum calculations in Java?",shortAnswer:"If matrix elements are very large positive integers whose sum exceeds Integer.MAX_VALUE (2,147,483,647), causing the sum to wrap around to negative numbers.",explanation:"To prevent overflow with large values, use the 'long' data type for accumulator variables: long rowSum = 0L;.",hint:"Use long instead of int to prevent overflow with large integers.",level:"advanced",codeExample:`long rowSum = 0L;
for (int j = 0; j < n; j++) {
    rowSum += matrix[i][j];
}`},{question:"How do you calculate the product of elements in each row instead of the sum?",shortAnswer:"Initialize rowProduct = 1 (multiplicative identity), and multiply inside the inner loop: rowProduct *= matrix[i][j];",explanation:"Unlike summation where the neutral identity is 0, multiplication requires initializing the accumulator to 1 (initializing to 0 would always produce 0).",hint:"Product accumulators must start at 1, not 0.",level:"basic",codeExample:`for (int i = 0; i < m; i++) {
    int prod = 1;
    for (int j = 0; j < n; j++) prod *= arr[i][j];
    System.out.println("Row " + i + " Product = " + prod);
}`},{question:"What is the effect of writing 'for (int i = 0; i < cols; i++)' when calculating row sums of a 2x4 matrix?",shortAnswer:"ArrayIndexOutOfBoundsException when i >= 2.",explanation:"In a 2x4 matrix, rows = 2 and cols = 4. If the outer row loop tests i < 4, when i = 2 or 3, matrix[i] does not exist.",hint:"Row loop must bound against row dimension (matrix.length).",level:"basic",codeExample:"// Matrix has 2 rows. i < 4 attempts matrix[2][0], which crashes!"},{question:"How do you check if all rows in a matrix have equal sums?",shortAnswer:"Calculate the sum of Row 0 as a baseline; iterate through rows 1 to m - 1 and verify if each row's sum equals the baseline.",explanation:"If any row's sum differs from the baseline, set a boolean flag allEqual = false and break.",hint:"Compare every subsequent row sum against row 0's sum.",level:"intermediate",codeExample:`int target = 0;
for (int j = 0; j < n; j++) target += arr[0][j];
boolean equal = true;
for (int i = 1; i < m; i++) {
    int rSum = 0;
    for (int j = 0; j < n; j++) rSum += arr[i][j];
    if (rSum != target) { equal = false; break; }
}`},{question:"How do you calculate row sums in a Jagged Array where each row has a different number of columns?",shortAnswer:"Use 'matrix[i].length' as the inner loop limit for each row: for (int j = 0; j < matrix[i].length; j++).",explanation:"Because jagged arrays have varying column counts per row, hardcoding a fixed column size causes errors. Using matrix[i].length adapts dynamically to each row's specific length.",hint:"matrix[i].length dynamically measures row i's length.",level:"intermediate",codeExample:`for (int i = 0; i < jagged.length; i++) {
    int sum = 0;
    for (int j = 0; j < jagged[i].length; j++) {
        sum += jagged[i][j];
    }
    System.out.println("Row " + i + " Sum: " + sum);
}`},{question:"Why should we display the original matrix before printing the row/column sum results in ICSE exams?",shortAnswer:"To provide a complete, clear output transcript demonstrating that the calculations match the input grid.",explanation:"ICSE Board evaluators award marks for clarity and complete test case output, including displaying the input matrix in grid form.",hint:"Always display the input grid first, then your results.",level:"board-hot",codeExample:`// 1. Print Matrix Grid
// 2. Print Row Sums
// 3. Print Column Sums
// 4. Print Grand Total`},{question:"What variables must be documented in the Variable Description Table for a Row/Col sum program in ICSE Section B?",shortAnswer:"sc (Scanner), m (int), n (int), matrix (int[][]), i (int), j (int), rowSum (int), colSum (int), grandTotal (int).",explanation:"Listing all declared variables with their precise data types and descriptions ensures maximum documentation marks.",hint:"Include loop indices, dimension variables, matrix, and accumulators.",level:"board-hot",codeExample:`/*
 * VARIABLE TABLE:
 * rowSum    | int | Stores sum of current row elements
 * colSum    | int | Stores sum of current column elements
 * grandTotal| int | Stores overall total sum
 */`}],M=()=>{const[t,m]=d.useState([[10,15,20],[25,30,35],[40,45,50]]),r=(o,n,a)=>{const s=parseInt(a,10),u=t.map((p,x)=>p.map((h,S)=>x===o&&S===n?isNaN(s)?0:s:h));m(u)},i=t.map(o=>o.reduce((n,a)=>n+a,0)),l=[0,1,2].map(o=>t.reduce((n,a)=>n+(a[o]||0),0)),c=i.reduce((o,n)=>o+n,0);return e.jsxs("div",{className:"bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-sky-400",children:"📊 Real-Time Row Sum & Column Sum Calculator"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Edit cell values below to observe live row totals, column totals, and grand total calculations."})]}),e.jsxs("div",{className:"text-xs text-amber-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800",children:["Grand Total = ",e.jsx("strong",{className:"text-white text-sm",children:c})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("div",{className:"min-w-[420px] max-w-xl mx-auto space-y-3 font-mono",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-3 text-center text-xs text-slate-400 font-semibold",children:[e.jsx("span",{}),e.jsx("span",{children:"Col 0"}),e.jsx("span",{children:"Col 1"}),e.jsx("span",{children:"Col 2"}),e.jsx("span",{className:"text-sky-400",children:"Row Sums"})]}),t.map((o,n)=>e.jsxs("div",{className:"grid grid-cols-5 gap-3 items-center",children:[e.jsxs("span",{className:"text-xs font-semibold text-slate-400 text-right pr-2",children:["Row ",n]}),o.map((a,s)=>e.jsx("input",{type:"number",value:a,onChange:u=>r(n,s,u.target.value),className:"text-center bg-slate-900 border border-slate-700 focus:border-sky-500 rounded-lg py-2.5 text-xs font-mono text-amber-300 outline-none transition-all shadow-inner"},s)),e.jsx("div",{className:"bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold text-center py-2.5 rounded-lg text-xs",children:i[n]})]},n)),e.jsxs("div",{className:"grid grid-cols-5 gap-3 items-center pt-2 border-t border-slate-800",children:[e.jsx("span",{className:"text-xs font-semibold text-indigo-400 text-right pr-2",children:"Col Sums"}),l.map((o,n)=>e.jsx("div",{className:"bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-center py-2.5 rounded-lg text-xs",children:o},n)),e.jsx("div",{className:"bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-center py-2.5 rounded-lg text-xs",children:c})]})]})})]})},P=()=>{const[t,m]=d.useState(0),r=[{id:"row-col-sum-basic",title:"1. Row & Column Sums",file:"MatrixRowColSumDemo.java",description:"Standard calculation of individual row totals and column totals with proper accumulator resets and loop scoping.",code:y,highlights:[18,19,21,27,28,30,48,51,60,63]},{id:"row-col-extremes",title:"2. Row & Col Max / Min",file:"MatrixRowColExtremesDemo.java",description:"Finding maximum and minimum values per row, per column, and overall matrix extremes with their row and column index coordinates.",code:v,highlights:[31,33,34,45,47,48,62,67]},{id:"student-marks",title:"3. Student Marks Grade Sheet",file:"StudentMarksReportDemo.java",description:"Real-world ICSE Board problem: Student x Subject 2D array, computing student totals and percentages alongside subject averages.",code:C,highlights:[16,21,37,43,44,47,56]},{id:"grand-total-avg",title:"4. Grand Total & Averages",file:"GrandTotalAndAveragesDemo.java",description:"Accumulating grand sum, overall matrix mean, per-row averages, and counting elements above and below the mean.",code:A,highlights:[25,30,31,34,38,50,51]}];return e.jsxs("div",{className:"dark bg-slate-900 text-slate-200 min-h-screen py-8 px-4 md:px-6 lg:px-8 space-y-12",children:[e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"2D Array Concepts"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:"Row Sum & Column Sum Calculation"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Calculating individual row totals and column totals in 2D matrices by positioning accumulator variables inside outer vs inner loop scopes."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Concept Overview: Accumulator Reset Rule"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed",children:[e.jsxs("p",{children:["When calculating ",e.jsx("strong",{children:"Row Sums"})," or ",e.jsx("strong",{children:"Column Sums"})," in ICSE Board Java programs, the most critical rule is ",e.jsx("strong",{children:"where you reset your sum accumulator variable to 0"}),":"]}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 text-sm text-slate-300",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Row Sum (",e.jsx("code",{className:"text-sky-300 font-mono",children:"rowSum = 0"}),"):"]})," Must be reset to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0"})," ",e.jsx("em",{children:"inside the outer row loop"})," before traversing each row's columns."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Column Sum (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"colSum = 0"}),"):"]})," Must be reset to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"0"})," ",e.jsx("em",{children:"inside the outer column loop"})," before traversing each column's rows."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950/60 rounded-xl border-l-4 border-sky-500 text-slate-300",children:[e.jsx("p",{className:"font-semibold text-sky-300 mb-1",children:"Classroom Analogy (Ichapur Center):"}),e.jsx("p",{className:"text-sm",children:"In Ichapur, Tuhina analyzes sales figures across 3 store branches (rows) and 3 product categories (columns). To find total sales for Branch 0, she resets her calculator to 0 before adding up Branch 0's items. If she forgets to reset to 0 for Branch 1, Branch 0's total gets added to Branch 1!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Interactive Row & Column Sum Calculator"]}),e.jsx(M,{})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Technical Breakdown: Loop Scoping Comparison"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-base",children:"1. Row Sum Execution Pattern"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int i = 0; i < rows; i++) {"}),e.jsx("div",{className:"pl-4 text-emerald-400 font-bold",children:"int rowSum = 0; // RESET FOR EACH ROW"}),e.jsx("div",{className:"pl-4",children:"for (int j = 0; j < cols; j++) {"}),e.jsx("div",{className:"pl-8 text-slate-300",children:"rowSum += matrix[i][j];"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-sky-300",children:'System.out.println("Row " + i + " = " + rowSum);'}),e.jsx("div",{children:"}"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:[e.jsx("code",{className:"text-emerald-300 font-mono",children:"rowSum"})," is zeroed out before starting column additions for row ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-base",children:"2. Column Sum Execution Pattern"}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsx("div",{children:"for (int j = 0; j < cols; j++) { // OUTER COL LOOP"}),e.jsx("div",{className:"pl-4 text-emerald-400 font-bold",children:"int colSum = 0; // RESET FOR EACH COL"}),e.jsx("div",{className:"pl-4",children:"for (int i = 0; i < rows; i++) { // INNER ROW LOOP"}),e.jsx("div",{className:"pl-8 text-slate-300",children:"colSum += matrix[i][j];"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{className:"pl-4 text-indigo-300",children:'System.out.println("Col " + j + " = " + colSum);'}),e.jsx("div",{children:"}"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Outer loop runs over columns ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"j"}),", inner loop adds elements across rows ",e.jsx("code",{className:"text-sky-300 font-mono",children:"i"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Code Studio: Row & Column Aggregations"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Explore 4 practical BlueJ-compatible Java programs covering row sums, column sums, row/column extremes, student grade sheets, and matrix averages."})]}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"4 ICSE Examples"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5",children:r.map((i,l)=>e.jsxs("button",{onClick:()=>m(l),className:w("p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between",t===l?"bg-emerald-500/10 border-emerald-500/40 text-white shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30":"bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"),children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 mb-1",children:i.title}),e.jsx("div",{className:"font-mono text-[11px] text-slate-400 truncate",children:i.file})]},i.id))}),e.jsxs("div",{className:"p-4 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-2",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e.jsx("span",{className:"font-semibold text-emerald-300 text-sm",children:r[t].title}),e.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-950/50 px-2 py-0.5 rounded border border-sky-800/50",children:r[t].file})]}),e.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:r[t].description})]}),e.jsx(g,{fileModule:r[t].code,title:r[t].file,highlightLines:r[t].highlights})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & ICSE Board Exam Guidelines"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-rose-300 mb-2",children:"Common Board Exam Pitfall"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Declaring ",e.jsx("code",{className:"text-rose-300 font-mono",children:"int sum = 0;"})," ",e.jsx("strong",{children:"BEFORE"})," the outer loop. This causes previous row totals to accumulate continuously, yielding incorrect values for subsequent rows!"]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsx("h3",{className:"font-semibold text-emerald-300 mb-2",children:"ICSE Best Practice"}),e.jsxs("p",{className:"text-slate-400 text-xs leading-relaxed",children:["Always declare accumulator variables inside the outer loop body (e.g., ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"int rowSum = 0;"})," right after ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"for(int i=0;...)"}),")."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-sky-950/40 p-6 md:p-8 rounded-2xl border border-sky-800/60 shadow-lg",children:[e.jsxs("h3",{className:"text-lg font-semibold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"💭"})," Think About This..."]}),e.jsxs("ul",{className:"space-y-2 text-sky-200 text-sm",children:[e.jsxs("li",{children:["• Can you calculate both row sums AND column sums in a single pass of nested loops? (Hint: Use a 1D array ",e.jsx("code",{className:"text-sky-300 font-mono",children:"int[] colSums = new int[cols];"}),")"]}),e.jsx("li",{children:"• How would you find the row index with the highest row sum?"})]})]}),e.jsx("section",{className:"space-y-5",children:e.jsx(f,{title:"Row Sum & Column Sum FAQs",questions:R})}),e.jsx("section",{className:"space-y-5",children:e.jsx(j,{content:N,title:"Module 003_001 Topic 2: Row Sum and Column Sum Calculation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic2_note.txt"})}),e.jsx("section",{className:"space-y-5",children:e.jsx(b,{note:"Scope matters! Always double check where rowSum = 0 is initialized in ICSE Section B programs. If it's outside the outer loop, you lose marks! — Sukanta Hui"})})]})};export{P as default};

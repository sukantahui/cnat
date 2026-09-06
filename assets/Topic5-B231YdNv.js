import{b as d,j as r}from"./vendor-react-core-Doz9nIC6.js";import{C as p}from"./CProjectAnswerTemplateEnhanced-C_P01eJh.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const u=`#include <stdio.h>\r
\r
/**\r
 * Project 1: Matrix Multiplication & Dimension Verifier\r
 * Multiplies two matrices A (r1 x c1) and B (r2 x c2) after validating dimensions (c1 == r2).\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int main(void) {\r
    int r1 = 2, c1 = 3;\r
    int r2 = 3, c2 = 2;\r
\r
    int A[2][3] = {\r
        {1, 2, 3},\r
        {4, 5, 6}\r
    };\r
\r
    int B[3][2] = {\r
        {7, 8},\r
        {9, 1},\r
        {2, 3}\r
    };\r
\r
    int C[2][2] = {0};\r
\r
    // Dimension Compatibility Check\r
    if (c1 != r2) {\r
        printf("Error: Matrix multiplication impossible (Columns of A != Rows of B)!\\n");\r
        return 1;\r
    }\r
\r
    // Multiply A x B\r
    for (int i = 0; i < r1; i++) {\r
        for (int j = 0; j < c2; j++) {\r
            C[i][j] = 0;\r
            for (int k = 0; k < c1; k++) {\r
                C[i][j] += A[i][k] * B[k][j];\r
            }\r
        }\r
    }\r
\r
    printf("Product Matrix C (2x2):\\n");\r
    for (int i = 0; i < r1; i++) {\r
        printf("  [ ");\r
        for (int j = 0; j < c2; j++) {\r
            printf("%3d ", C[i][j]);\r
        }\r
        printf("]\\n");\r
    }\r
\r
    return 0;\r
}\r
`,f=`#include <stdio.h>\r
\r
/**\r
 * Project 10: Polynomial Addition using 1D Array Representation\r
 * Represents two algebraic polynomials A(x) and B(x) in 1D coefficient arrays\r
 * and computes their polynomial sum C(x).\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void printPolynomial(const int poly[], int degree) {\r
    int first = 1;\r
    for (int i = degree; i >= 0; i--) {\r
        if (poly[i] != 0) {\r
            if (!first && poly[i] > 0) printf(" + ");\r
            if (poly[i] < 0) printf(" - ");\r
\r
            int coeff = poly[i] > 0 ? poly[i] : -poly[i];\r
            if (i == 0) {\r
                printf("%d", coeff);\r
            } else if (i == 1) {\r
                printf("%dx", coeff);\r
            } else {\r
                printf("%dx^%d", coeff, i);\r
            }\r
            first = 0;\r
        }\r
    }\r
    printf("\\n");\r
}\r
\r
int main(void) {\r
    // Polynomial A: 5x^3 + 4x^2 + 2x + 1  (Degree 3)\r
    int A[5] = {1, 2, 4, 5, 0}; \r
    int degA = 3;\r
\r
    // Polynomial B: 3x^4 - 2x^2 + 7       (Degree 4)\r
    int B[5] = {7, 0, -2, 0, 3};\r
    int degB = 4;\r
\r
    int maxDeg = degA > degB ? degA : degB;\r
    int sum[5] = {0};\r
\r
    for (int i = 0; i <= maxDeg; i++) {\r
        sum[i] = A[i] + B[i];\r
    }\r
\r
    printf("====================================================\\n");\r
    printf(" Polynomial Addition via Coefficient Arrays\\n");\r
    printf("====================================================\\n");\r
    printf("P1(x) = "); printPolynomial(A, degA);\r
    printf("P2(x) = "); printPolynomial(B, degB);\r
    printf("----------------------------------------------------\\n");\r
    printf("Sum   = "); printPolynomial(sum, maxDeg);\r
\r
    return 0;\r
}\r
`,x=`#include <stdio.h>\r
\r
/**\r
 * Project 2: Class Marksheet Statistical Ranker & Median Finder\r
 * Sorts student marks using Selection Sort in descending order,\r
 * then computes mean, median, highest, lowest, and rank list.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int main(void) {\r
    int marks[] = {78, 92, 45, 88, 63, 95, 52, 81, 70};\r
    int n = sizeof(marks) / sizeof(marks[0]);\r
    int sum = 0;\r
\r
    // Selection sort in descending order\r
    for (int i = 0; i < n - 1; i++) {\r
        int maxIdx = i;\r
        for (int j = i + 1; j < n; j++) {\r
            if (marks[j] > marks[maxIdx]) {\r
                maxIdx = j;\r
            }\r
        }\r
        if (maxIdx != i) {\r
            int temp = marks[i];\r
            marks[i] = marks[maxIdx];\r
            marks[maxIdx] = temp;\r
        }\r
    }\r
\r
    for (int i = 0; i < n; i++) sum += marks[i];\r
    double mean = (double)sum / n;\r
    double median = (n % 2 != 0) ? marks[n / 2] : (marks[(n - 1) / 2] + marks[n / 2]) / 2.0;\r
\r
    printf("====================================================\\n");\r
    printf(" Student Merit Ranking & Statistical Analysis\\n");\r
    printf("====================================================\\n");\r
    printf("Total Students : %d\\n", n);\r
    printf("Highest Mark   : %d (Rank 1)\\n", marks[0]);\r
    printf("Lowest Mark    : %d (Rank %d)\\n", marks[n - 1], n);\r
    printf("Class Mean     : %.2f\\n", mean);\r
    printf("Class Median   : %.2f\\n\\n", median);\r
\r
    printf("Ranked Scoreboard:\\n");\r
    for (int i = 0; i < n; i++) {\r
        printf("  Rank %d: %d\\n", i + 1, marks[i]);\r
    }\r
\r
    return 0;\r
}\r
`,g=`#include <stdio.h>\r
\r
/**\r
 * Project 3: In-Place Array Reversal and Rotation (Right Shift by K positions)\r
 * Rotates an array to the right by k positions in O(n) time and O(1) space\r
 * using the 3-step reversal algorithm.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
void reverseRange(int arr[], int start, int end) {\r
    while (start < end) {\r
        int temp = arr[start];\r
        arr[start] = arr[end];\r
        arr[end] = temp;\r
        start++;\r
        end--;\r
    }\r
}\r
\r
void rotateRight(int arr[], int n, int k) {\r
    k = k % n; // In case k >= n\r
    if (k == 0) return;\r
\r
    // 1. Reverse entire array\r
    reverseRange(arr, 0, n - 1);\r
    // 2. Reverse first k elements\r
    reverseRange(arr, 0, k - 1);\r
    // 3. Reverse remaining n - k elements\r
    reverseRange(arr, k, n - 1);\r
}\r
\r
int main(void) {\r
    int arr[] = {1, 2, 3, 4, 5, 6, 7};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int k = 3;\r
\r
    printf("Original Array: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
\r
    rotateRight(arr, n, k);\r
\r
    printf("Rotated Right by %d positions: [ ", k);\r
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,y=`#include <stdio.h>\r
\r
/**\r
 * Project 4: Subarray with Given Sum (Sliding Window / Two-Pointer)\r
 * Finds a contiguous subarray whose sum equals a target value S in O(n) time.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int findSubarraySum(const int arr[], int n, int target, int *startIdx, int *endIdx) {\r
    int currentSum = arr[0];\r
    int start = 0;\r
\r
    for (int end = 1; end <= n; end++) {\r
        // Shrink window from left while currentSum exceeds target\r
        while (currentSum > target && start < end - 1) {\r
            currentSum -= arr[start];\r
            start++;\r
        }\r
\r
        if (currentSum == target) {\r
            *startIdx = start;\r
            *endIdx = end - 1;\r
            return 1; // Found\r
        }\r
\r
        if (end < n) {\r
            currentSum += arr[end];\r
        }\r
    }\r
    return 0; // Not found\r
}\r
\r
int main(void) {\r
    int arr[] = {1, 4, 20, 3, 10, 5};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int target = 33;\r
    int start = -1, end = -1;\r
\r
    printf("Array: [ 1, 4, 20, 3, 10, 5 ] | Target Sum = %d\\n", target);\r
\r
    if (findSubarraySum(arr, n, target, &start, &end)) {\r
        printf("✓ Subarray found between index %d and %d: [ ", start, end);\r
        for (int i = start; i <= end; i++) printf("%d ", arr[i]);\r
        printf("]\\n");\r
    } else {\r
        printf("✗ No contiguous subarray with sum %d found.\\n", target);\r
    }\r
\r
    return 0;\r
}\r
`,w=`#include <stdio.h>\r
\r
/**\r
 * Project 5: Spiral Matrix Traversal Engine\r
 * Prints all elements of an M x N matrix in spiral (clockwise) order.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#define R 4\r
#define C 4\r
\r
void printSpiral(int matrix[R][C]) {\r
    int top = 0, bottom = R - 1;\r
    int left = 0, right = C - 1;\r
\r
    printf("Spiral Order Traversal:\\n  ");\r
\r
    while (top <= bottom && left <= right) {\r
        // 1. Traverse Right along top row\r
        for (int i = left; i <= right; i++) {\r
            printf("%d ", matrix[top][i]);\r
        }\r
        top++;\r
\r
        // 2. Traverse Down along right column\r
        for (int i = top; i <= bottom; i++) {\r
            printf("%d ", matrix[i][right]);\r
        }\r
        right--;\r
\r
        // 3. Traverse Left along bottom row\r
        if (top <= bottom) {\r
            for (int i = right; i >= left; i--) {\r
                printf("%d ", matrix[bottom][i]);\r
            }\r
            bottom--;\r
        }\r
\r
        // 4. Traverse Up along left column\r
        if (left <= right) {\r
            for (int i = bottom; i >= top; i--) {\r
                printf("%d ", matrix[i][left]);\r
            }\r
            left++;\r
        }\r
    }\r
    printf("\\n");\r
}\r
\r
int main(void) {\r
    int matrix[R][C] = {\r
        { 1,  2,  3,  4},\r
        { 5,  6,  7,  8},\r
        { 9, 10, 11, 12},\r
        {13, 14, 15, 16}\r
    };\r
\r
    printf("Input 4x4 Matrix:\\n");\r
    for (int i = 0; i < R; i++) {\r
        printf("  [ ");\r
        for (int j = 0; j < C; j++) printf("%2d ", matrix[i][j]);\r
        printf("]\\n");\r
    }\r
    printf("\\n");\r
\r
    printSpiral(matrix);\r
\r
    return 0;\r
}\r
`,h=`#include <stdio.h>\r
\r
/**\r
 * Project 6: Matrix Transpose & Symmetry Checker\r
 * Computes transpose in-place for square matrix and verifies symmetry.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#define N 3\r
\r
int isSymmetric(int matrix[N][N]) {\r
    for (int i = 0; i < N; i++) {\r
        for (int j = i + 1; j < N; j++) {\r
            if (matrix[i][j] != matrix[j][i]) {\r
                return 0; // Not symmetric\r
            }\r
        }\r
    }\r
    return 1; // Symmetric\r
}\r
\r
int main(void) {\r
    int symMatrix[N][N] = {\r
        {1, 7, 3},\r
        {7, 4, -5},\r
        {3, -5, 6}\r
    };\r
\r
    printf("Matrix (3x3):\\n");\r
    for (int i = 0; i < N; i++) {\r
        printf("  [ ");\r
        for (int j = 0; j < N; j++) printf("%3d ", symMatrix[i][j]);\r
        printf("]\\n");\r
    }\r
\r
    if (isSymmetric(symMatrix)) {\r
        printf("\\n✓ Matrix is SYMMETRIC (A == A^T).\\n");\r
    } else {\r
        printf("\\n✗ Matrix is NOT symmetric.\\n");\r
    }\r
\r
    return 0;\r
}\r
`,S=`#include <stdio.h>\r
#include <limits.h>\r
\r
/**\r
 * Project 7: Second Largest & Second Smallest Element Finder in Single Pass O(n)\r
 * Finds 1st/2nd largest and 1st/2nd smallest numbers without sorting.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int main(void) {\r
    int arr[] = {12, 35, 1, 10, 34, 1, 35};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
\r
    if (n < 2) {\r
        printf("Array must contain at least 2 distinct elements.\\n");\r
        return 1;\r
    }\r
\r
    int firstMax = INT_MIN, secondMax = INT_MIN;\r
    int firstMin = INT_MAX, secondMin = INT_MAX;\r
\r
    for (int i = 0; i < n; i++) {\r
        // Largest logic\r
        if (arr[i] > firstMax) {\r
            secondMax = firstMax;\r
            firstMax = arr[i];\r
        } else if (arr[i] > secondMax && arr[i] != firstMax) {\r
            secondMax = arr[i];\r
        }\r
\r
        // Smallest logic\r
        if (arr[i] < firstMin) {\r
            secondMin = firstMin;\r
            firstMin = arr[i];\r
        } else if (arr[i] < secondMin && arr[i] != firstMin) {\r
            secondMin = arr[i];\r
        }\r
    }\r
\r
    printf("Dataset: [ 12, 35, 1, 10, 34, 1, 35 ]\\n\\n");\r
    printf("• Largest        : %d\\n", firstMax);\r
    printf("• Second Largest : %d\\n", secondMax);\r
    printf("• Smallest       : %d\\n", firstMin);\r
    printf("• Second Smallest: %d\\n", secondMin);\r
\r
    return 0;\r
}\r
`,k=`#include <stdio.h>\r
\r
/**\r
 * Project 8: Array Frequency Counter & Duplicate Filter\r
 * Counts frequency of every distinct element and filters out duplicates.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
int main(void) {\r
    int arr[] = {4, 5, 4, 2, 8, 5, 4, 9, 2, 7};\r
    int n = sizeof(arr) / sizeof(arr[0]);\r
    int visited[10] = {0};\r
\r
    printf("Input Array: [ 4, 5, 4, 2, 8, 5, 4, 9, 2, 7 ]\\n\\n");\r
    printf("Element Frequencies:\\n");\r
\r
    for (int i = 0; i < n; i++) {\r
        if (visited[i] == 1) continue;\r
\r
        int count = 1;\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[i] == arr[j]) {\r
                visited[j] = 1;\r
                count++;\r
            }\r
        }\r
        printf("  • Element %d appears %d time(s)\\n", arr[i], count);\r
    }\r
\r
    printf("\\nUnique Filtered Elements: [ ");\r
    for (int i = 0; i < n; i++) {\r
        if (visited[i] == 0) {\r
            printf("%d ", arr[i]);\r
        }\r
    }\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,_=`#include <stdio.h>\r
\r
/**\r
 * Project 9: Matrix Saddle Point Detector\r
 * Finds saddle point (minimum in its row and maximum in its column).\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#define R 3\r
#define C 3\r
\r
void findSaddlePoint(int mat[R][C]) {\r
    int found = 0;\r
\r
    for (int i = 0; i < R; i++) {\r
        // Step 1: Find min element in row i\r
        int minRowVal = mat[i][0];\r
        int colIdx = 0;\r
        for (int j = 1; j < C; j++) {\r
            if (mat[i][j] < minRowVal) {\r
                minRowVal = mat[i][j];\r
                colIdx = j;\r
            }\r
        }\r
\r
        // Step 2: Check if minRowVal is max in column colIdx\r
        int isSaddle = 1;\r
        for (int k = 0; k < R; k++) {\r
            if (mat[k][colIdx] > minRowVal) {\r
                isSaddle = 0;\r
                break;\r
            }\r
        }\r
\r
        if (isSaddle) {\r
            printf("✓ Saddle Point Found: %d at Position (%d, %d)\\n", minRowVal, i, colIdx);\r
            found = 1;\r
        }\r
    }\r
\r
    if (!found) {\r
        printf("✗ No Saddle Point exists in the matrix.\\n");\r
    }\r
}\r
\r
int main(void) {\r
    int matrix[R][C] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    printf("Matrix (3x3):\\n");\r
    for (int i = 0; i < R; i++) {\r
        printf("  [ ");\r
        for (int j = 0; j < C; j++) printf("%d ", matrix[i][j]);\r
        printf("]\\n");\r
    }\r
    printf("\\n");\r
\r
    findSaddlePoint(matrix);\r
\r
    return 0;\r
}\r
`,j="Module 002_005 · Arrays, Matrix Operations & Searching/Sorting",M="C Programming & Systems Fundamentals",v="WBCHSE / ICSE / CBSE / BCA / B.Tech / Gate",b=["GCC Compiler","VS Code","GDB Debugger"],A={name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},C=[{projectId:"P5.1",title:"Matrix Multiplication & Dimension Validator",difficulty:"Intermediate",description:"Write a C program that validates matrix compatibility (columns of A == rows of B) and multiplies two 2D matrices A and B.",exampleText:"A = [[1, 2, 3], [4, 5, 6]] (2x3), B = [[7, 8], [9, 1], [2, 3]] (3x2)",exampleOutput:`Product Matrix C (2x2):
  [  31  19 ]
  [  85  55 ]`,logicExplanation:`1. Validate that c1 == r2.
2. Iterate triple nested loops: outer i (rows of A), middle j (cols of B), inner k (common dimension).
3. Accumulate C[i][j] += A[i][k] * B[k][j].`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer1.c",codeExplanation:"Demonstrates robust 2D array processing, boundary checking, and the standard O(N^3) matrix dot-product multiplication algorithm."},{projectId:"P5.2",title:"Class Marksheet Statistical Ranker & Median Finder",difficulty:"Intermediate",description:"Sort an array of student marks in descending order using Selection Sort, then compute total students, class mean, median, highest, lowest, and formatted merit rank scoreboard.",exampleText:"Marks: [78, 92, 45, 88, 63, 95, 52, 81, 70]",exampleOutput:`Highest: 95 (Rank 1)
Lowest: 45 (Rank 9)
Mean: 73.78
Median: 78.00
Rank 1: 95
Rank 2: 92...`,logicExplanation:`1. Apply Selection Sort tracking max index per pass to order descending.
2. Sum elements and divide by n for mean.
3. Compute median based on odd/even length indexing.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer2.c",codeExplanation:"Demonstrates in-place sorting, statistical aggregation, and floating-point average computations on integer sequences."},{projectId:"P5.3",title:"In-Place Array Reversal and Right Rotation by K Positions",difficulty:"Intermediate",description:"Rotate an array to the right by k positions in O(n) linear time and O(1) auxiliary space using the 3-step reversal algorithm.",exampleText:"Input: [1, 2, 3, 4, 5, 6, 7], k = 3",exampleOutput:"Rotated Right: [ 5, 6, 7, 1, 2, 3, 4 ]",logicExplanation:`1. Reverse entire array (0 to n-1).
2. Reverse first k elements (0 to k-1).
3. Reverse remaining n-k elements (k to n-1).`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer3.c",codeExplanation:"Demonstrates the two-pointer in-place reversal technique and optimal cyclic array rotation without allocating auxiliary buffer arrays."},{projectId:"P5.4",title:"Subarray with Given Sum Finder (Sliding Window)",difficulty:"Intermediate",description:"Find a contiguous subarray whose elements sum to a target value S in O(n) linear time using the two-pointer sliding window technique.",exampleText:"Array: [1, 4, 20, 3, 10, 5], Target = 33",exampleOutput:"✓ Subarray found between index 2 and 4: [ 20, 3, 10 ]",logicExplanation:`1. Maintain window sum from start to end.
2. Expand end pointer adding elements; shrink start pointer when sum exceeds target.
3. Return indices when currentSum == target.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer4.c",codeExplanation:"Demonstrates sliding window algorithm optimizing an otherwise O(n^2) brute-force search into O(n) linear time."},{projectId:"P5.5",title:"Spiral Matrix Traversal Engine",difficulty:"Hard",description:"Traverse and print all elements of an M x N 2D matrix in clockwise spiral order.",exampleText:"4x4 Matrix with numbers 1 to 16",exampleOutput:"Spiral Order: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10",logicExplanation:`1. Define 4 boundary variables: top, bottom, left, right.
2. Loop four directional sweeps (right, down, left, up), advancing boundary offsets after each traversal.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer5.c",codeExplanation:"Demonstrates complex 2D boundary tracking and algorithmic matrix coordinate traversal."},{projectId:"P5.6",title:"Matrix Transpose & Symmetry Verifier",difficulty:"Intermediate",description:"Verify whether a square matrix is symmetric (A[i][j] == A[j][i]) by comparing upper and lower triangles.",exampleText:"Matrix: [[1, 7, 3], [7, 4, -5], [3, -5, 6]]",exampleOutput:"✓ Matrix is SYMMETRIC (A == A^T).",logicExplanation:`1. Ensure matrix is square (ROWS == COLS).
2. Loop i from 0 to N-1 and j from i+1 to N-1; if A[i][j] != A[j][i], return 0.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer6.c",codeExplanation:"Demonstrates triangular loop bounds (j = i + 1) to avoid redundant comparisons when verifying matrix symmetry."},{projectId:"P5.7",title:"Second Largest & Smallest Elements in Single Pass O(n)",difficulty:"Intermediate",description:"Find the second largest and second smallest distinct numbers in an array in a single linear pass without sorting.",exampleText:"Array: [12, 35, 1, 10, 34, 1, 35]",exampleOutput:"Largest: 35, Second Largest: 34, Smallest: 1, Second Smallest: 10",logicExplanation:`1. Track firstMax and secondMax initialized to INT_MIN.
2. If current > firstMax, update secondMax = firstMax, firstMax = current.
3. Else if current > secondMax and current != firstMax, update secondMax = current.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer7.c",codeExplanation:"Demonstrates linear single-pass tracking using INT_MIN / INT_MAX from <limits.h>."},{projectId:"P5.8",title:"Array Frequency Counter & Duplicate Filter",difficulty:"Intermediate",description:"Count the frequency of each distinct element in an array and print the unique filtered array.",exampleText:"Array: [4, 5, 4, 2, 8, 5, 4, 9, 2, 7]",exampleOutput:`4 appears 3 times, 5 appears 2 times...
Filtered Unique: [ 4, 5, 2, 8, 9, 7 ]`,logicExplanation:`1. Maintain a boolean visited array.
2. For each unvisited element, count identical occurrences in subsequent indices and mark visited.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer8.c",codeExplanation:"Demonstrates counting and duplicate filtering using frequency marker arrays."},{projectId:"P5.9",title:"Matrix Saddle Point Detector",difficulty:"Hard",description:"Find a saddle point in a 2D matrix (an element that is the minimum in its row and maximum in its column).",exampleText:"Matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",exampleOutput:"✓ Saddle Point Found: 7 at Position (2, 0)",logicExplanation:`1. For each row i, find column index with minimum element.
2. Verify if this minimum element is the maximum in that column across all rows.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer9.c",codeExplanation:"Demonstrates multi-stage matrix coordinate verification and minimax condition checking."},{projectId:"P5.10",title:"Polynomial Addition using 1D Array Representation",difficulty:"Intermediate",description:"Represent two algebraic polynomials A(x) and B(x) using 1D coefficient arrays where index represents power, and compute their sum polynomial.",exampleText:"P1: 5x^3 + 4x^2 + 2x + 1, P2: 3x^4 - 2x^2 + 7",exampleOutput:"Sum = 3x^4 + 5x^3 + 2x^2 + 2x + 8",logicExplanation:`1. Array index i stores the coefficient for term x^i.
2. Add corresponding array indices: Sum[i] = A[i] + B[i].
3. Print formatted polynomial string with exponents.`,answerFile:"src/components/study/c-language/topics/002_005_arrays-and-matrix-manipulation/topic5_files/answers/answer10.c",codeExplanation:"Demonstrates mathematical data representation in 1D arrays and algebraic addition routines."}],c={projectCategory:j,subject:M,board:v,class:"High School / Undergraduate / Systems Engineering",tools:b,institute:A,projects:C};function D(){const[t,l]=d.useState(null);return d.useEffect(()=>{const e=Object.assign({"./topic5_files/answers/answer1.c":u,"./topic5_files/answers/answer10.c":f,"./topic5_files/answers/answer2.c":x,"./topic5_files/answers/answer3.c":g,"./topic5_files/answers/answer4.c":y,"./topic5_files/answers/answer5.c":w,"./topic5_files/answers/answer6.c":h,"./topic5_files/answers/answer7.c":S,"./topic5_files/answers/answer8.c":k,"./topic5_files/answers/answer9.c":_}),a={};Object.keys(e).forEach(n=>{const o=n.split("/").pop();a[o]=e[n]});const m=c.projects.map(n=>{const i=(n.answerFile||"").split("/").pop(),s=a[i];return s||console.warn(`⚠ Missing C answer file: ${i}`),{...n,answer:s||`// Source file "${i}" not found in answers folder`}});l({...c,projects:m})},[]),t?r.jsx(p,{data:t}):r.jsx("div",{className:"p-8 text-slate-400 flex items-center justify-center min-h-[350px]",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"}),r.jsx("span",{className:"text-sm font-semibold",children:"Loading 10 C Arrays, Matrix & Sorting Projects..."})]})})}export{D as default};

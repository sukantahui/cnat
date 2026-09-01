import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * File: MatrixSpiralAndRotationAlgorithmsDemo.java\r
 * Module: 001_008_foundations-practice-assessment-lab (Topic 3)\r
 * Description: Implements and demonstrates classic 2D Matrix Manipulation Algorithms in Java:\r
 *              1. Spiral Order Traversal: 4-boundary pointer iteration (top, bottom, left, right)\r
 *              2. In-Place 90-Degree Clockwise Rotation: Transpose + Row Reversal (O(1) Auxiliary Space)\r
 *              3. Rectangular & Square matrix boundary validations\r
 *              for campus seating allocations & multi-batch score grids at Coder & AccoTax Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.foundations;\r
\r
import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class MatrixSpiralAndRotationAlgorithmsDemo {\r
\r
    // =========================================================================\r
    // 1. SPIRAL MATRIX TRAVERSAL: O(R * C) Time, O(1) Auxiliary Space\r
    // =========================================================================\r
    public static List<Integer> spiralOrderTraversal(int[][] matrix) {\r
        List<Integer> result = new ArrayList<>();\r
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {\r
            return result;\r
        }\r
\r
        int top = 0;\r
        int bottom = matrix.length - 1;\r
        int left = 0;\r
        int right = matrix[0].length - 1;\r
\r
        while (top <= bottom && left <= right) {\r
            // Traverse from Left to Right along top boundary\r
            for (int col = left; col <= right; col++) {\r
                result.add(matrix[top][col]);\r
            }\r
            top++; // Shrink top boundary\r
\r
            // Traverse from Top to Bottom along right boundary\r
            for (int row = top; row <= bottom; row++) {\r
                result.add(matrix[row][right]);\r
            }\r
            right--; // Shrink right boundary\r
\r
            // Traverse from Right to Left along bottom boundary (if rows remain)\r
            if (top <= bottom) {\r
                for (int col = right; col >= left; col--) {\r
                    result.add(matrix[bottom][col]);\r
                }\r
                bottom--; // Shrink bottom boundary\r
            }\r
\r
            // Traverse from Bottom to Top along left boundary (if columns remain)\r
            if (left <= right) {\r
                for (int row = bottom; row >= top; row--) {\r
                    result.add(matrix[row][left]);\r
                }\r
                left++; // Shrink left boundary\r
            }\r
        }\r
        return result;\r
    }\r
\r
    // =========================================================================\r
    // 2. IN-PLACE 90-DEGREE CLOCKWISE ROTATION: O(N^2) Time, O(1) Space\r
    // =========================================================================\r
    public static void rotateMatrix90ClockwiseInPlace(int[][] matrix) {\r
        if (matrix == null || matrix.length == 0) return;\r
        int n = matrix.length;\r
\r
        // Step 1: Transpose Matrix (Swap matrix[i][j] with matrix[j][i] across main diagonal)\r
        for (int i = 0; i < n; i++) {\r
            for (int j = i + 1; j < n; j++) {\r
                int temp = matrix[i][j];\r
                matrix[i][j] = matrix[j][i];\r
                matrix[j][i] = temp;\r
            }\r
        }\r
\r
        // Step 2: Reverse each Row horizontally (Two-Pointer Swap)\r
        for (int i = 0; i < n; i++) {\r
            int left = 0;\r
            int right = n - 1;\r
            while (left < right) {\r
                int temp = matrix[i][left];\r
                matrix[i][left] = matrix[i][right];\r
                matrix[i][right] = temp;\r
                left++;\r
                right--;\r
            }\r
        }\r
    }\r
\r
    // Helper: Pretty-print a 2D matrix\r
    public static void printMatrixGrid(String title, int[][] matrix) {\r
        System.out.println("  " + title + ":");\r
        for (int[] row : matrix) {\r
            System.out.print("    [ ");\r
            for (int val : row) {\r
                System.out.printf("%3d ", val);\r
            }\r
            System.out.println("]");\r
        }\r
        System.out.println();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 3 MATRIX SPIRAL & 90-DEG ROTATION");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // --- 1. SPIRAL ORDER TRAVERSAL (3 x 4 Rectangular Matrix) ---\r
        int[][] campusSeating = {\r
            { 1,  2,  3,  4},\r
            { 5,  6,  7,  8},\r
            { 9, 10, 11, 12}\r
        };\r
\r
        printMatrixGrid("Original 3x4 Seating Grid", campusSeating);\r
        List<Integer> spiralResult = spiralOrderTraversal(campusSeating);\r
        System.out.println("  Spiral Clockwise Traversal Order:");\r
        System.out.println("  " + spiralResult + "\\n");\r
\r
        // --- 2. IN-PLACE 90-DEGREE ROTATION (4 x 4 Square Matrix) ---\r
        int[][] squareScores = {\r
            {10, 20, 30, 40},\r
            {50, 60, 70, 80},\r
            {15, 25, 35, 45},\r
            {55, 65, 75, 85}\r
        };\r
\r
        printMatrixGrid("Original 4x4 Square Grid Before Rotation", squareScores);\r
        rotateMatrix90ClockwiseInPlace(squareScores);\r
        printMatrixGrid("Rotated 4x4 Grid After 90° Clockwise In-Place Rotation", squareScores);\r
\r
        System.out.println("================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Spiral traversal manages 4 dynamic boundaries: top, bottom, left, right.");\r
        System.out.println("2. Always guard bottom and left traversals with 'if (top <= bottom)' & 'if (left <= right)'.");\r
        System.out.println("3. 90° Clockwise Rotation = Transpose across diagonal + Reverse each row horizontally.");\r
        System.out.println("4. In-place rotation uses O(1) auxiliary memory without allocating a second matrix.");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,n=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_008: Segment 1 Foundations Practice, Mini-Projects & Assessment\r
TOPIC 3: Matrix Spiral Traversal & 90-Degree Clockwise Rotation\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPIRAL MATRIX TRAVERSAL (O(R * C) Time, O(1) Space)\r
--------------------------------------------------------------------------------\r
- 4 Boundary Pointers: top = 0, bottom = rows - 1, left = 0, right = cols - 1\r
- Traversal Steps:\r
  1. Top Row     : left → right across 'top' row, then top++\r
  2. Right Col   : top → bottom down 'right' column, then right--\r
  3. Bottom Row  : right → left across 'bottom' row (GUARD: if (top <= bottom)), then bottom--\r
  4. Left Col    : bottom → top up 'left' column (GUARD: if (left <= right)), then left++\r
- Loop condition: while (top <= bottom && left <= right)\r
\r
2. IN-PLACE 90-DEGREE CLOCKWISE ROTATION (O(N^2) Time, O(1) Space)\r
--------------------------------------------------------------------------------\r
- Step 1: Transpose Matrix across main diagonal\r
  * Swap matrix[i][j] with matrix[j][i] for j > i.\r
- Step 2: Reverse each Row horizontally\r
  * Two-pointer swap between left and right for each row.\r
- Non-square rectangular matrices require allocating a new C x R matrix.\r
\r
3. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Always include the 'if (top <= bottom)' and 'if (left <= right)' boundary guards.\r
[✓] Transposition loop must start inner loop at 'j = i + 1' to avoid double-swapping!\r
[✓] 90° Counter-Clockwise = Transpose + Reverse columns vertically (or reverse rows first + transpose).\r
[✓] In Topic 4, we master Finding Duplicate and Missing Numbers in Arrays!\r
================================================================================\r
`,s=[{question:"What is Matrix Spiral Traversal?",shortAnswer:"An algorithm that visits every element of an $R \\times C$ 2D matrix in clockwise spiral order: Top Row (left $\\to$ right), Right Column (top $\\to$ bottom), Bottom Row (right $\\to$ left), and Left Column (bottom $\\to$ top).",explanation:"Core definition of spiral matrix traversal.",hint:"Clockwise traversal: Top → Right → Bottom → Left boundaries.",level:"basic",codeExample:"List<Integer> result = spiralOrderTraversal(matrix);"},{question:"What are the 4 boundary pointers maintained during Spiral Matrix Traversal?",shortAnswer:"`top = 0`, `bottom = rows - 1`, `left = 0`, and `right = cols - 1`, shrunk inward after each boundary pass.",explanation:"The 4 boundary pointers.",hint:"top, bottom, left, right.",level:"basic",codeExample:"int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;"},{question:"Why must the Bottom-Row traversal be guarded by `if (top <= bottom)` in rectangular matrices?",shortAnswer:"To prevent duplicate row traversals in rectangular matrices where there is only a single remaining horizontal row (`top == bottom`) that was already processed by the Top-Row pass.",explanation:"Critical boundary check in non-square matrices.",hint:"Prevents duplicate traversal of a single remaining row.",level:"intermediate",codeExample:"if (top <= bottom) { for (int col = right; col >= left; col--) ... }"},{question:"Why must the Left-Column traversal be guarded by `if (left <= right)`?",shortAnswer:"To prevent duplicate column traversals in vertical rectangular matrices where there is only a single remaining vertical column (`left == right`) already visited by the Right-Column pass.",explanation:"Critical boundary check in single column cases.",hint:"Prevents duplicate traversal of a single remaining column.",level:"intermediate",codeExample:"if (left <= right) { for (int row = bottom; row >= top; row--) ... }"},{question:"What is the Time Complexity of Spiral Matrix Traversal on an $R \\times C$ matrix?",shortAnswer:"$O(R \\times C)$ linear time in terms of total matrix elements, because each matrix cell is visited exactly once.",explanation:"Spiral traversal time complexity.",hint:"O(R * C) total elements visited once.",level:"basic",codeExample:"// Visits all N = R * C elements exactly once"},{question:"In the Coder & AccoTax Barrackpore lab, what was the spiral order of the 3x4 seating matrix?",shortAnswer:"`[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`.",explanation:"3x4 spiral output verification.",hint:"[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7].",level:"basic",codeExample:"spiralOrderTraversal(campusSeating) → [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]"},{question:"What are the TWO steps to rotate an $N \\times N$ square matrix by 90 degrees Clockwise IN-PLACE?",shortAnswer:"1. **Transpose the Matrix** (Swap `matrix[i][j]` with `matrix[j][i]` across main diagonal). 2. **Reverse each Row horizontally** (Two-pointer swap).",explanation:"The 2-step in-place 90-degree clockwise rotation formula.",hint:"Step 1: Transpose matrix → Step 2: Reverse each row horizontally.",level:"basic",codeExample:"// Transpose + Horizontal Row Reversal = 90° Clockwise Rotation"},{question:"What is the Space Complexity of In-Place 90-Degree Matrix Rotation?",shortAnswer:"$O(1)$ auxiliary memory space, because swaps are performed directly in-place without creating a secondary matrix.",explanation:"In-place rotation space complexity.",hint:"O(1) auxiliary memory.",level:"basic",codeExample:"int temp = matrix[i][j]; matrix[i][j] = matrix[j][i]; matrix[j][i] = temp; // O(1) space"},{question:"How do you rotate an $N \\times N$ matrix 90 degrees COUNTER-CLOCKWISE (anti-clockwise) in-place?",shortAnswer:"1. **Transpose the Matrix** across the main diagonal. 2. **Reverse each Column vertically** (Swap top and bottom rows). Alternatively: Reverse each row first, then transpose.",explanation:"Counter-clockwise rotation formula.",hint:"Transpose + Vertical Column Reversal (or Row reversal + Transpose).",level:"intermediate",codeExample:"// Counter-Clockwise = Transpose + Vertical Row Swap"},{question:"How do you rotate an $N \\times N$ matrix by 180 degrees in-place?",shortAnswer:"Reverse each row horizontally AND reverse the order of rows vertically (or apply 90° clockwise rotation twice).",explanation:"180-degree matrix rotation formula.",hint:"Reverse rows horizontally and reverse rows vertically.",level:"intermediate",codeExample:"// 180° = Horizontal Row Reversal + Vertical Row Reversal"},{question:"In matrix transposition, why does the inner loop start at `j = i + 1` rather than `j = 0`?",shortAnswer:"To iterate only over the upper triangle above the main diagonal; starting at `j = 0` would swap elements twice, undoing the transposition and leaving the matrix unchanged!",explanation:"Transposition swap loop boundary trap.",hint:"Starting at j = i + 1 ensures each off-diagonal pair is swapped exactly once.",level:"intermediate",codeExample:"for (int i = 0; i < n; i++) for (int j = i + 1; j < n; j++) swap(i, j);"},{question:"In the Coder & AccoTax Barrackpore lab, what did row 0 `{10, 20, 30, 40}` become after 90° clockwise rotation?",shortAnswer:"It became column 3: values `{10, 20, 30, 40}` reading top-to-bottom in column index 3.",explanation:"Row to column transformation in 90-degree rotation.",hint:"Row 0 becomes the rightmost Column 3.",level:"basic",codeExample:"row 0: [10, 20, 30, 40] → col 3: [10, 20, 30, 40]"},{question:"Can an $R \\times C$ non-square rectangular matrix (e.g. 3x4) be rotated 90 degrees strictly in-place?",shortAnswer:"NO! Non-square matrices change dimensions from $R \\times C$ to $C \\times R$ (e.g. 3x4 becomes 4x3), requiring a newly allocated $C \\times R$ matrix in Java's array memory model.",explanation:"Non-square matrix rotation limitation in Java.",hint:"No, non-square rotation changes matrix dimensions, requiring a new matrix.",level:"intermediate",codeExample:"int[][] rotated = new int[cols][rows]; // Required for R != C"},{question:"What is 'Spiral Matrix II' (Generating an $N \\times N$ matrix filled with 1 to $N^2$ in spiral order)?",shortAnswer:"Initialize an empty `int[N][N]` and populate elements using an incremental counter variable while traversing the 4 boundary pointers.",explanation:"Spiral matrix generation algorithm.",hint:"Use spiral traversal to fill an empty matrix with numbers 1 to N^2.",level:"intermediate",codeExample:"int val = 1; for (int col = left; col <= right; col++) matrix[top][col] = val++;"},{question:"What is the Time Complexity of 90-degree matrix rotation on an $N \\times N$ square matrix?",shortAnswer:"$O(N^2)$ time complexity, because transposition visits $N(N - 1)/2$ elements and row reversal visits $N^2/2$ elements.",explanation:"In-place rotation time complexity.",hint:"O(N^2) total cell swaps.",level:"basic",codeExample:"// Transpose: O(N^2) + Row Reversal: O(N^2) = O(N^2) Time"},{question:"What is the 'Layer-by-Layer' (Ring) rotation approach for 90-degree matrix rotation?",shortAnswer:"Rotating the matrix like peeling an onion, performing a 4-way circular element swap for each layer $layer = 0$ to $N/2$: top $\\to$ right, right $\\to$ bottom, bottom $\\to$ left, left $\\to$ top.",explanation:"Layer-by-layer 4-way swap alternative.",hint:"Performs 4-way cyclic swaps layer by layer from outer to inner rings.",level:"advanced",codeExample:"// 4-way cyclic swap for top, right, bottom, left"},{question:"How do you handle an empty matrix `matrix = new int[0][0]` in spiral traversal?",shortAnswer:"Defensive guard `if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return result;` returns an empty list safely without crashing.",explanation:"Empty matrix defensive edge case.",hint:"Check matrix == null || matrix.length == 0 || matrix[0].length == 0.",level:"basic",codeExample:"if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return result;"},{question:"What is the Diagonal Traversal of a 2D matrix (Zig-Zag Matrix)?",shortAnswer:"Traversing matrix elements along diagonal lines $r + c = k$, alternating direction (up-right and down-left) for each diagonal index $k$.",explanation:"Zig-zag diagonal traversal definition.",hint:"Traversing along diagonals r + c = k, alternating up-right and down-left.",level:"advanced",codeExample:"// Diagonal traversal along sum k = r + c"},{question:"In `rotateMatrix90ClockwiseInPlace`, what helper loop reversed each row horizontally?",shortAnswer:"A standard two-pointer swap loop: `while (left < right) { swap(matrix[i][left], matrix[i][right]); left++; right--; }`.",explanation:"Row reversal two-pointer loop.",hint:"Two-pointer swap on row elements between left and right.",level:"basic",codeExample:"int left = 0, right = n - 1; while (left < right) { swap; left++; right--; }"},{question:"What is the 'Transpose of a Matrix' mathematically?",shortAnswer:"An operation that flips a matrix over its main diagonal, switching the row and column indices of every element ($A^T[i][j] = A[j][i]$).",explanation:"Matrix transpose mathematical definition.",hint:"Flips matrix over diagonal, exchanging rows and columns (A[i][j] → A[j][i]).",level:"basic",codeExample:"matrix[i][j] <-> matrix[j][i]"},{question:"How does image processing (like photo rotation on smartphones) use in-place matrix rotation?",shortAnswer:"Pixel raster grids (2D RGB arrays) are transposed and row-reversed directly in GPU memory to rotate image orientations without allocating extra bitmap buffers.",explanation:"Real-world graphic buffer rotation application.",hint:"Pixel grids are transposed and reversed in GPU memory for fast rotation.",level:"intermediate",codeExample:"// Bitmap pixel array 90-degree rotation"},{question:"In the Coder & AccoTax Barrackpore lab, what was the bottom-right corner element of the 4x4 matrix before and after rotation?",shortAnswer:"Before rotation: `85`; after 90° clockwise rotation, `85` moved to bottom-left position (`matrix[3][0]`).",explanation:"Corner cell coordinate transformation.",hint:"Moved from bottom-right (3, 3) to bottom-left (3, 0).",level:"basic",codeExample:"matrix[3][3] (85) → matrix[3][0] (85)"},{question:"What is the condition to stop the Spiral Matrix Traversal while-loop?",shortAnswer:"`top > bottom || left > right` (loop runs as long as `top <= bottom && left <= right`).",explanation:"Loop termination condition.",hint:"Stops when top > bottom or left > right.",level:"basic",codeExample:"while (top <= bottom && left <= right)"},{question:"Can an anti-diagonal transpose be used for matrix transformations?",shortAnswer:"YES! Transposing across the anti-diagonal (swap `matrix[i][j]` with `matrix[N-1-j][N-1-i]`) followed by row reversal rotates the matrix by 90 degrees counter-clockwise.",explanation:"Anti-diagonal transposition variant.",hint:"Yes, anti-diagonal transposition swaps across secondary diagonal.",level:"advanced",codeExample:"swap(matrix[i][j], matrix[n-1-j][n-1-i]);"},{question:"How does Java's row-major memory layout impact CPU cache locality during matrix transposition?",shortAnswer:"Reading `matrix[i][j]` is cache-friendly (contiguous row access in L1 cache), but writing to `matrix[j][i]` causes cache misses (strided column access); block-tiling optimizes cache locality for giant matrices.",explanation:"Cache line misses during column striding in transposition.",hint:"Row reads are cache-friendly; column writes cause cache misses. Block tiling fixes it.",level:"advanced",codeExample:"// Block tiling divides matrix into 32x32 tiles to fit in L1 cache"},{question:"In the Coder & AccoTax Barrackpore lab, how many total elements were in the 3x4 seating grid?",shortAnswer:"$3 \\times 4 = 12$ elements.",explanation:"Element count calculation.",hint:"12 elements.",level:"basic",codeExample:"campusSeating has 3 rows * 4 cols = 12 elements"},{question:"What is 'Spiral Matrix III' (Spiral walking outward from a starting coordinate)?",shortAnswer:"An algorithm that walks in expanding spiral steps ($1, 1, 2, 2, 3, 3, \\dots$) in directions East, South, West, North, adding valid grid coordinates within matrix bounds.",explanation:"Outward expanding spiral walk.",hint:"Walks outward in expanding step lengths (1, 1, 2, 2, ...) checking grid bounds.",level:"advanced",codeExample:"// Direction vectors: dRow = {0, 1, 0, -1}, dCol = {1, 0, -1, 0}"},{question:"What is the ultimate takeaway of Module 001_008 Topic 3 for Java developers?",shortAnswer:"Spiral Traversal dynamically manages 4 shrinking boundary pointers (`top`, `bottom`, `left`, `right`) in $O(R \\times C)$ time. In-place 90-degree rotation decomposes into Transposition + Horizontal Row Reversal in $O(1)$ auxiliary space.",explanation:"Mastery of matrix spiral and rotation algorithms.",hint:"Spiral manages 4 boundary pointers; 90° Clockwise Rotation = Transpose + Row Reversal.",level:"basic",codeExample:"// Summary: Spiral = 4 Boundaries | 90° Rotation = Transpose + Row Reversal"},{question:"What is the next topic (Topic 4) in Module 001_008?",shortAnswer:"Algorithmic Problem 4: Finding duplicate and missing numbers in an array.",explanation:"Topic 4 solves missing and duplicate number problems using XOR and mathematical sum formulas.",hint:"Algorithmic Problem 4: Finding duplicate and missing numbers in an array.",level:"basic",codeExample:"// Topic 4: Duplicate & Missing Numbers in Arrays"},{question:"How can SIMD (Single Instruction, Multiple Data) optimize row reversal in Java?",shortAnswer:"HotSpot C2 JIT vectorizes horizontal element swapping using 128/256-bit AVX shuffle byte instructions (`vpshufb`), reversing multiple array elements in a single CPU cycle.",explanation:"Vectorized SIMD shuffle optimization.",hint:"AVX shuffle instructions reverse entire rows in parallel across CPU vector registers.",level:"advanced",codeExample:"// Auto-vectorized SIMD row swapping in modern HotSpot JVM"}];function u(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowMatrix {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-mx {
            animation: glowMatrix 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Algorithmic Lab 3 · 2D Matrices"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Matrix Spiral Traversal & In-Place 90-Degree Clockwise Rotation"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master interview-grade 2D matrix manipulation in Java: 4-boundary pointer spiral traversal (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(R × C)"}),"), and the two-step formula for in-place 90-degree clockwise square rotation (",e.jsx("code",{className:"text-purple-300 font-mono",children:"Transpose + Row Reversal"})," in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1) Auxiliary Space"}),")."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Two Landmark Matrix Operations"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"2D array algorithms test your precision with multi-index pointer manipulation and in-place transformations:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-2",children:"1. Spiral Order Traversal"}),e.jsx("p",{className:"text-sky-300 mb-1",children:"4 Pointers: top, bottom, left, right"}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["Visits cells in clockwise spiral boundaries. Top (left→right), Right (top→bottom), Bottom (right→left, guarded by ",e.jsx("code",{className:"text-slate-300 font-mono",children:"top <= bottom"}),"), Left (bottom→top, guarded by ",e.jsx("code",{className:"text-slate-300 font-mono",children:"left <= right"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-2",children:"2. In-Place 90° Clockwise Rotation"}),e.jsx("p",{className:"text-emerald-300 mb-1",children:"Transpose + Horizontal Row Reversal"}),e.jsxs("p",{className:"text-xs text-slate-300 font-sans leading-relaxed",children:["Step 1: Swap ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"matrix[i][j]"})," with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"matrix[j][i]"})," across main diagonal. Step 2: Reverse each row horizontally in ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"O(1)"})," space without allocating a second matrix."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Seating & Score Grids):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," traversed a 3x4 seating grid yielding spiral order ",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]"}),", while ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," rotated a 4x4 student assessment score matrix 90 degrees clockwise in-place with zero memory allocation!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Algorithmic Visualizations: Spiral Path & In-Place 90° Rotation"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Comparing 4-boundary spiral flow with the two-step rotation pipeline:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Matrix Spiral and Rotation Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradSpiral",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradRotate",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),e.jsx("stop",{offset:"100%",stopColor:"#6d28d9"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"390",height:"215",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"225",y:"55",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"1. SPIRAL ORDER (4 Boundary Pointers)"}),e.jsx("rect",{x:"45",y:"70",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"92",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"1. Top Row     : left → right | top++"}),e.jsx("rect",{x:"45",y:"110",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"132",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"2. Right Column: top → bottom  | right--"}),e.jsx("rect",{x:"45",y:"150",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"172",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"3. Bottom Row  : right → left | bottom-- (if top<=bot)"}),e.jsx("rect",{x:"45",y:"190",width:"360",height:"35",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"55",y:"212",fill:"#bae6fd",fontSize:"10",fontFamily:"monospace",children:"4. Left Column : bottom → top  | left++ (if left<=rt)"}),e.jsx("rect",{x:"450",y:"30",width:"400",height:"215",rx:"10",fill:"#0f172a",stroke:"#8b5cf6",strokeWidth:"1.5"}),e.jsx("text",{x:"650",y:"55",fill:"#a78bfa",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"2. IN-PLACE 90° ROTATION (2 Steps)"}),e.jsx("rect",{x:"465",y:"70",width:"370",height:"60",rx:"6",fill:"#2e1065"}),e.jsx("text",{x:"475",y:"92",fill:"#ddd6fe",fontSize:"10",fontWeight:"bold",children:"STEP 1: TRANSPOSE MATRIX (Main Diagonal)"}),e.jsx("text",{x:"475",y:"112",fill:"#c4b5fd",fontSize:"9",fontFamily:"monospace",children:"Swap matrix[i][j] ↔ matrix[j][i] for j > i"}),e.jsx("rect",{x:"465",y:"140",width:"370",height:"60",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"475",y:"162",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",children:"STEP 2: REVERSE EACH ROW HORIZONTALLY"}),e.jsx("text",{x:"475",y:"182",fill:"#6ee7b7",fontSize:"9",fontFamily:"monospace",children:"Two-pointer swap matrix[i][left] ↔ matrix[i][right]"}),e.jsx("text",{x:"650",y:"225",fill:"#a78bfa",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"O(N²) Time | O(1) Auxiliary Memory"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Spiral traversal dynamically shrinks 4 boundary pointers; 90° Clockwise Rotation = Transposition + Horizontal Row Reversal."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Matrix Operations Complexity & Invariant Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Operation"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Time Complexity"}),e.jsx("th",{className:"p-3 font-semibold text-purple-400",children:"Auxiliary Space"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Core Invariant Rule"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"Spiral Traversal ($R \\times C$)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(R \\times C)$"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(1)$ auxiliary"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Guard bottom & left with `top <= bottom` & `left <= right`"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"90° Clockwise Rotation ($N \\times N$)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(N^2)$"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(1)$ in-place"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Transpose across diagonal + Reverse rows horizontally"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"90° Counter-Clockwise ($N \\times N$)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(N^2)$"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(1)$ in-place"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Transpose across diagonal + Reverse columns vertically"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"180° In-Place Rotation ($N \\times N$)"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(N^2)$"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold font-sans",children:"$O(1)$ in-place"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Reverse rows horizontally + Reverse rows vertically"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"MatrixSpiralAndRotationAlgorithmsDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program implements 4-boundary spiral matrix traversal and in-place 90-degree square matrix rotation."}),e.jsx(t,{fileModule:o,title:"MatrixSpiralAndRotationAlgorithmsDemo.java",highlightLines:[20,24,30,36,42,49,58,62,70,78,92,103]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Starting Transposition Inner Loop at `j = 0`"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Starting transposition at ",e.jsx("code",{className:"text-rose-300 font-mono",children:"j = 0"})," will swap elements twice, leaving the matrix unchanged! Always start at ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"int j = i + 1"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Guard Bottom and Left Passes in Rectangular Spiral"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Always wrap the bottom-row and left-column passes with ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if (top <= bottom)"})," and ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if (left <= right)"})," to prevent duplicate traversals on single-row or single-column matrices."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Can an $R \\times C$ non-square rectangular matrix (e.g. 3x4) be rotated 90° strictly in-place in Java?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Dimension Mismatch! A 3x4 matrix rotated 90° becomes a 4x3 matrix. In Java's array memory model, an array's row and column dimensions are immutable once created; rotating a non-square matrix requires allocating a new ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"new int[cols][rows]"})," matrix!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Matrix Spiral & Rotation FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:n,title:"Module 001_008 Topic 3: Matrix Spiral & 90-Degree Rotation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_008_topic3_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Matrix algorithms are the ultimate test of pointer bounds discipline. In Topic 4, we conquer Algorithmic Problem 4: Finding Duplicate & Missing Numbers in Arrays! — Sukanta Hui"})})]})}export{u as default};

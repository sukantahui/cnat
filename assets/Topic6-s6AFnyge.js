import{r as c,j as e}from"./index-29x6CIxg.js";import{T as m}from"./TeacherSukantaHui-CkLTFTKX.js";import{J as r}from"./JavaFileLoader-D7AtwUFV.js";import{F as p}from"./FAQTemplate-Dzu6_Pg9.js";import"./git-branch-Db0vt137.js";import"./JavaCodeBlock-DXQeuhK6.js";import"./prism-D8qPEyTn.js";import"./browser-BhB_hP4n.js";import"./prism-java-BwO6k4I_.js";import"./clsx-B-dksMZM.js";const u=`import java.util.Scanner;\r
\r
public class InputFromUser {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        \r
        System.out.print("Enter number of rows: ");\r
        int rows = sc.nextInt();\r
        System.out.print("Enter number of columns: ");\r
        int cols = sc.nextInt();\r
        \r
        int[][] matrix = new int[rows][cols];\r
        \r
        System.out.println("Enter matrix elements row by row:");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                System.out.print("Enter element [" + i + "][" + j + "]: ");\r
                matrix[i][j] = sc.nextInt();\r
            }\r
        }\r
        \r
        // Output the matrix\r
        System.out.println("\\nYou entered:");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                System.out.print(matrix[i][j] + " ");\r
            }\r
            System.out.println();\r
        }\r
        sc.close();\r
    }\r
}`,x=`public class OutputFormats {\r
    public static void main(String[] args) {\r
        int[][] matrix = {\r
            {1, 2, 3},\r
            {4, 5, 6},\r
            {7, 8, 9}\r
        };\r
        \r
        // Method 1: Nested loops\r
        System.out.println("Method 1: Nested loops");\r
        for (int i = 0; i < matrix.length; i++) {\r
            for (int j = 0; j < matrix[i].length; j++) {\r
                System.out.print(matrix[i][j] + " ");\r
            }\r
            System.out.println();\r
        }\r
        \r
        // Method 2: Enhanced for loop\r
        System.out.println("\\nMethod 2: Enhanced for loop");\r
        for (int[] row : matrix) {\r
            for (int val : row) {\r
                System.out.print(val + " ");\r
            }\r
            System.out.println();\r
        }\r
        \r
        // Method 3: Arrays.deepToString (for debugging)\r
        System.out.println("\\nMethod 3: Arrays.deepToString");\r
        System.out.println(java.util.Arrays.deepToString(matrix));\r
    }\r
}`,h=`import java.util.Scanner;\r
\r
public class InputUsingScanner {\r
    public static void main(String[] args) {\r
        Scanner sc = new Scanner(System.in);\r
        \r
        System.out.print("Enter rows and columns: ");\r
        int rows = sc.nextInt();\r
        int cols = sc.nextInt();\r
        \r
        int[][] matrix = new int[rows][cols];\r
        \r
        System.out.println("Enter " + (rows * cols) + " integers:");\r
        for (int i = 0; i < rows; i++) {\r
            for (int j = 0; j < cols; j++) {\r
                matrix[i][j] = sc.nextInt();\r
            }\r
        }\r
        \r
        System.out.println("Matrix entered:");\r
        for (int[] row : matrix) {\r
            for (int val : row) {\r
                System.out.print(val + " ");\r
            }\r
            System.out.println();\r
        }\r
        sc.close();\r
    }\r
}`,g=`import java.io.BufferedReader;\r
import java.io.InputStreamReader;\r
import java.util.StringTokenizer;\r
\r
public class InputUsingBufferedReader {\r
    public static void main(String[] args) throws Exception {\r
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\r
        \r
        System.out.print("Enter rows and columns: ");\r
        StringTokenizer st = new StringTokenizer(br.readLine());\r
        int rows = Integer.parseInt(st.nextToken());\r
        int cols = Integer.parseInt(st.nextToken());\r
        \r
        int[][] matrix = new int[rows][cols];\r
        \r
        System.out.println("Enter matrix elements row by row (space-separated):");\r
        for (int i = 0; i < rows; i++) {\r
            st = new StringTokenizer(br.readLine());\r
            for (int j = 0; j < cols; j++) {\r
                matrix[i][j] = Integer.parseInt(st.nextToken());\r
            }\r
        }\r
        \r
        System.out.println("Matrix entered:");\r
        for (int[] row : matrix) {\r
            for (int val : row) {\r
                System.out.print(val + " ");\r
            }\r
            System.out.println();\r
        }\r
        br.close();\r
    }\r
}`,f=`public class PrettyPrintMatrix {\r
    public static void main(String[] args) {\r
        int[][] matrix = {\r
            {1, 20, 300},\r
            {4000, 5, 6},\r
            {7, 88888, 9}\r
        };\r
        \r
        // Find maximum width for formatting\r
        int maxWidth = 0;\r
        for (int[] row : matrix) {\r
            for (int val : row) {\r
                int width = String.valueOf(val).length();\r
                if (width > maxWidth) maxWidth = width;\r
            }\r
        }\r
        maxWidth++; // add a space\r
        \r
        System.out.println("Pretty printed matrix:");\r
        for (int[] row : matrix) {\r
            for (int val : row) {\r
                System.out.printf("%" + maxWidth + "d", val);\r
            }\r
            System.out.println();\r
        }\r
    }\r
}`,w=[{question:"Which class is most commonly used for console input in Java?",shortAnswer:"Scanner",explanation:"Scanner provides methods like nextInt(), nextDouble(), nextLine() for reading input.",hint:"java.util.Scanner",level:"basic",codeExample:"Scanner sc = new Scanner(System.in);"},{question:"What is the output of System.out.println(matrix) for a 2D array?",shortAnswer:"A cryptic reference like [[I@15db9742",explanation:"Arrays don't override toString(); use Arrays.deepToString() for readable output.",hint:"Not readable.",level:"basic",codeExample:"System.out.println(Arrays.deepToString(matrix));"},{question:"How do you read a 2D array from user input using Scanner?",shortAnswer:"Nested loops: outer for rows, inner for columns, calling nextInt() each time.",explanation:"First read dimensions, then allocate array, then read each element.",hint:"Nested loops.",level:"basic",codeExample:"for (int i=0; i<rows; i++) for (int j=0; j<cols; j++) matrix[i][j] = sc.nextInt();"},{question:"What is the issue with using nextInt() followed by nextLine()?",shortAnswer:"nextInt() leaves newline, causing nextLine() to read empty string.",explanation:"Consume the newline by calling nextLine() after nextInt().",hint:"Newline leftover.",level:"intermediate",codeExample:"sc.nextLine(); // consume newline"},{question:"How do you print a 2D array with aligned columns?",shortAnswer:'Use printf with width specifier, e.g., System.out.printf("%4d", matrix[i][j]);',explanation:"Find max width first, then use that width for formatting.",hint:"printf formatting.",level:"intermediate",codeExample:'System.out.printf("%4d", val);'},{question:"What is the advantage of using BufferedReader over Scanner for large input?",shortAnswer:"BufferedReader is faster because it uses buffering and fewer method calls.",explanation:"For large matrices, BufferedReader + StringTokenizer is significantly faster.",hint:"Performance.",level:"expert",codeExample:"BufferedReader br = new BufferedReader(new InputStreamReader(System.in));"},{question:"How do you read matrix from a file instead of console?",shortAnswer:'Use Scanner with a File object: new Scanner(new File("data.txt"));',explanation:"Then read similarly to console input.",hint:"File input.",level:"intermediate",codeExample:'Scanner sc = new Scanner(new File("matrix.txt"));'},{question:"What method quickly prints a 2D array for debugging?",shortAnswer:"Arrays.deepToString(matrix)",explanation:"Returns a string representation with nested brackets.",hint:"deepToString.",level:"basic",codeExample:"System.out.println(Arrays.deepToString(matrix));"},{question:"How do you read a matrix where each row's values are space-separated on a single line?",shortAnswer:"Read line with nextLine(), split by space, parse each token.",explanation:'Use String.split(" ") or StringTokenizer.',hint:"Parse line.",level:"intermediate",codeExample:'String[] tokens = sc.nextLine().split(" ");'},{question:"What happens if you try to read more elements than available in input?",shortAnswer:"InputMismatchException or NoSuchElementException.",explanation:"Scanner throws exception if input is exhausted.",hint:"Input mismatch.",level:"basic",codeExample:"// Exception"},{question:"How do you close Scanner properly?",shortAnswer:"Call sc.close() or use try-with-resources.",explanation:"Prevents resource leak.",hint:"Close resources.",level:"basic",codeExample:"try (Scanner sc = new Scanner(System.in)) { ... }"},{question:'What is the output of System.out.print(matrix[i][j] + " ") inside inner loop?',shortAnswer:"Prints elements in a row separated by spaces, no newline.",explanation:"Use System.out.println() after inner loop to move to next row.",hint:"Same line.",level:"basic",codeExample:"// prints row horizontally"},{question:"How do you read a 2D array of doubles?",shortAnswer:"Use nextDouble() instead of nextInt().",explanation:"Scanner has nextDouble() for reading double values.",hint:"nextDouble().",level:"basic",codeExample:"matrix[i][j] = sc.nextDouble();"},{question:"What is the purpose of StringTokenizer in input reading?",shortAnswer:"To tokenize a string into smaller parts (tokens) based on delimiters.",explanation:"Faster than split() for large inputs; often used with BufferedReader.",hint:"Tokenization.",level:"expert",codeExample:"StringTokenizer st = new StringTokenizer(br.readLine());"},{question:"How do you handle the case where user enters negative dimensions for a matrix?",shortAnswer:"Validate input: if (rows <= 0 || cols <= 0) ask again or exit.",explanation:"Negative dimensions cause NegativeArraySizeException.",hint:"Validate dimensions.",level:"intermediate",codeExample:'if (rows <= 0 || cols <= 0) { System.out.println("Invalid dimensions"); return; }'},{question:"What is the difference between print() and println() when outputting matrices?",shortAnswer:"print() stays on same line; println() moves to next line.",explanation:"Use print() for elements in a row, println() after each row.",hint:"Line control.",level:"basic",codeExample:'System.out.print(val + " "); // same row'},{question:"How do you read a matrix where rows have different lengths (jagged) from input?",shortAnswer:"First read number of rows, then for each row read its length, then allocate and read elements.",explanation:"Jagged arrays require storing row lengths as you read.",hint:"Variable row lengths.",level:"expert",codeExample:"int[][] jagged = new int[rows][]; for (int i=0;i<rows;i++) { int cols = sc.nextInt(); jagged[i]=new int[cols]; for(...) jagged[i][j]=sc.nextInt(); }"},{question:"What exception is thrown if you try to read an integer but input is text?",shortAnswer:"InputMismatchException",explanation:"Scanner throws this when input doesn't match expected type.",hint:"Type mismatch.",level:"basic",codeExample:"// InputMismatchException"},{question:"How do you output a matrix with row numbers and column numbers for clarity?",shortAnswer:"Print column indices first, then each row with row index.",explanation:"Use formatting to create a table-like display.",hint:"Add indices.",level:"intermediate",codeExample:'System.out.print("    "); for (int j=0;j<cols;j++) System.out.printf("%4d",j); System.out.println();'},{question:"What is the fastest way to read a large matrix in competitive programming (Java)?",shortAnswer:"Use BufferedReader + StringTokenizer inside loops.",explanation:"Avoids Scanner overhead; can also use custom fast reader.",hint:"Fast I/O.",level:"expert",codeExample:"BufferedReader br = new BufferedReader(new InputStreamReader(System.in));"},{question:"How do you read a matrix where all numbers are given in one long line?",shortAnswer:"Read entire line, split, then parse tokens sequentially.",explanation:"You need to map tokens to matrix positions row-major.",hint:"Flat input.",level:"intermediate",codeExample:'String[] tokens = sc.nextLine().split(" "); int idx=0; for (int i=0;i<rows;i++) for (int j=0;j<cols;j++) matrix[i][j]=Integer.parseInt(tokens[idx++]);'},{question:"What is the purpose of System.out.printf() in matrix output?",shortAnswer:"To format output with fixed width, alignment, and precision.",explanation:"Useful for aligning columns.",hint:"Formatted output.",level:"intermediate",codeExample:'System.out.printf("%5d", matrix[i][j]);'},{question:"How do you read a matrix from a CSV file (comma-separated values)?",shortAnswer:'Use Scanner with delimiter set to comma: sc.useDelimiter(",");',explanation:"Or read line and split by comma.",hint:"CSV parsing.",level:"expert",codeExample:'Scanner sc = new Scanner(new File("data.csv")).useDelimiter(",");'},{question:"What is the output of System.out.println(Arrays.toString(matrix[0]))?",shortAnswer:"String representation of the first row, e.g., [1, 2, 3]",explanation:"Arrays.toString() works on 1D arrays.",hint:"Row as 1D.",level:"basic",codeExample:"// Prints first row"},{question:"How do you read a matrix of unknown dimensions where first line gives dimensions?",shortAnswer:"Read first line with nextInt() for rows and cols, then allocate and read.",explanation:"Standard approach: dimensions first.",hint:"Header line.",level:"basic",codeExample:"int rows = sc.nextInt(); int cols = sc.nextInt();"},{question:"What is the best way to output a matrix to a file?",shortAnswer:"Use PrintWriter and write rows with spaces, similar to console output.",explanation:"PrintWriter has print() and println() methods.",hint:"File output.",level:"intermediate",codeExample:'PrintWriter pw = new PrintWriter(new File("output.txt"));'},{question:"How do you handle large matrices to avoid OutOfMemoryError when reading?",shortAnswer:"Process row by row without storing entire matrix if possible.",explanation:"If you only need row-wise processing, you can read and process each row immediately.",hint:"Streaming.",level:"expert",codeExample:"// Read row, process, discard"},{question:"What is the purpose of flush() after writing to output stream?",shortAnswer:"Forces any buffered output to be written immediately.",explanation:"Useful for interactive programs.",hint:"Flush buffer.",level:"intermediate",codeExample:"System.out.flush();"},{question:"How do you read a matrix with spaces and newlines as delimiters?",shortAnswer:"Scanner by default uses whitespace delimiters, so it handles both.",explanation:"nextInt() skips any whitespace (spaces, tabs, newlines).",hint:"Whitespace delimiter.",level:"basic",codeExample:"// Works automatically"},{question:"What is the difference between next() and nextLine() in Scanner?",shortAnswer:"next() reads next token (up to whitespace); nextLine() reads entire line (including spaces).",explanation:"Use nextLine() for reading strings with spaces.",hint:"Token vs line.",level:"basic",codeExample:"String token = sc.next(); String line = sc.nextLine();"}],a=[{q:"Write code to create a Scanner object for reading from System.in.",a:"Scanner sc = new Scanner(System.in);",explanation:"Scanner is in java.util package."},{q:"How do you read an integer from user using Scanner?",a:"int num = sc.nextInt();",explanation:"nextInt() parses the next integer token."},{q:"What method prints a 2D array in a readable format for debugging?",a:"Arrays.deepToString(matrix)",explanation:"Returns string with nested brackets."},{q:"Write a loop to print a 3x3 matrix row by row with spaces.",a:'for (int i=0; i<3; i++) { for (int j=0; j<3; j++) System.out.print(matrix[i][j] + " "); System.out.println(); }',explanation:"Nested loops: outer rows, inner columns."},{q:"What happens if you use nextLine() after nextInt() without consuming newline?",a:"nextLine() reads empty string.",explanation:"nextInt() leaves newline; call sc.nextLine() to consume it."},{q:"Write code to read a 2x2 matrix from user using Scanner.",a:"int[][] mat = new int[2][2]; for (int i=0; i<2; i++) for (int j=0; j<2; j++) mat[i][j] = sc.nextInt();",explanation:"Assumes dimensions known."},{q:"How do you close a Scanner to avoid resource leak?",a:"sc.close();",explanation:"Close when no longer needed."},{q:"What is the output of System.out.println(matrix) for a 2D int array?",a:"Something like [[I@15db9742",explanation:"Object reference, not content."},{q:"Write code to read matrix dimensions then allocate array.",a:"int rows = sc.nextInt(); int cols = sc.nextInt(); int[][] mat = new int[rows][cols];",explanation:"Dimensions must be positive."},{q:"How do you print matrix with column alignment using printf?",a:'System.out.printf("%4d", mat[i][j]);',explanation:"%4d reserves 4 spaces."},{q:"What is the advantage of BufferedReader over Scanner for large input?",a:"Faster due to buffering and fewer method calls.",explanation:"Useful in competitive programming."},{q:"Write code to read a line of space-separated integers using Scanner.",a:'String line = sc.nextLine(); String[] tokens = line.split(" ");',explanation:"Then parse each token to int."},{q:"What exception is thrown if input is not an integer when calling nextInt()?",a:"InputMismatchException",explanation:"Scanner throws this."},{q:"How do you read a matrix from a file named 'data.txt'?",a:'Scanner sc = new Scanner(new File("data.txt"));',explanation:"FileNotFoundException may be thrown."},{q:"Write code to output a matrix row by row with row index prefixed.",a:'for (int i=0; i<rows; i++) { System.out.print("Row " + i + ": "); for (int j=0; j<cols; j++) System.out.print(mat[i][j] + " "); System.out.println(); }',explanation:"Adds row label."},{q:"What is the purpose of System.out.flush()?",a:"Forces any buffered output to be written.",explanation:"Ensures data is displayed immediately."},{q:"How do you read a matrix where each row is given as space-separated values on one line?",a:'for (int i=0; i<rows; i++) { String[] tokens = sc.nextLine().split(" "); for (int j=0; j<cols; j++) mat[i][j] = Integer.parseInt(tokens[j]); }',explanation:"Read line, split, parse."},{q:"What is the output of Arrays.deepToString(new int[][]{{1,2},{3,4}})?",a:"[[1, 2], [3, 4]]",explanation:"deepToString gives nested array representation."},{q:"Write code to read a matrix of doubles using Scanner.",a:"double[][] mat = new double[rows][cols]; for (int i=0; i<rows; i++) for (int j=0; j<cols; j++) mat[i][j] = sc.nextDouble();",explanation:"Use nextDouble() instead of nextInt()."},{q:"How do you handle InputMismatchException when reading matrix?",a:"Use try-catch block around input reading.",explanation:"Catch exception and ask user to re-enter."}],s=Array.isArray(a)&&a.length?a:[],q=()=>{const[o,l]=c.useState(new Array(s.length).fill(!1)),d=n=>{l(t=>{const i=[...t];return i[n]=!i[n],i})};return e.jsx("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8 space-y-12",children:[e.jsxs("div",{className:"text-center space-y-4 animate-[slideUpFade_0.6s_ease-out]",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Input and Output of Matrix Elements"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto",children:"Learn how to read matrix data from users, files, or hardcoded values, and display matrices in clean, readable formats."})]}),e.jsxs("div",{className:"space-y-8 animate-[slideUpFade_0.6s_ease-out_0.1s]",children:[e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"📥📤"})," Why Input/Output Matters"]}),e.jsx("p",{className:"leading-relaxed mb-4",children:"In real-world applications, matrix data rarely comes hardcoded. It's entered by users, read from files (CSV, Excel), or received from sensors. Knowing how to efficiently input and output matrix elements is essential for building interactive programs."}),e.jsxs("p",{className:"leading-relaxed mb-4",children:[e.jsx("strong",{children:"Real-world example:"})," Swadeep, a teacher in Barrackpore, wants to enter marks of 30 students in 5 subjects. He needs to input a 30×5 matrix. Similarly, when displaying results, he needs a clean, readable format – not just raw numbers."]}),e.jsx("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm italic",children:[e.jsx("strong",{children:"💡 Think about:"})," How would you design a program that asks the user for matrix dimensions first, then reads each element row by row? What about handling invalid input?"]})})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⌨️"})," Input Methods for 2D Arrays"]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:["The most common way to input matrix elements in Java is using ",e.jsx("code",{children:"Scanner"}),". You can read row by row, asking the user for each element. Alternative methods include ",e.jsx("code",{children:"BufferedReader"})," (faster for large input) and reading from files."]}),e.jsx("h3",{className:"text-xl font-semibold mt-4 mb-2",children:"Using Scanner (Standard Input)"}),e.jsx(r,{fileModule:h,title:"InputUsingScanner.java",highlightLines:[]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:"Using BufferedReader (Faster for Large Matrices)"}),e.jsx(r,{fileModule:g,title:"InputUsingBufferedReader.java",highlightLines:[]}),e.jsxs("div",{className:"mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl",children:[e.jsx("p",{className:"font-semibold",children:"✅ Best Practice:"}),e.jsx("p",{className:"text-sm",children:"For competitive programming, use BufferedReader for speed. For teaching, Scanner is simpler and more readable."})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🖥️"})," Complete Input Program"]}),e.jsx("p",{className:"leading-relaxed mb-4",children:"A complete example that asks for dimensions, then reads values row by row."}),e.jsx(r,{fileModule:u,title:"InputFromUser.java",highlightLines:[]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"🖨️"})," Output Formats for Matrices"]}),e.jsxs("p",{className:"leading-relaxed mb-4",children:["Simply printing a 2D array with ",e.jsx("code",{children:"System.out.println(arr)"})," gives a cryptic output. You need to format it properly: iterate over rows and columns, using spaces or tabs for alignment."]}),e.jsx(r,{fileModule:x,title:"OutputFormats.java",highlightLines:[]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:"Pretty Printing (Aligned Columns)"}),e.jsx(r,{fileModule:f,title:"PrettyPrintMatrix.java",highlightLines:[]}),e.jsxs("div",{className:"mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl",children:[e.jsx("p",{className:"font-semibold",children:"⚠️ Note:"}),e.jsxs("p",{className:"text-sm",children:["For debugging, ",e.jsx("code",{children:"Arrays.deepToString(matrix)"})," is quick and convenient, but for end users, format row by row with spaces or tabs."]})]})]}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"⚠️"})," Common Pitfalls"]}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Not consuming newline after reading dimensions:"})," Using ",e.jsx("code",{children:"nextInt()"})," leaves newline; use ",e.jsx("code",{children:"nextLine()"})," to consume it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming input is perfectly formatted:"})," Always handle ",e.jsx("code",{children:"InputMismatchException"})," for bad data."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Printing using ",e.jsx("code",{children:"System.out.println(arr)"})," expecting readable output:"]})," It prints object reference, not matrix content."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting to close Scanner:"})," Use ",e.jsx("code",{children:"scanner.close()"})," or try-with-resources."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not validating row/column counts:"})," If user enters negative dimensions, array creation fails."]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6 shadow-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-3",children:"💡 Pro Tips"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{children:["✓ Use ",e.jsx("code",{children:'String.format("%4d", value)'})," to align numbers in columns."]}),e.jsxs("li",{children:["✓ For large matrices, use ",e.jsx("code",{children:"BufferedReader"})," and ",e.jsx("code",{children:"StringTokenizer"})," for faster parsing."]}),e.jsxs("li",{children:["✓ To read a matrix from a file, use ",e.jsx("code",{children:"Scanner"})," with ",e.jsx("code",{children:'new File("data.txt")'}),"."]}),e.jsxs("li",{children:["✓ In competitive programming, read entire input as tokens using ",e.jsx("code",{children:"StringTokenizer"})," for speed."]}),e.jsxs("li",{children:["✓ Use ",e.jsx("code",{children:"System.out.print()"})," for same-line output and ",e.jsx("code",{children:"System.out.println()"})," after each row."]})]})]}),e.jsx(m,{note:"Demonstrate input/output step by step: first, write a program that hardcodes a small matrix and prints it. Then modify to ask for dimensions and read values. Show common pitfalls like Scanner newline issue. Emphasize that output formatting matters for readability – a well-formatted matrix is easier to debug."}),e.jsx(p,{title:"Matrix Input/Output FAQs",questions:w}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-md",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-6 flex items-center gap-2",children:[e.jsx("span",{className:"text-3xl",children:"✍️"})," Practice Questions"]}),e.jsx("p",{className:"mb-4 text-gray-600 dark:text-gray-400",children:'Test your understanding. Click "Show Answer" to reveal the answer and explanation.'}),s.length===0?e.jsxs("div",{className:"p-4 bg-red-50 dark:bg-red-900/20 rounded-xl text-red-700 dark:text-red-300",children:[e.jsx("p",{className:"font-semibold",children:"⚠️ Practice questions not loaded."}),e.jsxs("p",{className:"text-sm mt-1",children:["Make sure the file ",e.jsx("code",{children:"topic6_practice_questions.js"})," exists in the ",e.jsx("code",{children:"topic6_files/"})," folder and exports an array."]})]}):e.jsx("div",{className:"space-y-4",children:s.map((n,t)=>e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 pb-3",children:[e.jsxs("p",{className:"font-medium",children:[t+1,". ",n.q]}),e.jsx("button",{onClick:()=>d(t),className:"text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 transition",children:o[t]?"Hide Answer":"Show Answer"}),o[t]&&e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("p",{className:"text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20 p-2 rounded",children:[e.jsx("strong",{children:"Answer:"})," ",n.a]}),n.explanation&&e.jsxs("p",{className:"text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded text-sm",children:[e.jsx("strong",{children:"Explanation:"})," ",n.explanation]})]})]},t))})]})]})]})})};export{q as default};
